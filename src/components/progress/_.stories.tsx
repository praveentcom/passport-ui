import type { Meta, StoryObj } from "@storybook/nextjs";

import { Progress } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Progress indicator for task completion status.

## Features
- Percentage-based value system (0-100)
- Indeterminate state for unknown progress
- Smooth animations`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description:
        "The progress value as a percentage (0-100). Use null or undefined for indeterminate progress",
      table: {
        type: { summary: "number | null | undefined" },
        category: "State",
      },
    },
    max: {
      control: { type: "number" },
      description: "The maximum value that represents 100% progress",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Range",
      },
    },
    getValueLabel: {
      control: false,
      description:
        "Function to generate accessible label for the progress value",
      table: {
        type: { summary: "(value: number, max: number) => string" },
        category: "Accessibility",
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
