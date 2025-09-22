import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: "bg-card text-card-foreground shadow-xs hover:bg-card/85",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/85",
        outline:
          "border border-input bg-background shadow-xs hover:bg-border/50 text-muted-foreground hover:text-foreground",
        secondary:
          "bg-card text-secondary-foreground shadow-xs hover:bg-secondary",
        ghost: "hover:bg-border text-muted-foreground hover:text-foreground",
        link: "!px-0 text-primary hover:underline underline-offset-4 decoration-muted-foreground/50",
      },
      size: {
        regular:
          "h-7 rounded-xs px-2.5 py-1 has-[>svg]:px-2 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        medium:
          "h-8 rounded-xs px-2.5 py-2 has-[>svg]:px-2 text-sm [&_svg:not([class*='size-'])]:size-4",
        large:
          "h-9 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5 text-sm [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "regular",
    },
  }
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Custom loading text to display (optional)
   */
  loadingText?: string;
  /**
   * Accessible label for the button when content isn't descriptive
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this button
   */
  "aria-labelledby"?: string;
  /**
   * ID of the element that describes this button
   */
  "aria-describedby"?: string;
  /**
   * Whether the button represents an expanded state (for collapsible content)
   */
  "aria-expanded"?: boolean | "true" | "false";
  /**
   * Whether the button controls another element
   */
  "aria-controls"?: string;
  /**
   * Whether the button represents a pressed state (for toggle buttons)
   */
  "aria-pressed"?: boolean | "true" | "false" | "mixed";
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  children,
  disabled,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
  "aria-pressed": ariaPressed,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const buttonContent = (
    <>
      {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
      {loading && loadingText ? loadingText : children}
    </>
  );

  return (
    <Comp
      data-slot="button"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      aria-busy={loading}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {asChild ? <span>{buttonContent}</span> : buttonContent}
    </Comp>
  );
}

export { Button, buttonVariants };
