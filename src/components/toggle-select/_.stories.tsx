import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ToggleSelect, ToggleSelectItem } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof ToggleSelect> = {
  title: "Components/ToggleSelect",
  component: ToggleSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Toggle-based selection for multiple exclusive options.

## Components
- **ToggleSelect**: Root container
- **ToggleSelectItem**: Individual toggle options

## Features
- Single selection from multiple options
- Visual feedback with pressed/unpressed states
- Keyboard navigation with arrows and Enter

## Toggle Select vs Radio Group
- **ToggleSelect**: Button-like appearance
- **Radio Group**: Traditional radio appearance
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
