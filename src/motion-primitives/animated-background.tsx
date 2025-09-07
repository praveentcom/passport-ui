"use client";

import { AnimatePresence, motion, Transition } from "motion/react";
import React, {
  Children,
  cloneElement,
  ReactElement,
  useId,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ "data-id": string }>[]
    | ReactElement<{ "data-id": string }>;
  onValueChangeAction?: (newActiveId: string | null) => void;
  className?: string;
  transition?: Transition;
  enableHover?: boolean;
  defaultValue?: string | null;
};

export function AnimatedBackground({
  children,
  onValueChangeAction,
  className,
  transition,
  enableHover = false,
  defaultValue = null,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(defaultValue);
  const uniqueId = useId();

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id);

    if (onValueChangeAction) {
      onValueChangeAction(id);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Children.map(children, (child: ReactElement<any>, index) => {
    const id = child.props["data-id"];

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        };

    return cloneElement(
      child,
      {
        key: index,
        className: cn("relative inline-flex", child.props.className),
        "data-checked": activeId === id ? "true" : "false",
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn("absolute inset-0", className)}
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
        <div className="relative z-50">{child.props.children}</div>
      </>,
    );
  });
}
