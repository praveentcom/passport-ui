import { SidebarOpen } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Sidebar Container",
  icon: SidebarOpen,
  description:
    "A container for the sidebar, managing its state and interactions.",
  category: "layouts",
  storyId: "layouts-sidebarcontainer--default",
  slug: "sidebar-container",
  importCode: `import { SidebarContainer } from "passport-ui";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "passport-ui";
import { useState } from "react";`,
  usageCode: `function MySidebar() {
  const [searchText, setSearchText] = useState("");

  return (
    <SidebarProvider>
      <SidebarContainer
        searchConfig={{
          searchText,
          setSearchText,
          placeholder: "Search navigation…",
        }}
        sidebarHeader={
          <div className="meta-container">
            <h3>My App</h3>
            <p>Version 1.0.0</p>
          </div>
        }
        sidebarFooter={
          <Button>
            <Mail />
            Support
          </Button>
        }
      >
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home className="size-4" />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/users">
                    <Users className="size-4" />
                    Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContainer>
    </SidebarProvider>
  );
}`,
};
