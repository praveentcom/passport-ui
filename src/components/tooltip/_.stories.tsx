import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { action } from "storybook/actions";

import { Tooltip, TooltipContent, TooltipTrigger } from ".";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Tooltip**: Root container
- **TooltipTrigger**: Triggers tooltip
- **TooltipContent**: Tooltip content

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
      control: { type: "object", disable: true },
      description:
        "Tooltip composition with TooltipTrigger and TooltipContent components",
      table: {
        type: {
          summary: "React.ReactNode",
          detail: "TooltipTrigger | TooltipContent",
        },
        category: "Content",
      },
    },
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the tooltip",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description:
        "The default open state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    delayDuration: {
      control: { type: "number" },
      description:
        "Duration in milliseconds from when the pointer enters the trigger until the tooltip opens",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
        category: "Behavior",
      },
    },
    disableHoverableContent: {
      control: { type: "boolean" },
      description:
        "When true, hovering the content will close the tooltip as the pointer leaves the trigger",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the tooltip changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
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
