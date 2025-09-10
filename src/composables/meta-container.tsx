import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

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
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}): ReactNode {
  return (
    <div
      data-slot="meta-container"
      className={cn("title-container h-min", className)}
    >
      {title && <h4 className="leading-tight">{title}</h4>}
      <div className="meta-container h-min">{children}</div>
    </div>
  );
}
