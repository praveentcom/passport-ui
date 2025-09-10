import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  InfoIcon,
} from "lucide-react";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Alert } from "../../src";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A flexible alert component for displaying important messages to users with various severity levels.

## Features
- Multiple semantic variants (info, warning, success, destructive)
- Optional icon support with automatic positioning
- Built-in accessibility with proper ARIA roles
- Consistent styling with theme integration
- Responsive design with proper text scaling

## Usage
Use alerts to communicate important information that requires user attention. Choose the appropriate variant based on the message type and severity.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "info", "warning", "success", "destructive"],
      description:
        "The visual variant that determines the alert's appearance and semantic meaning",
      table: {
        type: {
          summary: '"default" | "info" | "warning" | "success" | "destructive"',
        },
        defaultValue: { summary: '"default"' },
        category: "Appearance",
      },
    },
    title: {
      control: { type: "text" },
      description: "The alert title text (required)",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    description: {
      control: { type: "text" },
      description: "The alert description text (required)",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    icon: {
      control: false,
      description:
        "Optional React icon element to display alongside the alert content",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <Alert {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    title: "Heads up!",
    description:
      "You can add components and dependencies to your app using the cli.",
    icon: <InfoIcon />,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is some helpful information for users to be aware of.",
    icon: <InfoIcon />,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please review this information carefully before proceeding.",
    icon: <AlertTriangleIcon />,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your changes have been saved successfully.",
    icon: <CheckCircleIcon />,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    title: "Error",
    description: "Your session has expired. Please log in again.",
    icon: <AlertCircleIcon />,
  },
};
