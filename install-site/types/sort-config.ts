export interface SortConfig {
  /**
   * Order array for categories and their components
   * Similar to Storybook's storySort.order
   */
  order: Array<string | [string, string[]]>;

  /**
   * Custom sorting function for components within a category
   * If not provided, components will be sorted alphabetically
   */
  componentSort?: (a: string, b: string, category: string) => number;

  /**
   * Whether to sort components alphabetically within categories by default
   * @default true
   */
  alphabeticalSort?: boolean;
}

export interface NavigationSortConfig {
  /** Configuration for sorting navigation groups and items */
  sortConfig: SortConfig;
}
