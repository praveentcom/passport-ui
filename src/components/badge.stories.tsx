import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile badge component with multiple variants for displaying status, labels, and notifications.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      description: "The variant of the badge.",
      options: [
        "default",
        "secondary",
        "outline",
        "destructive",
        "info",
        "success",
        "warning",
      ],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the badge",
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
