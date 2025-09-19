import React from "react";

import Link from "next/link";

import { Button } from "../../components/button";
import { cn } from "../../lib/utils";

export type NavigationBackButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

/**
 * Common navigation back button component
 * @param href - The href of the back button
 * @param label - The label of the back button
 * @returns The navigation back button component
 */
export function NavigationBackButton({
  href = "/",
  label = "Back to Home",
  className,
}: NavigationBackButtonProps) {
  return (
    <div data-slot="navigation-back-button">
      <Link href={href} className={cn("flex items-center gap-1", className)}>
        <Button>&larr; {label}</Button>
      </Link>
    </div>
  );
}
