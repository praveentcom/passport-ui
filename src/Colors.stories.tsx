import type { Meta, StoryObj } from "@storybook/nextjs";
import { ThemeToggle } from "@/composables/theme-toggle";
import { MetaContainer } from "@/composables/meta-container";
import { PageLayout } from "@/layouts/page-layout";
import { Separator } from "./client";

/**
 * Color Palette for Passport UI
 */
const designColors = [
  {
    name: "Primary",
    variable: "primary",
    bg: "bg-primary",
    text: "text-primary-foreground",
    class: "bg-primary",
    description: "Main brand color",
  },
  {
    name: "Primary Foreground",
    variable: "primary-foreground",
    bg: "bg-primary-foreground",
    text: "text-primary",
    class: "bg-primary-foreground",
    description: "Text on primary",
    border: true,
  },
  {
    name: "Secondary",
    variable: "secondary",
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    class: "bg-secondary",
    description: "Supporting color",
  },
  {
    name: "Secondary Foreground",
    variable: "secondary-foreground",
    bg: "bg-secondary-foreground",
    text: "text-secondary",
    class: "bg-secondary-foreground",
    description: "Text on secondary",
    border: true,
  },
];

const backgroundColors = [
  {
    name: "Background",
    variable: "background",
    bg: "bg-background",
    text: "text-foreground",
    class: "bg-background",
    description: "Page background",
    border: true,
  },
  {
    name: "Foreground",
    variable: "foreground",
    bg: "bg-foreground",
    text: "text-background",
    class: "text-foreground",
    description: "Primary text",
    border: true,
  },
  {
    name: "Muted",
    variable: "muted",
    bg: "bg-muted",
    text: "text-muted-foreground",
    class: "bg-muted",
    description: "Subtle background",
    border: true,
  },
  {
    name: "Accent",
    variable: "accent",
    bg: "bg-accent",
    text: "text-accent-foreground",
    class: "bg-accent",
    description: "Highlight color",
    border: true,
  },
];

const semanticColors = [
  {
    name: "Destructive",
    variable: "destructive",
    bg: "bg-destructive",
    text: "text-destructive-foreground",
    class: "bg-destructive",
    description: "Errors, danger",
  },
  {
    name: "Success",
    variable: "success",
    bg: "bg-success",
    text: "text-success-foreground",
    class: "bg-success",
    description: "Positive actions",
  },
  {
    name: "Warning",
    variable: "warning",
    bg: "bg-warning",
    text: "text-warning-foreground",
    class: "bg-warning",
    description: "Caution, alerts",
  },
  {
    name: "Info",
    variable: "info",
    bg: "bg-info",
    text: "text-info-foreground",
    class: "bg-info",
    description: "Information",
  },
];

const mutedSemanticColors = [
  {
    name: "Destructive Muted",
    variable: "destructive-muted",
    bg: "bg-destructive-muted",
    text: "text-destructive-muted-foreground",
    class: "bg-destructive-muted",
    description: "Error backgrounds",
    border: true,
  },
  {
    name: "Success Muted",
    variable: "success-muted",
    bg: "bg-success-muted",
    text: "text-success-muted-foreground",
    class: "bg-success-muted",
    description: "Success backgrounds",
    border: true,
  },
  {
    name: "Warning Muted",
    variable: "warning-muted",
    bg: "bg-warning-muted",
    text: "text-warning-muted-foreground",
    class: "bg-warning-muted",
    description: "Warning backgrounds",
    border: true,
  },
  {
    name: "Info Muted",
    variable: "info-muted",
    bg: "bg-info-muted",
    text: "text-info-muted-foreground",
    class: "bg-info-muted",
    description: "Info backgrounds",
    border: true,
  },
];

const interfaceColors = [
  {
    name: "Card",
    variable: "card",
    bg: "bg-card",
    text: "text-card-foreground",
    class: "bg-card",
    description: "Card backgrounds",
    border: true,
  },
  {
    name: "Popover",
    variable: "popover",
    bg: "bg-popover",
    text: "text-popover-foreground",
    class: "bg-popover",
    description: "Overlay backgrounds",
    border: true,
  },
  {
    name: "Input",
    variable: "input",
    bg: "bg-input",
    text: "text-foreground",
    class: "bg-input",
    description: "Form inputs",
    border: true,
  },
  {
    name: "Border",
    variable: "border",
    bg: "bg-border",
    text: "text-foreground",
    class: "border-border",
    description: "Element borders",
    border: true,
    isBorder: true,
  },
];

const chartColors = [
  {
    name: "Chart 1",
    variable: "chart-1",
    bg: "bg-chart-1",
    text: "text-white",
    class: "bg-chart-1",
  },
  {
    name: "Chart 2",
    variable: "chart-2",
    bg: "bg-chart-2",
    text: "text-white",
    class: "bg-chart-2",
  },
  {
    name: "Chart 3",
    variable: "chart-3",
    bg: "bg-chart-3",
    text: "text-white",
    class: "bg-chart-3",
  },
  {
    name: "Chart 4",
    variable: "chart-4",
    bg: "bg-chart-4",
    text: "text-white",
    class: "bg-chart-4",
  },
  {
    name: "Chart 5",
    variable: "chart-5",
    bg: "bg-chart-5",
    text: "text-white",
    class: "bg-chart-5",
  },
];

const sidebarColors = [
  {
    name: "Sidebar",
    variable: "sidebar",
    bg: "bg-sidebar",
    text: "text-foreground",
    class: "bg-sidebar",
    description: "Sidebar background",
    border: true,
  },
];

const tailwindColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ColorCard = ({ color }: { color: Record<string, any> }) => (
  <div className="space-y-2">
    <div
      className={`w-full h-12 ${color.bg} rounded-sm ${color.border ? "border" : ""} ${color.isBorder ? "border-2" : ""} flex items-center justify-center`}
    />
    <div>
      <div className="text-xs font-mono">{color.variable}</div>
      {color.description && (
        <div className="text-xs text-muted-foreground">{color.description}</div>
      )}
    </div>
  </div>
);

const TailwindColorCard = ({ color }: { color: string }) => (
  <div className="space-y-2">
    <div className={`w-full h-12 bg-${color} rounded-sm border`} />
    <div className="text-xs text-center font-mono">{color}</div>
  </div>
);

const ColorsDocs = () => (
  <PageLayout
    header={
      <div className="flex justify-between items-center gap-4">
        <h2>Color System</h2>
        <ThemeToggle />
      </div>
    }
    footer={
      <MetaContainer title="Color System Documentation">
        <p className="text-sm text-muted-foreground">
          All colors support automatic light/dark theme switching
        </p>
      </MetaContainer>
    }
    footerSticky
    footerBlurred
  >
    <div className="section-container">
      <div className="section-container">
        <div className="grid">
          <h3>Overview</h3>
          <p className="text-muted-foreground">
            Passport UI uses a comprehensive color system built on{" "}
            <strong>OKLCH color space</strong>, inspired by shadcn/ui, for
            better color management and automatic light/dark theme support.
          </p>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Core Design Colors">
          These are the primary colors that define your brand and interface
          hierarchy.
        </MetaContainer>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {designColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {backgroundColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Semantic Colors">
          Colors that convey meaning and state information to users.
        </MetaContainer>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {semanticColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {mutedSemanticColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Component Colors">
          Specialized colors for specific component types.
        </MetaContainer>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {interfaceColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Chart Colors">
          A curated palette for data visualization and charts.
        </MetaContainer>
        <div className="list-container">
          <div className="grid grid-cols-5 gap-4">
            {chartColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Sidebar Colors">
          Specialized colors for sidebar and navigation components.
        </MetaContainer>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6">
            {sidebarColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <MetaContainer title="Built-in Tailwind Colors">
          In addition to the custom theme colors, you can use all standard
          Tailwind CSS colors.
        </MetaContainer>
        <div className="list-container">
          {tailwindColors.map((color) => (
            <div key={color} className="grid grid-cols-5 md:grid-cols-9 gap-2">
              {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((weight) => (
                <TailwindColorCard
                  key={`${color}-${weight}`}
                  color={`${color}-${weight}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  </PageLayout>
);

const meta: Meta<typeof ColorsDocs> = {
  title: "Color System",
  component: ColorsDocs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Comprehensive guide to Passport UI's color system, built on OKLCH color space for better color management and automatic light/dark theme support.

## Color Categories

- **Core Design Colors**: Primary, secondary, background, and surface colors
- **Semantic Colors**: Status colors for success, warning, error, and info states  
- **Component Colors**: Specialized colors for cards, popovers, inputs, and borders
- **Chart Colors**: Curated palette for data visualization
- **Sidebar Colors**: Navigation-specific color system
- **Tailwind Colors**: Full access to standard Tailwind CSS color palette

## Key Features

- **OKLCH Color Space**: Better color perception and consistency
- **Automatic Theme Switching**: Seamless light/dark mode support
- **Accessibility First**: Proper contrast ratios built-in
- **Semantic Meaning**: Colors that convey clear intent and state
- **Developer Experience**: Easy-to-use CSS classes with TypeScript support

Use this documentation to understand when and how to use different color approaches in your Passport UI applications.`,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  tags: ["!dev"],
};
