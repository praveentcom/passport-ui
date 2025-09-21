import { ThemeProvider } from "next-themes";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ThemeButton } from ".";

const meta: Meta<typeof ThemeButton> = {
  title: "Composables/ThemeButton",
  component: ThemeButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Theme switching button with dropdown menu.

## Variants
- **Minimal**: Icon-only
- **Full**: With text labels

## Features
- Theme switching with dropdown
- Three options: light, dark, system
- Multiple button variants
- System theme detection

## Dependencies
Requires \`next-themes\` ThemeProvider with \`attribute="class"\` and \`enableSystem\`.`,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    minimal: {
      control: "boolean",
      description:
        "Whether to show the minimal icon-only version without text labels",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    variant: {
      control: "select",
      options: [
        "ghost",
        "outline",
        "secondary",
        "primary",
        "destructive",
        "link",
      ],
      description: "The visual variant of the theme button",
      table: {
        type: {
          summary:
            '"ghost" | "outline" | "secondary" | "primary" | "destructive" | "link"',
        },
        defaultValue: { summary: '"ghost"' },
        category: "Appearance",
      },
    },
    align: {
      control: "select",
      options: ["start", "end"],
      description: "The alignment of the dropdown menu content",
      table: {
        type: { summary: '"start" | "end"' },
        defaultValue: { summary: '"end"' },
        category: "Layout",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeButton>;

export const Default: Story = {
  args: {
    minimal: false,
    variant: "ghost",
    align: "end",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default theme button with optional type, variant, and alignment.",
      },
    },
  },
};
