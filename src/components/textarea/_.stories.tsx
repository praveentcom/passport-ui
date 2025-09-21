import type { Meta, StoryObj } from "@storybook/nextjs";

import { Textarea } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Textarea for multi-line text input.

## Features
- Resizable height
- Configurable rows and columns
- Form integration`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed when the textarea is empty",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the textarea",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    defaultValue: {
      control: "text",
      description: "The default value when uncontrolled",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    rows: {
      control: "number",
      description: "The number of visible text lines",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3" },
        category: "Layout",
      },
    },
    cols: {
      control: "number",
      description: "The visible width of the text control",
      table: {
        type: { summary: "number" },
        category: "Layout",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    readOnly: {
      control: "boolean",
      description: "Whether the textarea is read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: "boolean",
      description: "Whether the textarea is required for form submission",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Validation",
      },
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed",
      table: {
        type: { summary: "number" },
        category: "Validation",
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback fired when the textarea value changes",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLTextAreaElement>) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => {
    return (
      <div className="w-sm">
        <Textarea {...args} />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here.",
  },
};
