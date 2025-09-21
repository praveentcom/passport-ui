import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from ".";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Sheet that displays content from screen edges.

## Components
- **Sheet**: Root container
- **SheetTrigger**: Opens sheet
- **SheetContent**: Main container with slide animation
- **SheetHeader**: Header with title/description
- **SheetTitle**: Sheet title
- **SheetDescription**: Optional description
- **SheetFooter**: Footer for actions
- **SheetClose**: Closes sheet

## Features
- Slides from edges: top, right, bottom, left
- Modal/non-modal modes
- Focus trap
- Keyboard navigation (Escape, Tab)`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the sheet",
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
        "Whether the sheet is modal (blocks interaction with content behind)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behavior",
      },
    },
    onOpenChange: {
      control: false,
      description: "Callback fired when the sheet open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Sheet composition with SheetTrigger, SheetContent, and other sheet components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="section-container px-4">
          <div className="meta-container">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Praveen Thirumurugan" />
          </div>
          <div className="meta-container">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@praveentcom" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
          <SheetClose asChild>
            <Button>Cancel</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  args: {},
};
