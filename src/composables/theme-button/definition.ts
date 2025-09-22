import { Sun } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Theme Button",
  icon: Sun,
  description: "Component description",
  category: "composables",
  storyId: "composables-theme-button--default",
  slug: "theme-button",
  importCode: `import { ThemeButton } from "passport-ui";`,
  usageCode: `<ThemeButton />`,
};
