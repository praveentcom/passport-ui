import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FileText, Home, Mail, Settings, Users } from "lucide-react";
import { action } from "storybook/actions";

import { SidebarContainer } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import pkg from "../../../package.json";
import { Button } from "../../components/button";
import { PrefetchLink } from "../../components/prefetch-link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "../../components/sidebar";
import { definition } from "./definition";

const meta: Meta<typeof SidebarContainer> = {
  title: "Layout Containers/SidebarContainer",
  component: SidebarContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **SidebarContainer**: Layout container for sidebar navigation

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
    sidebarHeader: {
      control: false,
      description:
        "Optional header content (hidden in icon mode with fixed height)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    sidebarFooter: {
      control: false,
      description:
        "Optional footer content (hidden in icon mode, trigger remains visible)",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    children: {
      control: false,
      description:
        "Main sidebar content - client constructs their own sidebar structure",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    searchConfig: {
      control: false,
      description:
        "Search configuration object with searchText, setSearchText, and optional placeholder",
      table: {
        type: { summary: "SearchConfig" },
      },
    },
    variant: {
      control: "select",
      options: ["sidebar", "floating", "inset"],
      description: "Sidebar variant",
      table: {
        type: { summary: '"sidebar" | "floating" | "inset"' },
        defaultValue: { summary: '"sidebar"' },
      },
    },
    side: {
      control: "select",
      options: ["left", "right"],
      description: "Sidebar side",
      table: {
        type: { summary: '"left" | "right"' },
        defaultValue: { summary: '"left"' },
      },
    },
    collapsible: {
      control: "boolean",
      description:
        "Whether the sidebar can collapse to icon-only mode (true) or remain fixed (false)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    mobileOnly: {
      control: "boolean",
      description: "Only render sidebar on mobile devices",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => {
    const [open, setOpen] = useState(true);

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      action("sidebar-toggle")(newOpen);
    };

    return (
      <div className="h-screen">
        <SidebarProvider open={open} onOpenChange={handleOpenChange}>
          <SidebarContainer {...args} />
        </SidebarProvider>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof SidebarContainer>;

function DefaultSidebar({ searchText = "" }: { searchText?: string }) {
  // Sample menu data
  const menuItems = [
    { title: "Dashboard", icon: Home, href: "#dashboard" },
    {
      title: "Users",
      icon: Users,
      subItems: ["All Users", "Active Users", "Inactive Users"],
    },
    {
      title: "Documents",
      icon: FileText,
      subItems: ["Recent", "Shared", "Archived"],
    },
    {
      title: "Settings",
      icon: Settings,
      subItems: ["Profile", "Preferences", "Security"],
    },
  ];

  // Filter menu items based on search
  const filteredItems = menuItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.subItems?.some((sub) =>
        sub.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {filteredItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild={!!item.href}>
                  {item.href ? (
                    <PrefetchLink href={item.href}>
                      <item.icon className="size-4" />
                      {item.title}
                    </PrefetchLink>
                  ) : (
                    <>
                      <item.icon className="size-4" />
                      {item.title}
                    </>
                  )}
                </SidebarMenuButton>
                {item.subItems && (
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem}>
                        <SidebarMenuSubButton asChild>
                          <PrefetchLink
                            href={`#${item.title.toLowerCase()}/${subItem.toLowerCase().replace(" ", "-")}`}
                          >
                            {subItem}
                          </PrefetchLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    const [searchText, setSearchText] = useState("");

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      action("sidebar-toggle")(newOpen);
    };

    return (
      <div className="h-screen">
        <SidebarProvider open={open} onOpenChange={handleOpenChange}>
          <SidebarContainer
            {...args}
            searchConfig={{
              searchText,
              setSearchText,
              placeholder: "Search navigation…",
            }}
          >
            <DefaultSidebar searchText={searchText} />
          </SidebarContainer>
        </SidebarProvider>
      </div>
    );
  },
  args: {
    collapsible: true,
    sidebarHeader: (
      <div className="meta-container">
        <h3>Passport UI</h3>
        <p>Version {pkg.version}</p>
      </div>
    ),
    sidebarFooter: (
      <Button>
        <Mail />
        Support
      </Button>
    ),
  },
};

export const MobileOnly: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true);
    const [searchText, setSearchText] = useState("");

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
      action("sidebar-toggle")(newOpen);
    };

    return (
      <div className="h-screen">
        <SidebarProvider open={open} onOpenChange={handleOpenChange}>
          <SidebarContainer
            {...args}
            searchConfig={{
              searchText,
              setSearchText,
              placeholder: "Search navigation…",
            }}
          >
            <DefaultSidebar searchText={searchText} />
          </SidebarContainer>
        </SidebarProvider>
      </div>
    );
  },
  args: {
    mobileOnly: true,
    collapsible: true,
    sidebarHeader: (
      <div className="meta-container">
        <h3>Mobile Sidebar</h3>
        <p>Only visible on mobile</p>
      </div>
    ),
    sidebarFooter: (
      <Button>
        <Mail />
        Support
      </Button>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `mobileOnly` is set to `true`, the sidebar will only render on mobile devices and will be completely hidden on desktop. Try resizing your browser window or viewing this on a mobile device to see the sidebar.",
      },
    },
  },
};
