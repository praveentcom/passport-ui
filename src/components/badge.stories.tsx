import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Badge } from "../../src";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A versatile badge component for displaying status, labels, and notifications with semantic color variants.

## Features
- Multiple semantic variants (default, secondary, outline, info, success, warning, destructive)
- Polymorphic rendering with asChild prop for custom elements
- Consistent sizing and spacing with icon support
- Built-in hover states for interactive badges
- Focus management and accessibility compliance
- Responsive design with proper text scaling

## Usage
Use badges to highlight important information, show status, or provide quick visual cues. Choose variants based on the semantic meaning of the content.`,
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
