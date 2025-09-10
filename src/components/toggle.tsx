"use client";

import * as React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1.5 font-medium hover:bg-border disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-s hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        regular: "h-6 rounded-xs text-xs px-2",
        medium: "h-8 rounded-xs text-sm px-2.5",
        large: "h-9 rounded-sm text-sm px-3",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "regular",
    },
  }
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
