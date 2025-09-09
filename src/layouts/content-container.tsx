import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export type ContentContainerVariant = "compact" | "relaxed" | "full";

const contentContainerVariants = cva("content-container mx-auto", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the page
       * such as with margins on either side of the page.
       */
      compact: "max-w-sm",
      relaxed: "max-w-3xl",
      full: "w-full",
    },
  },
});

export interface ContentContainerProps {
  children: ReactNode;
  className?: string;
  variant?: ContentContainerVariant;
}

/**
 * Content container component for main page content.
 * Provides consistent page-level styling and spacing.
 *
 * @param children - The content to display
 * @returns The content container component
 */
export function ContentContainer({
  children,
  className,
  variant,
}: ContentContainerProps): ReactNode {
  return (
    <div className={cn(contentContainerVariants({ variant }), className)}>
      {children}
    </div>
  );
}
