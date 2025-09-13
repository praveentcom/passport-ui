import React, { ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { BlurIn } from "../../motion-primitives/blur-in";
import { BackButton, BackButtonProps } from "../../composables/back-button";

export type ContentContainerVariant = "compact" | "relaxed" | "broad" | "full";

const contentContainerVariants = cva("content-container", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the page
       * such as with margins on either side of the page.
       */
      compact: "max-w-sm w-full",
      relaxed: "max-w-3xl w-full",
      broad: "max-w-5xl w-full",
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
  blurIn?: boolean;
  backButton?: BackButtonProps
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
  blurIn,
  backButton
}: ContentContainerProps): ReactNode {
  const Comp = <>
    {backButton && <BackButton {...backButton} />}
    {children}
  </>;

  return (
    <div
      data-slot="content-container"
      className={cn(contentContainerVariants({ variant }), className)}
    >
      {!blurIn ? Comp : <BlurIn>{Comp}</BlurIn>}
    </div>
  );
}
