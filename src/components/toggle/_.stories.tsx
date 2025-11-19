import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Toggle } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Toggle**: Two-state button for on/off states

// Guidelines: Use Toggle for immediate actions, Switch for settings, Checkbox for form selections

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
      control: { type: "select" },
      options: ["transparent", "outline"],
      description: "The visual variant that determines the toggle's appearance",
      table: {
        type: { summary: '"transparent" | "outline"' },
        defaultValue: { summary: '"outline"' },
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
    children: "Toggle",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "Toggle",
  },
};
