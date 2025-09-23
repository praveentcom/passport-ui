import type { Meta, StoryObj } from "@storybook/nextjs";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card } from "../card";
import { definition } from "./definition";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **ResizablePanelGroup**: Root container
- **ResizablePanel**: Individual panels
- **ResizableHandle**: Drag handles between panels

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
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The layout direction of the panel group",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Layout",
      },
    },
    children: {
      control: { type: "object", disable: true },
      description:
        "Resizable composition with ResizablePanel and ResizableHandle components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm h-96">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <Card className="h-full rounded-none flex items-center justify-center">
            <div className="meta-container">
              <h3>Panel One</h3>
              <p>This panel can be resized</p>
            </div>
          </Card>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Card className="h-full rounded-none flex items-center justify-center">
            <div className="meta-container">
              <h3>Panel Two</h3>
              <p>Drag the handle to resize</p>
            </div>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Default: Story = {
  args: {
    direction: "horizontal",
  },
};
