import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Progress } from "../progress";
import { definition } from "./definition";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Card**: Flexible content container
- **CardHeader**: Header section for title and description
- **CardTitle**: Title heading (h3) for the card
- **CardDescription**: Descriptive text for the card
- **CardContent**: Main content area
- **CardFooter**: Footer section for actions

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
      description: "Card content, typically CardContent component",
      table: {
        type: {
          summary: "React.ReactNode",
          detail: "CardContent | React.ReactNode[]",
        },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
    onClick: {
      control: false,
      description: "Click event handler for interactive cards",
      table: {
        type: { summary: "(event: React.MouseEvent) => void" },
        category: "Events",
      },
    },
  },
  render: (args) => <Card {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <CardHeader key="header">
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Card description with additional details about the card content.
        </CardDescription>
      </CardHeader>,
      <CardContent key="content">
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>,
    ],
  },
};

export const ExampleProject: Story = {
  args: {
    children: [
      <CardHeader key="header">
        <CardTitle>Project Alpha</CardTitle>
        <CardDescription>
          A modern web application built with React and TypeScript.
        </CardDescription>
      </CardHeader>,
      <CardContent key="content">
        <div className="meta-container">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <Progress value={75} />
        </div>
      </CardContent>,
    ],
  },
};

export const ExampleProfile: Story = {
  args: {
    children: [
      <CardHeader key="header">
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </CardHeader>,
      <CardContent key="content">
        <div className="meta-container">
          <p>📧 john.doe@example.com</p>
          <p>📍 San Francisco, CA</p>
          <p>🏢 Tech Corp Inc.</p>
        </div>
      </CardContent>,
    ],
  },
};

export const WithFooter: Story = {
  args: {
    children: [
      <CardHeader key="header">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          You have 3 unread messages from your team.
        </CardDescription>
      </CardHeader>,
      <CardContent key="content">
        <div className="meta-container">
          <p className="text-sm">Your latest updates are ready to review.</p>
        </div>
      </CardContent>,
      <CardFooter key="footer">
        <button className="text-sm font-medium">Mark all as read</button>
      </CardFooter>,
    ],
  },
};
