import type { Meta, StoryObj } from "@storybook/nextjs";

import { Label } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Semantic label for form elements.

## Features
- Association with form controls via htmlFor
- Click-to-focus behavior`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description:
        "The label text content that describes the associated form element",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    htmlFor: {
      control: { type: "text" },
      description: "The id of the form element this label is associated with",
      table: {
        type: { summary: "string" },
        category: "Association",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Label {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a label",
  },
};
