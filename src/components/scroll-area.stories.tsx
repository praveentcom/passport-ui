import type { Meta, StoryObj } from "@storybook/nextjs";
import { CardContent, ScrollArea } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Card, MetaContainer } from "@/client";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A scrollable area component with custom scrollbars.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <ScrollArea {...args} className="h-48 rounded-md border">
        <div className="list-container p-4">
          {Array.from({ length: 20 }, (_, i) => (
            <Card key={i}>
              <CardContent>
                <MetaContainer title={`Item ${i + 1}`}>
                  <p>
                    This is item number {i + 1} in the scrollable list. The
                    scroll area allows for smooth scrolling through content that
                    exceeds the container height.
                  </p>
                </MetaContainer>
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
