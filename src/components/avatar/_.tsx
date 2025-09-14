import React from "react";

import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "../../lib/utils";

interface AvatarProps extends React.ComponentProps<typeof AvatarPrimitive.Root> {
  monochrome?: boolean;
}

const AvatarContext = React.createContext<{ monochrome?: boolean }>({});

function Avatar({
  className,
  monochrome,
  ...props
}: AvatarProps) {
  return (
    <AvatarContext.Provider value={{ monochrome }}>
      <AvatarPrimitive.Root
        data-slot="avatar"
        className={cn(
          "relative flex size-8 shrink-0 overflow-hidden rounded-full",
          monochrome && "group",
          className
        )}
        {...props}
      />
    </AvatarContext.Provider>
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  const { monochrome } = React.useContext(AvatarContext);
  
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full",
        monochrome && [
          "grayscale",
          "transition-all duration-200 ease-in-out",
          "group-hover:grayscale-0"
        ],
        className
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-card flex size-full text-xs items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps };
