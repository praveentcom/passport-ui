import type { LucideIcon } from "lucide-react";

export interface ComponentDefinition {
  /** Component name as it appears in the library */
  name: string;
  /** Short description for cards and lists */
  description: string;
  /** Lucide icon for visual representation */
  icon: LucideIcon;
  /** Component category for organization */
  category:
    | "layouts"
    | "providers"
    | "components"
    | "hooks"
    | "composables"
    | "motion-primitives";
  /** Storybook story ID (e.g., "layouts-pagelayout--default") */
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
