import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A pagination component for navigating through multiple pages of content.

## Components
- **Pagination**: Root navigation container
- **PaginationContent**: Content wrapper for pagination items
- **PaginationItem**: Individual pagination elements
- **PaginationLink**: Clickable page number links
- **PaginationPrevious**: Previous page navigation
- **PaginationNext**: Next page navigation
- **PaginationEllipsis**: Visual indicator for truncated pages

## Features
- Previous and next navigation with disabled states
- Numbered page links with active state indication
- Ellipsis for truncated page ranges
- Built-in accessibility with ARIA labels
- Keyboard navigation support

## Usage
Use for large data sets, search results, blog posts, product catalogs, and content split across multiple pages.

## Best Practices
- Clearly indicate the current page
- Provide context about total pages when possible
- Use ellipsis appropriately for large page counts
- Ensure navigation controls are easily accessible

## Accessibility
Pagination provides full keyboard navigation and screen reader support with proper page announcements and navigation semantics.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Pagination composition with PaginationContent and navigation items",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onClick: action("pagination-clicked"),
  },
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={action("previous-clicked")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={action("page-1-clicked")}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive onClick={action("page-2-clicked")}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={action("page-3-clicked")}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={action("next-clicked")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {},
};

export const Simple: Story = {
  args: {},
  render: (args) => (
    <Pagination {...args}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={action("previous-clicked")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={action("page-1-clicked")}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive onClick={action("page-2-clicked")}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={action("page-3-clicked")}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={action("next-clicked")} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
