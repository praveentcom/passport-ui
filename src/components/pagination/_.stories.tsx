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
import { definition } from "./definition";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Pagination**: Root navigation container
- **PaginationContent**: Content wrapper for pagination items
- **PaginationItem**: Individual pagination elements
- **PaginationLink**: Clickable page number links
- **PaginationPrevious**: Previous page navigation
- **PaginationNext**: Next page navigation
- **PaginationEllipsis**: Ellipsis for skipped pages

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
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
          <PaginationPrevious href="#" onClick={action("previous-clicked")}>
            <span>Previous</span>
          </PaginationPrevious>
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
          <PaginationNext href="#" onClick={action("next-clicked")}>
            <span>Next</span>
          </PaginationNext>
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
          <PaginationPrevious href="#" onClick={action("previous-clicked")}>
            <span>Previous</span>
          </PaginationPrevious>
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
          <PaginationNext href="#" onClick={action("next-clicked")}>
            <span>Next</span>
          </PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
