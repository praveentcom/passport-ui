import type { Meta, StoryObj } from "@storybook/nextjs";
import { Separator } from "@/client";
import { Card, CardContent } from "@/client";
import { MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A separator component that can be used to separate content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator.",
      table: {
        defaultValue: {
          summary: "horizontal",
        },
        type: {
          summary: "horizontal | vertical",
        },
      },
    },
    decorative: {
      control: { type: "boolean" },
      options: [true, false],
      description:
        "Whether or not the component is purely decorative. When true, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.",
      table: {
        defaultValue: {
          summary: "true",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm h-24 items-center justify-center flex">
      <Separator {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const ExampleCard: Story = {
  render: () => (
    <Card>
      <CardContent>
        <MetaContainer>
          <h4>Project Alpha</h4>
          <p>A modern web application built with React and TypeScript.</p>
        </MetaContainer>
        <Separator />
        <p>Current progress: 75%</p>
      </CardContent>
    </Card>
  ),
};
