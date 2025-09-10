import * as React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  MetaContainer,
} from "../../src";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A modal dialog component that interrupts the user workflow with important content and expects a response, built on Radix UI Dialog primitives.

## Features
- Modal and non-modal modes with backdrop overlay
- Focus management with focus trap and restoration
- Keyboard navigation (Escape to close, Tab cycling)
- Portal-based rendering for proper layering
- Customizable positioning and animations
- Built-in accessibility with ARIA attributes
- Scroll lock when modal is open

## Composition
Dialogs are composed of multiple components:
- **Dialog**: Root container with state management
- **DialogTrigger**: Element that opens the dialog
- **DialogContent**: The main dialog container with content
- **DialogClose**: Elements that close the dialog
- **DialogFooter**: Footer area for actions and buttons

## Usage
Use dialogs for:
- Confirmation actions (delete, save changes)
- Form inputs that require focus
- Important information that needs acknowledgment
- Settings and configuration panels
- Multi-step workflows

Always provide clear actions and escape routes for users.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the dialog",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The default open state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    modal: {
      control: "boolean",
      description:
        "Whether the dialog is modal (blocks interaction with content behind)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behavior",
      },
    },
    onOpenChange: {
      control: false,
      description: "Callback fired when the dialog open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Dialog composition with DialogTrigger, DialogContent, and other dialog components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  args: {
    onOpenChange: action("openChange"),
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Dialog {...args} open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent className="w-sm">
          <MetaContainer title="Account Settings">
            Manage your account settings and preferences here.
          </MetaContainer>
          <MetaContainer title="Profile Information">
            Update your personal details and contact information
          </MetaContainer>
          <MetaContainer title="Security Settings">
            Configure password, two-factor authentication, and login preferences
          </MetaContainer>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              onClick={() => {
                action("save-clicked")();
                setOpen(false);
              }}
            >
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
};
