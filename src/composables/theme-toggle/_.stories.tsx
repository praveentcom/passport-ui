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
        component: `A sophisticated theme toggle component that allows users to switch between light, dark, and system theme preferences with smooth animated transitions.

## Features
- Three theme options: light, dark, and system (follows OS preference)
- Smooth animated background transitions between selections
- Built with next-themes for robust theme management
- Accessible button controls with proper ARIA labels
- Responsive design with consistent styling
- Automatic system theme detection and updates

## Usage
Place this component in your app's navigation or settings area. It automatically syncs with the user's system preferences when "system" is selected and persists the choice across sessions.

## Dependencies
Requires \`next-themes\` ThemeProvider to be configured in your app root with \`attribute="class"\` and \`enableSystem\` props.`,
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
