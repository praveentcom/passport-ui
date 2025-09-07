import type { Meta, StoryObj } from "@storybook/nextjs";
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
} from "@/client";
import { action } from "storybook/actions";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A context menu component that displays a menu triggered by right-clicking on an element. Built on top of Radix UI Context Menu primitives.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content of the context menu",
      control: false,
      table: {
        type: { summary: "ReactNode" },
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
          Right click for advanced menu
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
