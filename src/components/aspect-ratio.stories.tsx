import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { AspectRatio, Card, CardContent, MetaContainer } from "../../src";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `An aspect ratio container that maintains consistent proportions for content, built on Radix UI AspectRatio primitives.

## Features
- Maintains consistent aspect ratios regardless of container size
- Responsive design with automatic scaling
- Perfect for images, videos, and embedded content
- Prevents layout shift during content loading
- CSS-based implementation for optimal performance
- Works with any content type

## Usage
Use aspect ratios for:
- Image galleries and media content
- Video players and embedded content
- Card layouts with consistent proportions
- Responsive design patterns
- Preventing cumulative layout shift (CLS)

## Common Ratios
- **16:9** (1.78): Widescreen video, modern displays
- **4:3** (1.33): Traditional video, older displays
- **1:1** (1.0): Square images, profile pictures
- **3:2** (1.5): Photography standard
- **21:9** (2.33): Ultra-wide displays

## Accessibility
Aspect ratio containers preserve content accessibility and work seamlessly with screen readers.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    ratio: {
      control: { type: "range", min: 0.1, max: 10, step: 0.1 },
      description:
        "The desired aspect ratio calculated as width divided by height",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "1" },
        category: "Layout",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "The content to be displayed within the aspect ratio container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
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
