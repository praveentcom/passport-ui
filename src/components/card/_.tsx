import React from "react";

import { cn } from "../../lib/utils";

export interface CardProps extends React.ComponentProps<"div"> {
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
  interactive = false,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  onClick,
  onKeyDown,
  ...props
}: CardProps) {
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
        "border border-border bg-card",
        "h-min pt-3.5 pb-4 group",
        "transition-all duration-100",
        interactive &&
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      onClick={interactive ? onClick : undefined}
      onKeyDown={interactive ? handleKeyDown : onKeyDown}
      {...props}
    >
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );

  return cardContent;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("px-4 meta-container", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      data-slot="card-title"
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4 card-container", className)}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent };
