import * as React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
  MetaContainer,
} from "../../src";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A mobile-optimized drawer component built on Vaul that provides smooth sliding panels from any screen edge.

## Features
- Smooth slide animations from all four directions
- Touch-friendly drag interactions for mobile
- Modal and non-modal modes
- Automatic snap points and gesture handling
- Built-in accessibility with proper ARIA attributes
- Focus management and keyboard navigation
- Portal-based rendering for proper layering

## Composition
Drawers are composed of multiple components:
- **Drawer**: Root container with state and gesture management
- **DrawerTrigger**: Element that opens the drawer
- **DrawerContent**: The main drawer container with slide animation
- **DrawerClose**: Elements that close the drawer
- **DrawerFooter**: Footer area for actions

## Usage
Use drawers for:
- Mobile navigation menus
- Bottom action sheets
- Confirmation dialogs on mobile
- Touch-friendly form panels
- Mobile-optimized overlays

## Mobile Optimization
Drawers are specifically designed for mobile interfaces with touch gestures, drag-to-close, and appropriate sizing for mobile screens.

## Accessibility
Drawers provide full keyboard navigation and screen reader support with proper focus management.`,
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
