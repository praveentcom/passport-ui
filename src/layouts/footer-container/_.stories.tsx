import type { Meta, StoryObj } from "@storybook/nextjs";

import { FooterContainer } from ".";
import { SAMPLE_FOOTER_CONTENT } from "../../../.storybook/constants";

const meta: Meta<typeof FooterContainer> = {
  title: "Layouts/FooterContainer",
  component: FooterContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A flexible footer container component designed to complement ContentContainer inside SidebarInset. Provides consistent footer styling with advanced positioning and visual effects.

## Features
- Responsive width variants (compact, relaxed, broad, full)
- Optional sticky positioning for persistent footer visibility
- Backdrop blur effect for enhanced visual hierarchy
- Seamless integration with the layout system
- Built-in accessibility with proper semantic markup
- Consistent spacing and styling with other layout components
- Uses sidebar background colors for visual consistency

## Sticky Positioning
When \`sticky={true}\`, the footer remains visible at the bottom of the viewport during scroll, providing persistent access to footer information or actions.

## Blur Effect
When \`blurred={true}\`, the footer gains a backdrop blur effect with semi-transparent background, creating visual depth while maintaining content visibility above.

## Variants
- **compact**: Maximum width of 384px (24rem) with centered alignment
- **relaxed**: Maximum width of 768px (48rem) with centered alignment  
- **broad**: Maximum width of 1152px (72rem) with centered alignment
- **full**: Full width spanning the entire container

## Usage
Use FooterContainer for:
- Copyright and legal information
- Site navigation links
- Contact information
- Social media links
- Action buttons or secondary navigation
- Any footer content that needs consistent styling

## Best Practices
- Use sticky footers sparingly to avoid overwhelming the interface
- Combine blur effects with sticky positioning for modern glass-morphism aesthetics
- Ensure footer content remains accessible and doesn't obstruct main content
- Consider mobile responsiveness when using compact variants
- Keep footer content concise and relevant

## Integration
FooterContainer is designed to work seamlessly with PageLayout and ContentContainer, providing a complete layout solution for modern web applications.`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The footer content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["compact", "relaxed", "broad", "full"],
      description: "Controls the maximum width of the footer container",
      table: {
        type: { summary: "compact | relaxed | broad | full" },
        defaultValue: { summary: "full" },
        category: "Layout",
      },
    },
    sticky: {
      control: { type: "boolean" },
      description: "Whether the footer should stick to the bottom on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Positioning",
      },
    },
    blurred: {
      control: { type: "boolean" },
      description: "Whether the footer should have a blurred background effect",
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
type Story = StoryObj<typeof FooterContainer>;

export const Default: Story = {
  args: {
    sticky: true,
    blurred: true,
    children: SAMPLE_FOOTER_CONTENT,
    variant: "full",
  },
  decorators: [
    (Story) => (
      <div className="h-screen overflow-auto bg-background">
        <div className="p-4 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Content Block {i + 1}</h3>
              <p className="text-muted-foreground">
                This is sample content to demonstrate the sticky footer
                behavior. Scroll to see how the footer remains visible at the
                bottom with a blurred background effect. The footer uses the
                same background styling as the sidebar for visual consistency.
              </p>
            </div>
          ))}
        </div>
        <Story />
      </div>
    ),
  ],
};
