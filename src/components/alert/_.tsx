import React from "react";

import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-sm px-4 py-3 text-sm [&>svg]:absolute border [&>svg]:left-4 [&>svg]:top-3 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card border-border",
        info: "bg-info-muted border-info/50",
        warning: "bg-warning-muted border-warning/50",
        success: "bg-success-muted border-success/50",
        destructive: "bg-destructive-muted border-destructive/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const textVariants = cva("text-sm", {
  variants: {
    variant: {
      default: "text-foreground",
      info: "text-info-muted-foreground [&>svg]:text-info-muted-foreground",
      warning:
        "text-warning-muted-foreground [&>svg]:text-warning-muted-foreground",
      success:
        "text-success-muted-foreground [&>svg]:text-success-muted-foreground",
      destructive:
        "text-destructive-muted-foreground [&>svg]:text-destructive-muted-foreground",
    },
  },
});

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, description, icon, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      data-slot="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <div
          className={cn(
            textVariants({ variant }),
            "absolute left-4 top-3.75 [&>svg]:size-3.5"
          )}
        >
          {icon}
        </div>
      )}
      <div className={icon ? "pl-5.5" : ""}>
        <div className="meta-container">
          <span className={cn(textVariants({ variant }), "font-medium")}>
            {title}
          </span>
          <span className={cn(textVariants({ variant }), "text-xs")}>
            {description}
          </span>
        </div>
      </div>
    </div>
  )
);
Alert.displayName = "Alert";

export { Alert, alertVariants };
export type { AlertProps };
