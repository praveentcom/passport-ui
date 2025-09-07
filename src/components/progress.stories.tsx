import type { Meta, StoryObj } from "@storybook/nextjs";
import { Progress } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value as a percentage (0-100)",
      table: {
        type: { summary: "number" },
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <Progress {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 60,
  },
};
