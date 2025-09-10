import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MetaContainer,
} from "../../src";
import { Card, CardContent } from "../../src";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A responsive carousel component with touch/swipe support and smooth animations, built on Embla Carousel.

## Features
- Touch and mouse drag support for mobile and desktop
- Smooth animations with momentum scrolling
- Horizontal and vertical orientations
- Keyboard navigation with arrow keys
- Loop and autoplay capabilities via options
- Plugin system for extended functionality
- Responsive design with flexible item sizing
- Built-in accessibility with proper ARIA attributes

## Composition
Carousels are composed of multiple components:
- **Carousel**: Root container with Embla configuration
- **CarouselContent**: Scrollable container for carousel items
- **CarouselItem**: Individual slide/item wrapper
- **CarouselPrevious**: Previous navigation button
- **CarouselNext**: Next navigation button

## Usage
Use carousels for:
- Image galleries and media showcases
- Product listings and showcases
- Testimonials and reviews
- Feature highlights and promotions
- Any content that benefits from horizontal scrolling

## Customization
Extensive customization through Embla options and plugins for advanced features like autoplay, infinite loop, and custom animations.

## Accessibility
Carousels provide keyboard navigation and screen reader support with proper slide announcements.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The scroll direction of the carousel",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Layout",
      },
    },
    opts: {
      control: "object",
      description:
        "Embla carousel configuration options (loop, autoplay, etc.)",
      table: {
        type: { summary: "CarouselOptions" },
        category: "Configuration",
      },
    },
    plugins: {
      control: false,
      description: "Embla carousel plugins for extended functionality",
      table: {
        type: { summary: "CarouselPlugin[]" },
        category: "Configuration",
      },
    },
    setApi: {
      action: "setApi",
      description:
        "Callback to receive the carousel API instance for programmatic control",
      table: {
        type: { summary: "(api: CarouselApi) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Carousel composition with CarouselContent, CarouselItem, and navigation components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <Carousel {...args}>
        <CarouselContent
          className={args.orientation === "vertical" ? "h-24" : ""}
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent>
                  <MetaContainer title={`Slide ${index + 1}`}>
                    Move using buttons
                  </MetaContainer>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};
