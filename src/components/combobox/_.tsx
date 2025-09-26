"use client";

import React, { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";

export interface ComboboxOption {
  value: string;
  label: string;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * Autocomplete input and command palette with a list of suggestions.
 * Built using a composition of the Popover and Command components.
 *
 * @param options - Array of options with value and label
 * @param value - Currently selected value
 * @param onValueChange - Callback when selection changes
 * @param placeholder - Text shown when no selection
 * @param searchPlaceholder - Placeholder for search input
 * @param emptyText - Text shown when no options match search
 * @returns The combobox component
 */
export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select option…",
  searchPlaceholder = "Search options…",
  emptyText = "No option found.",
  className,
  disabled,
}: ComboboxProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          role="combobox"
          aria-expanded={open}
          data-slot="combobox"
          className={cn(
            "data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 border-input bg-card dark:bg-input/10 hover:bg-input/20 focus:bg-input/20 flex h-8 w-full items-center justify-between gap-2 rounded-sm border px-2 py-1 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            !selectedOption && "text-muted-foreground",
            className
          )}
          disabled={disabled}
        >
          <span className="truncate">
            {selectedOption?.label || placeholder}
          </span>
          <ChevronsUpDown className="size-4 opacity-50 shrink-0" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} className="h-8" />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    const newValue = currentValue === value ? "" : currentValue;
                    onValueChange?.(newValue);
                    setOpen(false);
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
