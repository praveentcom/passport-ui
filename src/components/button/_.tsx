import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";

import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  /**
   * The visual style variant of the button
   */
  variant?: "primary" | "ghost" | "secondary" | "outline" | "destructive" | "link";
  /**
   * The size of the button
   */
  size?: "regular" | "medium" | "large";
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

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        asChild = false,
        variant = "outline",
        size = "regular",
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
      },
      ref
    ) => {
      const Comp = asChild ? Slot : "button";
      const buttonClasses = cn(
        "passport-button",
        `passport-button-${variant}`,
        `passport-button-${size}`,
        className
      );

      if (asChild) {
        return (
          <Comp
            data-slot="button"
            aria-label={ariaLabel}
            aria-labelledby={ariaLabelledBy}
            aria-describedby={ariaDescribedBy}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            aria-pressed={ariaPressed}
            className={buttonClasses}
            ref={ref}
            {...props}
          >
            {children}
          </Comp>
        );
      }

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
          className={buttonClasses}
          ref={ref}
          {...props}
        >
          {loading && <Loader2 className="animate-spin" aria-hidden="true" />}
          {loading && loadingText ? loadingText : children}
        </Comp>
      );
    }
  )
);
Button.displayName = "Button";

export { Button };
