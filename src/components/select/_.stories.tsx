import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from ".";
import { MetaContainer } from "../../composables/meta-container";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A dropdown selection component that displays a list of options for users to choose from, built on Radix UI Select primitives.

## Features
- Full keyboard navigation with arrow keys and type-ahead search
- Controlled and uncontrolled modes for flexible state management
- Grouping support with labeled sections
- Built-in accessibility with ARIA attributes and screen reader support
- Smooth animations and visual feedback
- Consistent styling with theme integration
- Portal-based dropdown positioning for proper layering

## Composition
Select components work together:
- **Select**: Root container with state management
- **SelectTrigger**: Button that opens the dropdown
- **SelectValue**: Displays the selected value with placeholder support
- **SelectContent**: Dropdown container with positioning
- **SelectItem**: Individual selectable options
- **SelectGroup/SelectLabel**: For organizing options into labeled groups`,
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
      action: "value-changed",
      description: "Callback fired when the selected value changes",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the select is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the select is required for form submission",
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
    open: {
      control: { type: "boolean" },
      description: "Whether the select dropdown is open (controlled)",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    onOpenChange: {
      action: "open-changed",
      description: "Callback fired when the dropdown open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
  },
  args: {
    onValueChange: action("value-changed"),
  },
  render: (args) => (
    <MetaContainer title="Select a fruit or vegetable">
      <Select {...args}>
        <SelectTrigger className="w-sm">
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="cauliflower">Cauliflower</SelectItem>
            <SelectItem value="onion">Onion</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </MetaContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
