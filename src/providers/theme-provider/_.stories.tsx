import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { ThemeButton } from "../../composables/theme-button";
import { ThemeProvider } from "./_";
import { definition } from "./definition";

const meta: Meta<typeof ThemeProvider> = {
  title: "Providers/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **ThemeProvider**: Provider for managing theme switching

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
    children: {
      control: false,
      description: "The content to be rendered within the theme provider.",
    },
    attribute: {
      control: "text",
      description: "The HTML attribute to set on the `html` element.",
      defaultValue: { summary: "class" },
    },
    defaultTheme: {
      control: "text",
      description: "The default theme to use.",
      defaultValue: { summary: "system" },
    },
    enableSystem: {
      control: "boolean",
      description: "Whether to enable system theme detection.",
      defaultValue: { summary: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
  },
  render: (args) => (
    <ThemeProvider {...args}>
      <div className="flex min-h-screen min-w-96 items-center justify-center bg-background text-foreground">
        <div className="flex flex-col items-center gap-4">
          <h1>Theme Provider</h1>
          <p>Click the button to toggle the theme.</p>
          <ThemeButton />
        </div>
      </div>
    </ThemeProvider>
  ),
};
