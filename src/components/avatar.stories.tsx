import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../../src";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A user avatar component with automatic fallback support, built on Radix UI Avatar primitives.

## Features
- Automatic fallback when image fails to load
- Consistent circular styling with theme integration
- Accessible image loading with proper alt text
- Composable architecture with image and fallback components
- Support for stacking and grouping patterns
- Responsive sizing with CSS custom properties

## Composition
Avatars are composed of multiple components:
- **Avatar**: Root container with consistent sizing and styling
- **AvatarImage**: The primary image with loading and error handling
- **AvatarFallback**: Fallback content (usually initials) displayed when image fails

## Usage
Use avatars to represent users, accounts, or entities throughout your interface. Always provide meaningful fallback content for accessibility and reliability.

## Accessibility
Avatars include proper image alt text and fallback content for screen readers.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
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
