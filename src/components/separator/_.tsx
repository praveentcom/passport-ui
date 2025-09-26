import React from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "../../lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  fadedEdges = false,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  fadedEdges?: boolean;
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 rounded-sm data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        fadedEdges
          ? orientation === "horizontal"
            ? "bg-gradient-to-r via-[percentage:5%_95%] from-0% to-100% from-transparent via-foreground/20 to-transparent"
            : "bg-gradient-to-b via-[percentage:5%_95%] from-0% to-100% from-transparent via-border dark:via-secondary to-transparent"
          : "bg-border",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
