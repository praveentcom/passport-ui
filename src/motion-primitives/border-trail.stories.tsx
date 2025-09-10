import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { BorderTrail } from "../../src";
import { MetaContainer } from "../../src";

const meta: Meta<typeof BorderTrail> = {
  title: "Motion Primitives/BorderTrail",
  component: BorderTrail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An animated border trail component that creates a captivating moving highlight effect around container borders, powered by Framer Motion.

## Features
- Smooth perimeter animation with customizable speed
- Configurable trail size and appearance
- Support for gradients, colors, and custom styling
- Infinite loop animation with cycle completion callbacks
- Hardware-accelerated performance
- Easy integration with any container element

## Animation Details
The BorderTrail creates a moving element that travels around the perimeter of its container:
1. **Path**: Follows the exact border path of the container
2. **Speed**: Configurable via transition duration
3. **Size**: Adjustable trail element dimensions
4. **Style**: Full CSS customization support including gradients

## Performance
Uses Framer Motion's optimized path animation with hardware acceleration for smooth 60fps performance across devices.

## Use Cases
Perfect for:
- Interactive card hover effects
- Attention-grabbing CTAs and buttons
- Loading states and progress indicators
- Premium UI element highlighting
- Gaming and entertainment interfaces`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "range", min: 10, max: 200, step: 1 },
      description: "Size of the animated trail element in pixels",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "60" },
        category: "Appearance",
      },
    },
    transition: {
      control: { type: "object" },
      description:
        "Framer Motion transition configuration for the trail animation",
      table: {
        type: { summary: "Transition" },
        defaultValue: {
          summary: '{ repeat: Infinity, duration: 5, ease: "linear" }',
        },
        category: "Animation",
      },
    },
    style: {
      control: { type: "object" },
      description:
        "Custom CSS styles for the trail element (colors, gradients, filters, etc.)",
      table: {
        type: { summary: "React.CSSProperties" },
        category: "Styling",
      },
    },
    onAnimationComplete: {
      action: "onAnimationComplete",
      description:
        "Callback fired when the animation completes one full cycle around the border",
      table: {
        type: { summary: "() => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onAnimationComplete() {
      action("onAnimationComplete")();
    },
  },
  render: (args) => (
    <div className="relative p-4 border border-border rounded-lg">
      <BorderTrail {...args} />
      <MetaContainer title="Border Trail Animation">
        <p>Component with an animated border trail.</p>
      </MetaContainer>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 60,
    className: "bg-primary",
  },
};

export const Gradient: Story = {
  args: {
    size: 100,
    className:
      "bg-gradient-to-r from-blue-500/0 via-green-500/50 to-red-600/100",
    style: {
      borderRadius: "50%",
      filter: "blur(2px)",
    },
  },
};
