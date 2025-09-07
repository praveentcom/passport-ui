import type { Meta, StoryObj } from "@storybook/nextjs";
import { AspectRatio, Card, CardContent, MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
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
      control: { type: "range", min: 0.1, max: 10, step: 0.1 },
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
      <Card className="h-full">
        <CardContent>
          <MetaContainer title="Aspect Ratio">16:9</MetaContainer>
        </CardContent>
      </Card>
    ),
  },
};

export const Square: Story = {
  args: {
    ratio: 1,
    children: (
      <Card className="h-full">
        <CardContent>
          <MetaContainer title="Aspect Ratio">1:1</MetaContainer>
        </CardContent>
      </Card>
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
