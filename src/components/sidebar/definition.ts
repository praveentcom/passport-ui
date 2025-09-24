import { PanelLeft } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Sidebar",
  icon: PanelLeft,
  description:
    "A layout component with a collapsible sidebar and main content area.",
  category: "components",
  storyId: "components-sidebar",
  slug: "sidebar",
  importCode: `import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarProvider,
} from "passport-ui";`,
  usageCode: `<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <h2>App Name</h2>
    </SidebarHeader>
    <SidebarContent>
      <SidebarMenu>
        <SidebarMenuItem>
          <a href="#">Dashboard</a>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarContent>
    <SidebarFooter>
      <p>© 2024</p>
    </SidebarFooter>
  </Sidebar>
  <main>
    {/* Main content */}
  </main>
</SidebarProvider>`,
};
