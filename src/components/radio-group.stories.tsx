import type { Meta, StoryObj } from "@storybook/nextjs";
import { RadioGroup, RadioGroupItem, Label, MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The default selected value",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "The controlled selected value",
      table: {
        type: { summary: "string" },
      },
    },
    onValueChange: {
      action: "value-changed",
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the radio group is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
