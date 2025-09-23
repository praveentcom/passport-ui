import Link from "next/link";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { EmptyState } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../../components/button";

const meta: Meta<typeof EmptyState> = {
  title: "Composables/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **EmptyState**: Placeholder component for empty content states

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The main title text that describes the placeholder state",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Section not found."' },
        category: "Content",
      },
    },
    subtitle: {
      control: { type: "text" },
      description:
        "The subtitle or description text that provides additional context",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"This section is currently unavailable."' },
        category: "Content",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Custom action buttons, links, or any content to display below the text",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: 'Button with "Go home" link' },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <EmptyState {...args} />,
};

export const ErrorState: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="Something went wrong"
      subtitle="We encountered an error while processing your request. Please try again later."
    >
      <div className="flex gap-2">
        <Button>Try Again</Button>
        <Link href="/support">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
    </EmptyState>
  ),
};

export const EmptyList: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="No items found"
      subtitle="You haven't added any items yet. Start by creating your first item."
    >
      <Button>Create Item</Button>
    </EmptyState>
  ),
};

export const MaintenanceMode: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="Under Maintenance"
      subtitle="We're performing scheduled maintenance. This feature will be back online shortly."
    >
      <Link href="/status">
        <Button variant="outline">Check Status</Button>
      </Link>
    </EmptyState>
  ),
};

export const NoPermission: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="Access Denied"
      subtitle="You don't have permission to view this content. Contact your administrator for access."
    >
      <div className="flex gap-2">
        <Link href="/login">
          <Button>Sign In</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">Contact Support</Button>
        </Link>
      </div>
    </EmptyState>
  ),
};

export const WithoutActions: Story = {
  render: (args) => (
    <EmptyState
      {...args}
      title="Loading content…"
      subtitle="Please wait while we fetch your data."
    />
  ),
};
