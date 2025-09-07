import type { Meta, StoryObj } from "@storybook/nextjs";
import { AnimatedBackground } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

import { action } from "storybook/actions";

const meta: Meta<typeof AnimatedBackground> = {
  title: "Motion Primitives/AnimatedBackground",
  component: AnimatedBackground,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An animated background component that highlights the active element with smooth transitions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Elements to render with animated background. Each child must have a data-id prop.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    onValueChangeAction: {
      action: "onValueChangeAction",
      description: "Callback fired when the active element changes.",
      table: {
        type: {
          summary: "(newActiveId: string | null) => void",
        },
        category: "Actions",
      },
    },
    className: COMMON_CONTROLS.className,
    transition: {
      control: { type: "object" },
      description:
        "Custom transition configuration for the animated background.",
      table: {
        type: {
          summary: "Transition",
        },
      },
    },
    enableHover: {
      control: { type: "boolean" },
      description: "Enable hover interaction instead of click interaction.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
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
