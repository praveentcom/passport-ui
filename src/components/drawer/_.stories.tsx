import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from ".";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Mobile-optimized drawer with sliding panels from screen edges.

## Components
- **Drawer**: Root container
- **DrawerTrigger**: Opens drawer
- **DrawerContent**: Main container with slide animation
- **DrawerClose**: Closes drawer
- **DrawerFooter**: Footer for actions

## Features
- Slide animations from four directions
- Touch-friendly drag interactions
- Modal/non-modal modes
- Snap points and gesture handling`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the drawer",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    direction: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
      description: "Direction from which the drawer slides into view",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Animation",
      },
    },
    modal: {
      control: "boolean",
      description:
        "Whether the drawer should be modal (blocks interaction with content behind)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Behavior",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the drawer open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Drawer composition with DrawerTrigger, DrawerContent, and other drawer components",
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
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm section-container">
          <div className="meta-container">
            <h3>Drawer component</h3>
            <p>
              Add your content here. Use Drawer to confirm actions, and this
              looks better in mobile layouts.
            </p>
          </div>
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
