"use client";

import { useState } from "react";

import { usePathname } from "next/navigation";

import { Home, MenuIcon } from "lucide-react";

import pkg from "../../package.json";
import { Button } from "../../src/components/button";
import { PrefetchLink } from "../../src/components/prefetch-link";
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
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "../../src/components/sidebar";
import { ThemeToggle } from "../../src/composables/theme-toggle";
import { PageLayout } from "../../src/layouts/page-layout";
import { cn } from "../../src/lib/utils";
import { SITE_CONFIG } from "../constants";
import { PRIMARY_NAVIGATION_PAGES } from "../constants/primary-navigation";
import { CATEGORY_LABELS, COMPONENTS_BY_CATEGORY } from "../utils";
import { getPageTitle } from "../utils/breadcrumbs";
import { filterAndSortNavigation } from "../utils/navigation-sort";

type NavigationGroup = {
  label: string;
  items: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
};

const generateNavigationGroups = (
  searchText: string = ""
): NavigationGroup[] => {
  const baseGroups: NavigationGroup[] = [
    {
      label: "",
      items: [
        {
          title: "Introduction",
          href: "/",
          icon: Home,
        },
      ],
    },
    {
      label: "Getting Started",
      items: PRIMARY_NAVIGATION_PAGES,
    },
  ];

  const completeComponentsByCategory = Object.entries(
    COMPONENTS_BY_CATEGORY
  ).reduce(
    (acc, [category, components]) => {
      const completeComponents = components.filter((c) => c.slug && c.storyId);
      if (completeComponents.length > 0) {
        acc[category] = completeComponents;
      }
      return acc;
    },
    {} as Record<string, (typeof COMPONENTS_BY_CATEGORY)[string]>
  );

  const sortedAndFilteredCategories = filterAndSortNavigation(
    completeComponentsByCategory,
    searchText
  );

  Object.entries(sortedAndFilteredCategories).forEach(
    ([category, components]) => {
      baseGroups.push({
        label:
          CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] ?? category,
        items: components.map((component) => ({
          title: component.name,
          href: `/${category}/${component.slug}`,
          icon: component.icon,
        })),
      });
    }
  );

  return baseGroups;
};

function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchText, setSearchText] = useState("");
  const { isMobile, setOpenMobile, toggleSidebar } = useSidebar();

  const pageTitle = getPageTitle(pathname);

  const navigationGroups = generateNavigationGroups(searchText);

  const filteredGroups = navigationGroups
    .map((group) => {
      if (group.label === "Getting Started") {
        return {
          ...group,
          items: group.items.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          ),
        };
      }
      return group;
    })
    .filter((group) => group.items.length > 0);

  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <PageLayout
      sidebar={
        <Sidebar
          variant="sidebar"
          side="left"
          collapsible={true}
          blurred={false}
          mobileOnly={false}
        >
          <SidebarHeader className="group-data-[state=collapsed]:hidden">
            <PrefetchLink href="/" onClick={handleLinkClick}>
              <div className="meta-container">
                <h3 className="line-clamp-1">Passport UI</h3>
                <p className="line-clamp-1">Compose with elegance</p>
              </div>
            </PrefetchLink>
          </SidebarHeader>

          <SidebarContent>
            <SidebarInput
              type="search"
              placeholder="Search…"
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
              className="group-data-[state=collapsed]:hidden"
            />

            {filteredGroups.map((group) => (
              <SidebarGroup key={group.label ?? "default"}>
                {group.label && (
                  <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                )}
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => {
                      const normalizedPathname = pathname.replace(/\/$/, "");
                      const normalizedHref = item.href.replace(/\/$/, "");
                      const isActive = normalizedPathname === normalizedHref;

                      return (
                        <SidebarMenuItem key={item.href}>
                          <SidebarMenuButton asChild isActive={isActive}>
                            <PrefetchLink
                              href={item.href}
                              onClick={handleLinkClick}
                            >
                              <item.icon className="size-4" />
                              {item.title}
                            </PrefetchLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      );
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center justify-between group-data-[state=collapsed]:justify-center">
              <div className="flex-1 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:invisible group-data-[state=collapsed]:w-0 transition-all duration-200">
                <div className="meta-container">
                  <h6 className="font-medium lowercase">v{pkg.version}</h6>
                </div>
              </div>
              <SidebarTrigger />
            </div>
          </SidebarFooter>
          <SidebarRail />
        </Sidebar>
      }
      header={
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Button
              data-slot="mobile-sidebar-trigger"
              className={cn("md:!hidden", !isMobile && "invisible")}
              onClick={() => {
                toggleSidebar();
              }}
            >
              <MenuIcon />
              <span className="sr-only">Open sidebar</span>
            </Button>
            <h3>{pageTitle}</h3>
          </div>
          <ThemeToggle />
        </div>
      }
      footer={
        <div className="meta-container">
          <div className="flex gap-4 items-center">
            <PrefetchLink
              target="_blank"
              href={SITE_CONFIG.storybook}
              className="text-primary hover:underline"
            >
              Storybook {"\u2197"}
            </PrefetchLink>
            <PrefetchLink
              target="_blank"
              href={SITE_CONFIG.repository}
              className="text-primary hover:underline"
            >
              GitHub {"\u2197"}
            </PrefetchLink>
            <PrefetchLink
              target="_blank"
              href={SITE_CONFIG.npm}
              className="text-primary hover:underline"
            >
              npm {"\u2197"}
            </PrefetchLink>
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

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <ClientLayoutInner>{children}</ClientLayoutInner>
    </SidebarProvider>
  );
}
