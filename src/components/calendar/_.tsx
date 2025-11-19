"use client";

import React, { useCallback, useEffect, useRef } from "react";

import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import {
  DayButton,
  DayPicker,
  Modifiers,
  getDefaultClassNames,
} from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  autoNavigateOnOutsideClick?: boolean;
  weekSpacing?: "mt-0" | "mt-0.5" | "mt-1" | "mt-1.5" | "mt-2" | "mt-3";
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  formatters,
  components,
  autoNavigateOnOutsideClick = false,
  weekSpacing = "mt-2",
  ...props
}: CalendarProps) {
  const defaultClassNames = getDefaultClassNames();

  const handleDayClick = useCallback(
    (day: Date, modifiers: Modifiers, e: React.MouseEvent) => {
      if (autoNavigateOnOutsideClick && modifiers.outside) {
        const newMonth = new Date(day.getFullYear(), day.getMonth(), 1);
        if (props.onMonthChange) {
          props.onMonthChange(newMonth);
        }
      }

      if (props.onDayClick) {
        props.onDayClick(day, modifiers, e);
      }
    },
    [autoNavigateOnOutsideClick, props]
  );

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      onDayClick={handleDayClick}
      className={cn(
        "bg-card group/calendar p-2 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-2 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex gap-2 flex-col w-full", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-2 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          "passport-button aria-disabled:opacity-50 p-2 select-none h-8 w-8",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          "passport-button aria-disabled:opacity-50 p-2 select-none h-8 w-8",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-between w-full h-8 mb-2",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-xs font-medium justify-center gap-2",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input has-focus:ring-ring/50 has-focus:ring-[3px] rounded-sm",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-card inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium flex-1 text-center",
          captionLayout === "label"
            ? "text-sm"
            : "rounded-md pl-2 pr-1 flex items-center gap-2 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex mt-0 mb-1 opacity-50", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn(`flex w-full h-8 ${weekSpacing}`, defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-border",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-border", defaultClassNames.range_end),
        today: cn(
          "bg-border text-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground opacity-50",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-3.5", className)} {...props} />
            );
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-3.5", className)}
                {...props}
              />
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  return (
    <Button
      ref={ref}
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-border data-[range-middle=true]:text-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex h-8 w-full flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-sm [&>span]:text-sm [&>span]:opacity-70",
        !modifiers.outside && "text-foreground hover:text-foreground",
        modifiers.outside &&
          "text-muted-foreground hover:text-muted-foreground",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
