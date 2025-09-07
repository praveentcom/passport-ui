import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal a section of content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["single", "multiple"],
      description:
        "Determines whether one or multiple items can be opened at the same time.",
      table: {
        type: {
          summary: "single | multiple",
        },
        defaultValue: {
          summary: "single",
        },
      },
    },
    collapsible: {
      control: { type: "boolean" },
      description:
        'When type is "single", allows closing content when clicking trigger of an open item.',
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    defaultValue: {
      control: { type: "text" },
      description:
        "The value of the item to expand when initially rendered (uncontrolled).",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    value: {
      control: { type: "text" },
      description: "The controlled value of the item to expand.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description:
        "Event handler called when the expanded state of an item changes.",
      table: {
        type: {
          summary: "(value: string) => void",
        },
        category: "Actions",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description:
        "When true, prevents the user from interacting with the accordion.",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "false",
        },
      },
    },
    dir: {
      control: { type: "select" },
      options: ["ltr", "rtl"],
      description: "The reading direction of the accordion.",
      table: {
        type: {
          summary: "ltr | rtl",
        },
        defaultValue: {
          summary: "ltr",
        },
      },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the accordion.",
      table: {
        type: {
          summary: "horizontal | vertical",
        },
        defaultValue: {
          summary: "vertical",
        },
      },
    },
    className: COMMON_CONTROLS.className,
    children: {
      control: false,
      description: "AccordionItem components.",
      table: {
        disable: true,
      },
    },
  },
  args: {
    onValueChange(value: string) {
      action("onValueChange")(value);
    },
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Shipping Details</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We offer worldwide shipping through trusted courier partners.
            Standard delivery takes 3-5 business days, while express shipping
            ensures delivery within 1-2 business days.
          </p>
          <p>
            All orders are carefully packaged and fully insured. Track your
            shipment in real-time through our dedicated tracking portal.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Return Policy</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    type: "single",
    collapsible: true,
    className: "w-sm",
  },
};
