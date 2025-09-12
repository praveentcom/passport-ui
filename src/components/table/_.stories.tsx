import type { Meta, StoryObj } from "@storybook/nextjs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A semantic table component for displaying structured tabular data with proper accessibility and responsive design.

## Features
- Semantic HTML table structure for accessibility
- Responsive design with horizontal scrolling on mobile
- Consistent styling with theme integration
- Support for headers, body, footer, and captions
- Proper table cell alignment and spacing
- Screen reader compatible with table semantics

## Composition
Tables are composed of multiple semantic components:
- **Table**: Root table container with styling
- **TableCaption**: Descriptive caption for the table
- **TableHeader**: Container for table header rows
- **TableBody**: Container for table data rows
- **TableFooter**: Container for table footer/summary rows
- **TableRow**: Individual table rows
- **TableHead**: Header cell components
- **TableCell**: Data cell components

## Usage
Use tables for:
- Displaying structured data in rows and columns
- Financial data, invoices, and reports
- User lists and data management interfaces
- Comparison data and specifications
- Any tabular information that benefits from column organization

## Best Practices
- Always provide meaningful table captions
- Use proper header cells for column identification
- Consider responsive behavior for mobile devices
- Align numeric data appropriately (usually right-aligned)

## Accessibility
Tables provide full semantic structure for screen readers with proper table navigation and cell relationships.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Table composition with TableHeader, TableBody, TableFooter, and other table components",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-md">
      <Table {...args}>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV004</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$450.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV005</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$550.00</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,250.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {},
};
