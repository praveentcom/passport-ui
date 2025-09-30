import React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import { type VariantProps, cva } from "class-variance-authority";
import type { LucideIcon } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

const tabsVariants = cva(
  "flex data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row min-w-0",
  {
    variants: {
      variant: {
        default: "",
        pills: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const tabsListVariants = cva(
  "inline-flex items-center justify-start text-muted-foreground",
  {
    variants: {
      variant: {
        default:
          "rounded-none border-b bg-transparent p-0 data-[orientation=horizontal]:h-9 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r data-[orientation=vertical]:w-auto data-[orientation=vertical]:min-w-[120px] data-[orientation=vertical]:h-auto md:flex hidden relative",
        pills:
          "h-auto rounded-none border-0 bg-transparent p-0 gap-2 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col md:flex hidden",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const tabsDropdownVariants = cva("md:hidden block w-full", {
  variants: {
    variant: {
      default: "mb-4",
      pills: "mb-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground",
  {
    variants: {
      variant: {
        default:
          "rounded-none bg-transparent px-3 py-1.5 hover:text-foreground relative data-[state=active]:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[orientation=horizontal]:border-b-2 data-[orientation=horizontal]:border-transparent data-[orientation=horizontal]:data-[state=active]:border-primary data-[orientation=horizontal]:-mb-px data-[orientation=vertical]:border-r-2 data-[orientation=vertical]:border-transparent data-[orientation=vertical]:data-[state=active]:border-primary data-[orientation=vertical]:justify-start data-[orientation=vertical]:w-full data-[orientation=vertical]:-mr-px",
        pills:
          "rounded-sm border border-transparent bg-transparent px-2.5 py-1 data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:shadow-xs hover:text-foreground hover:bg-border/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const tabsContentVariants = cva(
  "ring-offset-background focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-2 data-[orientation=horizontal]:mt-2 data-[orientation=vertical]:ml-4 min-w-0",
  {
    variants: {
      variant: {
        default:
          "data-[orientation=horizontal]:mt-4 data-[orientation=vertical]:ml-4",
        pills:
          "data-[orientation=horizontal]:mt-4 data-[orientation=vertical]:ml-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface TabsProps
  extends React.ComponentProps<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {
  /**
   * The visual style variant of the tabs
   */
  variant?: "default" | "pills";
}

export interface TabsListProps
  extends React.ComponentProps<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {
  /**
   * The visual style variant of the tabs list
   */
  variant?: "default" | "pills";
}

export interface TabsDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsDropdownVariants> {
  /**
   * The visual style variant of the dropdown
   */
  variant?: "default" | "pills";
  /**
   * Current active tab value
   */
  value?: string;
  /**
   * Callback when tab selection changes
   */
  onValueChange?: (value: string) => void;
  /**
   * Tab triggers to display in dropdown
   */
  triggers: Array<{
    value: string;
    label: string;
    disabled?: boolean;
    icon?: LucideIcon;
  }>;
}

export interface TabsTriggerProps
  extends React.ComponentProps<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {
  /**
   * The visual style variant of the tab trigger
   */
  variant?: "default" | "pills";
  /**
   * Optional Lucide icon to display before the label
   */
  icon?: LucideIcon;
}

export interface TabsContentProps
  extends React.ComponentProps<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentVariants> {
  /**
   * The visual style variant of the tab content
   */
  variant?: "default" | "pills";
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    data-slot="tabs"
    className={cn(tabsVariants({ variant }), className)}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    data-slot="tabs-list"
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsDropdown = React.forwardRef<HTMLDivElement, TabsDropdownProps>(
  ({ className, variant, value, onValueChange, triggers, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(tabsDropdownVariants({ variant }), className)}
      {...props}
    >
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a tab" />
        </SelectTrigger>
        <SelectContent>
          {triggers.map((trigger) => (
            <SelectItem
              key={trigger.value}
              value={trigger.value}
              disabled={trigger.disabled}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                {trigger.icon &&
                  React.createElement(trigger.icon, { className: "size-4" })}
                {trigger.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
);
TabsDropdown.displayName = "TabsDropdown";

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, icon, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    data-slot="tabs-trigger"
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  >
    <div className="flex items-center gap-2 cursor-pointer">
      {icon && React.createElement(icon, { className: "size-4" })}
      {children}
    </div>
  </TabsPrimitive.Trigger>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    data-slot="tabs-content"
    className={cn(tabsContentVariants({ variant }), className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  Tabs,
  TabsList,
  TabsDropdown,
  TabsTrigger,
  TabsContent,
  tabsVariants,
  tabsListVariants,
  tabsDropdownVariants,
  tabsTriggerVariants,
  tabsContentVariants,
};
