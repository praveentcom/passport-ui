"use client";

import React, { ReactNode } from "react";

import { cva } from "class-variance-authority";

import { useScroll } from "../../hooks/use-scroll";
import { cn } from "../../lib/utils";

export type HeaderContainerVariant = "compact" | "relaxed" | "full";

const headerContainerVariants = cva(
  "w-full z-50 transition-all ease-in-out border-b",
  {
    variants: {
      sticky: {
        true: "sticky top-0",
        false: "relative",
      },
      blurred: {
        true: "backdrop-blur-md bg-sidebar/80",
        false: "bg-sidebar",
      },
      bordered: {
        true: "border-border",
        false: "border-transparent",
      },
    },
    defaultVariants: {
      sticky: false,
      blurred: false,
      bordered: true,
    },
  }
);

const headerContentVariants = cva("px-4 py-3.5 mx-auto", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the header
       * such as with margins on either side of the page.
       */
      compact: "max-w-sm w-full",
      relaxed: "max-w-3xl w-full",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

export interface HeaderContainerProps {
  children: ReactNode;
  className?: string;
  variant?: HeaderContainerVariant;
  sticky?: boolean;
  blurred?: boolean;
  revealStylesOnScroll?: boolean;
  id?: string;
}

/**
 * Header container component for page headers.
 * Provides consistent header styling with optional sticky positioning and blur effects.
 * Designed to complement ContentContainer inside SidebarInset.
 *
 * @param children - The header content to display
 * @param className - Additional CSS classes
 * @param variant - Controls the max width of the header (compact, relaxed, full)
 * @param sticky - Whether the header should stick to the top on scroll
 * @param blurred - Whether the header should have a blurred background effect
 * @param revealStylesOnScroll - Whether to reveal border and background styles only on scroll
 * @returns The header container component
 */
export function HeaderContainer({
  children,
  className,
  variant = "full",
  sticky = false,
  blurred = false,
  revealStylesOnScroll = false,
  id,
}: HeaderContainerProps): ReactNode {
  const hasScrolled = useScroll();

  const shouldShowStyles = revealStylesOnScroll ? hasScrolled : true;
  const effectiveBlurred = shouldShowStyles ? blurred : false;
  const effectiveBordered = shouldShowStyles;

  return (
    <header
      id={id}
      data-slot="header-container"
      className={cn(
        headerContainerVariants({
          sticky,
          blurred: effectiveBlurred,
          bordered: effectiveBordered,
        }),
        revealStylesOnScroll && !hasScrolled && "bg-transparent",
        className
      )}
    >
      <div className={headerContentVariants({ variant })}>{children}</div>
    </header>
  );
}
