import type { Meta, StoryObj } from "@storybook/nextjs";
import * as React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  Button,
  MetaContainer,
} from "@/client";
import { action } from "storybook/actions";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A modal dialog that interrupts the user with important content and expects a response.",
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
      },
    },
    onOpenChange: {
      control: false,
      description: "Callback fired when the open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "The default open state (uncontrolled)",
      table: {
        type: { summary: "boolean" },
      },
    },
    modal: {
      control: "boolean",
      description: "Whether the dialog is modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
