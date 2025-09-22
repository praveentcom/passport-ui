import { Menu } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Mobile Sidebar Trigger",
  icon: Menu,
  description: "Component description",
  category: "composables",
  storyId: "composables-mobile-sidebar-trigger--default",
  slug: "mobile-sidebar-trigger",
  importCode: `import { MobileSidebarTrigger } from "passport-ui";`,
  usageCode: `<MobileSidebarTrigger />`,
};
