import type { Meta, StoryObj } from "@storybook/nextjs";
import { ThemeProvider } from "next-themes";

import { ThemeButton } from "./theme-button";

const meta: Meta<typeof ThemeButton> = {
  title: "Composables/ThemeButton",
  component: ThemeButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A theme switch button component that allows users to switch between light, dark, and system theme preferences. Uses next-themes for theme management.",
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
      description: "Whether to show the minimal version without text labels",
      defaultValue: false,
    },
    variant: {
      control: "select",
      description: "The variant of the button",
      options: [
        "ghost",
        "outline",
        "secondary",
        "primary",
        "destructive",
        "link",
      ],
      defaultValue: "ghost",
    },
    align: {
      control: "select",
      description: "The alignment of the button",
      options: ["start", "end"],
      defaultValue: "end",
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
