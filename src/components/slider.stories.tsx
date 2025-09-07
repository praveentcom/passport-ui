import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import { Slider, MetaContainer, Label } from "@/client";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An input where the user selects a value from within a given range.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "object",
      description: "The default value of the slider",
      table: {
        type: { summary: "number[]" },
      },
    },
    value: {
      control: "object",
      description: "The controlled value of the slider",
      table: {
        type: { summary: "number[]" },
      },
    },
    onValueChange: {
      control: false,
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: number[]) => void" },
      },
    },
    min: {
      control: { type: "range", min: 0 },
      description: "The minimum value",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: "number",
      description: "The maximum value",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    step: {
      control: { type: "range", min: 0 },
      description: "The step amount",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    onValueChange: action("valueChange"),
  },
  render: (args) => {
    const [value, setValue] = useState(args.defaultValue || args.value || [50]);

    const handleValueChange = (newValue: number[]) => {
      setValue(newValue);
      args.onValueChange?.(newValue);
    };

    return (
      <div className="w-sm">
        <MetaContainer>
          <Label>Slider</Label>
          <Slider {...args} value={value} onValueChange={handleValueChange} />
          <p>
            Current value: {Array.isArray(value) ? value.join(", ") : value}
          </p>
        </MetaContainer>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
};

export const DualValue: Story = {
  args: {
    defaultValue: [20, 80],
    max: 100,
    step: 5,
  },
};
