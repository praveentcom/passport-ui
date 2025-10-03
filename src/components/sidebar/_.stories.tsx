import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import pkg from "../../../package.json";
import { PrefetchLink } from "../prefetch-link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "./_";
import { definition } from "./definition";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Sidebar**: Main sidebar container
- **SidebarProvider**: Context provider for sidebar state
- **SidebarHeader**: Header section
- **SidebarContent**: Main content area
- **SidebarMenu**: Menu container
- **SidebarMenuItem**: Individual menu items
- **SidebarFooter**: Footer section

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the sidebar layout.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex h-screen">
      <Sidebar {...args}>
        <SidebarHeader>
          <h2 className="px-4 text-lg font-semibold tracking-tight">
            App Name
          </h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <PrefetchLink href="#">Dashboard</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Analytics</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Settings</PrefetchLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <p className="p-4 text-xs text-muted-foreground">
            Version {pkg.version}
          </p>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-4">
        <h1>Main Content Area</h1>
        <p>This is where the main content of your application will go.</p>
      </main>
    </div>
  ),
};

export const MobileOnly: Story = {
  args: {
    mobileOnly: true,
  },
  render: (args) => (
    <div className="flex h-screen">
      <Sidebar {...args}>
        <SidebarHeader>
          <h2 className="px-4 text-lg font-semibold tracking-tight">
            Mobile Sidebar
          </h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <PrefetchLink href="#">Dashboard</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Analytics</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Settings</PrefetchLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <p className="p-4 text-xs text-muted-foreground">
            This sidebar only shows on mobile devices
          </p>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-4">
        <h1>Main Content Area</h1>
        <p>
          This sidebar will only be visible on mobile devices. On desktop, it
          will not render at all. Try resizing your browser window or viewing
          this on a mobile device to see the sidebar.
        </p>
      </main>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "When `mobileOnly` is set to `true`, the sidebar will only render on mobile devices and will be completely hidden on desktop.",
      },
    },
  },
};
