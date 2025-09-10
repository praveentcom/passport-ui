import React from "react";

import type { Decorator } from "@storybook/nextjs";

import { ThemeProvider } from "../src/providers/theme-provider";

export const withTheme: Decorator = (Story, context) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Story />
    </ThemeProvider>
  );
};
