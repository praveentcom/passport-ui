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
        component:
          "A control that allows the user to toggle between checked and not checked.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "The controlled checked state of the checkbox",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "The default checked state when uncontrolled",
      table: {
        type: { summary: "boolean" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Event handler called when the checked state changes",
      table: {
        type: { summary: "(checked: boolean | 'indeterminate') => void" },
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
