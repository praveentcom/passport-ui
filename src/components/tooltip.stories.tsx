import type { Meta, StoryObj } from "@storybook/nextjs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/client";
import { Button } from "@/client";

import { action } from "storybook/actions";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tooltip component that can be used to display content when hovering over an element.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      table: {
        type: {
          summary: "ReactNode",
          detail: "TooltipTrigger | TooltipContent",
        },
      },
      description: "Contents of the tooltip.",
    },
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the tooltip.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "The default open state when initially rendered.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    delayDuration: {
      control: { type: "number" },
      description:
        "The duration from when the pointer enters the trigger until the tooltip gets opened.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "700",
        },
      },
    },
    disableHoverableContent: {
      control: { type: "boolean" },
      description:
        "When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the tooltip changes.",
      table: {
        type: {
          summary: "(open: boolean) => void",
        },
        defaultValue: {
          summary: "() => {}",
        },
        category: "Actions",
      },
    },
  },
  args: {
    onOpenChange(open) {
      action("onOpenChange")(open);
    },
  },
  render: (args) => <Tooltip {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <TooltipTrigger asChild key="trigger">
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>,
      <TooltipContent key="content">This is a tooltip</TooltipContent>,
    ],
  },
};

export const Directions: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap justify-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>
    </div>
  ),
};
