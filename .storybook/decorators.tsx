import React from "react";
import type { Decorator } from "@storybook/nextjs";
import { ThemeProvider } from "../src/theme/theme-provider";

export const withTheme: Decorator = (Story, context) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="py-6">
        <Story />
      </div>
    </ThemeProvider>
  );
};
