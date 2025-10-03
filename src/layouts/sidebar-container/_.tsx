"use client";

import React, { ReactNode } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../../components/sidebar";

export interface SearchConfig {
  /**
   * Current search text value
   */
  searchText: string;
  /**
   * Callback to update search text
   */
  setSearchText: (text: string) => void;
  /**
   * Placeholder text for the search input
   */
  placeholder?: string;
}

export interface SidebarContainerProps {
  /**
   * Optional header content for the sidebar
   */
  sidebarHeader?: ReactNode;
  /**
   * Optional footer content for the sidebar (trigger will be added automatically)
   */
  sidebarFooter?: ReactNode;
  /**
   * Main content for the sidebar - client constructs their own sidebar structure
   */
  children?: ReactNode;
  /**
   * Search configuration - when provided, shows a search input
   */
  searchConfig?: SearchConfig;
  /**
   * Whether the sidebar should be open by default
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state
   */
  open?: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Sidebar variant
   */
  variant?: "sidebar" | "floating" | "inset";
  /**
   * Sidebar side
   */
  side?: "left" | "right";
  /**
   * Collapsible behavior
   */
  collapsible?: boolean;
  /**
   * Additional class names for the provider wrapper
   */
  className?: string;
  /**
   * Blurred background
   */
  blurred?: boolean;
  /**
   * Only render sidebar on mobile devices
   */
  mobileOnly?: boolean;
}

/**
 * A standalone sidebar component that provides navigation.
 * When used in PageLayout, wrap both this and content with SidebarProvider.
 * Built on top of the shadcn/ui sidebar components.
 *
 * @param sidebarHeader - Optional header content (hidden in icon mode with fixed height)
 * @param sidebarFooter - Optional footer content (hidden in icon mode, trigger remains visible)
 * @param children - Main sidebar content - client constructs their own sidebar structure
 * @param searchConfig - Search configuration object with searchText, setSearchText, and optional placeholder
 * @param variant - Sidebar variant (sidebar, floating, inset)
 * @param side - Sidebar side (left, right)
 * @param collapsible - Whether the sidebar can collapse to icon-only mode (true) or remain fixed (false)
 * @param className - Additional class names for the sidebar
 * @param blurred - Whether the sidebar should be blurred
 * @param mobileOnly - Only render sidebar on mobile devices
 * @returns The sidebar component (without provider wrapper)
 */
export function SidebarContainer({
  sidebarHeader,
  sidebarFooter,
  children,
  searchConfig,
  variant = "sidebar",
  side = "left",
  collapsible = true,
  blurred = false,
  mobileOnly = false,
  className,
}: Omit<
  SidebarContainerProps,
  "defaultOpen" | "open" | "onOpenChange"
>): ReactNode {
  useSidebar();

  return (
    <Sidebar
      data-slot="sidebar-container"
      variant={variant}
      side={side}
      collapsible={collapsible}
      blurred={blurred}
      mobileOnly={mobileOnly}
      className={className}
    >
      {sidebarHeader && (
        <SidebarHeader className="group-data-[state=collapsed]:hidden">
          {sidebarHeader}
        </SidebarHeader>
      )}

      <SidebarContent>
        {searchConfig && (
          <SidebarInput
            type="search"
            placeholder={searchConfig.placeholder || "Search…"}
            value={searchConfig.searchText}
            onChange={(e) => searchConfig.setSearchText(e.target.value)}
            className="group-data-[state=collapsed]:hidden"
          />
        )}

        {children}
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-between group-data-[state=collapsed]:justify-center">
          <div className="flex-1 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:invisible group-data-[state=collapsed]:w-0 transition-all duration-200">
            {sidebarFooter}
          </div>
          <SidebarTrigger />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
