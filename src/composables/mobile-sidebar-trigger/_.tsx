"use client";

import React from "react";

import { MenuIcon } from "lucide-react";

import { Button } from "../../components/button";
import { useSidebar } from "../../components/sidebar";
import { cn } from "../../lib/utils";

export interface MobileSidebarTriggerProps
  extends React.ComponentProps<typeof Button> {
  /**
   * Custom icon to use instead of the default hamburger menu
   */
  icon?: React.ComponentType<{ className?: string }>;
}

/**
 * A mobile-only sidebar trigger that shows a hamburger menu icon.
 * Only visible on mobile devices and triggers the mobile sidebar sheet.
 *
 * @param icon - Optional custom icon (defaults to MenuIcon)
 * @param className - Additional CSS classes
 * @param onClick - Optional click handler (will be called before toggling sidebar)
 */
export function MobileSidebarTrigger({
  icon: Icon = MenuIcon,
  className,
  onClick,
  ...props
}: MobileSidebarTriggerProps) {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <Button
      data-slot="mobile-sidebar-trigger"
      variant="outline"
      size="medium"
      className={cn("md:hidden", !isMobile && "invisible", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <Icon className="size-5" />
      <span className="sr-only">Open sidebar</span>
    </Button>
  );
}
