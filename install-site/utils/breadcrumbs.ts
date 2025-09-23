import { BreadcrumbPath } from "../../src/components/breadcrumb";
import { PRIMARY_NAVIGATION_PAGES } from "../constants/primary-navigation";
import { CATEGORIES, CATEGORY_LABELS, COMPONENTS_BY_CATEGORY } from "./index";

export function generateBreadcrumbs(pathname: string): BreadcrumbPath[] {
  // Always start with home
  const breadcrumbs: BreadcrumbPath[] = [
    {
      href: "/",
      label: "Home",
    },
  ];

  // Remove trailing slash for consistency
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // Handle root path
  if (cleanPath === "/") {
    return [{ href: "/", label: "Installation" }];
  }

  // Handle primary navigation pages
  const primaryPage = PRIMARY_NAVIGATION_PAGES.find(
    (page) => page.href.replace(/\/$/, "") === cleanPath
  );

  if (primaryPage) {
    return [
      ...breadcrumbs,
      {
        href: primaryPage.href,
        label: primaryPage.title,
      },
    ];
  }

  const matchingCategory = CATEGORIES.find((category) =>
    cleanPath.startsWith(`/${category}/`)
  );

  if (matchingCategory) {
    const segments = cleanPath.split("/").filter(Boolean);

    if (segments.length === 1) {
      return [
        ...breadcrumbs,
        {
          href: `/${matchingCategory}/`,
          label:
            CATEGORY_LABELS[matchingCategory as keyof typeof CATEGORY_LABELS] ||
            matchingCategory,
        },
      ];
    } else if (segments.length === 2) {
      const slug = segments[1];

      const categoryComponents =
        COMPONENTS_BY_CATEGORY[
          matchingCategory === "components"
            ? "component"
            : matchingCategory === "composables"
              ? "composable"
              : matchingCategory
        ];
      const component = categoryComponents?.find((c) => c.slug === slug);

      if (component) {
        return [
          ...breadcrumbs,
          {
            href: `/${matchingCategory}/`,
            label:
              CATEGORY_LABELS[
                matchingCategory as keyof typeof CATEGORY_LABELS
              ] || matchingCategory,
          },
          {
            href: `/${matchingCategory}/${slug}/`,
            label: component.name,
          },
        ];
      }
    }
  }

  // Handle other paths by splitting and capitalizing
  const segments = cleanPath.split("/").filter(Boolean);
  let currentPath = "";

  for (let i = 0; i < segments.length; i++) {
    currentPath += `/${segments[i]}`;
    const isLast = i === segments.length - 1;

    breadcrumbs.push({
      href: isLast ? currentPath : `${currentPath}/`,
      label:
        segments[i].charAt(0).toUpperCase() +
        segments[i].slice(1).replace(/-/g, " "),
    });
  }

  return breadcrumbs;
}

export function getPageTitle(pathname: string): string | undefined {
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // Handle root path
  if (cleanPath === "/") {
    return "Installation";
  }

  // Handle primary navigation pages
  const primaryPage = PRIMARY_NAVIGATION_PAGES.find(
    (page) => page.href.replace(/\/$/, "") === cleanPath
  );

  if (primaryPage) {
    return primaryPage.title;
  }

  const matchingCategory = CATEGORIES.find((category) =>
    cleanPath.startsWith(`/${category}/`)
  );

  if (matchingCategory) {
    const segments = cleanPath.split("/").filter(Boolean);

    if (segments.length === 1) {
      return (
        CATEGORY_LABELS[matchingCategory as keyof typeof CATEGORY_LABELS] ||
        matchingCategory
      );
    } else if (segments.length === 2) {
      const slug = segments[1];

      const categoryComponents =
        COMPONENTS_BY_CATEGORY[
          matchingCategory === "components"
            ? "component"
            : matchingCategory === "composables"
              ? "composable"
              : matchingCategory
        ];
      const component = categoryComponents?.find((c) => c.slug === slug);

      if (component) {
        return component.name;
      }
    }
  }

  // Default to capitalizing the last segment
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length > 0) {
    const lastSegment = segments[segments.length - 1];
    return (
      lastSegment.charAt(0).toUpperCase() +
      lastSegment.slice(1).replace(/-/g, " ")
    );
  }

  return undefined;
}
