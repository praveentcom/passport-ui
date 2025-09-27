import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "../button";
import { LiveRegion } from "./_";
import { definition } from "./definition";

const meta: Meta<typeof LiveRegion> = {
  title: "Components/LiveRegion",
  component: LiveRegion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **LiveRegion**: Announces dynamic content changes to screen readers

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
    message: {
      control: "text",
      description: "The message to be announced by screen readers.",
    },
    role: {
      control: "select",
      options: ["status", "alert", "log"],
      description: "The ARIA role of the live region.",
      defaultValue: { summary: "status" },
    },
    "aria-live": {
      control: "select",
      options: ["polite", "assertive", "off"],
      description: "The politeness level for screen reader announcements.",
      defaultValue: { summary: "polite" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    role: "status",
    "aria-live": "polite",
  },
  render: (args) => {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const handleClick = () => {
      const newCount = count + 1;
      setCount(newCount);
      setMessage(`Button clicked ${newCount} times.`);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <h1>Live Region</h1>
        <p>
          Click the button to update the message. Screen readers will announce
          the change.
        </p>
        <Button onClick={handleClick}>Click Me</Button>
        <LiveRegion {...args} message={message} />
        <p>
          Last message: <span className="italic">{message}</span>
        </p>
      </div>
    );
  },
};

export const Assertive: Story = {
  args: {
    role: "alert",
    "aria-live": "assertive",
  },
  render: (args) => {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const handleClick = () => {
      const newCount = count + 1;
      setCount(newCount);
      setMessage(`An important update has occurred! (${newCount})`);
    };

    return (
      <div className="flex flex-col items-center gap-4">
        <h1>Live Region (Assertive)</h1>
        <p>
          Click the button to send an assertive announcement. This should
          interrupt the user.
        </p>
        <Button onClick={handleClick} variant="destructive">
          Trigger Alert
        </Button>
        <LiveRegion {...args} message={message} />
        <p>
          Last message: <span className="italic">{message}</span>
        </p>
      </div>
    );
  },
};
