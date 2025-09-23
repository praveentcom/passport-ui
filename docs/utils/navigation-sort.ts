import type { ComponentDefinition } from "../../src/types/definition";
import {
  NAVIGATION_SORT_CONFIG,
  getCategorySortOrder,
  getGlobalCategoryOrder,
} from "../constants/navigation-sort";

/**
 * Sort categories according to the global order configuration
 */
export function sortCategories(categories: string[]): string[] {
  const globalOrder = getGlobalCategoryOrder();

  return categories.sort((a, b) => {
    const indexA = globalOrder.indexOf(a);
    const indexB = globalOrder.indexOf(b);

    // If both categories are in the order array, sort by their position
    if (indexA !== -1 && indexB !== -1) {
      return indexA - indexB;
    }

    // If only one category is in the order array, prioritize it
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    // If neither category is in the order array, sort alphabetically
    return a.localeCompare(b);
  });
}

/**
 * Sort components within a category according to the configuration
 */
export function sortComponentsInCategory(
  components: ComponentDefinition[],
  category: string
): ComponentDefinition[] {
  const categoryOrder = getCategorySortOrder(category);

  return components.sort((a, b) => {
    // If there's a specific order for this category, use it
    if (categoryOrder) {
      const indexA = categoryOrder.indexOf(a.name);
      const indexB = categoryOrder.indexOf(b.name);

      // If both components are in the order array, sort by their position
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB;
      }

      // If only one component is in the order array, prioritize it
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
    }

    // Use custom sort function if provided
    if (NAVIGATION_SORT_CONFIG.componentSort) {
      return NAVIGATION_SORT_CONFIG.componentSort(a.name, b.name, category);
    }

    // Default to alphabetical sorting if enabled
    if (NAVIGATION_SORT_CONFIG.alphabeticalSort !== false) {
      return a.name.localeCompare(b.name);
    }

    // If no sorting is configured, maintain original order
    return 0;
  });
}

/**
 * Sort the entire navigation structure
 * This function mimics Storybook's storySort behavior
 */
export function sortNavigation(
  componentsByCategory: Record<string, ComponentDefinition[]>
) {
  const sortedCategories = sortCategories(Object.keys(componentsByCategory));

  const sortedNavigation: Record<string, ComponentDefinition[]> = {};

  sortedCategories.forEach((category) => {
    const components = componentsByCategory[category];
    if (components && components.length > 0) {
      sortedNavigation[category] = sortComponentsInCategory(
        components,
        category
      );
    }
  });

  return sortedNavigation;
}

/**
 * Filter and sort navigation groups based on search text
 * Maintains the sort order while applying search filter
 */
export function filterAndSortNavigation(
  componentsByCategory: Record<string, ComponentDefinition[]>,
  searchText: string = ""
): Record<string, ComponentDefinition[]> {
  if (!searchText.trim()) {
    return sortNavigation(componentsByCategory);
  }

  const filteredCategories: Record<string, ComponentDefinition[]> = {};

  Object.entries(componentsByCategory).forEach(([category, components]) => {
    const filteredComponents = components.filter((component) =>
      component.name.toLowerCase().includes(searchText.toLowerCase())
    );

    if (filteredComponents.length > 0) {
      filteredCategories[category] = sortComponentsInCategory(
        filteredComponents,
        category
      );
    }
  });

  return sortNavigation(filteredCategories);
}
