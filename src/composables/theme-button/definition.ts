import { Sun } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Theme Button",
  icon: Sun,
  description: "A button for toggling between light and dark themes.",
  category: "composables",
  storyId: "composables-themebutton--default",
  slug: "theme-button",
  importCode: `import { ThemeButton } from "passport-ui";`,
  usageCode: `<ThemeButton />`,
};
