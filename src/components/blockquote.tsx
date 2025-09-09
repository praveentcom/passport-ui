import * as React from "react";
import { cn } from "@/lib/utils";

export interface BlockquoteProps extends React.ComponentProps<"blockquote"> {
  /**
   * Whether this is a nested blockquote (affects styling)
   */
  nested?: boolean;
}

/**
 * A styled blockquote component for displaying quoted content
 *
 * @param nested - Whether this blockquote is nested within another
 * @param className - Additional CSS classes
 * @param children - The blockquote content
 */
function Blockquote({
  nested = false,
  className,
  children,
  ...props
}: BlockquoteProps) {
  return (
    <blockquote
      data-slot="blockquote"
      className={cn(
        "relative pl-5 py-2 pr-4 bg-border/50 rounded-sm text-sm leading-relaxed text-muted-foreground mb-3",
        className,
      )}
      {...props}
    >
      {!nested && (
        <div className="absolute left-1.5 top-1.5 bottom-1.5 w-1 bg-foreground/50 rounded-xs" />
      )}
      {children}
    </blockquote>
  );
}

export { Blockquote };
