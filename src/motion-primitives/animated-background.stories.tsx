import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { AnimatedBackground } from "../../src";

const meta: Meta<typeof AnimatedBackground> = {
  title: "Motion Primitives/AnimatedBackground",
  component: AnimatedBackground,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An animated background component that creates smooth highlighting effects for interactive elements, powered by Framer Motion.

## Features
- Smooth animated background that follows active elements
- Support for both hover and click interactions
- Automatic size and position calculation
- Customizable transition timing and easing
- Zero-config setup with intelligent defaults
- Accessible interaction patterns

## Animation Details
The AnimatedBackground creates a moving highlight that:
1. **Tracks**: Automatically follows the active element
2. **Sizes**: Matches the dimensions of the target element
3. **Transitions**: Smoothly animates between positions and sizes
4. **Responds**: To both hover and click interactions

## Implementation
Each child element must have a unique \`data-id\` attribute for the component to track and animate between elements.

## Use Cases
Perfect for:
- Tab navigation with active indicators
- Toggle switches and radio button groups
- Menu item highlighting
- Segmented controls
- Any multi-option selector interface`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Interactive elements to render. Each child must have a unique data-id prop for tracking",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    enableHover: {
      control: { type: "boolean" },
      description:
        "Enable hover interaction mode instead of click-to-select behavior",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Interaction",
      },
    },
    transition: {
      control: { type: "object" },
      description:
        "Framer Motion transition configuration for the background animation",
      table: {
        type: { summary: "Transition" },
        category: "Animation",
      },
    },
    onValueChangeAction: {
      action: "onValueChangeAction",
      description:
        "Callback fired when the active element changes, receives the new active data-id",
      table: {
        type: { summary: "(newActiveId: string | null) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onValueChangeAction(newActiveId) {
      action("onValueChangeAction")(newActiveId);
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "bg-border rounded-sm",
    enableHover: true,
    children: ["One", "Two", "Three"].map((item) => (
      <div
        key={item}
        data-id={item}
        className="mx-2 px-2.5 py-1 cursor-pointer"
      >
        <p>{item}</p>
      </div>
    )),
  },
};

export const Click: Story = {
  args: {
    className: "bg-border rounded-sm",
    enableHover: false,
    children: ["Male", "Female"].map((item) => (
      <div key={item} data-id={item} className="px-2.5 py-1 cursor-pointer">
        <p>{item}</p>
      </div>
    )),
  },
};
