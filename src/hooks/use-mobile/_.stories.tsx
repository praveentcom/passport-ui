import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { useIsMobile } from "./";
import { definition } from "./definition";

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
    <div className="flex flex-col items-center section-container text-center">
      <div className="meta-container">
        <h3>useIsMobile Hook</h3>
        <p>Resize your browser window to see the value change.</p>
      </div>
      <div
        className={`rounded-sm px-2 py-1 ${
          isMobile
            ? "bg-info text-info-foreground"
            : "bg-success text-success-foreground"
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
