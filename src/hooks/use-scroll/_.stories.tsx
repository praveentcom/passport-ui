import React, { useRef } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { useScroll } from "./";
import { definition } from "./definition";

const meta: Meta = {
  title: "Hooks/useScroll",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **useScroll**: Hook for detecting scroll events

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

function UseScrollComponent({ target }: { target?: "window" | "element" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useScroll(
    10,
    target === "element" ? scrollRef : undefined
  );

  return (
    <div className="flex h-screen flex-col items-center section-container text-center">
      <div className="meta-container">
        <h3>useScroll Hook</h3>
        <p>
          Scroll{" "}
          {target === "element"
            ? "the element below"
            : "the window to see the value change."}
        </p>
      </div>
      <div
        className={`rounded-sm px-2 py-1 ${
          hasScrolled
            ? "bg-info text-info-foreground"
            : "bg-success text-success-foreground"
        }`}
      >
        {hasScrolled
          ? "Scrolled past the threshold"
          : "Not scrolled past the threshold"}
      </div>
      {target === "element" ? (
        <div
          ref={scrollRef}
          className="h-96 w-full overflow-y-scroll rounded-sm border"
        >
          <div className="h-[1000px] p-4">Scrollable content</div>
        </div>
      ) : (
        <div className="h-[200vh] pt-16">Scroll down the page</div>
      )}
    </div>
  );
}

export const WindowScroll: Story = {
  render: () => <UseScrollComponent target="window" />,
};

export const ElementScroll: Story = {
  render: () => <UseScrollComponent target="element" />,
};
