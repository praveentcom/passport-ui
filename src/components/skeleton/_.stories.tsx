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
        component: `A skeleton loading component that displays placeholder content while data is being fetched or processed.

## Features
- Smooth animated shimmer effect for visual feedback
- Flexible sizing and shape customization via CSS classes
- Consistent styling with theme integration
- Zero-config defaults for immediate use
- Composable for complex loading layouts
- Accessible loading state indication

## Usage
Use skeletons to:
- Show loading states for content that takes time to load
- Maintain layout stability during data fetching
- Provide visual feedback during asynchronous operations
- Create smooth transitions from loading to loaded states

## Best Practices
- Match the skeleton shape to the final content layout
- Use multiple skeletons to represent different content sections
- Combine with proper loading semantics for screen readers

## Accessibility
Skeletons provide visual loading indication and can be enhanced with ARIA labels for screen reader users.`,
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
