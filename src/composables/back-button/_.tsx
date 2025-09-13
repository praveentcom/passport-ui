import React from "react";

import Link from "next/link";

import { Button } from "../../components/button";

export type BackButtonProps = {
  href?: string;
  label?: string;
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
}: BackButtonProps) {
  return (
    <div data-slot="back-button">
      <Link href={href} className="flex items-center gap-1">
        <Button>&larr; {label}</Button>
      </Link>
    </div>
  );
}
