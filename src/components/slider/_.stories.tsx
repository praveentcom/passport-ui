import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Slider } from ".";
import { MetaContainer } from "../../composables/meta-container";
import { Label } from "../label";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A slider component for selecting numeric values within a specified range, built on Radix UI Slider primitives.

## Features
- Single or multi-value (range) slider support
- Keyboard navigation with arrow keys and page up/down
- Touch and mouse interaction with smooth dragging
- Customizable min, max, and step values
- Horizontal and vertical orientations
- Built-in accessibility with proper ARIA attributes
- Visual feedback with hover and focus states

## Usage
Use sliders for:
- Numeric input within a specific range
- Volume, brightness, or other continuous controls
- Price ranges or filtering by numeric values
- Settings and configuration values
- Any input where visual feedback of the range is helpful

## Single vs Range
- Single value: Pass an array with one number \`[50]\`
- Range selection: Pass an array with two numbers \`[20, 80]\`

## Accessibility
Sliders provide full keyboard navigation and screen reader support with proper value announcements.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "object",
      description: "The controlled value(s) of the slider as an array",
      table: {
        type: { summary: "number[]" },
        category: "State",
      },
    },
    defaultValue: {
      control: "object",
      description: "The default value(s) when uncontrolled",
      table: {
        type: { summary: "number[]" },
        category: "State",
      },
    },
    min: {
      control: { type: "number" },
      description: "The minimum allowed value",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Range",
      },
    },
    max: {
      control: "number",
      description: "The maximum allowed value",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Range",
      },
    },
    step: {
      control: { type: "number" },
      description: "The increment/decrement step amount",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Range",
      },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Layout",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    name: {
      control: { type: "text" },
      description: "The name attribute for form submission",
      table: {
        type: { summary: "string" },
        category: "Form",
      },
    },
    onValueChange: {
      control: false,
      description: "Callback fired when the slider value(s) change",
      table: {
        type: { summary: "(value: number[]) => void" },
        category: "Events",
      },
    },
    onValueCommit: {
      control: false,
      description: "Callback fired when the user finishes changing the value",
      table: {
        type: { summary: "(value: number[]) => void" },
        category: "Events",
      },
    },
  },
  args: {
    onValueChange: action("valueChange"),
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || args.value || [50]);

    const handleValueChange = (newValue: number[]) => {
      setValue(newValue);
      args.onValueChange?.(newValue);
    };

    return (
      <div className="w-sm">
        <MetaContainer>
          <Label>Slider</Label>
          <Slider {...args} value={value} onValueChange={handleValueChange} />
          <p>
            Current value: {Array.isArray(value) ? value.join(", ") : value}
          </p>
        </MetaContainer>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const DualValue: Story = {
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 5,
  },
};
