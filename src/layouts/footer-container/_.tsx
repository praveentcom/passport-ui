import React, { ReactNode } from "react";

import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export type FooterContainerVariant = "compact" | "relaxed" | "broad" | "full";

const footerContainerVariants = cva(
  "w-full z-50 transition-all duration-200 border-t border-border",
  {
    variants: {
      sticky: {
        true: "sticky bottom-0",
        false: "relative",
      },
      blurred: {
        true: "bg-background/80 backdrop-blur-md",
        false: "bg-background",
      },
    },
    defaultVariants: {
      sticky: false,
      blurred: false,
    },
  }
);

const footerContentVariants = cva("px-4 py-4 mx-auto", {
  variants: {
    variant: {
      /**
       * Used when the user wants to show compact version of the footer
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

export interface FooterContainerProps {
  /**
   * The footer content to display
   */
  children: ReactNode;
  /**
   * Additional class names for the footer wrapper
   */
  className?: string;
  /**
   * The variant of the footer container - controls max width
   */
  variant?: FooterContainerVariant;
  /**
   * Whether the footer should stick to the bottom on scroll
   */
  sticky?: boolean;
  /**
   * Whether the footer should have a blurred background on scroll
   */
  blurred?: boolean;
  /**
   * Optional id for the footer element
   */
  id?: string;
}

/**
 * Footer container component for page footers.
 * Provides consistent footer styling with optional sticky positioning and blur effects.
 * Designed to complement ContentContainer inside SidebarInset.
 *
 * @param children - The footer content to display
 * @param className - Additional CSS classes
 * @param variant - Controls the max width of the footer (compact, relaxed, broad, full)
 * @param sticky - Whether the footer should stick to the bottom on scroll
 * @param blurred - Whether the footer should have a blurred background effect
 * @returns The footer container component
 */
export function FooterContainer({
  children,
  className,
  variant = "full",
  sticky = false,
  blurred = false,
  id,
}: FooterContainerProps): ReactNode {
  return (
    <footer
      id={id}
      data-slot="footer-container"
      className={cn(footerContainerVariants({ sticky, blurred }), className)}
    >
      <div className={footerContentVariants({ variant })}>{children}</div>
    </footer>
  );
}
