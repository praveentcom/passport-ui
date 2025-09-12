import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Popover, PopoverContent, PopoverTrigger } from ".";
import { MetaContainer } from "../../composables/meta-container";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A popover component that displays rich content in a portal, triggered by user interaction, built on Radix UI Popover primitives.

## Features
- Click-triggered content display with positioning
- Portal-based rendering for proper layering
- Automatic positioning with collision detection
- Modal and non-modal modes
- Focus management and keyboard navigation
- Smooth animations and visual feedback
- Built-in accessibility with ARIA attributes

## Composition
Popovers are composed of multiple components:
- **Popover**: Root container with state management
- **PopoverTrigger**: Element that triggers the popover (usually a button)
- **PopoverContent**: The popover content container with positioning

## Usage
Use popovers for:
- Additional options and controls
- Form inputs and filters
- Contextual information and help
- Settings panels and configuration
- Rich content that doesn't warrant a full modal

Popovers are less intrusive than dialogs and work well for supplementary content.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the popover",
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
        "Whether the popover should be modal (blocks interaction with content behind)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the popover open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Popover composition with PopoverTrigger and PopoverContent components",
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
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-sm">
        <div className="section-container">
          <MetaContainer title="Dimensions">
            Set the dimensions for the layer.
          </MetaContainer>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Height</Label>
              <Input id="height" defaultValue="100%" className="col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
};
