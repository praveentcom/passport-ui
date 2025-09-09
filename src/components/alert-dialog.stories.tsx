import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/client";
import { Button } from "@/client";
import { MetaContainer } from "@/client";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A critical alert dialog component for important user confirmations and destructive actions, built on Radix UI AlertDialog primitives.

## Features
- Modal dialog with focus trap and backdrop
- Built specifically for critical confirmations
- Keyboard navigation (Escape to cancel)
- Accessible with proper ARIA attributes
- Portal-based rendering for proper layering
- Automatic focus management
- Screen reader compatible with alert semantics

## Composition
Alert dialogs are composed of multiple components:
- **AlertDialog**: Root container with state management
- **AlertDialogTrigger**: Element that opens the alert dialog
- **AlertDialogContent**: The main alert dialog container
- **AlertDialogAction**: Primary action button (usually destructive)
- **AlertDialogCancel**: Cancel/dismiss button
- **AlertDialogFooter**: Footer area for action buttons

## Usage
Use alert dialogs for:
- Destructive actions (delete, remove, clear)
- Critical confirmations that can't be undone
- Important warnings requiring user acknowledgment
- Actions with significant consequences

## Best Practices
- Always provide a clear cancel option
- Use descriptive action button text
- Explain consequences clearly
- Reserve for truly important confirmations

## Accessibility
Alert dialogs provide enhanced accessibility with alert role and proper focus management for critical user decisions.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the alert dialog",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description:
        "The default open state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    onOpenChange: {
      control: false,
      description: "Callback fired when the alert dialog open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Alert dialog composition with AlertDialogTrigger, AlertDialogContent, and action components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <MetaContainer title="Are you absolutely sure?">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </MetaContainer>
        <AlertDialogFooter>
          <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Destructive: Story = {
  args: {},
  render: (args) => (
    <AlertDialog {...args}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <MetaContainer title="Delete Account">
          This will permanently delete your account and all associated data.
          This action cannot be undone.
        </MetaContainer>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Delete Account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
