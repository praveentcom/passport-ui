import React, { ReactNode } from "react";

export type BulletListProps = {
  items: string[] | string;
};

/**
 * Common bullet list component
 * @param items - The items of the bullet list
 * @returns The bullet list component
 */
export function BulletList({ items }: BulletListProps): ReactNode {
  if (typeof items === "string") {
    items = [items];
  }

  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <ul data-slot="bullet-list" className="bullet-list">
      {items.map((item, index) => (
        <li key={index} className="bullet-item">
          <div className="bullet-dot" />
          <span className="bullet-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}
