import type { Meta, StoryObj } from "@storybook/nextjs";

import { SAMPLE_CONTENT_CONTAINER } from "../../.storybook/constants";
import { ContentContainer } from "../../src";

const meta: Meta<typeof ContentContainer> = {
  title: "Layouts/ContentContainer",
  component: ContentContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A comprehensive page wrapper component that combines structured data injection, consistent layout, and optional animations for complete page composition.

## Features
- Automatic structured data (JSON-LD) injection for SEO
- Optional blur-in entrance animation for smooth page transitions
- Consistent page layout with proper spacing and structure
- Built-in accessibility with proper page semantics
- Integration with theme system and responsive design
- Zero-config defaults for immediate use
- Performance-optimized animation with hardware acceleration

## SEO Integration
- Automatic Schema.org structured data injection
- Support for all Schema.org types (Article, Organization, etc.)
- Enhanced search engine visibility
- Rich search result snippets
- Improved content understanding by search engines

## Animation System
- Optional blur-in animation powered by Framer Motion
- Smooth page entrance effects
- Configurable animation timing and behavior
- Respects user motion preferences
- Hardware-accelerated performance

## Usage
Use page containers for:
- All main application pages
- Blog articles and content pages
- Landing pages and marketing content
- Any page that benefits from structured data
- Pages requiring consistent layout and animations

## Best Practices
- Always provide appropriate structured data for content type
- Use animations judiciously for better user experience
- Ensure structured data accuracy for SEO benefits
- Test structured data with Google's Rich Results Test

## Accessibility
Page containers provide proper page structure and semantic markup for screen readers and assistive technologies.`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The page content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentContainer>;

export const Default: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
  },
};
