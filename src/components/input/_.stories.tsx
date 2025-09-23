import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Input } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Label } from "../label";
import { definition } from "./definition";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Input**: Standard text input field for forms

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description:
        "The HTML input type that determines behavior and validation",
      table: {
        type: {
          summary:
            '"text" | "email" | "password" | "number" | "tel" | "url" | "search"',
        },
        defaultValue: { summary: '"text"' },
        category: "Behavior",
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text displayed when the input is empty",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the input",
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
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    readOnly: {
      control: "boolean",
      description:
        "Whether the input is read-only (focusable but not editable)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    required: {
      control: "boolean",
      description: "Whether the input is required for form submission",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Validation",
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback fired when the input value changes",
      table: {
        type: { summary: "(event: ChangeEvent<HTMLInputElement>) => void" },
        category: "Events",
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Callback fired when the input receives focus",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement>) => void" },
        category: "Events",
      },
    },
    onBlur: {
      action: "onBlur",
      description: "Callback fired when the input loses focus",
      table: {
        type: { summary: "(event: FocusEvent<HTMLInputElement>) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onChange: action("onChange"),
    onFocus: action("onFocus"),
    onBlur: action("onBlur"),
  },
  render: (args) => (
    <div className="w-sm">
      <div className="meta-container">
        <Label htmlFor="demo-input">Email Address</Label>
        <Input id="demo-input" {...args} />
      </div>
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
