import type { Meta, StoryObj } from "@storybook/nextjs";
import { Slash } from "lucide-react";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Breadcrumb } from "../../src";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A navigation breadcrumb component that shows the current page location within a hierarchical structure.

## Features
- Hierarchical navigation with clickable path segments
- Automatic path truncation for long breadcrumbs
- Dropdown overflow handling for mobile optimization
- Customizable separators and styling
- Built-in accessibility with proper navigation semantics
- Support for back button integration
- Responsive design with mobile adaptations

## Usage
Use breadcrumbs for:
- Website navigation and wayfinding
- Multi-level category browsing
- Documentation and help systems
- E-commerce product navigation
- Any hierarchical content structure

## Best Practices
- Keep breadcrumb labels concise and descriptive
- Use consistent naming conventions
- Ensure all segments except current are clickable
- Consider mobile truncation for long paths

## Accessibility
Breadcrumbs provide semantic navigation structure with proper ARIA attributes and keyboard navigation support.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    path: {
      control: "object",
      description:
        "Array of breadcrumb path objects with href and label properties",
      table: {
        type: { summary: "BreadcrumbPath[]" },
        category: "Navigation",
      },
    },
    back: {
      control: "object",
      description: "Optional back button configuration with href",
      table: {
        type: { summary: "{ href: string }" },
        category: "Navigation",
      },
    },
    separator: {
      control: { type: "object", disable: true },
      description: "Custom separator element between breadcrumb items",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Appearance",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    path: [
      { href: "/", label: "Home" },
      { href: "/products", label: "Products" },
      { href: "/products/electronics", label: "Electronics" },
      { href: "/products/electronics/phones", label: "Smartphones" },
    ],
  },
  render: (args) => <Breadcrumb {...args} />,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    path: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Documentation" },
      { href: "/docs/components", label: "Components" },
      { href: "/docs/components/breadcrumb", label: "Breadcrumb" },
    ],
  },
};

export const LongPath: Story = {
  args: {
    path: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Documentation" },
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/getting-started/installation", label: "Installation" },
      { href: "/docs/getting-started/installation/nextjs", label: "Next.js" },
      {
        href: "/docs/getting-started/installation/nextjs/app-router",
        label: "App Router",
      },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: <Slash />,
    path: [
      { href: "/", label: "Home" },
      { href: "/docs", label: "Documentation" },
      { href: "/docs/getting-started", label: "Getting Started" },
      { href: "/docs/getting-started/installation", label: "Installation" },
      { href: "/docs/getting-started/installation/nextjs", label: "Next.js" },
      {
        href: "/docs/getting-started/installation/nextjs/app-router",
        label: "App Router",
      },
    ],
  },
};
