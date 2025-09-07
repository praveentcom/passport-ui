import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import { Input, Label, MetaContainer } from "@/client";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible input component for forms and user input. Built with proper accessibility and styling.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The type of input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"text"' },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: "boolean",
      description: "Whether the input is read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback fired when the input value changes",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Callback fired when the input receives focus",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement>) => void" },
      },
    },
    onBlur: {
      action: "onBlur",
      description: "Callback fired when the input loses focus",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement>) => void" },
      },
    },
  },
  args: {
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },
  render: (args) => (
    <div className="w-sm">
      <MetaContainer>
        <Label htmlFor="demo-input">Email Address</Label>
        <Input id="demo-input" {...args} />
      </MetaContainer>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "hello@example.com",
    type: "email",
  },
};
