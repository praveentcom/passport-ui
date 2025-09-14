"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Custom React hook to detect if the current viewport is mobile-sized
 *
 * This hook uses the matchMedia API to detect viewport changes and determine
 * if the current screen size is below the mobile breakpoint (768px).
 *
 * @returns A boolean indicating whether the current viewport is mobile-sized
 *
 * @example
 * ```tsx
 * function ResponsiveComponent() {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? <MobileLayout /> : <DesktopLayout />}
 *     </div>
 *   );
 * }
 * ```
 *
 * @remarks
 * - Returns `false` during server-side rendering and initial hydration
 * - Uses a breakpoint of 768px (matching Tailwind's `md` breakpoint)
 * - Automatically updates when the viewport size changes
 * - Optimized with event listeners for performance
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
