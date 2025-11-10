import Image from "next/image";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { AspectRatio } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card, CardContent } from "../card";
import { definition } from "./definition";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **AspectRatio**: Container that maintains specific aspect ratios

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
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
          <div className="meta-container">
            <h3>Aspect Ratio</h3>
            <p>16:9</p>
          </div>
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
          <div className="meta-container">
            <h3>Aspect Ratio</h3>
            <p>1:1</p>
          </div>
        </CardContent>
      </Card>
    ),
  },
};

export const ExampleImage: Story = {
  args: {
    ratio: 16 / 9,
    children: (
      <Image
        src="https://placehold.co/1600x900"
        className="h-full w-full rounded-xl object-cover"
        alt="Example Image"
        width={1600}
        height={900}
      />
    ),
  },
};
