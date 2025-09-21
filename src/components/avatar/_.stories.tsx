import type { Meta, StoryObj } from "@storybook/nextjs";

import { Avatar, AvatarFallback, AvatarImage } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `User avatar with automatic fallback support.

## Components
- **Avatar**: Root container
- **AvatarImage**: Primary image
- **AvatarFallback**: Fallback content (usually initials)

## Features
- Automatic fallback when image fails
- Circular styling
- Optional monochrome mode`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
    monochrome: {
      control: { type: "boolean" },
      description: "Display avatar in grayscale with color revealed on hover",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Avatar composition with AvatarImage and AvatarFallback components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
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

export const Monochrome: Story = {
  args: {
    monochrome: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Avatar with monochrome effect that reveals color on hover. Great for reducing visual noise while maintaining interactivity.",
      },
    },
  },
  render: (args) => (
    <div className="flex gap-4">
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/4338ca/ffffff?text=AS"
          alt="Avatar"
        />
        <AvatarFallback>AS</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/dc2626/ffffff?text=MJ"
          alt="Avatar"
        />
        <AvatarFallback>MJ</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/059669/ffffff?text=RL"
          alt="Avatar"
        />
        <AvatarFallback>RL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const MonochromeGroup: Story = {
  args: {
    monochrome: true,
    className: "ring-2 ring-border",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Stacked avatars with monochrome effect. Each avatar reveals its color independently on hover.",
      },
    },
  },
  render: (args) => (
    <div className="flex -space-x-3">
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/7c3aed/ffffff?text=TK"
          alt="Avatar"
        />
        <AvatarFallback>TK</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/ea580c/ffffff?text=SL"
          alt="Avatar"
        />
        <AvatarFallback>SL</AvatarFallback>
      </Avatar>
      <Avatar {...args}>
        <AvatarImage
          src="https://placehold.co/100x100/0891b2/ffffff?text=JP"
          alt="Avatar"
        />
        <AvatarFallback>JP</AvatarFallback>
      </Avatar>
    </div>
  ),
};
