import * as React from "react";

import {
  BorderTrail,
  BorderTrailProps,
} from "@/motion-primitives/border-trail";
import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  borderTrail?: boolean | BorderTrailProps;
}

function Card({
  className,
  borderTrail = false,
  children,
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

  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "text-card-foreground rounded-md relative",
        "border border-border/85 bg-card",
        "h-min py-4 group",
        "transition-all duration-100",
        className,
        borderTrail ? "hover:bg-card/85" : "",
      )}
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
