import Link from "next/link";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { EmptyStateCard } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../../components/button";

const meta: Meta<typeof EmptyStateCard> = {
  title: "Composables/EmptyStateCard",
  component: EmptyStateCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A comprehensive placeholder card for displaying empty states, error messages, maintenance modes, and onboarding content with customizable messaging and actions.

## Features
- Flexible messaging with title and subtitle support
- Customizable action buttons and content areas
- Consistent styling and spacing with design system
- Perfect for empty states and error handling
- Support for various placeholder scenarios
- Responsive design with proper text flow
- Default fallback content with sensible defaults

## Use Cases
Perfect for:
- **Empty States**: When no data is available to display
- **Error Pages**: 404 errors, network issues, or general errors
- **Maintenance Mode**: When features are temporarily unavailable
- **Onboarding**: Welcome messages with call-to-action buttons
- **Loading States**: While content is being fetched
- **Access Control**: When users lack permissions

The component provides sensible defaults but allows complete customization of messaging and actions.`,
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
  render: (args) => <EmptyStateCard {...args} />,
};

export const ErrorState: Story = {
  render: (args) => (
    <EmptyStateCard
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
    </EmptyStateCard>
  ),
};

export const EmptyState: Story = {
  render: (args) => (
    <EmptyStateCard
      {...args}
      title="No items found"
      subtitle="You haven't added any items yet. Start by creating your first item."
    >
      <Button>Create Item</Button>
    </EmptyStateCard>
  ),
};

export const MaintenanceMode: Story = {
  render: (args) => (
    <EmptyStateCard
      {...args}
      title="Under Maintenance"
      subtitle="We're performing scheduled maintenance. This feature will be back online shortly."
    >
      <Link href="/status">
        <Button variant="outline">Check Status</Button>
      </Link>
    </EmptyStateCard>
  ),
};

export const NoPermission: Story = {
  render: (args) => (
    <EmptyStateCard
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
    </EmptyStateCard>
  ),
};

export const WithoutActions: Story = {
  render: (args) => (
    <EmptyStateCard
      {...args}
      title="Loading content..."
      subtitle="Please wait while we fetch your data."
    />
  ),
};
