"use client";

import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { cn } from "../../lib/utils";

export interface PrefetchLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetchOnHover?: boolean;
  prefetchOnVisible?: boolean;
  prefetchDelay?: number;
  [key: string]: unknown;
}

export function PrefetchLink({
  href,
  children,
  className,
  prefetchOnHover = true,
  prefetchOnVisible = false,
  prefetchDelay = 100,
  ...props
}: PrefetchLinkProps) {
  const router = useRouter();
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [isPrefetched, setIsPrefetched] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const prefetchRoute = useCallback(() => {
    if (!isPrefetched && href.startsWith("/")) {
      router.prefetch(href);
      setIsPrefetched(true);

      if (process.env.NODE_ENV === "development") {
        console.log("🔗 Prefetched:", href);
      }
    }
  }, [isPrefetched, href, router]);

  const handleMouseEnter = () => {
    if (prefetchOnHover && !isPrefetched) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        prefetchRoute();
      }, prefetchDelay);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (!prefetchOnVisible || !linkRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            prefetchRoute();
          }, 500);
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    observer.observe(linkRef.current);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [prefetchOnVisible, isVisible, prefetchRoute]);

  return (
    <Link
      ref={linkRef}
      href={href}
      data-slot="prefetch-link"
      className={cn(className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Link>
  );
}
