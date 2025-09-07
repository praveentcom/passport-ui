import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  AlertCircleIcon,
  CheckCircleIcon,
  InfoIcon,
  AlertTriangleIcon,
} from "lucide-react";

import { Alert } from "./alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a callout for user attention with integrated title and description.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "info", "warning", "success", "destructive"],
      description: "The visual variant of the alert",
    },
    title: {
      control: { type: "text" },
      description: "The alert title (required)",
    },
    description: {
      control: { type: "text" },
      description: "The alert description (required)",
    },
    icon: {
      control: false,
      description: "Optional icon to display",
    },
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
