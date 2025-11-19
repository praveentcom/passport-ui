import React from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const switchVariants = cva(
  "peer inline-flex shrink-0 items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-input h-6 w-11",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary",
        success: "data-[state=checked]:bg-success",
        warning: "data-[state=checked]:bg-warning",
        destructive: "data-[state=checked]:bg-destructive",
        info: "data-[state=checked]:bg-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full shadow-xs ring-0 transition-transform data-[state=unchecked]:bg-card size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
  {
    variants: {
      variant: {
        default: "data-[state=checked]:bg-primary-foreground",
        success: "data-[state=checked]:bg-success-foreground",
        warning: "data-[state=checked]:bg-warning-foreground",
        destructive: "data-[state=checked]:bg-destructive-foreground",
        info: "data-[state=checked]:bg-info-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  /**
   * Accessible label for the switch when no visible label is present
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this switch
   */
  "aria-labelledby"?: string;
  /**
   * ID of the element that describes this switch
   */
  "aria-describedby"?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      variant,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => (
    <SwitchPrimitives.Root
      data-slot="switch"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={cn(switchVariants({ variant, className }))}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(switchThumbVariants({ variant }))}
      />
    </SwitchPrimitives.Root>
  )
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch, switchVariants };
