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
        "file:text-foreground text-foreground placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground border-input bg-card dark:bg-input/10 hover:bg-input/20 focus:bg-input/20 flex h-8 w-full min-w-0 rounded-md border px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-6.5 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
