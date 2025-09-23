import type { Meta, StoryObj } from "@storybook/nextjs";

import { FooterContainer } from ".";
import { SAMPLE_FOOTER_CONTENT } from "../../../.storybook/constants";

const meta: Meta<typeof FooterContainer> = {
  title: "Layout Containers/FooterContainer",
  component: FooterContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Footer container with width variants, sticky positioning, and visual effects.

## Variants
- **compact**: Max width 384px
- **relaxed**: Max width 768px
- **broad**: Max width 1152px
- **full**: Full width

## Features
- Optional sticky positioning
- Backdrop blur effect

## Usage
Use for copyright, navigation, contact info, social links.`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The footer content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["compact", "relaxed", "broad", "full"],
      description: "Controls the maximum width of the footer container",
      table: {
        type: { summary: "compact | relaxed | broad | full" },
        defaultValue: { summary: "full" },
        category: "Layout",
      },
    },
    sticky: {
      control: { type: "boolean" },
      description: "Whether the footer should stick to the bottom on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Positioning",
      },
    },
    blurred: {
      control: { type: "boolean" },
      description: "Whether the footer should have a blurred background effect",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Visual",
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling customization",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FooterContainer>;

export const Default: Story = {
  args: {
    sticky: true,
    blurred: true,
    children: SAMPLE_FOOTER_CONTENT,
    variant: "full",
  },
  decorators: [
    (Story) => (
      <div className="h-screen overflow-auto bg-background">
        <div className="p-4 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Content Block {i + 1}</h3>
              <p className="text-muted-foreground">
                This is sample content to demonstrate the sticky footer
                behavior. Scroll to see how the footer remains visible at the
                bottom with a blurred background effect. The footer uses the
                same background styling as the sidebar for visual consistency.
              </p>
            </div>
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
};
