import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An image element with a fallback for representing the user.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://placehold.co/32x32" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const Fallback: Story = {
  args: {},
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="" alt="Avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Stacked: Story = {
  args: {
    className: "ring-2 ring-border",
  },
  render: (args) => (
    <div className="flex -space-x-3">
      <Avatar {...args}>
        <AvatarImage src="https://placehold.co/32x32" alt="Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage src="" alt="Avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  ),
};
