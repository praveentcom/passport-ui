import * as React from "react";

import { BorderTrail } from "@/components/motion-primitives/border-trail";
import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"div"> {
  borderTrail?: boolean;
}

function Card({
  className,
  borderTrail = false,
  children,
  ...props
}: CardProps) {
  const cardContent = (
    <div
      data-slot="card"
      className={cn(
        "text-card-foreground rounded-md relative",
        "border border-border/75 dark:border-border/50 bg-card dark:bg-card/25",
        "h-min py-4 group",
        "transition-all duration-100",
        className,
        borderTrail ? "hover:bg-card/50" : "",
      )}
      {...props}
    >
      {borderTrail && (
        <div className="opacity-0 rounded-md group-hover:opacity-100 transition-opacity duration-200">
          <BorderTrail
            className="bg-gradient-to-r from-primary/0 via-primary/5 to-primary/20"
            size={80}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
          />
        </div>
      )}
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );

  return cardContent;
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-medium", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4", className)}
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

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
