import React, { ReactNode } from "react";

import { cn } from "../../lib/utils";

export type MetaContainerProps = {
  title?: string;
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
  children,
  className,
}: MetaContainerProps) {
  return (
    <div
      data-slot="meta-container"
      className={cn("meta-container h-min text-sm", className)}
    >
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
