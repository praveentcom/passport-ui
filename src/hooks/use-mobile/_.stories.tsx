import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { useIsMobile } from "./";

const meta: Meta = {
  title: "Hooks/useIsMobile",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **useIsMobile**: Hook for detecting mobile viewport

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
};

export default meta;

type Story = StoryObj<typeof meta>;

function UseMobileComponent() {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">useIsMobile Hook</h1>
      <p>Resize your browser window to see the value change.</p>
      <div
        className={`mt-4 rounded-md p-4 ${
          isMobile ? "bg-blue-500 text-white" : "bg-green-500 text-white"
        }`}
      >
        {isMobile
          ? "You are on a mobile device"
          : "You are on a desktop device"}
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => <UseMobileComponent />,
};
