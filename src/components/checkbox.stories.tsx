import type { Meta, StoryObj } from "@storybook/nextjs";
import { Checkbox, Label, Card, MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A binary control that allows users to toggle between checked and unchecked states, built on Radix UI primitives.

## Features
- Three states: checked, unchecked, and indeterminate
- Full keyboard navigation and accessibility support
- Smooth animations and visual feedback
- Consistent styling with theme integration
- Form integration with proper value handling
- Screen reader compatible with ARIA attributes

## Usage
Use checkboxes for binary choices, multiple selections, or to indicate agreement. Always pair with descriptive labels and consider grouping related options.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "The controlled checked state of the checkbox",
      table: {
        type: { summary: "boolean | 'indeterminate'" },
        category: "State",
      },
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "The default checked state when uncontrolled",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required for form submission",
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
    value: {
      control: { type: "text" },
      description: "The value attribute for form submission",
      table: {
        type: { summary: "string" },
        category: "Form",
      },
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Event handler called when the checked state changes",
      table: {
        type: { summary: "(checked: boolean | 'indeterminate') => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onCheckedChange: action("onCheckedChange"),
  },
  render: (args) => <Checkbox {...args} />,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    defaultChecked: true,
  },
  render: (args) => (
    <Card className="w-sm p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" {...args} />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="notifications" defaultChecked />
          <MetaContainer>
            <Label htmlFor="notifications">Enable notifications</Label>
            <p>You can enable or disable notifications at any time.</p>
          </MetaContainer>
        </div>
        <div className="flex items-start gap-3">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled">Disabled option</Label>
        </div>
      </div>
    </Card>
  ),
};
