import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  /**
   * ID of the element that describes this textarea (for error messages, help text)
   */
  "aria-describedby"?: string;
  /**
   * Whether this textarea is required
   */
  "aria-required"?: boolean;
  /**
   * Whether this textarea is invalid
   */
  "aria-invalid"?: boolean;
  /**
   * Label for the textarea when no visible label is present
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this textarea
   */
  "aria-labelledby"?: string;
}

function Textarea({
  className,
  "aria-describedby": ariaDescribedBy,
  "aria-required": ariaRequired,
  "aria-invalid": ariaInvalid,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      aria-describedby={ariaDescribedBy}
      aria-required={ariaRequired}
      aria-invalid={ariaInvalid}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "text-foreground placeholder:text-muted-foreground/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex min-h-[60px] w-full min-w-0 rounded-sm border bg-card px-2 py-1.5 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "resize-none",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
