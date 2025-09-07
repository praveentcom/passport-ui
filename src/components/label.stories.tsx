import type { Meta, StoryObj } from "@storybook/nextjs";
import { Label } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A label component that can be used to label an input or other form elements.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content of the label",
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Label {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a label",
  },
};
