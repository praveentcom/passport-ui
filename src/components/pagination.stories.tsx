import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../src";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A comprehensive pagination component for navigating through multiple pages of content with accessible controls and flexible layouts.

## Features
- Previous and next navigation with disabled states
- Numbered page links with active state indication
- Ellipsis for truncated page ranges
- Built-in accessibility with proper ARIA labels
- Keyboard navigation support
- Responsive design with mobile adaptations
- Consistent styling with theme integration

## Composition
Pagination components work together:
- **Pagination**: Root navigation container
- **PaginationContent**: Content wrapper for pagination items
- **PaginationItem**: Individual pagination elements
- **PaginationLink**: Clickable page number links
- **PaginationPrevious**: Previous page navigation
- **PaginationNext**: Next page navigation
- **PaginationEllipsis**: Visual indicator for truncated pages

## Usage
Use pagination for:
- Large data sets and search results
- Blog posts and article lists
- Product catalogs and listings
- Any content split across multiple pages
- Table data with row limits

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
