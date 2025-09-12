import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { HoverCard, HoverCardContent, HoverCardTrigger } from ".";
import { MetaContainer } from "../../composables/meta-container";
import { Button } from "../button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A hover card component that displays rich preview content when hovering over trigger elements, built on Radix UI HoverCard primitives.

## Features
- Hover-triggered content preview with configurable timing
- Portal-based rendering for proper layering
- Automatic positioning with collision detection
- Customizable open and close delays
- Built-in accessibility with proper ARIA attributes
- Focus management and keyboard navigation
- Smooth animations and visual feedback

## Composition
Hover cards are composed of multiple components:
- **HoverCard**: Root container with state and timing management
- **HoverCardTrigger**: Element that triggers the hover card on hover
- **HoverCardContent**: The preview content container with positioning

## Usage
Use hover cards for:
- Link previews and rich tooltips
- User profile previews
- Content summaries and metadata
- Additional context without navigation
- Progressive disclosure of information

Perfect for providing quick previews without interrupting the user's workflow.

## Accessibility
Hover cards work with both mouse hover and keyboard focus, ensuring accessibility for all users.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the hover card",
      table: {
        type: { summary: "boolean" },
        category: "State",
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The default open state when initially rendered (uncontrolled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    openDelay: {
      control: { type: "range", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before the hover card opens",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
        category: "Timing",
      },
    },
    closeDelay: {
      control: { type: "range", min: 0, max: 2000, step: 100 },
      description: "Delay in milliseconds before the hover card closes",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
        category: "Timing",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback fired when the hover card open state changes",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Events",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Hover card composition with HoverCardTrigger and HoverCardContent components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
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
