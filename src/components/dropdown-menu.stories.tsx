import type { Meta, StoryObj } from "@storybook/nextjs";
import { Menu } from "lucide-react";
import { action } from "storybook/actions";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../src";
import { Button } from "../../src";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A dropdown menu component that displays a list of actions or options triggered by a button, built on Radix UI DropdownMenu primitives.

## Features
- Full keyboard navigation with arrow keys and type-ahead
- Multiple item types (regular, checkbox, radio, separator)
- Grouping support with labels and separators
- Portal-based rendering for proper layering
- Automatic positioning with collision detection
- Built-in accessibility with ARIA attributes and roles
- Support for icons, shortcuts, and destructive actions

## Composition
Dropdown menus are composed of multiple components:
- **DropdownMenu**: Root container with state management
- **DropdownMenuTrigger**: Element that opens the menu
- **DropdownMenuContent**: The menu container with positioning
- **DropdownMenuItem**: Individual menu actions
- **DropdownMenuCheckboxItem**: Checkable menu items
- **DropdownMenuGroup**: Grouped menu sections
- **DropdownMenuLabel**: Section labels
- **DropdownMenuSeparator**: Visual dividers

## Usage
Use dropdown menus for:
- Action menus (edit, delete, share)
- User account menus
- Context-sensitive options
- Settings and preferences
- Navigation shortcuts

Organize items logically and use separators to group related actions.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Dropdown menu composition with DropdownMenuTrigger, DropdownMenuContent, and menu items",
      table: {
        type: {
          summary: "React.ReactNode",
          detail: "DropdownMenuTrigger | DropdownMenuContent",
        },
        category: "Content",
      },
    },
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the dropdown menu",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description:
        "The default open state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    modal: {
      control: { type: "boolean" },
      description:
        "Whether the dropdown menu is modal (blocks interaction with content behind)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behavior",
      },
    },
    dir: {
      control: { type: "select" },
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the dropdown menu for proper text alignment",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
        category: "Layout",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the dropdown menu changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
  },
  args: {
    onOpenChange(open) {
      action("onOpenChange")(open);
    },
  },
  render: (args) => <DropdownMenu {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <DropdownMenuTrigger key="trigger">
        <Button>Basic Menu</Button>
      </DropdownMenuTrigger>,
      <DropdownMenuContent key="content">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
      </DropdownMenuContent>,
    ],
  },
};

export const ExampleIconMenu: Story = {
  args: {
    children: [
      <DropdownMenuTrigger key="trigger">
        <Menu className="cursor-pointer size-5" />
      </DropdownMenuTrigger>,
      <DropdownMenuContent key="content">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
      </DropdownMenuContent>,
    ],
  },
};

export const ExampleListMenu: Story = {
  args: {
    children: [
      <DropdownMenuTrigger key="trigger">
        <Button>List Menu</Button>
      </DropdownMenuTrigger>,
      <DropdownMenuContent key="content">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Tasks</DropdownMenuLabel>
          <DropdownMenuCheckboxItem checked>Ticket 1</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>Ticket 2</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Ticket 3</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked>Ticket 4</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>,
    ],
  },
};
