import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { RadioGroup, RadioGroupItem } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Label } from "../label";
import { definition } from "./definition";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **RadioGroup**: Root container
- **RadioGroupItem**: Individual radio options

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
    <div className="meta-container">
      <Label htmlFor="radio">Choose an option</Label>
      <RadioGroup {...args} id="radio">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_1" id="option_1" />
          <Label htmlFor="option_1" className="text-muted-foreground">
            Option 1
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_2" id="option_2" />
          <Label htmlFor="option_2" className="text-muted-foreground">
            Option 2
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="option_3" id="option_3" />
          <Label htmlFor="option_3" className="text-muted-foreground">
            Option 3
          </Label>
        </div>
      </RadioGroup>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    defaultValue: "option_2",
  },
};
