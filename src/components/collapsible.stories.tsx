import type { Meta, StoryObj } from "@storybook/nextjs";
import { ChevronsUpDown } from "lucide-react";
import { action } from "storybook/actions";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  MetaContainer,
} from "../../src";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An interactive collapsible component that smoothly expands and collapses content panels, built on Radix UI Collapsible primitives.

## Features
- Smooth expand/collapse animations with height transitions
- Controlled and uncontrolled modes for flexible state management
- Built-in accessibility with proper ARIA attributes
- Keyboard navigation support (Space/Enter to toggle)
- Customizable trigger elements with any content
- Automatic content height calculation
- Screen reader compatible with state announcements

## Composition
Collapsibles are composed of multiple components:
- **Collapsible**: Root container with state management
- **CollapsibleTrigger**: Interactive element that toggles the collapsible
- **CollapsibleContent**: The expandable content area with smooth animations

## Usage
Use collapsibles for:
- FAQ sections and help content
- Settings panels and advanced options
- Content organization and space saving
- Progressive disclosure of information
- Sidebar navigation sections

## Accessibility
Collapsibles provide full keyboard navigation and screen reader support with proper state announcements and focus management.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the collapsible",
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
    disabled: {
      control: { type: "boolean" },
      description: "Whether the collapsible is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the collapsible open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Collapsible composition with CollapsibleTrigger and CollapsibleContent components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <Collapsible className="w-sm list-container" {...args}>
      <div className="flex justify-between items-center">
        <h4>Do you know today&apos;s date?</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <MetaContainer>
          <p>Today&apos;s date is {new Date().toLocaleDateString()}.</p>
          <p>The current time is {new Date().toLocaleTimeString()}.</p>
        </MetaContainer>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
};
