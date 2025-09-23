import { Smartphone } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "useIsMobile",
  icon: Smartphone,
  description: "A hook to detect if the current viewport is mobile-sized.",
  category: "hooks",
  storyId: "hooks-useismobile--default",
  slug: "use-mobile",
  importCode: `import { useIsMobile } from "passport-ui";`,
  usageCode: `const isMobile = useIsMobile();

if (isMobile) {
  // Render mobile-specific content
}`,
};
