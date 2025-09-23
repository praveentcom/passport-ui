import type { Meta, StoryObj } from "@storybook/nextjs";

import { ScrollArea } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card, CardContent } from "../card";
import { definition } from "./definition";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **ScrollArea**: Container with customizable scrollbars

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
      description: "The scrollable content to display within the scroll area",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <ScrollArea {...args} className="h-48 rounded-md border">
        <div className="list-container p-4">
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i}>
              <CardContent>
                <div className="meta-container">
                  <h3>Item {i + 1}</h3>
                  <p>
                    This is item number {i + 1} in the scrollable list. The
                    scroll area allows for smooth scrolling through content that
                    exceeds the container height.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  args: {},
};
