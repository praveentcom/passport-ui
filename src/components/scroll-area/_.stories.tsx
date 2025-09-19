import type { Meta, StoryObj } from "@storybook/nextjs";

import { ScrollArea } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Card, CardContent } from "../card";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A custom scrollable area component with styled scrollbars and smooth scrolling behavior, built on Radix UI ScrollArea primitives.

## Features
- Custom-styled scrollbars that match your theme
- Smooth scrolling with momentum on supported devices
- Horizontal and vertical scrolling support
- Configurable scrollbar visibility and behavior
- Built-in accessibility with proper scroll announcements
- Cross-browser consistent scrollbar appearance
- Touch-friendly scrolling on mobile devices

## Usage
Use scroll areas for:
- Content that exceeds container dimensions
- Fixed-height containers with overflow content
- Custom scrollbar styling requirements
- Consistent scrolling experience across browsers
- Lists, menus, and content areas with limited space

## Benefits Over Native Scrolling
- Consistent appearance across all browsers and operating systems
- Customizable scrollbar styling to match your design
- Better control over scrollbar behavior and visibility
- Enhanced accessibility features

## Best Practices
- Set appropriate container heights for the content
- Consider content length and user experience
- Ensure scrollbar visibility when needed
- Test scrolling behavior on various devices

## Accessibility
Scroll areas provide proper keyboard navigation and screen reader support with scroll position announcements.`,
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
