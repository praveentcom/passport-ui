"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "../../src/composables/theme-toggle";
import { PageLayout } from "../../src/layouts/page-layout";
import { SidebarContainer } from "../../src/layouts/sidebar-container";
import { SITE_CONFIG } from "../constants";
import { PRIMARY_NAVIGATION_PAGES } from "../constants/components";

const getPageTitle = (path: string) => {
  const page = PRIMARY_NAVIGATION_PAGES.find((page) => page.href === path);
  return page?.title;
};

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <PageLayout
      leftSidebar={
        <SidebarContainer
          menuItems={PRIMARY_NAVIGATION_PAGES}
          searchable={true}
          searchPlaceholder="Search..."
          sidebarHeader={
            <div className="meta-container">
              <h3 className="line-clamp-1">Passport UI</h3>
              <p className="line-clamp-1">Sleek & Compact UI Library</p>
            </div>
          }
          autoInferActiveItem
        />
      }
      header={
        <div className="flex justify-between items-center gap-4">
          <h2>{getPageTitle(pathname)}</h2>
          <ThemeToggle />
        </div>
      }
      footer={
        <div className="meta-container">
          <h3>Maintained by Praveen Thirumurugan</h3>
          <div className="flex gap-2 items-center">
            <Link
              target="_blank"
              href={SITE_CONFIG.repository}
              className="text-primary hover:underline"
            >
              GitHub
            </Link>
            <span>•</span>
            <Link
              target="_blank"
              href={SITE_CONFIG.npm}
              className="text-primary hover:underline"
            >
              npm
            </Link>
          </div>
        </div>
      }
      footerSticky
      footerBlurred
    >
      {children}
    </PageLayout>
  );
}
