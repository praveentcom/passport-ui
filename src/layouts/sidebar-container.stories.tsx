import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail } from "lucide-react";
import { action } from "storybook/actions";

import {
  COMMON_CONTROLS,
  SAMPLE_SIDEBAR_MENU_ITEMS,
} from "../../.storybook/constants";
import { SidebarContainer, SidebarProvider } from "../../src";
import { Button, MetaContainer } from "../../src";

const meta: Meta<typeof SidebarContainer> = {
  title: "Layouts/SidebarContainer",
  component: SidebarContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A comprehensive sidebar navigation component built on shadcn/ui's sidebar primitives, providing flexible navigation with advanced features like search, collapsible states, and customizable content areas.

## Features
- Built on robust shadcn/ui sidebar primitives with full accessibility support
- Collapsible sidebar with icon-only mode for space efficiency
- Integrated search functionality with real-time menu item filtering
- Flexible header and footer content areas with responsive visibility
- Support for nested menu items with collapsible parent groups
- Multiple sidebar variants (sidebar, floating, inset) for different layouts
- Left/right positioning support for flexible layout arrangements
- Custom sidebar groups for additional content organization
- Theme-aware styling with seamless dark/light mode transitions

## Navigation System
- **Menu Items**: Hierarchical navigation with support for nested sub-items
- **Search Integration**: Real-time filtering of menu items with customizable placeholder
- **Collapsible Groups**: Parent menu items can expand/collapse child items
- **Icon Support**: Full Lucide React icon integration for visual navigation cues
- **Active States**: Automatic highlighting of current page/section

## Layout Integration
- **SidebarProvider**: Requires SidebarProvider wrapper for state management
- **PageLayout**: Seamlessly integrates with PageLayout for complete app structure
- **Responsive Design**: Adapts to different screen sizes with appropriate behaviors
- **Content Areas**: Header and footer areas with intelligent visibility in collapsed mode

## Customization Options
- **Variants**: Choose from sidebar, floating, or inset display modes
- **Positioning**: Left or right sidebar placement
- **Collapsible States**: Control whether sidebar can collapse to icon-only mode
- **Search Functionality**: Optional search with customizable placeholder text
- **Custom Groups**: Additional content areas for specialized navigation elements

## Usage
Use SidebarContainer for:
- Primary application navigation in dashboards and admin panels
- Multi-level navigation structures with categories and subcategories
- Applications requiring persistent navigation with search capabilities
- Layouts that benefit from collapsible navigation for content focus
- Any interface where organized, searchable navigation improves user experience

## Best Practices
- Organize menu items logically with clear hierarchies and groupings
- Use meaningful icons that enhance navigation understanding
- Keep search placeholders descriptive and context-appropriate
- Consider mobile experience when designing collapsible behaviors
- Ensure header/footer content remains useful in collapsed icon mode
- Test navigation accessibility with keyboard and screen readers
- Group related functionality using custom sidebar groups

## Integration
SidebarContainer requires SidebarProvider for state management and works seamlessly with PageLayout. When used independently, wrap both sidebar and content areas with SidebarProvider for proper functionality.`,
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
        defaultValue: { summary: '"Search..."' },
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
    searchPlaceholder: "Search navigation...",
    sidebarHeader: (
      <MetaContainer title="Passport UI">
        <p>Version 1.1.0</p>
      </MetaContainer>
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
