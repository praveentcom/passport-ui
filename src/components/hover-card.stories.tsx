import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  MetaContainer,
} from "@/client";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "For sighted users to preview content available behind a link. Built on top of Radix UI Hover Card.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the hover card is open",
      table: {
        type: { summary: "boolean" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the hover card is open by default",
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
    openDelay: {
      control: { type: "range", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before opening",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
      },
    },
    closeDelay: {
      control: { type: "range", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before closing",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
      },
    },
  },
  args: {
    onOpenChange: action("onOpenChange"),
  },
  render: (args) => (
    <HoverCard {...args}>
      <HoverCardTrigger asChild>
        <Button variant="link">Passport UI</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-sm">
        <MetaContainer title="Maintainer">Praveen Thirumurugan</MetaContainer>
      </HoverCardContent>
    </HoverCard>
  ),
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
};
