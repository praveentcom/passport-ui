import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button,
  Input,
  Label,
  MetaContainer,
} from "@/client";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays rich content in a portal, triggered by a button. Built on top of Radix UI Popover.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the popover is open",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the popover is open by default",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
      },
    },
    modal: {
      control: "boolean",
      description: "Whether the popover should be modal",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-sm">
        <div className="section-container">
          <MetaContainer title="Dimensions">
            Set the dimensions for the layer.
          </MetaContainer>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Height</Label>
              <Input id="height" defaultValue="100%" className="col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {},
};
