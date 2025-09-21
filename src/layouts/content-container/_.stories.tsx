import type { Meta, StoryObj } from "@storybook/nextjs";

import { ContentContainer } from ".";
import { SAMPLE_CONTENT_CONTAINER } from "../../../.storybook/constants";

const meta: Meta<typeof ContentContainer> = {
  title: "Layouts/ContentContainer",
  component: ContentContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Page wrapper with layout, structured data injection, and animations.

## Features
- Schema.org structured data injection
- Consistent layout with spacing
- Optional entrance animations`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The page content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentContainer>;

export const Default: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
  },
};
