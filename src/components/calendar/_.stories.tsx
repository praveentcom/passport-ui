import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { DateRange } from "react-day-picker";
import { action } from "storybook/actions";

import { Calendar } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Calendar**: Interactive calendar for date selection

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
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description:
        "The selection mode that determines how dates can be selected",
      table: {
        type: { summary: '"single" | "multiple" | "range"' },
        defaultValue: { summary: '"single"' },
        category: "Behavior",
      },
    },
    selected: {
      control: false,
      description: "The currently selected date(s) - type depends on mode",
      table: {
        type: { summary: "Date | Date[] | DateRange | undefined" },
        category: "State",
      },
    },
    onSelect: {
      action: "selected",
      description: "Event handler called when date selection changes",
      table: {
        type: {
          summary: "(date: Date | Date[] | DateRange | undefined) => void",
        },
        category: "Events",
      },
    },
    captionLayout: {
      control: { type: "select" },
      options: ["label", "dropdown", "dropdown-years"],
      description: "Layout style for the month/year navigation caption",
      table: {
        type: { summary: '"label" | "dropdown" | "dropdown-years"' },
        defaultValue: { summary: '"label"' },
        category: "Appearance",
      },
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Whether to show days from adjacent months",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Appearance",
      },
    },
    disabled: {
      control: false,
      description:
        "Dates to disable - can be single date, array, or matcher function",
      table: {
        type: { summary: "Date | Date[] | Matcher | undefined" },
        category: "Validation",
      },
    },
    autoNavigateOnOutsideClick: {
      control: { type: "boolean" },
      description:
        "Automatically navigate to month when clicking outside dates",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    weekSpacing: {
      control: { type: "select" },
      options: ["mt-0", "mt-0.5", "mt-1", "mt-1.5", "mt-2", "mt-3"],
      description: "Vertical spacing between calendar week rows",
      table: {
        type: {
          summary: '"mt-0" | "mt-0.5" | "mt-1" | "mt-1.5" | "mt-2" | "mt-3"',
        },
        defaultValue: { summary: '"mt-2"' },
        category: "Layout",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    mode: "single",
    onSelect: action("selected"),
  },
  render: (args) => {
    const [singleDate, setSingleDate] = useState<Date | undefined>(new Date());
    const [multipleDates, setMultipleDates] = useState<Date[]>([]);
    const [rangeDate, setRangeDate] = useState<DateRange | undefined>(
      undefined
    );
    const [month, setMonth] = useState<Date>(new Date());

    const handleSelect = (
      selectedDate: Date | Date[] | DateRange | undefined
    ) => {
      if (args.mode === "multiple") {
        setMultipleDates((selectedDate as Date[]) || []);
      } else if (args.mode === "range") {
        setRangeDate(selectedDate as DateRange | undefined);
      } else {
        setSingleDate(selectedDate as Date | undefined);
      }
      action("selected")(selectedDate);
    };

    const handleMonthChange = (newMonth: Date) => {
      setMonth(newMonth);
      action("monthChanged")(newMonth);
    };

    if (args.mode === "single") {
      return (
        <Calendar
          {...args}
          mode="single"
          selected={singleDate}
          onSelect={handleSelect}
          month={month}
          onMonthChange={handleMonthChange}
        />
      );
    }

    if (args.mode === "multiple") {
      return (
        <Calendar
          {...args}
          mode="multiple"
          selected={multipleDates}
          onSelect={handleSelect}
          month={month}
          onMonthChange={handleMonthChange}
        />
      );
    }

    return (
      <Calendar
        {...args}
        mode="range"
        selected={rangeDate}
        onSelect={handleSelect}
        month={month}
        onMonthChange={handleMonthChange}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    className: "border rounded-md bg-card",
  },
};

export const MultipleSelection: Story = {
  args: {
    mode: "multiple",
    className: "border rounded-md bg-card",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar that allows selecting multiple dates. Click multiple dates to select them.",
      },
    },
  },
};

export const RangeSelection: Story = {
  args: {
    mode: "range",
    className: "border rounded-md bg-card",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar that allows selecting a date range. Click a start date, then click an end date to select a range.",
      },
    },
  },
};
