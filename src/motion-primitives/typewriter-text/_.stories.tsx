import type { Meta, StoryObj } from "@storybook/nextjs";

import { TypewriterText } from ".";

const meta: Meta<typeof TypewriterText> = {
  title: "Motion Primitives/TypewriterText",
  component: TypewriterText,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Text animation with typewriter, fade-in-words, and slide-in-chars effects.

## Features
- Animation modes: typewriter, fade-in-words, slide-in-chars
- Single strings or arrays
- Customizable cursor
- Looping support
- Adjustable speeds and delays
- Respects reduced motion`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: { type: "text" },
      description:
        "The text to animate (string or array of strings for multiple texts)",
      table: {
        type: { summary: "string | string[]" },
      },
    },
    mode: {
      control: { type: "select" },
      options: ["typewriter", "fade-in-words", "slide-in-chars"],
      description: "Animation mode for text reveal",
      table: {
        type: { summary: "TypewriterMode" },
        defaultValue: { summary: "typewriter" },
      },
    },
    speed: {
      control: { type: "range", min: 10, max: 200, step: 10 },
      description: "Animation speed in milliseconds (lower = faster)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "50" },
      },
    },
    delay: {
      control: { type: "range", min: 0, max: 3000, step: 100 },
      description: "Initial delay before animation starts (in milliseconds)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    showCursor: {
      control: { type: "boolean" },
      description: "Whether to show the blinking cursor",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    cursorChar: {
      control: { type: "text" },
      description: "Character to use for the cursor",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "|" },
      },
    },
    loop: {
      control: { type: "boolean" },
      description: "Whether to loop the animation continuously",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    pauseTime: {
      control: { type: "range", min: 500, max: 5000, step: 250 },
      description: "Pause time between loops or texts (in milliseconds)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "2000" },
      },
    },
    splitByWords: {
      control: { type: "boolean" },
      description:
        "Split text by words instead of characters (typewriter mode)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    startOnMount: {
      control: { type: "boolean" },
      description: "Start animation immediately on component mount",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for the text",
      table: {
        type: { summary: "string" },
      },
    },
    cursorClassName: {
      control: { type: "text" },
      description: "Additional CSS classes for the cursor",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Building amazing user experiences with Passport UI",
    mode: "typewriter",
    speed: 30,
    showCursor: true,
    className: "text-xl font-medium text-foreground",
  },
  render: (args) => (
    <div className="max-w-2xl text-center">
      <TypewriterText {...args} />
    </div>
  ),
};

export const FadeInWordsMode: Story = {
  args: {
    text: "Every word appears with fade animation with Passport UI",
    mode: "fade-in-words",
    speed: 150,
    showCursor: false,
    className: "text-xl font-medium text-foreground",
  },
  render: (args) => (
    <div className="max-w-2xl text-center">
      <TypewriterText {...args} />
    </div>
  ),
};

export const SlideInCharsMode: Story = {
  args: {
    text: "Characters slide in with style with Passport UI",
    mode: "slide-in-chars",
    speed: 80,
    showCursor: false,
    className: "text-xl font-medium text-foreground",
  },
  render: (args) => (
    <div className="max-w-2xl text-center">
      <TypewriterText {...args} />
    </div>
  ),
};

export const MultipleTexts: Story = {
  args: {
    text: [
      "First, we build amazing products with Passport UI",
      "Then, we create beautiful experiences",
      "Finally, we deliver exceptional value",
    ],
    mode: "typewriter",
    speed: 30,
    pauseTime: 1500,
    showCursor: true,
    className: "text-xl font-medium text-foreground",
  },
  render: (args) => (
    <div className="max-w-2xl text-center">
      <TypewriterText {...args} />
    </div>
  ),
};

export const CustomCursor: Story = {
  args: {
    text: "Custom cursor characters add personality with Passport UI",
    mode: "typewriter",
    speed: 30,
    showCursor: true,
    cursorChar: "▋",
    cursorClassName: "text-blue-500 font-bold",
    className: "text-lg font-medium text-foreground",
  },
  render: (args) => (
    <div className="max-w-2xl text-center">
      <TypewriterText {...args} />
    </div>
  ),
};
