import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/client";
import { Button } from "@/client";
import { Menu } from "lucide-react";

import { action } from "storybook/actions";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A dropdown menu component that allows users to select an option from a list.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      table: {
        type: {
          summary: "ReactNode",
          detail: "DropdownMenuTrigger | DropdownMenuContent",
        },
      },
      description: "Contents of the dropdown menu.",
    },
    dir: {
      control: { type: "select" },
      options: ["ltr", "rtl"],
      description: "The reading direction of the dropdown menu.",
      table: {
        type: {
          summary: "ltr | rtl",
        },
        defaultValue: {
          summary: "ltr",
        },
      },
    },
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the dropdown menu.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "The default open state when initially rendered.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    modal: {
      control: { type: "boolean" },
      description: "The modality of the dropdown menu.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the dropdown menu changes.",
      table: {
        type: {
          summary: "(open: boolean) => void",
        },
        defaultValue: {
          summary: "() => {}",
        },
        category: "Actions",
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
