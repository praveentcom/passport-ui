import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "../../components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/card";
import { ContentContainer } from "../../layouts/content-container";
import { PageLayout } from "../../layouts/page-layout";
import { SidebarContainer } from "../../layouts/sidebar-container";
import { SidebarProvider, useSidebar } from "./_";
import { definition } from "./definition";

const meta: Meta<typeof SidebarProvider> = {
  title: "Providers/SidebarProvider",
  component: SidebarProvider,
  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen={true}>
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
- **SidebarProvider**: Provider for managing sidebar state
- **useSidebar**: Hook to access sidebar state and actions

## Key Features
- **App-Level Scope**: Place at root to make sidebar state available everywhere
- **Mobile Support**: Separate mobile state management
- **Keyboard Shortcuts**: Built-in Cmd/Ctrl+B to toggle sidebar
- **Cookie Persistence**: Sidebar state persists across sessions
- **Controlled & Uncontrolled**: Supports both controlled and uncontrolled usage

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
      description: "The app content to be rendered within the provider.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Default open state for the sidebar.",
      defaultValue: { summary: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Demo component that uses the sidebar hooks
function SidebarDemo() {
  const { open, openMobile, toggle, isMobile, state } = useSidebar();

  return (
    <ContentContainer variant="broad">
      <div className="section-container">
        <Card>
          <CardHeader>
            <CardTitle>Sidebar Provider Demo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Sidebar State</h4>
              <p className="text-sm text-muted-foreground mb-2">
                State: {state} ({open ? "Open" : "Closed"})
                {isMobile && ` | Mobile: ${openMobile ? "Open" : "Closed"}`}
              </p>
              <div className="flex gap-2">
                <Button size="regular" onClick={toggle}>
                  Toggle Sidebar
                </Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-medium mb-2">Keyboard Shortcuts</h4>
              <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="px-1 py-0.5 text-xs bg-muted rounded">
                  Cmd/Ctrl + B
                </kbd>{" "}
                to toggle sidebar
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentContainer>
  );
}

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => (
    <SidebarProvider {...args}>
      <PageLayout
        sidebar={
          <SidebarContainer
            sidebarHeader={
              <div className="meta-container">
                <h3>Sidebar</h3>
                <p>Navigation content</p>
              </div>
            }
          >
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                This is the sidebar content managed by the SidebarProvider.
              </p>
            </div>
          </SidebarContainer>
        }
        header={
          <div className="flex justify-between items-center">
            <h2>Sidebar Provider</h2>
            <nav className="flex gap-2">
              <Button variant="outline" size="regular">
                Nav Item 1
              </Button>
              <Button variant="outline" size="regular">
                Nav Item 2
              </Button>
            </nav>
          </div>
        }
      >
        <SidebarDemo />
      </PageLayout>
    </SidebarProvider>
  ),
};

export const ControlledState: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(true);

    return (
      <SidebarProvider {...args} open={open} onOpenChange={setOpen}>
        <PageLayout
          sidebar={
            <SidebarContainer
              sidebarHeader={
                <div className="meta-container">
                  <h3>Controlled Sidebar</h3>
                  <p>External state</p>
                </div>
              }
            >
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  This sidebar state is controlled by external React state.
                </p>
              </div>
            </SidebarContainer>
          }
        >
          <ContentContainer variant="broad">
            <div className="section-container">
              <Card>
                <CardHeader>
                  <CardTitle>Controlled Sidebar State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm mb-2">External State Control:</p>
                      <div className="flex gap-2">
                        <Button size="regular" onClick={() => setOpen(!open)}>
                          External Toggle
                        </Button>
                      </div>
                    </div>
                    <SidebarDemo />
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentContainer>
        </PageLayout>
      </SidebarProvider>
    );
  },
};
