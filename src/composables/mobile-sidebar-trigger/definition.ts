import { Menu } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Mobile Sidebar Trigger",
  icon: Menu,
  description:
    "A button for opening and closing the sidebar on mobile devices.",
  category: "composables",
  storyId: "composables-mobilesidebartrigger",
  slug: "mobile-sidebar-trigger",
  importCode: `import { MobileSidebarTrigger } from "passport-ui";`,
  usageCode: `<MobileSidebarTrigger />`,
};
