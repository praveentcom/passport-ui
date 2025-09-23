"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps, cva } from "class-variance-authority";
import { AnimatePresence, Transition, motion } from "framer-motion";

import { cn } from "../../lib/utils";

interface ToggleSelectContextType {
  selectedValue: string | null;
  setSelectedValue: (value: string | null) => void;
  uniqueId: string;
  transition?: Transition;
}

const ToggleSelectContext = createContext<ToggleSelectContextType | null>(null);

const toggleSelectItemVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-1.5 font-medium hover:bg-transparent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 aria-invalid:border-destructive whitespace-nowrap relative",
  {
    variants: {
      variant: {
        transparent: "bg-transparent",
        outline: "bg-transparent",
      },
      size: {
        regular: "h-5 rounded-xs px-2",
        medium: "h-7 rounded-xs px-2.5",
        large: "h-9 rounded-sm px-3",
      },
    },
    defaultVariants: {
      variant: "transparent",
      size: "regular",
    },
  }
);

const toggleSelectItemTextVariants = cva("text-foreground", {
  variants: {
    size: {
      regular: "text-xs",
      medium: "text-sm",
      large: "text-sm",
    },
  },
  defaultVariants: {
    size: "regular",
  },
});

export interface ToggleSelectProps {
  children: React.ReactNode;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  className?: string;
  transition?: Transition;
  defaultValue?: string | null;
  /**
   * Accessible label for the toggle group
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this toggle group
   */
  "aria-labelledby"?: string;
}

export function ToggleSelect({
  children,
  value,
  onValueChange,
  className,
  transition,
  defaultValue = null,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: ToggleSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    value ?? defaultValue
  );
  const [isMounted, setIsMounted] = useState(false);
  const uniqueId = useId();

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSetSelectedValue = (newValue: string | null) => {
    if (value === undefined) {
      setSelectedValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const contextValue: ToggleSelectContextType = {
    selectedValue: value !== undefined ? value : selectedValue,
    setSelectedValue: handleSetSelectedValue,
    uniqueId,
    transition: isMounted ? transition : { duration: 0 },
  };

  return (
    <ToggleSelectContext.Provider value={contextValue}>
      <div
        role="group"
        data-slot="toggle-select"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={cn(
          "inline-flex items-center rounded-sm border bg-card p-0.75 relative",
          className
        )}
      >
        {children}
      </div>
    </ToggleSelectContext.Provider>
  );
}

export interface ToggleSelectItemProps
  extends Omit<
      React.ComponentProps<typeof TogglePrimitive.Root>,
      "pressed" | "onPressedChange"
    >,
    VariantProps<typeof toggleSelectItemVariants> {
  value: string;
}

export function ToggleSelectItem({
  className,
  variant,
  size,
  value,
  children,
  onClick,
  ...props
}: ToggleSelectItemProps) {
  const context = useContext(ToggleSelectContext);

  if (!context) {
    throw new Error("ToggleSelectItem must be used within ToggleSelect");
  }

  const { selectedValue, setSelectedValue, uniqueId, transition } = context;
  const isSelected = selectedValue === value;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedValue(isSelected ? null : value);
    onClick?.(event);
  };

  return (
    <TogglePrimitive.Root
      data-slot="toggle-select-item"
      className={cn(toggleSelectItemVariants({ variant, size, className }))}
      pressed={isSelected}
      onClick={handleClick}
      {...props}
    >
      <AnimatePresence initial={false}>
        {isSelected && (
          <motion.div
            layoutId={`background-${uniqueId}`}
            className={cn("absolute inset-0", "bg-border rounded-xs")}
            transition={transition}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              transition: {
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
              },
            }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              transform: "translateZ(0)",
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-10">
        <span className={cn(toggleSelectItemTextVariants({ size }))}>
          {children}
        </span>
      </div>
    </TogglePrimitive.Root>
  );
}

export { toggleSelectItemVariants };
