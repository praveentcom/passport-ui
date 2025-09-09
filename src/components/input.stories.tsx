import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import { Input, Label, MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A flexible and accessible input component for forms and user input with comprehensive styling and validation support.

## Features
- Multiple input types (text, email, password, number, tel, url, search)
- Built-in accessibility with proper ARIA attributes
- Focus management and keyboard navigation
- Consistent styling with theme integration
- Form validation support with error states
- Responsive design with proper mobile adaptations

## Usage
Use inputs for collecting user data in forms. Always pair with proper labels for accessibility and consider validation states for better user experience.`,
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
