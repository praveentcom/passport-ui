import type { Meta, StoryObj } from "@storybook/nextjs";
import { ThemeProvider } from "next-themes";

import { ThemeToggle } from "./theme-toggle";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof ThemeToggle> = {
  title: "Composables/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A theme toggle component that allows users to switch between light, dark, and system theme preferences. Uses AnimatedBackground for smooth transitions between selections.",
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
