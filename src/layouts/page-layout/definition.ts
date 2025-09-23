import { Layout } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Page Layout",
  icon: Layout,
  description: "A comprehensive layout structure for a standard page.",
  category: "layouts",
  storyId: "layout-containers-pagelayout--default",
  slug: "page-layout",
  importCode: `import { PageLayout } from "passport-ui";
import { SidebarContainer } from "passport-ui";
import { ContentContainer } from "passport-ui";`,
  usageCode: `<PageLayout
  leftSidebar={
    <SidebarContainer
      sidebarHeader={
        <div className="meta-container">
          <h3>My App</h3>
          <p>Version 1.0.0</p>
        </div>
      }
    >
      {/* Sidebar content */}
    </SidebarContainer>
  }
  header={
    <div className="flex justify-between items-center">
      <h2>Dashboard</h2>
      <nav>Navigation items</nav>
    </div>
  }
  footer={
    <div className="flex justify-between items-center">
      <p>&copy; 2024 My App</p>
      <div>Footer links</div>
    </div>
  }
  headerOptions={{
    sticky: true,
    blurred: true,
    variant: "full"
  }}
  footerOptions={{
    sticky: false,
    blurred: false,
    variant: "full"
  }}
>
  <ContentContainer variant="broad">
    <div className="section-container">
      <h1>Welcome to the Dashboard</h1>
      <p>Your main content goes here.</p>
    </div>
  </ContentContainer>
</PageLayout>`,
};
