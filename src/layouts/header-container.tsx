import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export type HeaderContainerVariant = "compact" | "relaxed" | "full";

const headerContainerVariants = cva(
  "w-full z-50 transition-all duration-200 ease-in-out border-b border-border",
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
    },
    defaultVariants: {
      sticky: false,
      blurred: false,
    },
  },
);

const headerContentVariants = cva("p-4", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the header
       * such as with margins on either side of the page.
       */
      compact: "max-w-sm mx-auto",
      relaxed: "max-w-3xl mx-auto",
      full: "w-full",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

export interface HeaderContainerProps {
  /**
   * The header content to display
   */
  children: ReactNode;
  /**
   * Additional class names for the header wrapper
   */
  className?: string;
  /**
   * The variant of the header container - controls max width
   */
  variant?: HeaderContainerVariant;
  /**
   * Whether the header should stick to the top on scroll
   */
  sticky?: boolean;
  /**
   * Whether the header should have a blurred background on scroll
   */
  blurred?: boolean;
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
 * @returns The header container component
 */
export function HeaderContainer({
  children,
  className,
  variant = "full",
  sticky = false,
  blurred = false,
}: HeaderContainerProps): ReactNode {
  return (
    <header
      className={cn(headerContainerVariants({ sticky, blurred }), className)}
    >
      <div className={headerContentVariants({ variant })}>{children}</div>
    </header>
  );
}
