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
import { MetaContainer } from "../../composables/meta-container";
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
        component: `A sheet component that extends Dialog to display complementary content from screen edges, built on Radix UI Dialog primitives.

## Features
- Slides in from screen edges (top, right, bottom, left)
- Modal and non-modal modes with backdrop overlay
- Focus management with focus trap and restoration
- Keyboard navigation (Escape to close, Tab cycling)
- Portal-based rendering for proper layering
- Built-in accessibility with ARIA attributes
- Scroll lock when modal is open

## Composition
Sheets are composed of multiple components:
- **Sheet**: Root container with state management
- **SheetTrigger**: Element that opens the sheet
- **SheetContent**: The main sheet container with slide animation
- **SheetHeader**: Header area with title and description
- **SheetTitle**: Accessible title for the sheet
- **SheetDescription**: Optional description text
- **SheetFooter**: Footer area for actions
- **SheetClose**: Elements that close the sheet

## Usage
Use sheets for:
- Side navigation menus
- Form panels and settings
- Filters and search options
- Additional content that complements the main view
- Mobile-friendly overlay content

Sheets work well for content that doesn't need full attention like dialogs.`,
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
          <MetaContainer>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="Praveen Thirumurugan" />
          </MetaContainer>
          <MetaContainer>
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@praveentcom" />
          </MetaContainer>
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
