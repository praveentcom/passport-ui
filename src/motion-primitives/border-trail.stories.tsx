import type { Meta, StoryObj } from "@storybook/nextjs";
import { BorderTrail } from "@/client";
import { MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

import { action } from "storybook/actions";

const meta: Meta<typeof BorderTrail> = {
  title: "Motion Primitives/BorderTrail",
  component: BorderTrail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An animated border trail component that creates a moving highlight effect around the border of its container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
    size: {
      control: { type: "range", min: 10, max: 80, step: 1 },
      description: "Size of the animated trail element (1-80 pixels).",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "60",
        },
      },
    },
    transition: {
      control: { type: "object" },
      description: "Custom transition configuration for the trail animation.",
      table: {
        type: {
          summary: "Transition",
        },
        defaultValue: {
          summary: '{ repeat: Infinity, duration: 5, ease: "linear" }',
        },
      },
    },
    onAnimationComplete: {
      action: "onAnimationComplete",
      description: "Callback fired when animation completes a cycle.",
      table: {
        type: {
          summary: "() => void",
        },
        category: "Actions",
      },
    },
    style: {
      control: { type: "object" },
      description: "Custom CSS styles for the trail element.",
      table: {
        type: {
          summary: "React.CSSProperties",
        },
      },
    },
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
