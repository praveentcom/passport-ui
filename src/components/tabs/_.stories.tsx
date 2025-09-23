import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import {
  Activity,
  BarChart3,
  Bell,
  FileText,
  History,
  Home,
  Lock,
  Settings,
  User,
} from "lucide-react";

import { Tabs, TabsContent, TabsDropdown, TabsList, TabsTrigger } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../button";
import { Card, CardContent } from "../card";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Tabs**: Root container
- **TabsList**: Container for triggers
- **TabsTrigger**: Individual tab buttons with optional icons
- **TabsContent**: Content panels
- **TabsDropdown**: Mobile dropdown with icon support

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
      { value: "overview", label: "Overview", icon: Home },
      { value: "analytics", label: "Analytics", icon: BarChart3 },
      { value: "settings", label: "Settings", icon: Settings },
    ];

    return (
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-sm"
        {...args}
      >
        {/* Desktop tabs */}
        <TabsList variant={args.variant}>
          <TabsTrigger value="overview" variant={args.variant} icon={Home}>
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="analytics"
            variant={args.variant}
            icon={BarChart3}
          >
            Analytics
          </TabsTrigger>
          <TabsTrigger value="settings" variant={args.variant} icon={Settings}>
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
                View your project&apos;s current status, recent activity, and
                key metrics all in one place.
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
              Track performance metrics, user engagement, and growth trends over
              time.
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
              Configure your project preferences, team permissions, and
              integration settings.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span>Email notifications</span>
                <Button size="regular" variant="outline">
                  Enable
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <span>Auto-save changes</span>
                <Button size="regular" variant="outline">
                  Configure
                </Button>
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
      { value: "tab1", label: "Account", icon: User },
      { value: "tab2", label: "Password", icon: Lock },
      { value: "tab3", label: "Preferences", icon: Bell },
    ];

    const pillsTriggers = [
      { value: "tab1", label: "Overview", icon: Home },
      { value: "tab2", label: "Details", icon: FileText },
      { value: "tab3", label: "History", icon: History },
    ];

    return (
      <div className="w-lg space-y-8">
        {/* Default Variant */}
        <div className="meta-container">
          <h4>Default</h4>
          <Tabs
            value={defaultTab}
            onValueChange={setDefaultTab}
            className="w-full"
          >
            <TabsList variant="default">
              <TabsTrigger value="tab1" variant="default" icon={User}>
                Account
              </TabsTrigger>
              <TabsTrigger value="tab2" variant="default" icon={Lock}>
                Password
              </TabsTrigger>
              <TabsTrigger value="tab3" variant="default" icon={Bell}>
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
        <div className="meta-container">
          <h4>Pills</h4>
          <Tabs value={pillsTab} onValueChange={setPillsTab} className="w-full">
            <TabsList variant="pills">
              <TabsTrigger value="tab1" variant="pills" icon={Home}>
                Overview
              </TabsTrigger>
              <TabsTrigger value="tab2" variant="pills" icon={FileText}>
                Details
              </TabsTrigger>
              <TabsTrigger value="tab3" variant="pills" icon={History}>
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
                View detailed information and data analysis.
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
        <h4>Vertical Orientation</h4>
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          orientation="vertical"
          className="w-full"
        >
          <TabsList variant="default">
            <TabsTrigger value="tab1" variant="default" icon={Home}>
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="tab2" variant="default" icon={Activity}>
              Analytics
            </TabsTrigger>
            <TabsTrigger value="tab3" variant="default" icon={Settings}>
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

export const WithIcons: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("dashboard");

    const iconTriggers = [
      { value: "dashboard", label: "Dashboard", icon: Home },
      { value: "analytics", label: "Analytics", icon: BarChart3 },
      { value: "settings", label: "Settings", icon: Settings },
      { value: "profile", label: "Profile", icon: User },
    ];

    return (
      <div className="w-lg space-y-8">
        {/* Default variant with icons */}
        <div className="meta-container">
          <h4>Default with Icons</h4>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList variant="default">
              <TabsTrigger value="dashboard" variant="default" icon={Home}>
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="analytics" variant="default" icon={BarChart3}>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" variant="default" icon={Settings}>
                Settings
              </TabsTrigger>
              <TabsTrigger value="profile" variant="default" icon={User}>
                Profile
              </TabsTrigger>
            </TabsList>
            <TabsDropdown
              variant="default"
              value={activeTab}
              onValueChange={setActiveTab}
              triggers={iconTriggers}
            />
            <TabsContent value="dashboard" variant="default">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your main dashboard with key metrics and recent activity.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics" variant="default">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold">Analytics & Reports</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Detailed analytics and performance insights.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings" variant="default">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold">
                    Application Settings
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Configure your preferences and application settings.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="profile" variant="default">
              <Card>
                <CardContent>
                  <h3 className="text-lg font-semibold">User Profile</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Manage your personal information and account details.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Pills variant with icons */}
        <div className="meta-container">
          <h4>Pills with Icons</h4>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList variant="pills">
              <TabsTrigger value="dashboard" variant="pills" icon={Home}>
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="analytics" variant="pills" icon={BarChart3}>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="settings" variant="pills" icon={Settings}>
                Settings
              </TabsTrigger>
              <TabsTrigger value="profile" variant="pills" icon={User}>
                Profile
              </TabsTrigger>
            </TabsList>
            <TabsDropdown
              variant="pills"
              value={activeTab}
              onValueChange={setActiveTab}
              triggers={iconTriggers}
            />
            <TabsContent value="dashboard" variant="pills">
              <p className="text-sm text-muted-foreground">
                Dashboard content with pills variant styling.
              </p>
            </TabsContent>
            <TabsContent value="analytics" variant="pills">
              <p className="text-sm text-muted-foreground">
                Analytics content with pills variant styling.
              </p>
            </TabsContent>
            <TabsContent value="settings" variant="pills">
              <p className="text-sm text-muted-foreground">
                Settings content with pills variant styling.
              </p>
            </TabsContent>
            <TabsContent value="profile" variant="pills">
              <p className="text-sm text-muted-foreground">
                Profile content with pills variant styling.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  },
};
