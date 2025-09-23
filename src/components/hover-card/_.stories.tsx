import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { action } from "storybook/actions";

import { HoverCard, HoverCardContent, HoverCardTrigger } from ".";
import { AUTHOR } from "../../constants";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";

const meta: Meta<typeof HoverCard> = {
  title: "Components/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **HoverCard**: Root container
- **HoverCardTrigger**: Triggers on hover
- **HoverCardContent**: Preview content

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
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={`${AUTHOR.url}.png`} />
            <AvatarFallback>{AUTHOR.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="meta-container">
            <h4>{AUTHOR.name}</h4>
            <p>
              <a href={AUTHOR.url}>@{AUTHOR.url.split("/").pop()}</a>
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Author, Passport UI
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  args: {},
};
