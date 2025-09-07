import type { Meta, StoryObj } from "@storybook/nextjs";
import { BlurIn } from "@/client";
import { Button, Card, CardContent, MetaContainer } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof BlurIn> = {
  title: "Motion Primitives/BlurIn",
  component: BlurIn,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A motion component that animates elements into view with a blur and fade effect.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The content to animate with blur-in effect.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
    delay: {
      control: { type: "range", min: 0, max: 2, step: 0.1 },
      description: "Delay before the animation starts (in seconds).",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "0",
        },
      },
    },
    duration: {
      control: { type: "range", min: 0.1, max: 2, step: 0.1 },
      description: "Duration of the animation (in seconds).",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "0.2",
        },
      },
    },
    blur: {
      control: { type: "text" },
      description: "Initial blur amount (CSS blur value).",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: '"4px"',
        },
      },
    },
    yOffset: {
      control: { type: "range", min: 0, max: 50 },
      description: "Initial Y offset for the element (in pixels).",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "12",
        },
      },
    },
    className: COMMON_CONTROLS.className,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Text with blur-in effect",
    delay: 0,
    duration: 0.2,
    blur: "4px",
    yOffset: 12,
  },
};

export const WithDelay: Story = {
  args: {
    children: "Text with blur-in effect after a delay",
    delay: 0.5,
    duration: 0.2,
  },
};

export const HeavyBlur: Story = {
  args: {
    children: "Text with more blur and longer duration",
    blur: "100px",
    duration: 0.8,
  },
};

export const LargeOffset: Story = {
  args: {
    children: "Text comes from further away",
    yOffset: 30,
  },
};

export const CardExample: Story = {
  render: (args) => (
    <BlurIn {...args}>
      <Card>
        <CardContent>
          <MetaContainer title="Personal Information">
            <div>
              <p>Jane Smith</p>
              <p>jane.smith@company.com</p>
            </div>
          </MetaContainer>
        </CardContent>
      </Card>
    </BlurIn>
  ),
  args: {
    delay: 0.2,
    duration: 0.4,
  },
};

export const ExampleMultiple: Story = {
  render: () => (
    <div className="section-container">
      <div className="title-container">
        <BlurIn delay={0}>
          <h3>Title appears first</h3>
        </BlurIn>
        <BlurIn delay={0.2}>
          <h4>Subtitle appears second</h4>
        </BlurIn>
      </div>
      <BlurIn delay={0.4}>
        <Button>Button appears last</Button>
      </BlurIn>
    </div>
  ),
};
