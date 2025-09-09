import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { ToggleSelect, ToggleSelectItem } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof ToggleSelect> = {
  title: "Components/ToggleSelect",
  component: ToggleSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A toggle-based selection component that allows users to choose between multiple exclusive options with visual toggle states.

## Features
- Single selection from multiple toggle options
- Visual feedback with pressed/unpressed states
- Keyboard navigation with arrow keys and Enter
- Built-in accessibility with proper ARIA attributes
- Controlled and uncontrolled modes
- Consistent styling with theme integration
- Smooth state transitions

## Composition
Toggle selects are composed of multiple components:
- **ToggleSelect**: Root container with state management
- **ToggleSelectItem**: Individual selectable toggle options

## Usage
Use toggle selects for:
- View mode selection (grid, list, card)
- Filter options and sorting preferences
- Settings with exclusive choices
- Tab-like functionality with toggle appearance
- Any single-choice selection that benefits from toggle styling

## Toggle Select vs Radio Group
- **ToggleSelect**: Button-like appearance for immediate visual feedback
- **RadioGroup**: Traditional radio button styling for forms

## Accessibility
Toggle selects provide full keyboard navigation and screen reader support with proper selection announcements.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The default selected value when uncontrolled",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    value: {
      control: { type: "text" },
      description: "The controlled selected value",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    onValueChange: {
      control: false,
      description: "Callback fired when the selected value changes",
      table: {
        type: { summary: "(value: string | null) => void" },
        category: "Events",
      },
    },
    transition: {
      control: { type: "object" },
      description:
        "Framer Motion transition configuration for the selection animation",
      table: {
        type: { summary: "Transition" },
        category: "Animation",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "ToggleSelectItem components representing the available options",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => {
    return (
      <ToggleSelect {...args}>
        <ToggleSelectItem value="option1">Option 1</ToggleSelectItem>
        <ToggleSelectItem value="option2">Option 2</ToggleSelectItem>
        <ToggleSelectItem value="option3">Option 3</ToggleSelectItem>
      </ToggleSelect>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option1",
  },
};
