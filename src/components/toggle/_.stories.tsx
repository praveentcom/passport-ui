import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Toggle } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A toggle button component for binary on/off states with visual feedback, built on Radix UI Toggle primitives.

## Features
- Binary pressed/unpressed state management
- Multiple visual variants (transparent, outline)
- Three size options (regular, medium, large)
- Built-in accessibility with proper ARIA attributes
- Keyboard navigation support (Space/Enter to toggle)
- Controlled and uncontrolled modes
- Visual feedback with hover and pressed states

## Usage
Use toggles for:
- Binary settings and preferences
- Toolbar button states (bold, italic, etc.)
- Feature activation/deactivation
- Filter and view options
- Any on/off functionality that needs visual state

## Toggle vs Switch vs Checkbox
- **Toggle**: Button-like appearance for immediate actions
- **Switch**: Slider-like for settings that take effect immediately  
- **Checkbox**: For form selections and multi-select scenarios

## Accessibility
Toggles provide full keyboard navigation and screen reader support with proper pressed state announcements.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["transparent", "outline"],
      description: "The visual variant that determines the toggle's appearance",
      table: {
        type: { summary: '"transparent" | "outline"' },
        defaultValue: { summary: '"outline"' },
        category: "Appearance",
      },
    },
    size: {
      control: { type: "select" },
      options: ["regular", "medium", "large"],
      description:
        "The size variant that controls padding, height, and text size",
      table: {
        type: { summary: '"regular" | "medium" | "large"' },
        defaultValue: { summary: '"regular"' },
        category: "Appearance",
      },
    },
    children: {
      control: { type: "text" },
      description: "The toggle content - text, icons, or other React elements",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    pressed: {
      control: { type: "boolean" },
      description: "The controlled pressed state of the toggle",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultPressed: {
      control: { type: "boolean" },
      description:
        "The default pressed state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the toggle is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    onPressedChange: {
      action: "onPressedChange",
      description: "Event handler called when the pressed state changes",
      table: {
        type: { summary: "(pressed: boolean) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onPressedChange(pressed) {
      action("onPressedChange")(pressed);
    },
  },
  render: (args) => <Toggle {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    size: "regular",
    children: "Toggle",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    size: "regular",
    children: "Toggle",
  },
};
