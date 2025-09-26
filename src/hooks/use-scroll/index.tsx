"use client";

import { RefObject, useEffect, useRef, useState } from "react";

/**
 * Hook to detect if the page or a specific element has been scrolled
 * @param threshold - The scroll threshold in pixels (default: 5)
 * @param targetRef - Optional ref to the scrolling container (defaults to window)
 * @returns boolean indicating if the page has been scrolled past the threshold
 */
export function useScroll(
  threshold: number = 5,
  targetRef?: RefObject<HTMLElement>
): boolean {
  const [hasScrolled, setHasScrolled] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = (event?: Event) => {
      /**
       * Use requestAnimationFrame to throttle updates
       * and ensure smooth transitions
       */
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        let scrollY = 0;

        if (targetRef?.current) {
          scrollY = targetRef.current.scrollTop;
        } else if (
          event?.target &&
          event.target !== window &&
          event.target !== document
        ) {
          scrollY = (event.target as HTMLElement).scrollTop;
        } else {
          /**
           * Check multiple sources for scroll position:
           * 1. Window scroll
           * 2. Document element scroll
           * 3. Body scroll
           * 4. Common scrolling containers
           */
          scrollY = window.scrollY || window.pageYOffset || 0;

          if (scrollY === 0) {
            scrollY = document.documentElement.scrollTop || 0;
          }

          if (scrollY === 0) {
            scrollY = document.body.scrollTop || 0;
          }

          if (scrollY === 0) {
            const selectors = [
              '[data-slot="page-layout"]',
              ".overflow-auto",
              ".overflow-y-auto",
              ".overflow-y-scroll",
              "main",
              "#__next",
            ];

            for (const selector of selectors) {
              const element = document.querySelector(selector);
              if (element) {
                const elementScrollTop = (element as HTMLElement).scrollTop;
                if (elementScrollTop > 0) {
                  scrollY = elementScrollTop;
                  break;
                }
              }
            }
          }
        }

        const scrolled = scrollY > threshold;
        setHasScrolled(scrolled);
      });
    };

    const listenTargets: Array<EventTarget> = [];

    listenTargets.push(window);
    listenTargets.push(document);

    /**
     * Add common scrollable containers to ensure scroll
     * detection works in various layouts.
     */
    const scrollableSelectors = [
      '[data-slot="page-layout"]',
      ".overflow-auto",
      ".overflow-y-auto",
      ".overflow-y-scroll",
      "main",
      "#__next",
    ];

    scrollableSelectors.forEach((selector) => {
      const element = document.querySelector(selector);
      if (element && !listenTargets.includes(element)) {
        listenTargets.push(element);
      }
    });

    if (targetRef?.current && !listenTargets.includes(targetRef.current)) {
      listenTargets.push(targetRef.current);
    }

    handleScroll();

    listenTargets.forEach((target) => {
      target.addEventListener("scroll", handleScroll, {
        passive: true,
        capture: true,
      });
    });

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      listenTargets.forEach((target) => {
        target.removeEventListener("scroll", handleScroll);
      });
    };
  }, [threshold, targetRef]);

  return hasScrolled;
}
