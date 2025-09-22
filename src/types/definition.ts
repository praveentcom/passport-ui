import type { LucideIcon } from "lucide-react";

export interface ComponentDefinition {
  /** Component name as it appears in the library */
  name: string;
  /** Short description for cards and lists */
  description: string;
  /** Lucide icon for visual representation */
  icon: LucideIcon;
  /** Component category for organization */
  category: "components" | "composables" | "motion-primitives" | "layout";
  /** Storybook story ID (e.g., "components-accordion--default") */
  storyId?: string;
  /** Import statement for the component */
  importCode?: string;
  /** Basic usage example code */
  usageCode?: string;
  /** URL slug for the component page */
  slug?: string;
  /** Whether the component is available (for future use) */
  available?: boolean;
}
