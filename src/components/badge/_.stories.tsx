import type { Meta, StoryObj } from "@storybook/nextjs";

import { Badge } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Badge for status, labels, and notifications.

## Features
- Variants: default, secondary, outline, info, success, warning, destructive
- asChild prop
- Icon support`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "info",
        "success",
        "warning",
      ],
      description:
        "The visual variant that determines the badge's appearance and semantic meaning",
      table: {
        type: {
          summary:
            '"default" | "secondary" | "outline" | "destructive" | "info" | "success" | "warning"',
        },
        defaultValue: { summary: '"default"' },
        category: "Appearance",
      },
    },
    children: {
      control: { type: "text" },
      description: "The badge content - text, icons, or other React elements",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    asChild: COMMON_CONTROLS.asChild,
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Badge {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    children: "✔︎ Success",
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "⚠︎ Warning",
    variant: "warning",
  },
};

export const Destructive: Story = {
  args: {
    children: "✘ Error",
    variant: "destructive",
  },
};
