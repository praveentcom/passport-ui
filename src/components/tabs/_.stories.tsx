import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";

import { Tabs, TabsList, TabsDropdown, TabsTrigger, TabsContent } from ".";
import { Card, CardContent } from "../card";
import { Button } from "../button";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A flexible tabs component built on Radix UI Tabs with multiple visual variants and full keyboard navigation support.

## Features
- Three visual variants (default, card, pills)
- Horizontal and vertical orientation support
- Full keyboard navigation (arrow keys, home, end)
- Built-in focus management and ARIA attributes
- Customizable styling with class-variance-authority
- Automatic content switching with smooth transitions
- Support for disabled tabs and controlled/uncontrolled state

## Composition
Tabs are composed of multiple semantic components:
- **Tabs**: Root container that manages state and orientation
- **TabsList**: Container for tab triggers with proper ARIA roles
- **TabsTrigger**: Individual tab buttons for content switching
- **TabsContent**: Content panels associated with each tab

## Usage
Use tabs for:
- Organizing related content into separate views
- Settings and configuration panels
- Dashboard sections and data views
- Multi-step forms and wizards
- Feature toggles and view switching

## Accessibility
Tabs provide full keyboard navigation, screen reader support, and proper focus management with ARIA relationships between triggers and content panels.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "pills"],
      description:
        "The visual style variant that determines the overall appearance",
      table: {
        type: { summary: '"default" | "pills"' },
        defaultValue: { summary: '"default"' },
        category: "Appearance",
      },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs (horizontal or vertical)",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
        category: "Layout",
      },
    },
    defaultValue: {
      control: { type: "text" },
      description: "The default active tab value for uncontrolled usage",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    value: {
      control: { type: "text" },
      description: "The controlled active tab value",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    onValueChange: {
      control: false,
      description: "Callback fired when the active tab changes",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState("overview");
    
    const tabTriggers = [
      { value: "overview", label: "Overview" },
      { value: "analytics", label: "Analytics" },
      { value: "settings", label: "Settings" },
    ];

    return (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-sm" {...args}>
        {/* Desktop tabs */}
        <TabsList variant={args.variant}>
          <TabsTrigger value="overview" variant={args.variant}>
            Overview
          </TabsTrigger>
          <TabsTrigger value="analytics" variant={args.variant}>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" variant={args.variant}>
            Settings
          </TabsTrigger>
        </TabsList>
        
        {/* Mobile dropdown */}
        <TabsDropdown 
          variant={args.variant}
          value={activeTab}
          onValueChange={setActiveTab}
          triggers={tabTriggers}
        />
        
        <TabsContent value="overview" variant={args.variant}>
          <Card>
            <CardContent>
            <h3 className="text-lg font-semibold">Project Overview</h3>
            <p className="text-sm text-muted-foreground mt-2">
              View your project&apos;s current status, recent activity, and key metrics all in one place.
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Active tasks:</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completed this week:</span>
                <span className="font-medium">8</span>
              </div>
            </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics" variant={args.variant}>
          <Card className="p-4">
            <h3 className="text-lg font-semibold">Analytics Dashboard</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Track performance metrics, user engagement, and growth trends over time.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">2.4k</div>
                <div className="text-xs text-muted-foreground">Total Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">18%</div>
                <div className="text-xs text-muted-foreground">Growth Rate</div>
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="settings" variant={args.variant}>
          <Card className="p-4">
            <h3 className="text-lg font-semibold">Project Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Configure your project preferences, team permissions, and integration settings.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Email notifications</span>
                <Button size="regular" variant="outline">Enable</Button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto-save changes</span>
                <Button size="regular" variant="outline">Configure</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const AllVariants: Story = {
  render: () => {
    const [defaultTab, setDefaultTab] = React.useState("tab1");
    const [pillsTab, setPillsTab] = React.useState("tab1");

    const defaultTriggers = [
      { value: "tab1", label: "Account" },
      { value: "tab2", label: "Password" },
      { value: "tab3", label: "Preferences" },
    ];

    const pillsTriggers = [
      { value: "tab1", label: "Overview" },
      { value: "tab2", label: "Details" },
      { value: "tab3", label: "History" },
    ];

    return (
      <div className="w-lg space-y-8">
        {/* Default Variant */}
        <div>
          <h4 className="text-sm font-medium mb-4">Default</h4>
          <Tabs value={defaultTab} onValueChange={setDefaultTab} className="w-full">
            <TabsList variant="default">
              <TabsTrigger value="tab1" variant="default">
                Account
              </TabsTrigger>
              <TabsTrigger value="tab2" variant="default">
                Password
              </TabsTrigger>
              <TabsTrigger value="tab3" variant="default">
                Preferences
              </TabsTrigger>
            </TabsList>
            <TabsDropdown
              variant="default"
              value={defaultTab}
              onValueChange={setDefaultTab}
              triggers={defaultTriggers}
            />
            <TabsContent value="tab1" variant="default">
              <p className="text-sm text-muted-foreground">
                Manage your account information and profile settings here.
              </p>
            </TabsContent>
            <TabsContent value="tab2" variant="default">
              <p className="text-sm text-muted-foreground">
                Update your password and security preferences.
              </p>
            </TabsContent>
            <TabsContent value="tab3" variant="default">
              <p className="text-sm text-muted-foreground">
                Customize your application preferences and defaults.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pills Variant */}
        <div>
          <h4 className="text-sm font-medium mb-4">Pills</h4>
          <Tabs value={pillsTab} onValueChange={setPillsTab} className="w-full">
            <TabsList variant="pills">
              <TabsTrigger value="tab1" variant="pills">
                Overview
              </TabsTrigger>
              <TabsTrigger value="tab2" variant="pills">
                Details
              </TabsTrigger>
              <TabsTrigger value="tab3" variant="pills">
                History
              </TabsTrigger>
            </TabsList>
            <TabsDropdown
              variant="pills"
              value={pillsTab}
              onValueChange={setPillsTab}
              triggers={pillsTriggers}
            />
            <TabsContent value="tab1" variant="pills">
              <p className="text-sm text-muted-foreground">
                Get a quick overview of your current status and recent activity.
              </p>
            </TabsContent>
            <TabsContent value="tab2" variant="pills">
              <p className="text-sm text-muted-foreground">
                View detailed information and comprehensive data analysis.
              </p>
            </TabsContent>
            <TabsContent value="tab3" variant="pills">
              <p className="text-sm text-muted-foreground">
                Browse through your complete history and past interactions.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};

export const VerticalOrientation: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("tab1");

    return (
      <div className="w-lg">
        <h4 className="text-sm font-medium mb-4">Vertical Orientation</h4>
        <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical" className="w-full">
          <TabsList variant="default">
            <TabsTrigger value="tab1" variant="default">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="default">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="tab3" variant="default">
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" variant="default">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Dashboard</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  View your main dashboard with key metrics and insights.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tab2" variant="default">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Analytics</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Explore detailed analytics and performance data.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tab3" variant="default">
            <Card>
              <CardContent>
                <h3 className="text-lg font-semibold">Settings</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Configure your application preferences and settings.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
};
