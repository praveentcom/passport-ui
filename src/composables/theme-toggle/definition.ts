import { Sun } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Theme Toggle",
  icon: Sun,
  description: "A dropdown for selecting a light, dark, or system theme.",
  category: "composables",
  storyId: "composables-theme-toggle--default",
  slug: "theme-toggle",
  importCode: `import { ThemeToggle } from "passport-ui";`,
  usageCode: `<ThemeToggle />`,
};
