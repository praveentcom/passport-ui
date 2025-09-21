import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card, CardContent } from "../card";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Responsive carousel with touch/swipe support.

## Components
- **Carousel**: Root container
- **CarouselContent**: Scrollable container
- **CarouselItem**: Individual slide
- **CarouselPrevious**: Previous button
- **CarouselNext**: Next button

## Features
- Touch/mouse drag support
- Horizontal/vertical orientations
- Keyboard navigation
- Loop and autoplay options`,
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
                  <div className="meta-container">
                    <h3>Slide {index + 1}</h3>
                    <p>Move using buttons</p>
                  </div>
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
