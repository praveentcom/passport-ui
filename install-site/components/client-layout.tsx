"use client";

import React from "react";

import { MetaContainer } from "../../src/composables/meta-container";
import { ThemeToggle } from "../../src/composables/theme-toggle";
import { PageLayout } from "../../src/layouts/page-layout";
import { SidebarContainer } from "../../src/layouts/sidebar-container";
import { SITE_CONFIG } from "../constants";
import { PRIMARY_NAVIGATION_PAGES } from "../constants/components";
import { usePathname } from "next/navigation";

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
            <MetaContainer title="Passport UI">
              Sleek & Compact UI Library
            </MetaContainer>
          }
          autoInferActiveItem
        />
      }
      contentVariant="relaxed"
      header={
        <div className="flex justify-between items-center gap-4">
          <h2>
            {getPageTitle(pathname)}
          </h2>
          <ThemeToggle />
        </div>
      }
      footer={
        <MetaContainer title="Maintained by Praveen Thirumurugan">
          <div className="flex gap-2 items-center">
            <a
              href={SITE_CONFIG.repository}
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            <span>•</span>
            <a href={SITE_CONFIG.npm} className="text-primary hover:underline">
              npm
            </a>
          </div>
        </MetaContainer>
      }
      footerSticky
      footerBlurred
    >
      {children}
    </PageLayout>
  );
}
