import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-sm px-4 py-3 text-sm [&>svg]:absolute border [&>svg]:left-4 [&>svg]:top-3 [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-foreground border-border",
        info: "bg-info/5 text-info dark:text-info-foreground border-info/25 [&>svg]:text-info dark:[&>svg]:text-info-foreground",
        warning:
          "bg-warning/5 text-warning dark:text-warning-foreground border-warning/25 [&>svg]:text-warning dark:[&>svg]:text-warning-foreground",
        success:
          "bg-success/5 text-success dark:text-success-foreground border-success/25 [&>svg]:text-success dark:[&>svg]:text-success-foreground",
        destructive:
          "bg-destructive/5 text-destructive dark:text-destructive-foreground border-destructive/25 [&>svg]:text-destructive dark:[&>svg]:text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

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
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {icon && (
        <div className="absolute left-4 top-3 [&>svg]:size-4">{icon}</div>
      )}
      <div className={icon ? "pl-7" : ""}>
        <div className="title-container">
          <span className="font-medium leading-none tracking-tight block text-current">
            {title}
          </span>
          <span className="leading-relaxed block text-current opacity-90">
            {description}
          </span>
        </div>
      </div>
    </div>
  ),
);
Alert.displayName = "Alert";

export { Alert, alertVariants };
export type { AlertProps };
