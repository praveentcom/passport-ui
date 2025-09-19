"use client";

import React, { ReactNode, useEffect, useMemo, useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../../components/sidebar";

/**
 * Simple URL matching utility
 */
function isUrlMatch(href: string | undefined, currentUrl: string): boolean {
  if (!href || !currentUrl) return false;

  return (
    currentUrl === href ||
    (currentUrl.startsWith(href) && href !== "/" && href !== "#")
  );
}

export type SidebarContainerMenuItem = {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  subItems?: Array<{
    title: string;
    href?: string;
    onClick?: () => void;
    isActive?: boolean;
  }>;
};

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
   * Menu items to display in the sidebar
   */
  menuItems?: SidebarContainerMenuItem[];
  /**
   * Additional sidebar groups with custom content
   */
  sidebarGroups?: Array<{
    label?: string;
    content: ReactNode;
  }>;
  /**
   * Whether to show a search input for filtering menu items
   */
  searchable?: boolean;
  /**
   * Placeholder text for the search input
   */
  searchPlaceholder?: string;
  /**
   * Whether to automatically infer active state from current URL
   */
  autoInferActiveItem?: boolean;
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
}

/**
 * A standalone sidebar component that provides navigation.
 * When used in PageLayout, wrap both this and content with SidebarProvider.
 * Built on top of the shadcn/ui sidebar components.
 *
 * @param sidebarHeader - Optional header content (hidden in icon mode with fixed height)
 * @param sidebarFooter - Optional footer content (hidden in icon mode, trigger remains visible)
 * @param menuItems - Array of menu items to display in the sidebar (supports nested sub-items with collapsible parents and badges)
 * @param sidebarGroups - Additional sidebar groups with custom content
 * @param searchable - Whether to show a search input for filtering menu items
 * @param searchPlaceholder - Placeholder text for the search input
 * @param autoInferActiveItem - Whether to automatically infer active state from current URL (matches exact paths and parent routes)
 * @param variant - Sidebar variant (sidebar, floating, inset)
 * @param side - Sidebar side (left, right)
 * @param collapsible - Whether the sidebar can collapse to icon-only mode (true) or remain fixed (false)
 * @param className - Additional class names for the sidebar
 * @returns The sidebar component (without provider wrapper)
 */
export function SidebarContainer({
  sidebarHeader,
  sidebarFooter,
  menuItems = [],
  sidebarGroups = [],
  searchable = false,
  searchPlaceholder = "Search...",
  autoInferActiveItem = false,
  variant = "sidebar",
  side = "left",
  collapsible = true,
  className,
}: Omit<
  SidebarContainerProps,
  "defaultOpen" | "open" | "onOpenChange"
>): ReactNode {
  const { state, setOpen, isMobile, setOpenMobile } = useSidebar();

  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.hash || window.location.pathname);
    }
  }, []);

  const processedMenuItems = useMemo(() => {
    if (!autoInferActiveItem) return menuItems;

    return menuItems.map((item) => {
      const isItemActive = item.isActive ?? isUrlMatch(item.href, currentUrl);

      const processedSubItems = item.subItems?.map((subItem) => ({
        ...subItem,
        isActive: subItem.isActive ?? isUrlMatch(subItem.href, currentUrl),
      }));

      const hasActiveSubItem = processedSubItems?.some(
        (subItem) => subItem.isActive
      );

      return {
        ...item,
        isActive: isItemActive || hasActiveSubItem,
        subItems: processedSubItems,
      };
    });
  }, [menuItems, autoInferActiveItem, currentUrl]);

  const toggleExpanded = (itemTitle: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemTitle)) {
        newSet.delete(itemTitle);
      } else {
        newSet.add(itemTitle);
      }
      return newSet;
    });
  };

  const handleMenuItemClick = (item: SidebarContainerMenuItem) => {
    if (item.subItems && item.subItems.length > 0) {
      if (state === "collapsed") {
        setOpen(true);
      }
      toggleExpanded(item.title);
    } else {
      if (isMobile) {
        setOpenMobile(false);
      }

      if (item.onClick) {
        item.onClick();
      } else if (item.href) {
        window.location.href = item.href;
      }
    }
  };

  const filteredMenuItems =
    searchable && searchQuery
      ? processedMenuItems.filter((item) => {
          const matchesTitle = item.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
          const matchesSubItems = item.subItems?.some((subItem) =>
            subItem.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
          return matchesTitle || matchesSubItems;
        })
      : processedMenuItems;

  return (
    <Sidebar
      data-slot="sidebar-container"
      variant={variant}
      side={side}
      collapsible={collapsible}
      className={className}
    >
      {sidebarHeader && (
        <SidebarHeader className="group-data-[state=collapsed]:hidden">
          {sidebarHeader}
        </SidebarHeader>
      )}

      <SidebarContent>
        {searchable && (
          <SidebarInput
            type="search"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="group-data-[state=collapsed]:hidden"
          />
        )}

        {filteredMenuItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {filteredMenuItems.map((item, index) => {
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isExpanded = expandedItems.has(item.title);

                  return (
                    <SidebarMenuItem key={`${item.title}-${index}`}>
                      <SidebarMenuButton
                        asChild={
                          !hasSubItems && !!item.href && state === "expanded"
                        }
                        isActive={item.isActive}
                        onClick={() => handleMenuItemClick(item)}
                        data-state={
                          hasSubItems
                            ? isExpanded
                              ? "open"
                              : "closed"
                            : undefined
                        }
                      >
                        {!hasSubItems && item.href && state === "expanded" ? (
                          <a href={item.href}>
                            {item.icon && <item.icon className="size-3.5" />}
                            {item.title}
                          </a>
                        ) : (
                          <>
                            {item.icon && <item.icon className="size-3.5" />}
                            {item.title}
                            {hasSubItems && (
                              <svg
                                className={`size-3 ml-auto transition-transform ${
                                  isExpanded ? "rotate-90" : ""
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            )}
                          </>
                        )}
                      </SidebarMenuButton>
                      {hasSubItems && isExpanded && (
                        <SidebarMenuSub>
                          {item.subItems!.map((subItem, subIndex) => (
                            <SidebarMenuSubItem
                              key={`${subItem.title}-${subIndex}`}
                            >
                              <SidebarMenuSubButton
                                asChild={!!subItem.href}
                                isActive={subItem.isActive}
                                onClick={() => {
                                  if (isMobile) {
                                    setOpenMobile(false);
                                  }
                                  subItem.onClick?.();
                                }}
                              >
                                {subItem.href ? (
                                  <a href={subItem.href}>{subItem.title}</a>
                                ) : (
                                  subItem.title
                                )}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {sidebarGroups.map((group, index) => (
          <SidebarGroup key={`group-${index}`}>
            {group.label && (
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>{group.content}</SidebarGroupContent>
          </SidebarGroup>
        ))}
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
