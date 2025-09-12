import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { RadioGroup, RadioGroupItem } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { MetaContainer } from "../../composables/meta-container";
import { Label } from "../label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A radio group component for single-selection from multiple options, built on Radix UI RadioGroup primitives.

## Features
- Single selection from multiple mutually exclusive options
- Full keyboard navigation with arrow keys
- Built-in accessibility with proper ARIA attributes and roles
- Controlled and uncontrolled modes for flexible state management
- Individual item disable support
- Form integration with proper value handling
- Screen reader compatible with group labeling

## Composition
Radio groups are composed of multiple components:
- **RadioGroup**: Root container with state management and keyboard navigation
- **RadioGroupItem**: Individual radio button options
- **Label**: Associated labels for each option (recommended for accessibility)

## Usage
Use radio groups when users need to select exactly one option from a list. Each option should be mutually exclusive. Always provide clear labels for each option and consider the logical order of options.

## Accessibility
Radio groups provide built-in keyboard navigation and screen reader support. Always associate labels with radio items for the best accessibility experience.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description:
        "The controlled selected value matching a RadioGroupItem value",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    defaultValue: {
      control: { type: "text" },
      description: "The default selected value when uncontrolled",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    onValueChange: {
      action: "value-changed",
      description: "Callback fired when the selected value changes",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the entire radio group is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the radio group is required for form submission",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Validation",
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
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the radio group for keyboard navigation",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"vertical"' },
        category: "Layout",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onValueChange: action("value-changed"),
  },
  render: (args) => (
    <MetaContainer>
      <Label htmlFor="radio">Choose an option</Label>
      <RadioGroup {...args} id="radio">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_1" id="option_1" />
          <Label htmlFor="option_1">Option 1</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_2" id="option_2" />
          <Label htmlFor="option_2">Option 2</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_3" id="option_3" />
          <Label htmlFor="option_3">Option 3</Label>
        </div>
      </RadioGroup>
    </MetaContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    defaultValue: "option_2",
  },
};
