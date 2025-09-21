import React, { Fragment, ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export type ContentContainerVariant = "compact" | "relaxed" | "broad" | "full";

const contentContainerVariants = cva("content-container", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the page
       * such as with margins on either side of the page.
       */
      compact: "max-w-sm w-full",
      relaxed: "max-w-4xl w-full",
      broad: "max-w-6xl w-full",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "full",
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
  const Comp = <Fragment>{children}</Fragment>;

  return (
    <div
      data-slot="content-container"
      className={cn(contentContainerVariants({ variant }), className)}
    >
      {Comp}
    </div>
  );
}
