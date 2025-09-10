import * as React from "react";

import { cn } from "@/lib/utils";

export interface VisuallyHiddenProps {
  /**
   * Whether to use a div instead of span
   * @default false
   */
  asDiv?: boolean;
  /**
   * The content to hide visually
   */
  children: React.ReactNode;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * A component that hides content visually but keeps it available to screen readers.
 *
 * ## Features
 * - Hides content visually using CSS
 * - Keeps content accessible to screen readers
 * - Maintains proper focus behavior
 * - Can render as span or div
 *
 * ## Usage
 * Use for:
 * - Skip links
 * - Additional context for screen readers
 * - Form labels that are visually represented by icons
 * - Status messages that don't need visual representation
 *
 * ## Accessibility
 * This component ensures that important information remains available to assistive technologies
 * while maintaining a clean visual design.
 */
function VisuallyHidden({
  className,
  asDiv = false,
  children,
}: VisuallyHiddenProps) {
  if (asDiv) {
    return (
      <div data-slot="visually-hidden" className={cn("sr-only", className)}>
        {children}
      </div>
    );
  }

  return (
    <span data-slot="visually-hidden" className={cn("sr-only", className)}>
      {children}
    </span>
  );
}

export { VisuallyHidden };
