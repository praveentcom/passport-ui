import type { Meta, StoryObj } from "@storybook/nextjs";
import { Toggle } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

import { action } from "storybook/actions";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toggle component that can be used to switch between two states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["transparent", "outline"],
      description: "The variant of the toggle.",
      table: {
        defaultValue: {
          summary: "outline",
        },
        type: {
          summary: "transparent | outline",
        },
      },
    },
    size: {
      control: { type: "select" },
      options: ["regular", "medium", "large"],
      description: "The size of the toggle.",
      table: {
        defaultValue: {
          summary: "regular",
        },
        type: {
          summary: "regular | medium | large",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content of the toggle.",
    },
    pressed: {
      control: { type: "boolean" },
      description: "The controlled pressed state of the toggle.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    defaultPressed: {
      control: { type: "boolean" },
      description: "The default pressed state when initially rendered.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "When true, prevents the user from interacting with the toggle.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    onPressedChange: {
      action: "onPressedChange",
      description:
        "Event handler called when the pressed state of the toggle changes.",
      table: {
        type: {
          summary: "(pressed: boolean) => void",
        },
        defaultValue: {
          summary: "() => {}",
        },
        category: "Actions",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onPressedChange(pressed) {
      action("onPressedChange")(pressed);
    },
  },
  render: (args) => <Toggle {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "outline",
    size: "regular",
    children: "Toggle",
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    size: "regular",
    children: "Toggle",
  },
};
