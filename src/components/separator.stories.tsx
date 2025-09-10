import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Separator } from "../../src";
import { Card, CardContent } from "../../src";
import { MetaContainer } from "../../src";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A visual separator component for dividing content sections, built on Radix UI Separator primitives.

## Features
- Horizontal and vertical orientation support
- Semantic separation with proper ARIA attributes
- Decorative and non-decorative modes for accessibility
- Consistent styling with theme integration
- Flexible positioning and sizing
- Screen reader compatibility with role management

## Usage
Use separators to:
- Visually divide content sections
- Create clear boundaries between related groups
- Improve content organization and readability
- Provide semantic structure for assistive technologies

## Accessibility
- **Decorative**: Purely visual, hidden from screen readers (default)
- **Non-decorative**: Semantic separator announced to screen readers
- Choose based on whether the separation has meaning beyond visual presentation

## Orientation
- **Horizontal**: Divides content vertically (most common)
- **Vertical**: Divides content horizontally (for side-by-side layouts)`,
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
        <MetaContainer>
          <h4>Project Alpha</h4>
          <p>A modern web application built with React and TypeScript.</p>
        </MetaContainer>
        <Separator />
        <p>Current progress: 75%</p>
      </CardContent>
    </Card>
  ),
};
