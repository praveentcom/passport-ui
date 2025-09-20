"use client";

import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { action } from "storybook/actions";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../button";

const meta: Meta<typeof Command> = {
  title: "Components/Command",
  component: Command,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A fast, accessible command menu component with search and keyboard navigation, built on cmdk.

## Features
- Lightning-fast fuzzy search with instant results
- Full keyboard navigation with arrow keys and Enter
- Grouping and categorization of commands
- Keyboard shortcuts display and handling
- Command palette and dialog modes
- Custom filtering and scoring functions
- Built-in accessibility with proper ARIA attributes
- Composable architecture with flexible layouts

## Composition
Command menus are composed of multiple components:
- **Command**: Root container with search and filtering
- **CommandInput**: Search input with instant filtering
- **CommandList**: Scrollable list of command results
- **CommandEmpty**: Empty state when no results match
- **CommandGroup**: Grouped sections with headings
- **CommandItem**: Individual selectable commands
- **CommandSeparator**: Visual dividers between sections
- **CommandShortcut**: Keyboard shortcut display
- **CommandDialog**: Modal command palette mode

## Usage
Use command menus for:
- Application command palettes (Cmd+K)
- Quick action menus and shortcuts
- Search interfaces with actions
- Navigation and menu systems
- Any interface requiring fast command access

## Accessibility
Command menus provide full keyboard navigation and screen reader support with proper command announcements.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: COMMON_CONTROLS.className,
    onKeyDown: {
      control: false,
      description: "Callback fired when a key is pressed",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the command",
      table: {
        type: { summary: "string" },
      },
    },
    onValueChange: {
      control: false,
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    filter: {
      control: false,
      description: "Custom filter function",
      table: {
        type: { summary: "(value: string, search: string) => number" },
      },
    },
    shouldFilter: {
      control: "boolean",
      description: "Whether to filter items automatically",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
  },
  args: {
    onKeyDown: action("keyDown"),
    onValueChange: action("valueChange"),
  },
  render: (args) => (
    <Command {...args} className="w-sm border">
      <CommandInput placeholder="Type a command or search…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => action("calendar-selected")()}>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => action("emoji-selected")()}>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem
            disabled
            onSelect={() => action("calculator-selected")()}
          >
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => action("profile-selected")()}>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => action("billing-selected")()}>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => action("settings-selected")()}>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

export default meta;
type Story = StoryObj<typeof Command>;

export const Default: Story = {
  args: {},
};

export const Dialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search…" />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem
                onSelect={() => {
                  action("calendar-selected")();
                  setOpen(false);
                }}
              >
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  action("emoji-selected")();
                  setOpen(false);
                }}
              >
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  action("calculator-selected")();
                  setOpen(false);
                }}
              >
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem
                onSelect={() => {
                  action("profile-selected")();
                  setOpen(false);
                }}
              >
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  action("billing-selected")();
                  setOpen(false);
                }}
              >
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  action("settings-selected")();
                  setOpen(false);
                }}
              >
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  },
};
