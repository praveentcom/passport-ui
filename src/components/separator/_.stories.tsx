import type { Meta, StoryObj } from "@storybook/nextjs";

import { Separator } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card, CardContent } from "../card";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Visual separator for dividing content sections.

## Features
- Horizontal/vertical orientation
- Decorative/non-decorative modes

## Orientation
- **Horizontal**: Divides content vertically
- **Vertical**: Divides content horizontally`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator line",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Layout",
      },
    },
    decorative: {
      control: { type: "boolean" },
      description:
        "Whether the separator is purely visual (true) or has semantic meaning (false)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Accessibility",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm h-24 items-center justify-center flex">
      <Separator {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const ExampleCard: Story = {
  render: () => (
    <Card>
      <CardContent>
        <div className="meta-container">
          <h4>Project Alpha</h4>
          <p>A modern web application built with React and TypeScript.</p>
        </div>
        <Separator />
        <p>Current progress: 75%</p>
      </CardContent>
    </Card>
  ),
};
