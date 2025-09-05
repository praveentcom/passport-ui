import Link from "next/link";
import React, { Fragment, ReactNode } from "react";

import { BlurIn } from "@/components/motion-primitives/blur-in";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/ui/structured-data";

/**
 * Common page with structured data component
 * @param structuredData - The structured data for the page
 * @param children - The children of the page
 * @returns The page with structured data component
 */
export function PageWithStructuredData({
  structuredData,
  children,
  skipAnimation = false,
}: {
  structuredData: object;
  children: ReactNode;
  skipAnimation?: boolean;
}): ReactNode {
  const Component = (
    <Fragment>
      <StructuredData data={structuredData} />
      <div className="page-container">{children}</div>
    </Fragment>
  );

  return skipAnimation ? Component : <BlurIn>{Component}</BlurIn>;
}

/**
 * Common back button component
 * @param href - The href of the back button
 * @param label - The label of the back button
 * @returns The back button component
 */
export function BackButton({
  href,
  label,
}: {
  href: string;
  label: string;
}): ReactNode {
  return (
    <div className="mb-5">
      <Button asChild>
        <Link
          href={href}
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
        >
          &larr; {label}
        </Link>
      </Button>
    </div>
  );
}

/**
 * Common bullet list component
 * @param items - The items of the bullet list
 * @returns The bullet list component
 */
export function BulletList({ items }: { items: string[] }): ReactNode {
  return (
    <ul className="bullet-list">
      {items.map((item, index) => (
        <li key={index} className="bullet-item">
          <div className="bullet-dot" />
          <span className="bullet-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Common section card wrapper
 * @param title - The title of the meta card
 * @param children - The children of the meta card
 * @returns The meta card component
 */
export function MetaCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div className="meta-container">
      <h4 className="text-sm font-medium">{title}</h4>
      {children}
    </div>
  );
}
