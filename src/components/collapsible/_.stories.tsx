import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { ChevronsUpDown } from "lucide-react";
import { action } from "storybook/actions";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../button";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Collapsible**: Root container
- **CollapsibleTrigger**: Toggles collapsible
- **CollapsibleContent**: Expandable content

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
    open: {
      control: { type: "boolean" },
      description: "The controlled open state of the collapsible",
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
    disabled: {
      control: { type: "boolean" },
      description: "Whether the collapsible is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the collapsible open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Collapsible composition with CollapsibleTrigger and CollapsibleContent components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <Collapsible className="w-sm list-container" {...args}>
      <div className="flex justify-between items-center">
        <h4>Do you know today&apos;s date?</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost">
            <ChevronsUpDown />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="meta-container">
          <p>Today&apos;s date is {new Date().toLocaleDateString()}.</p>
          <p>The current time is {new Date().toLocaleTimeString()}.</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
};
