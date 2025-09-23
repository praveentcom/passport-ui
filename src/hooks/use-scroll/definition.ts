import { ChevronsUpDown } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "useScroll",
  icon: ChevronsUpDown,
  description:
    "A hook to detect if the page or a specific element has been scrolled.",
  category: "hooks",
  storyId: "hooks-usescroll--window-scroll",
  slug: "use-scroll",
  importCode: `import { useScroll } from "passport-ui";`,
  usageCode: `const hasScrolled = useScroll(10);

if (hasScrolled) {
  // Add a shadow to the header
}`,
};
