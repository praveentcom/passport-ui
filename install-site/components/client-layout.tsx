"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MobileSidebarTrigger } from "../../src/composables/mobile-sidebar-trigger";
import { ThemeToggle } from "../../src/composables/theme-toggle";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../src/components/sidebar";
import { PageLayout } from "../../src/layouts/page-layout";
import { SidebarContainer } from "../../src/layouts/sidebar-container";
import { SITE_CONFIG } from "../constants";
import { PRIMARY_NAVIGATION_PAGES } from "../constants/components";

type NavigationGroup = {
  label: string;
  items: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
};

const NAVIGATION_GROUPS: NavigationGroup[] = [
  {
    label: "Getting Started",
    items: PRIMARY_NAVIGATION_PAGES,
  },
];

const getPageTitle = (path: string) => {
  for (const group of NAVIGATION_GROUPS) {
    const page = group.items.find((page) => page.href === path);
    if (page) return page.title;
  }
  return undefined;
};

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchText, setSearchText] = useState("");

  const filteredGroups = NAVIGATION_GROUPS.map(group => ({
    ...group,
    items: group.items.filter(item =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    ),
  })).filter(group => group.items.length > 0);

  return (
    <PageLayout
      leftSidebar={
        <SidebarContainer
          searchConfig={{
            searchText,
            setSearchText,
            placeholder: "Search…",
          }}
          sidebarHeader={
            <Link href="/">
              <div className="meta-container">
                <h3 className="line-clamp-1">Passport UI</h3>
                <p className="line-clamp-1">Sleek & Compact UI Library</p>
              </div>
            </Link>
          }
        >
          {filteredGroups.map((group) => (
            <SidebarGroup key={group.label}>
              <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild isActive={pathname === item.href}>
                        <Link href={item.href}>
                          <item.icon className="size-4" />
                          {item.title}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContainer>
      }
      header={
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <MobileSidebarTrigger />
            <h2>{getPageTitle(pathname)}</h2>
          </div>
          <ThemeToggle />
        </div>
      }
      footer={
        <div className="meta-container">
          <div className="flex gap-4 items-center">
            <Link
              target="_blank"
              href={SITE_CONFIG.npm}
              className="text-primary hover:underline"
            >
              Storybook {"\u2197"}
            </Link>
            <Link
              target="_blank"
              href={SITE_CONFIG.repository}
              className="text-primary hover:underline"
            >
              GitHub {"\u2197"}
            </Link>
            <Link
              target="_blank"
              href={SITE_CONFIG.storybook}
              className="text-primary hover:underline"
            >
              npm {"\u2197"}
            </Link>
          </div>
        </div>
      }
      footerOptions={{
        sticky: true,
        blurred: true,
      }}
    >
      {children}
    </PageLayout>
  );
}
