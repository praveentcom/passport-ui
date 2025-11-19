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

const Card = React.memo(
  React.forwardRef<HTMLDivElement, CardProps>(
    (
      {
        className,
        interactive = false,
        children,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        onClick,
        onKeyDown,
        ...props
      },
      ref
    ) => {
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

      return (
        <div
          data-slot="card"
          role={interactive ? "button" : undefined}
          tabIndex={interactive ? 0 : undefined}
          aria-label={interactive ? ariaLabel : undefined}
          aria-labelledby={ariaLabelledBy}
          aria-describedby={ariaDescribedBy}
          className={cn(
            "text-card-foreground rounded-lg relative",
            "border border-border bg-card",
            "h-min py-4 group",
            "transition-all duration-100",
            interactive &&
              "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          onClick={interactive ? onClick : undefined}
          onKeyDown={interactive ? handleKeyDown : onKeyDown}
          ref={ref}
          {...props}
        >
          <div className="flex flex-col gap-4">{children}</div>
        </div>
      );
    }
  )
);
Card.displayName = "Card";

const CardHeader = React.memo(
  React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
    ({ className, ...props }, ref) => (
      <div
        data-slot="card-header"
        className={cn("px-4 meta-container gap-y-0.5", className)}
        ref={ref}
        {...props}
      />
    )
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.memo(
  React.forwardRef<HTMLHeadingElement, React.ComponentProps<"h2">>(
    ({ className, ...props }, ref) => (
      <h2
        data-slot="card-title"
        className={cn(className)}
        ref={ref}
        {...props}
      />
    )
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.memo(
  React.forwardRef<HTMLParagraphElement, React.ComponentProps<"p">>(
    ({ className, ...props }, ref) => (
      <p
        data-slot="card-description"
        className={cn("text-sm text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    )
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = React.memo(
  React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
    ({ className, ...props }, ref) => (
      <div
        data-slot="card-content"
        className={cn("px-4 card-container", className)}
        ref={ref}
        {...props}
      />
    )
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.memo(
  React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
    ({ className, ...props }, ref) => (
      <div
        data-slot="card-footer"
        className={cn("px-4 flex items-center", className)}
        ref={ref}
        {...props}
      />
    )
  )
);
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
