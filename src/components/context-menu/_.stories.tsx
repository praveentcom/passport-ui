import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from ".";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Context menu with contextual actions triggered by right-click.

## Components
- **ContextMenu**: Root container
- **ContextMenuTrigger**: Triggers context menu
- **ContextMenuContent**: Menu container
- **ContextMenuItem**: Menu actions
- **ContextMenuCheckboxItem**: Checkable items
- **ContextMenuRadioGroup/RadioItem**: Radio groups
- **ContextMenuSub**: Nested submenus
- **ContextMenuSeparator**: Dividers
- **ContextMenuLabel**: Section labels
- **ContextMenuShortcut**: Keyboard shortcuts

## Features
- Right-click triggered
- Keyboard navigation with arrows
- Nested submenus
- Item types: regular, checkbox, radio, separator
- Keyboard shortcuts display`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description:
        "Context menu composition with ContextMenuTrigger and ContextMenuContent",
      control: false,
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    onOpenChange: {
      control: false,
      description: "Callback fired when the context menu open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <div className="flex w-sm h-24 items-center justify-center">
      <ContextMenu {...args}>
        <ContextMenuTrigger className="flex w-full h-full items-center justify-center rounded-sm border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Print
            <ContextMenuShortcut>⌘P</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {},
};

export const Advanced: Story = {
  args: {},
  render: (args) => (
    <div className="flex w-sm h-24 items-center justify-center">
      <ContextMenu {...args}>
        <ContextMenuTrigger className="flex w-full h-full items-center justify-center rounded-sm border border-dashed text-sm">
          Right click for menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuItem inset>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem inset>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>Save Page As...</ContextMenuItem>
              <ContextMenuItem>Create Shortcut...</ContextMenuItem>
              <ContextMenuItem>Name Window...</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>Developer Tools</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem checked>
            Show Bookmarks
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="sarah">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuRadioItem value="sarah">
              Sarah Chen
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="alex">
              Alex Rodriguez
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="jamie">Jamie Kim</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  ),
};
