import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { Switch } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Switch**: Toggle control for binary states

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
