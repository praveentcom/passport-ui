import { ThemeProvider } from "next-themes";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ThemeToggle } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof ThemeToggle> = {
  title: "Composables/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Theme toggle for light, dark, and system preferences.

## Features
- Three options: light, dark, system
- Animated background transitions
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
    className: COMMON_CONTROLS.className,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {
  args: {},
};
