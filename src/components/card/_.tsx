"use client";

import React from "react";

import { cn } from "../../lib/utils";
import {
  BorderTrail,
  BorderTrailProps,
} from "../../motion-primitives/border-trail";

export interface CardProps extends React.ComponentProps<"div"> {
  borderTrail?: boolean | BorderTrailProps;
  /**
   * Makes the card interactive (clickable)
   */
  interactive?: boolean;
  /**
   * Accessible label for interactive cards
   */
  "aria-label"?: string;
  /**
   * ID of the element that labels this card
   */
  "aria-labelledby"?: string;
  /**
   * ID of the element that describes this card
   */
  "aria-describedby"?: string;
}

function Card({
  className,
  borderTrail = false,
  interactive = false,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  onClick,
  onKeyDown,
  ...props
}: CardProps) {
  let borderTrailProps: BorderTrailProps | undefined;
  if (borderTrail === true) {
    borderTrailProps = {
      className: "bg-gradient-to-r from-primary/0 via-primary/5 to-primary/20",
      size: 80,
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "linear",
      },
    };
  } else if (borderTrail) {
    borderTrailProps = borderTrail;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (interactive && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      const syntheticEvent = {
        currentTarget: event.currentTarget,
        target: event.target,
        type: "click",
        preventDefault: () => {},
        stopPropagation: () => {},
      } as React.MouseEvent<HTMLDivElement>;
      onClick?.(syntheticEvent);
    }
    onKeyDown?.(event);
  };

  const cardContent = (
    <div
      data-slot="card"
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? ariaLabel : undefined}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      className={cn(
        "text-card-foreground rounded-md relative",
        "border border-border/85 bg-card",
        "h-min py-4 group",
        "transition-all duration-100",
        interactive &&
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
        borderTrail ? "hover:bg-card/85" : ""
      )}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? handleKeyDown : onKeyDown}
      {...props}
    >
      {borderTrail && (
        <div className="opacity-0 rounded-md group-hover:opacity-100 transition-opacity duration-200">
          <BorderTrail {...borderTrailProps} />
        </div>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );

  return cardContent;
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 section-container", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-4 [.border-t]:pt-4", className)}
      {...props}
    />
  );
}

export { Card, CardContent, CardFooter };
