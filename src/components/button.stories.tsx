import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A button component that can be used to trigger an action.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      type: "string",
      options: [
        "primary",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "outline",
        },
        type: {
          summary: "string",
        },
      },
      description: "The variant of the button.",
    },
    size: {
      type: "string",
      options: ["regular", "medium", "large"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
      description: "The size of the button.",
    },
    children: {
      control: { type: "text" },
      description: "The content of the button.",
    },
    asChild: COMMON_CONTROLS.asChild,
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "outline",
    size: "regular",
  },
};

export const RegularSize: Story = {
  render: () => (
    <div className="w-xs list-container grid-cols-2">
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const MediumSize: Story = {
  render: () => (
    <div className="w-sm list-container grid-cols-2">
      <Button variant="primary" size="medium">
        Primary
      </Button>
      <Button variant="destructive" size="medium">
        Destructive
      </Button>
      <Button variant="outline" size="medium">
        Outline
      </Button>
      <Button variant="secondary" size="medium">
        Secondary
      </Button>
      <Button variant="ghost" size="medium">
        Ghost
      </Button>
      <Button variant="link" size="medium">
        Link
      </Button>
    </div>
  ),
};

export const LargeSize: Story = {
  render: () => (
    <div className="w-sm list-container grid-cols-2">
      <Button variant="primary" size="large">
        Primary
      </Button>
      <Button variant="destructive" size="large">
        Destructive
      </Button>
      <Button variant="outline" size="large">
        Outline
      </Button>
      <Button variant="secondary" size="large">
        Secondary
      </Button>
      <Button variant="ghost" size="large">
        Ghost
      </Button>
      <Button variant="link" size="large">
        Link
      </Button>
    </div>
  ),
};
