import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Button,
  MetaContainer,
} from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";
import { ChevronsUpDown } from "lucide-react";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "An interactive component which expands/collapses a panel.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "The open state of the collapsible when controlled",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultOpen: {
      control: { type: "boolean" },
      description: "The default open state when uncontrolled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the collapsible is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Event handler called when the open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
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
        <MetaContainer>
          <p>Today&apos;s date is {new Date().toLocaleDateString()}.</p>
          <p>The current time is {new Date().toLocaleTimeString()}.</p>
        </MetaContainer>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  args: {},
};
