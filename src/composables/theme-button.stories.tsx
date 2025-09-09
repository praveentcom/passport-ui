import type { Meta, StoryObj } from "@storybook/nextjs";
import { ThemeProvider } from "next-themes";

import { ThemeButton } from "@/client";

const meta: Meta<typeof ThemeButton> = {
  title: "Composables/ThemeButton",
  component: ThemeButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A streamlined theme switching button component with dropdown menu for theme selection, built with next-themes integration.

## Features
- Quick theme switching with dropdown menu
- Three theme options: light, dark, and system
- Minimal and full display modes
- Multiple button variants and styling options
- Built-in accessibility with proper ARIA labels
- Automatic system theme detection
- Persistent theme preferences
- Smooth transitions between themes

## Variants
- **Minimal**: Icon-only button for compact layouts
- **Full**: Button with text labels for clarity

## Usage
Use theme buttons for:
- Header navigation and toolbars
- Settings panels and user preferences
- Quick access theme switching
- Any location where users need theme control

The component automatically syncs with system preferences when "system" is selected.

## Dependencies
Requires \`next-themes\` ThemeProvider to be configured in your app root with \`attribute="class"\` and \`enableSystem\` props.

## Accessibility
Theme buttons provide full keyboard navigation and screen reader support with clear theme option announcements.`,
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
