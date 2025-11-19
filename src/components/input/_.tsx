import React from "react";

import { cn } from "../../lib/utils";

export interface InputProps extends React.ComponentProps<"input"> {
  /**
   * ID of the element that describes this input (for error messages, help text)
   */
  "aria-describedby"?: string;
  /**
   * Whether this input is required
   */
  "aria-required"?: boolean;
  /**
   * Whether this input is invalid
   */
  "aria-invalid"?: boolean;
  /**
   * Label for the input when no visible label is present
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this input
   */
  "aria-labelledby"?: string;
}

function Input({
  className,
  type,
  "aria-describedby": ariaDescribedBy,
  "aria-required": ariaRequired,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-describedby={ariaDescribedBy}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "passport-input min-w-0 text-foreground selection:bg-primary selection:text-primary-foreground",
        "file:text-foreground file:inline-flex file:h-6.5 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  );
}

export { Input };
