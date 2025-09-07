import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import * as React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  Button,
  MetaContainer,
} from "@/client";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A drawer component for React built on top of Vaul. Provides a sliding panel that can be triggered from any side of the screen.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the drawer is open",
      table: {
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    direction: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "Direction from which the drawer slides in",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
      },
    },
    modal: {
      control: "boolean",
      description: "Whether the drawer should be modal",
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
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm section-container">
          <MetaContainer title="Drawer component">
            Add your content here. Use Drawer to confirm actions, and this looks
            better in mobile layouts.
          </MetaContainer>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="primary">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  ),
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {},
};
