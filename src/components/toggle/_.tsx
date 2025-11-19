import React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1.5 font-medium hover:bg-border disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=on]:bg-border data-[state=on]:text-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-border hover:text-foreground",
      },
      size: {
        regular: "h-10 rounded-sm text-xs px-3",
        medium: "h-10 rounded-sm text-sm px-3",
        large: "h-10 rounded-sm text-sm px-3",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "regular",
    },
  }
);

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
