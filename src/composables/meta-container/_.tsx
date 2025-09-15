import React, { ReactNode } from "react";

import { cn } from "../../lib/utils";

export type MetaContainerProps = {
  title?: string;
  clampTitle?: boolean;
  children: ReactNode;
  className?: string;
};

/**
 * Common section card wrapper
 * @param title - The title of the meta card
 * @param children - The children of the meta card
 * @returns The meta card component
 */
export function MetaContainer({
  title,
  clampTitle = false,
  children,
  className,
}: MetaContainerProps) {
  return (
    <div
      data-slot="meta-container"
      className={cn("meta-container h-min text-sm", className)}
    >
      {title && <h3 className={cn(clampTitle && "line-clamp-1")}>{title}</h3>}
      {children}
    </div>
  );
}
