import { ReactNode } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Mail } from "lucide-react";

import { PageLayout } from ".";
import {
  COMMON_CONTROLS,
  SAMPLE_CONTENT_CONTAINER,
  SAMPLE_FOOTER_CONTENT,
  SAMPLE_HEADER_CONTENT,
  SAMPLE_SIDEBAR_MENU_ITEMS,
} from "../../../.storybook/constants";
import { Button } from "../../components/button";
import { SidebarContainer } from "../sidebar-container";

const meta: Meta<typeof PageLayout> = {
  title: "Layouts/PageLayout",
  component: PageLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A comprehensive page layout component that orchestrates the entire application structure, providing a complete foundation for modern web applications with integrated sidebar, header, footer, and content management.

## Layout Architecture
- **Sidebar Integration**: Automatic SidebarProvider wrapping for sidebar functionality
- **Header Management**: Optional sticky positioning with backdrop blur effects
- **Footer Management**: Configurable footer with positioning and visual effects
- **Content Container**: Flexible content area with variant-based width control
- **Structured Data**: Automatic Schema.org JSON-LD injection for SEO benefits

## SEO Integration
- Automatic structured data injection for enhanced search engine visibility
- Support for all Schema.org types (WebPage, Article, Organization, etc.)
- Rich search result snippets and improved content understanding
- Zero-config SEO optimization with customizable structured data object.

## Accessibility
PageLayout provides comprehensive accessibility features including proper semantic markup, ARIA labels, keyboard navigation support, and screen reader compatibility across all integrated components.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description:
        "The page content (can include SidebarContainer, ContentContainer, etc.)",
      table: {
        type: { summary: "ReactNode" },
        category: "Content",
      },
    },
    leftSidebar: {
      control: false,
      description: "The left sidebar content - should include SidebarContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Sidebar",
      },
    },
    rightSidebar: {
      control: false,
      description:
        "The right sidebar content - should include SidebarContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Sidebar",
      },
    },
    header: {
      control: false,
      description: "The header content - will be wrapped in HeaderContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Header",
      },
    },
    footer: {
      control: false,
      description: "The footer content - will be wrapped in FooterContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Footer",
      },
    },
    headerOptions: {
      control: { type: "object" },
      description: "Header configuration options (variant, sticky, blurred, revealStylesOnScroll)",
      table: {
        type: { summary: "HeaderOptions" },
        defaultValue: { summary: '{ variant: "full", sticky: true, blurred: true, revealStylesOnScroll: false }' },
        category: "Header",
      },
    },
    footerOptions: {
      control: { type: "object" },
      description: "Footer configuration options (variant, sticky, blurred)",
      table: {
        type: { summary: "FooterOptions" },
        defaultValue: { summary: '{ variant: "full", sticky: false, blurred: false }' },
        category: "Footer",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <PageLayout {...args} />,
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

const sampleLeftSidebar: ReactNode = (
  <SidebarContainer
    menuItems={SAMPLE_SIDEBAR_MENU_ITEMS}
    side="left"
    sidebarHeader={
      <div className="meta-container">
        <h3>Passport UI</h3>
        <p>Version 1.1.0</p>
      </div>
    }
    sidebarFooter={
      <Button>
        <Mail />
        Support
      </Button>
    }
    searchable={true}
    searchPlaceholder="Search navigation…"
    autoInferActiveItem={true}
  />
);

const sampleRightSidebar: ReactNode = (
  <SidebarContainer
    menuItems={SAMPLE_SIDEBAR_MENU_ITEMS.slice(0, 3)}
    side="right"
    sidebarHeader={
      <div className="meta-container">
        <h3>Tools</h3>
        <p>Quick Actions</p>
      </div>
    }
    sidebarFooter={
      <Button>
        <Mail />
        Help
      </Button>
    }
    searchable={false}
    autoInferActiveItem={true}
  />
);

export const Default: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    leftSidebar: sampleLeftSidebar,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
    },
  },
};

export const RightSidebar: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    rightSidebar: sampleRightSidebar,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: false,
      blurred: false,
    },
  },
};

export const DualSidebars: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    leftSidebar: sampleLeftSidebar,
    rightSidebar: sampleRightSidebar,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: false,
      blurred: false,
    },
  },
};

export const NoSidebar: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: false,
      blurred: false,
    },
  },
};
