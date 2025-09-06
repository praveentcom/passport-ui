import React, { ReactNode } from "react";

/**
 * Common section card wrapper
 * @param title - The title of the meta card
 * @param children - The children of the meta card
 * @returns The meta card component
 */
export function MetaContainer({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div className="title-container">
      {title && <h4>{title}</h4>}
      <div className="meta-container">{children}</div>
    </div>
  );
}
