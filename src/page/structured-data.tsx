import React from "react";

interface StructuredDataProps {
  data: object;
}

/**
 * Structured data component
 * @param data - The data to display
 * @returns The structured data component
 */
export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2),
      }}
    />
  );
}
