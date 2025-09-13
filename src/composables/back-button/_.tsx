import React from "react";

import Link from "next/link";

import { Button } from "../../components/button";
import { cn } from "../../lib/utils";

export type BackButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

/**
 * Common back button component
 * @param href - The href of the back button
 * @param label - The label of the back button
 * @returns The back button component
 */
export function BackButton({
  href = "/",
  label = "Back to Home",
  className,
}: BackButtonProps) {
  return (
    <div data-slot="back-button">
      <Link href={href} className={cn("flex items-center gap-1", className)}>
        <Button>&larr; {label}</Button>
      </Link>
    </div>
  );
}
