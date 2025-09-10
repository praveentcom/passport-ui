import type { Meta, StoryObj } from "@storybook/nextjs";

import { SAMPLE_HEADER_CONTENT } from "../../.storybook/constants";
import { HeaderContainer } from "./header-container";

const meta: Meta<typeof HeaderContainer> = {
  title: "Layouts/HeaderContainer",
  component: HeaderContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A flexible header container component designed to complement ContentContainer inside SidebarInset. Provides consistent header styling with advanced positioning and visual effects.

## Features
- Responsive width variants (compact, relaxed, full)
- Optional sticky positioning for persistent header visibility
- Backdrop blur effect for enhanced visual hierarchy
- Seamless integration with the layout system
- Built-in accessibility with proper semantic markup
- Consistent spacing and styling with other layout components
- Uses sidebar background colors for visual consistency

## Sticky Positioning
When \`sticky={true}\`, the header remains visible at the top of the viewport during scroll, providing persistent navigation or key information access.

## Blur Effect
When \`blurred={true}\`, the header gains a backdrop blur effect with semi-transparent background, creating visual depth while maintaining content visibility underneath.

## Variants
- **compact**: Maximum width of 384px (24rem) with centered alignment
- **relaxed**: Maximum width of 768px (48rem) with centered alignment  
- **full**: Full width spanning the entire container

## Usage
Use HeaderContainer for:
- Page titles and navigation
- Action bars and toolbar areas
- Breadcrumb navigation
- Search interfaces
- Any header content that needs consistent styling

## Best Practices
- Use sticky headers sparingly to avoid overwhelming the interface
- Combine blur effects with sticky positioning for modern glass-morphism aesthetics
- Ensure header content remains accessible and doesn't obstruct main content
- Consider mobile responsiveness when using compact variants

## Integration
HeaderContainer is designed to work seamlessly with PageLayout and ContentContainer, providing a complete layout solution for modern web applications.`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The header content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["compact", "relaxed", "full"],
      description: "Controls the maximum width of the header container",
      table: {
        type: { summary: "compact | relaxed | full" },
        defaultValue: { summary: "full" },
        category: "Layout",
      },
    },
    sticky: {
      control: { type: "boolean" },
      description: "Whether the header should stick to the top on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Positioning",
      },
    },
    blurred: {
      control: { type: "boolean" },
      description: "Whether the header should have a blurred background effect",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Visual",
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling customization",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeaderContainer>;

export const Default: Story = {
  args: {
    sticky: true,
    blurred: true,
    children: SAMPLE_HEADER_CONTENT,
  },
  decorators: [
    (Story) => (
      <div className="h-screen overflow-auto bg-background">
        <Story />
        <div className="p-6 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Content Block {i + 1}</h3>
              <p className="text-muted-foreground">
                This is sample content to demonstrate the sticky header
                behavior. Scroll to see how the header remains visible at the
                top with a blurred background effect. The header uses the same
                background styling as the sidebar for visual consistency.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  ],
};
