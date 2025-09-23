import type { SortConfig } from "../types/sort-config";

/**
 * Navigation sorting configuration
 */
export const NAVIGATION_SORT_CONFIG: SortConfig = {
  order: [
    "layouts",
    [
      "layouts",
      [
        "Page Layout",
        "Sidebar Container",
        "Content Container",
        "Header Container",
        "Footer Container",
      ],
    ],
    "providers",
    "components",
    "hooks",
    "composables",
    "motion-primitives",
  ],
  alphabeticalSort: true,
};

/**
 * Get the sort order for a specific category
 */
export function getCategorySortOrder(category: string): string[] | null {
  const categoryConfig = NAVIGATION_SORT_CONFIG.order.find(
    (item) => Array.isArray(item) && item[0] === category
  );

  if (Array.isArray(categoryConfig) && Array.isArray(categoryConfig[1])) {
    return categoryConfig[1];
  }

  return null;
}

/**
 * Get the global category order
 */
export function getGlobalCategoryOrder(): string[] {
  return NAVIGATION_SORT_CONFIG.order.map((item) =>
    Array.isArray(item) ? item[0] : item
  );
}
