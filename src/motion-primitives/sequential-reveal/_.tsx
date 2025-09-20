"use client";

import React, { Children, useEffect, useRef, useState } from "react";

import { Transition, motion } from "framer-motion";

import { cn } from "../../lib/utils";

export type SequentialRevealPattern = "cascade" | "wave" | "spiral" | "random";

export type SequentialRevealProps = {
  children: React.ReactNode;
  stagger?: number;
  pattern?: SequentialRevealPattern;
  triggerOnce?: boolean;
  threshold?: number;
  className?: string;
  transition?: Transition;
  initialDelay?: number;
  animateOnMount?: boolean;
};

const getAnimationDelay = (
  index: number,
  total: number,
  pattern: SequentialRevealPattern,
  stagger: number
): number => {
  switch (pattern) {
    case "cascade":
      return index * stagger;
    case "wave":
      return Math.sin((index / total) * Math.PI) * stagger * total * 0.5;
    case "spiral":
      return Math.sqrt(index) * stagger * 0.5;
    case "random":
      return Math.random() * stagger * total * 0.5;
    default:
      return index * stagger;
  }
};

export function SequentialReveal({
  children,
  stagger = 0.1,
  pattern = "cascade",
  triggerOnce = true,
  threshold = 0.1,
  className,
  transition,
  initialDelay = 0,
  animateOnMount = false,
}: SequentialRevealProps) {
  const [isVisible, setIsVisible] = useState(animateOnMount);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Intersection Observer for trigger
  useEffect(() => {
    if (animateOnMount) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasAnimated)) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, triggerOnce, hasAnimated, animateOnMount]);

  // If reduced motion is preferred, render without animation
  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={cn("", className)}>
        {children}
      </div>
    );
  }

  const childrenArray = Children.toArray(children).filter(Boolean);
  const totalChildren = childrenArray.length;

  const defaultTransition: Transition = {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
    ...transition,
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  return (
    <div ref={containerRef} className={cn("", className)}>
      {childrenArray.map((child, index) => {
        // Skip invalid children
        if (!child) return null;

        const animationDelay = getAnimationDelay(
          index,
          totalChildren,
          pattern,
          stagger
        );
        const totalDelay = initialDelay + animationDelay;

        const childKey =
          React.isValidElement(child) && child.key
            ? String(child.key)
            : `sequential-reveal-${index}`;

        return (
          <motion.div
            key={childKey}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variants}
            transition={{
              ...defaultTransition,
              delay: totalDelay,
            }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}

SequentialReveal.displayName = "SequentialReveal";
