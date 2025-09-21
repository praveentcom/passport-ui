import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail } from "lucide-react";
import { action } from "storybook/actions";

import { SidebarContainer } from ".";
import {
  COMMON_CONTROLS,
  SAMPLE_SIDEBAR_MENU_ITEMS,
} from "../../../.storybook/constants";
import { Button } from "../../components/button";
import { SidebarProvider } from "../../components/sidebar";

const meta: Meta<typeof SidebarContainer> = {
  title: "Layouts/SidebarContainer",
  component: SidebarContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Sidebar navigation with collapsible states, search, and nested menu items.

## Features
- Collapsible with icon-only mode
- Search with real-time filtering
- Nested menu items
- Variants: sidebar, floating, inset
- Left/right positioning

## Usage
Requires SidebarProvider wrapper.`,
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
    menuItems: {
      control: "object",
      description:
        "Array of menu items to display in the sidebar (supports nested sub-items with collapsible parents)",
      table: {
        type: {
          summary: "SidebarContainerMenuItem",
        },
        defaultValue: { summary: "[]" },
      },
    },
    sidebarGroups: {
      control: false,
      description: "Additional sidebar groups with custom content",
      table: {
        type: { summary: "Array<{ label?: string; content: ReactNode }>" },
        defaultValue: { summary: "[]" },
      },
    },
    searchable: {
      control: "boolean",
      description: "Whether to show a search input for filtering menu items",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for the search input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Search…"' },
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
    className: COMMON_CONTROLS.className,
    autoInferActiveItem: {
      control: "boolean",
      description:
        "Whether to automatically infer active state from current URL",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
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

export const Default: Story = {
  args: {
    menuItems: SAMPLE_SIDEBAR_MENU_ITEMS,
    collapsible: true,
    searchable: true,
    searchPlaceholder: "Search navigation…",
    sidebarHeader: (
      <div className="meta-container">
        <h3>Passport UI</h3>
        <p>Version 1.1.0</p>
      </div>
    ),
    sidebarFooter: (
      <Button>
        <Mail />
        Support
      </Button>
    ),
    autoInferActiveItem: true,
  },
};
