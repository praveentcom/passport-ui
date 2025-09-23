import React, { useRef } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { useScroll } from "./";

const meta: Meta = {
  title: "Hooks/useScroll",
  parameters: {
    layout: "fullscreen",
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
    <div className="flex h-screen flex-col items-center gap-4 p-4 text-center">
      <h1 className="text-2xl font-bold">useScroll Hook</h1>
      <p>
        Scroll{" "}
        {target === "element"
          ? "the element below"
          : "the window to see the value change."}
      </p>
      <div
        className={`fixed top-4 rounded-md p-4 ${
          hasScrolled ? "bg-red-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        {hasScrolled
          ? "Scrolled past the threshold"
          : "Not scrolled past the threshold"}
      </div>
      {target === "element" ? (
        <div
          ref={scrollRef}
          className="h-96 w-full overflow-y-scroll rounded-md border"
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
