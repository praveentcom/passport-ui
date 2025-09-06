import type { Meta, StoryObj } from "@storybook/nextjs";
import { AspectRatio } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof AspectRatio> = {
  title: "Components / Aspect Ratio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays content within a desired aspect ratio. Built on top of Radix UI AspectRatio primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "number", min: 0.1, max: 10, step: 0.1 },
      description: "The desired aspect ratio (width/height).",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "1",
        },
      },
    },
    children: {
      control: { type: "object", disable: true },
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      description:
        "The content to be displayed within the aspect ratio container.",
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <AspectRatio {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-border">
        <span className="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
      </div>
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-border">
        <span className="text-sm text-muted-foreground">1:1 Square</span>
      </div>
    ),
  },
};

export const Image: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <img
        src="https://placehold.co/1600x900"
        className="h-full w-full rounded-lg object-cover"
      />
    ),
  },
};
