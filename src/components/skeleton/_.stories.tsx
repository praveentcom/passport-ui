import type { Meta, StoryObj } from "@storybook/nextjs";

import { Skeleton } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Skeleton loading placeholder while data is fetched.

## Features
- Animated shimmer effect
- Flexible sizing via CSS classes
- Composable for complex layouts`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Skeleton {...args} />,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "size-12",
  },
};

export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-sm">
      <Skeleton className="h-48 w-full rounded-xl" />
      <div className="grid gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  ),
};
