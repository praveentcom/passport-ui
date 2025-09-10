import * as React from "react";
import { ReactNode } from "react";

import Link from "next/link";

import { Button } from "@/components/button";

/**
 * Common back button component
 * @param href - The href of the back button
 * @param label - The label of the back button
 * @returns The back button component
 */
export function BackButton({
  href = "/",
  label = "Back to Home",
}: {
  href?: string;
  label?: string;
}): ReactNode {
  return (
    <div data-slot="back-button" className="mb-5">
      <Button asChild>
        <Link href={href} className="flex items-center gap-1">
          &larr; {label}
        </Link>
      </Button>
    </div>
  );
}
