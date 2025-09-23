import type { Meta, StoryObj } from "@storybook/nextjs";

import { Card, CardContent } from ".";
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
- **CardContent**: Main content area

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
      <CardContent key="content">
        <div className="meta-container">
          <h3>Card Title</h3>
          <p>
            This is the main content of the card. You can put any content here.
          </p>
        </div>
      </CardContent>,
    ],
  },
};

export const ExampleProject: Story = {
  args: {
    children: [
      <CardContent key="content">
        <div className="meta-container">
          <h3>Project Alpha</h3>
          <p>A modern web application built with React and TypeScript.</p>
        </div>
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
