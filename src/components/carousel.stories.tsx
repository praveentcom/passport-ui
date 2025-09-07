import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  MetaContainer,
} from "@/client";
import { Card, CardContent } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A carousel with motion and swipe built using Embla Carousel.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the carousel",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" },
      },
    },
    opts: {
      control: "object",
      description: "Options for the Embla carousel",
      table: {
        type: { summary: "CarouselOptions" },
        defaultValue: { summary: "{}" },
      },
    },
    plugins: {
      control: false,
      description: "Embla carousel plugins",
      table: {
        type: { summary: "CarouselPlugin" },
      },
    },
    setApi: {
      action: "setApi",
      description: "Callback to get the carousel API instance",
      table: {
        type: { summary: "(api: CarouselApi) => void" },
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
