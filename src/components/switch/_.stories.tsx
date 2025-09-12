import type { Meta, StoryObj } from "@storybook/nextjs";

import { Switch } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A toggle switch component for binary on/off states with semantic color variants and smooth animations.

## Features
- Semantic color variants (default, success, warning, destructive, info)
- Two size options (regular, large)
- Smooth toggle animations with visual feedback
- Built-in accessibility with proper ARIA attributes
- Keyboard navigation support (Space to toggle)
- Form integration with controlled and uncontrolled modes
- Consistent styling with theme integration

## Usage
Use switches for settings, preferences, or any binary toggle functionality. Switches are ideal for immediate state changes that don't require form submission, unlike checkboxes which are better for form selections.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
      description:
        "The visual variant that determines the switch's appearance and semantic meaning",
      table: {
        type: {
          summary: '"default" | "success" | "warning" | "destructive" | "info"',
        },
        defaultValue: { summary: '"default"' },
        category: "Appearance",
      },
    },
    size: {
      control: "select",
      options: ["regular", "large"],
      description: "The size variant that controls the switch dimensions",
      table: {
        type: { summary: '"regular" | "large"' },
        defaultValue: { summary: '"regular"' },
        category: "Appearance",
      },
    },
    checked: {
      control: "boolean",
      description: "The controlled checked state of the switch",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultChecked: {
      control: "boolean",
      description: "The default checked state when uncontrolled",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: "boolean",
      description: "Whether the switch is required for form submission",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Validation",
      },
    },
    name: {
      control: "text",
      description: "The name attribute for form submission",
      table: {
        type: { summary: "string" },
        category: "Form",
      },
    },
    value: {
      control: "text",
      description: "The value attribute for form submission",
      table: {
        type: { summary: "string" },
        category: "Form",
      },
    },
    onCheckedChange: {
      action: "checked changed",
      description: "Callback fired when the switch state changes",
      table: {
        type: { summary: "(checked: boolean) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: {
    variant: "success",
    checked: true,
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    checked: true,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    checked: true,
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    checked: true,
  },
};
