"use client";

import React from "react";

import { Home, Palette } from "lucide-react";

import { MetaContainer } from "../../src/composables/meta-container";
import { ThemeToggle } from "../../src/composables/theme-toggle";
import { PageLayout } from "../../src/layouts/page-layout";
import { SidebarContainer } from "../../src/layouts/sidebar-container";
import { SITE_CONFIG } from "../constants";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const sidebarMenuItems = [
    {
      title: "Installation",
      href: "/",
      icon: Home,
    },
    {
      title: "Color System",
      href: "/colors",
      icon: Palette,
    },
  ];

  return (
    <PageLayout
      leftSidebar={
        <SidebarContainer
          menuItems={sidebarMenuItems}
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
          <h2>Passport UI</h2>
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
