import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";

import { ToggleSelect, ToggleSelectItem } from "./toggle-select";

const meta: Meta<typeof ToggleSelect> = {
  title: "Components/ToggleSelect",
  component: ToggleSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The default selected value",
      table: {
        type: { summary: "string" },
      },
    },
  },
  render: (args) => {
    return (
      <ToggleSelect {...args}>
        <ToggleSelectItem value="option1">Option 1</ToggleSelectItem>
        <ToggleSelectItem value="option2">Option 2</ToggleSelectItem>
        <ToggleSelectItem value="option3">Option 3</ToggleSelectItem>
      </ToggleSelect>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "option1",
  },
};
