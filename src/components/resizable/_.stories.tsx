import type { Meta, StoryObj } from "@storybook/nextjs";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { MetaContainer } from "../../composables/meta-container";
import { Card } from "../card";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A flexible resizable panel system that allows users to dynamically adjust panel sizes with intuitive drag handles.

## Features
- Smooth drag-and-drop resizing with visual feedback
- Horizontal and vertical panel arrangements
- Configurable minimum and maximum panel sizes
- Persistent panel sizes across sessions
- Touch-friendly resizing for mobile devices
- Keyboard navigation support
- Built-in accessibility with proper ARIA attributes

## Composition
Resizable panels are composed of multiple components:
- **ResizablePanelGroup**: Root container that manages panel layout and resizing
- **ResizablePanel**: Individual resizable panel containers
- **ResizableHandle**: Interactive drag handles between panels

## Usage
Use resizable panels for:
- Split-pane layouts and editors
- Dashboard layouts with adjustable widgets
- File explorers and code editors
- Sidebar layouts with user-controlled widths
- Any interface where users benefit from customizable space allocation

## Best Practices
- Set reasonable minimum sizes to prevent unusable panels
- Provide visual feedback during resize operations
- Consider saving panel sizes to user preferences
- Ensure touch targets are adequately sized for mobile

## Accessibility
Resizable panels provide keyboard navigation and screen reader support with proper panel and handle announcements.`,
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
