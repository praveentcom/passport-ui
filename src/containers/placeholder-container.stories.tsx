import type { Meta, StoryObj } from "@storybook/nextjs";
import { PlaceholderContainer } from "@/client";
import { Button } from "@/client";
import Link from "next/link";

const meta: Meta<typeof PlaceholderContainer> = {
  title: "Containers/PlaceholderContainer",
  component: PlaceholderContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Placeholder Container component for displaying empty states, errors, or unavailable content with customizable title, subtitle, and action buttons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The main title text displayed in the placeholder.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: '"Section not found."',
        },
      },
    },
    subtitle: {
      control: { type: "text" },
      description:
        "The subtitle or description text displayed below the title.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: '"This section is currently unavailable."',
        },
      },
    },
    children: {
      control: { type: "object", disable: true },
      description: "Custom action buttons or content to display at the bottom.",
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: {
          summary: 'Button with "Go home" link',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Section not found.",
    subtitle: "This section is currently unavailable.",
  },
};

export const NoActions: Story = {
  args: {
    title: "Maintenance Mode",
    subtitle:
      "This feature is temporarily unavailable while we perform maintenance.",
    children: null,
  },
};

export const CustomActions: Story = {
  args: {
    title: "Welcome to your dashboard",
    subtitle:
      "Get started by creating your first project or exploring our features.",
    children: (
      <>
        <Button asChild>
          <Link href="/create">Create Project</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/explore">Explore Features</Link>
        </Button>
      </>
    ),
  },
};
