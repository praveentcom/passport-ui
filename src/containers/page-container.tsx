import React, { Fragment, ReactNode } from "react";

import { BlurIn } from "@/motion-primitives/blur-in";
import { StructuredData } from "@/components/structured-data";

/**
 * Common page with structured data component
 * @param structuredData - The structured data for the page
 * @param children - The children of the page
 * @returns The page with structured data component
 */
export function PageContainer({
  structuredData,
  children,
  skipAnimation = false,
}: {
  structuredData?: object;
  children: ReactNode;
  skipAnimation?: boolean;
}): ReactNode {
  const Component = (
    <Fragment>
      {structuredData && <StructuredData data={structuredData} />}
      <div className="page-container">{children}</div>
    </Fragment>
  );

  return skipAnimation ? Component : <BlurIn>{Component}</BlurIn>;
}
