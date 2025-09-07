import type { Meta, StoryObj } from "@storybook/nextjs";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Card, MetaContainer } from "@/client";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A resizable panel group that allows users to adjust panel sizes with drag handles.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The direction of the panel group",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: "horizontal" },
      },
    },
  },
  render: (args) => (
    <div className="w-sm h-96">
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          <Card className="h-full rounded-none flex items-center justify-center">
            <MetaContainer title="Panel One">
              <p>This panel can be resized</p>
            </MetaContainer>
          </Card>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          <Card className="h-full rounded-none flex items-center justify-center">
            <MetaContainer title="Panel Two">
              <p>Drag the handle to resize</p>
            </MetaContainer>
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
