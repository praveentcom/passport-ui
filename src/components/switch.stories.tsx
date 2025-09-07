import type { Meta, StoryObj } from "@storybook/nextjs";
import { Switch } from "./switch";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
      table: {
        defaultValue: {
          summary: '"default"',
        },
      },
    },
    size: {
      control: "select",
      options: ["regular", "large"],
      table: {
        defaultValue: {
          summary: '"regular"',
        },
      },
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    onCheckedChange: {
      action: "checked changed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    variant: "success",
    checked: true,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    checked: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    checked: true,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    checked: true,
  },
};
