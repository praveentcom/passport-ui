import React from "react";

import { cn } from "../../lib/utils";

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
