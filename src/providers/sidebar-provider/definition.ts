import { PanelLeft } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "SidebarProvider",
  icon: PanelLeft,
  description:
    "A provider that manages sidebar state and behavior across the application. Provides context for sidebar open/close state, mobile responsiveness, and keyboard shortcuts.",
  category: "providers",
  storyId: "providers-sidebarprovider",
  slug: "sidebar-provider",
  importCode: `import { SidebarProvider } from "passport-ui";`,
  usageCode: `// Place SidebarProvider at app root level
<SidebarProvider defaultOpen={true}>
  {/* Your app content with sidebar components */}
  <PageLayout
    sidebar={
      <SidebarContainer>
        {/* Sidebar content */}
      </SidebarContainer>
    }
  >
    {/* Main content */}
  </PageLayout>
</SidebarProvider>

// Use the sidebar context in components
import { useSidebar } from "passport-ui";

function MyComponent() {
  const { open, toggle, isMobile } = useSidebar();
  
  return (
    <button onClick={toggle}>
      {open ? "Close" : "Open"} Sidebar
    </button>
  );
}`,
};
