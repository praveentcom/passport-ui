import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1.5 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-s hover:bg-primary/85",
        destructive:
          "bg-destructive text-destructive-foreground shadow-s hover:bg-destructive/85",
        outline:
          "border border-input bg-background shadow-s hover:bg-accent text-muted-foreground hover:text-foreground",
        secondary:
          "bg-card text-secondary-foreground shadow-s hover:bg-secondary",
        ghost: "hover:bg-border text-muted-foreground hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        regular: "h-6 rounded-xs px-2 py-1.5 has-[>svg]:px-1.5 text-xs",
        medium: "h-8 rounded-xs px-2.5 py-1.5 has-[>svg]:px-2 text-sm",
        large: "h-9 rounded-sm gap-1.5 px-3 has-[>svg]:px-2.5 text-sm",
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
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  "aria-expanded": ariaExpanded,
  "aria-controls": ariaControls,
  "aria-pressed": ariaPressed,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-pressed={ariaPressed}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
