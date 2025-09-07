import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import * as React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  Button,
  Input,
  Label,
  MetaContainer,
} from "@/client";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Extends the Dialog component to display content that complements the main content of the screen.",
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
      description: "Whether the sheet is modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
