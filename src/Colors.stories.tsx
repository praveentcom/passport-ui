import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardContent } from "@/components/card";
import { Button } from "@/components/button";
import { ThemeToggle } from "@/composables/theme-toggle";
import { MetaContainer } from "@/client";

// Color palette data
const designColors = [
  {
    name: "Primary",
    bg: "bg-primary",
    text: "text-primary-foreground",
    class: "bg-primary",
    description: "Main brand color",
  },
  {
    name: "Primary Foreground",
    bg: "bg-primary-foreground",
    text: "text-primary",
    class: "bg-primary-foreground",
    description: "Text on primary",
    border: true,
  },
  {
    name: "Secondary",
    bg: "bg-secondary",
    text: "text-secondary-foreground",
    class: "bg-secondary",
    description: "Supporting color",
  },
  {
    name: "Secondary Foreground",
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
    bg: "bg-background",
    text: "text-foreground",
    class: "bg-background",
    description: "Page background",
    border: true,
  },
  {
    name: "Foreground",
    bg: "bg-foreground",
    text: "text-background",
    class: "text-foreground",
    description: "Primary text",
    border: true,
  },
  {
    name: "Muted",
    bg: "bg-muted",
    text: "text-muted-foreground",
    class: "bg-muted",
    description: "Subtle background",
    border: true,
  },
  {
    name: "Accent",
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
    bg: "bg-destructive",
    text: "text-destructive-foreground",
    class: "bg-destructive",
    description: "Errors, danger",
  },
  {
    name: "Success",
    bg: "bg-success",
    text: "text-success-foreground",
    class: "bg-success",
    description: "Positive actions",
  },
  {
    name: "Warning",
    bg: "bg-warning",
    text: "text-warning-foreground",
    class: "bg-warning",
    description: "Caution, alerts",
  },
  {
    name: "Info",
    bg: "bg-info",
    text: "text-info-foreground",
    class: "bg-info",
    description: "Information",
  },
];

const mutedSemanticColors = [
  {
    name: "Destructive Muted",
    bg: "bg-destructive-muted",
    text: "text-destructive-muted-foreground",
    class: "bg-destructive-muted",
    description: "Error backgrounds",
    border: true,
  },
  {
    name: "Success Muted",
    bg: "bg-success-muted",
    text: "text-success-muted-foreground",
    class: "bg-success-muted",
    description: "Success backgrounds",
    border: true,
  },
  {
    name: "Warning Muted",
    bg: "bg-warning-muted",
    text: "text-warning-muted-foreground",
    class: "bg-warning-muted",
    description: "Warning backgrounds",
    border: true,
  },
  {
    name: "Info Muted",
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
    bg: "bg-card",
    text: "text-card-foreground",
    class: "bg-card",
    description: "Card backgrounds",
    border: true,
  },
  {
    name: "Popover",
    bg: "bg-popover",
    text: "text-popover-foreground",
    class: "bg-popover",
    description: "Overlay backgrounds",
    border: true,
  },
  {
    name: "Input",
    bg: "bg-input",
    text: "text-foreground",
    class: "bg-input",
    description: "Form inputs",
    border: true,
  },
  {
    name: "Border",
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
    bg: "bg-chart-1",
    text: "text-white",
    class: "bg-chart-1",
  },
  {
    name: "Chart 2",
    bg: "bg-chart-2",
    text: "text-white",
    class: "bg-chart-2",
  },
  {
    name: "Chart 3",
    bg: "bg-chart-3",
    text: "text-white",
    class: "bg-chart-3",
  },
  {
    name: "Chart 4",
    bg: "bg-chart-4",
    text: "text-white",
    class: "bg-chart-4",
  },
  {
    name: "Chart 5",
    bg: "bg-chart-5",
    text: "text-white",
    class: "bg-chart-5",
  },
];

const sidebarColors = [
  {
    name: "Sidebar",
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
      className={`w-full h-16 ${color.bg} rounded-sm ${color.border ? "border" : ""} ${color.isBorder ? "border-2" : ""} flex items-center justify-center`}
    >
      <span className={`${color.text} text-xs font-medium`}>
        {color.name.split(" ")[0]}
      </span>
    </div>
    <div className="text-xs">
      <div className="font-medium">{color.name}</div>
      {color.description && (
        <div className="text-muted-foreground">{color.description}</div>
      )}
      <code className="text-xs">{color.class}</code>
    </div>
  </div>
);

const TailwindColorCard = ({ color }: { color: string }) => (
  <div className="space-y-1">
    <div className={`w-full h-12 bg-${color}-500 rounded-sm border`}></div>
    <div className="text-xs text-center font-medium">{color}</div>
  </div>
);

// Main documentation component
const ColorsDocs = () => (
  <div className="max-w-6xl mx-auto p-6 space-y-12">
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Color System</h1>
      <p className="text-lg text-muted-foreground">
        Passport UI uses a comprehensive color system built on{" "}
        <strong>OKLCH color space</strong> for better color management and
        automatic light/dark theme support.
      </p>
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <span className="text-sm">Switch themes to see colors adapt:</span>
        <ThemeToggle />
      </div>
    </div>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Core Design Colors</h2>
      <p className="text-muted-foreground">
        These are the primary colors that define your brand and interface
        hierarchy.
      </p>

      <div>
        <h3 className="text-lg font-medium mb-4">Primary & Secondary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {designColors.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Background & Surface</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {backgroundColors.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Semantic Colors</h2>
      <p className="text-muted-foreground">
        Colors that convey meaning and state information to users.
      </p>

      <div>
        <h3 className="text-lg font-medium mb-4">Status Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Muted Variants</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Subtle versions of semantic colors for backgrounds and less prominent
          elements.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {mutedSemanticColors.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Component Colors</h2>
      <p className="text-muted-foreground">
        Specialized colors for specific component types.
      </p>

      <div>
        <h3 className="text-lg font-medium mb-4">Interface Elements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interfaceColors.map((color) => (
            <ColorCard key={color.name} color={color} />
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Chart Colors</h2>
      <p className="text-muted-foreground">
        A curated palette for data visualization and charts.
      </p>

      <div className="grid grid-cols-5 gap-4">
        {chartColors.map((color) => (
          <div key={color.name} className="space-y-2">
            <div
              className={`w-full h-16 ${color.bg} rounded-sm border flex items-center justify-center`}
            >
              <span className={`${color.text} text-xs font-medium`}>
                {color.name}
              </span>
            </div>
            <div className="text-xs text-center">
              <div className="font-medium">{color.name}</div>
              <code className="text-xs">{color.class}</code>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Sidebar Colors</h2>
      <p className="text-muted-foreground">
        Specialized colors for sidebar and navigation components.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sidebarColors.map((color) => (
          <ColorCard key={color.name} color={color} />
        ))}
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Built-in Tailwind Colors</h2>
      <p className="text-muted-foreground mb-4">
        In addition to the custom theme colors, you can use all standard
        Tailwind CSS colors:
      </p>

      <div>
        <h3 className="text-lg font-medium mb-4">Complete Palette</h3>
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2">
          {tailwindColors.map((color) => (
            <TailwindColorCard key={color} color={color} />
          ))}
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Usage Guidelines</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h4>✅ Use Custom Theme Colors When:</h4>
          <CardContent className="space-y-2">
            <div>
              • <strong>Building consistent interfaces</strong> - Use primary,
              secondary, background, foreground
            </div>
            <div>
              • <strong>Conveying status</strong> - Use success, warning,
              destructive, info and their muted variants
            </div>
            <div>
              • <strong>Creating layouts</strong> - Use card, popover, border,
              input for component backgrounds
            </div>
            <div>
              • <strong>Data visualization</strong> - Use chart-1 through
              chart-5 for consistent chart colors
            </div>
            <div>
              • <strong>Building navigation</strong> - Use sidebar colors for
              navigation components
            </div>
          </CardContent>
        </Card>

        <Card>
          <h4>✅ Use Standard Tailwind Colors When:</h4>
          <CardContent className="space-y-2">
            <div>
              • <strong>Adding personality</strong> - Use vibrant colors like
              blue-500, purple-600 for accents
            </div>
            <div>
              • <strong>Creating illustrations</strong> - Use the full color
              palette for graphics and icons
            </div>
            <div>
              • <strong>Temporary states</strong> - Use colors like red-100 for
              hover states or temporary highlights
            </div>
            <div>
              • <strong>Branding elements</strong> - Use specific brand colors
              that don&apos;t fit the semantic system
            </div>
          </CardContent>
        </Card>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Color Examples in Components</h2>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Buttons with Different Color Approaches
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Button variant="primary" className="w-full">
              Theme Primary
            </Button>
            <div className="text-xs text-center text-muted-foreground">
              Uses theme colors
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full bg-blue-500 text-white hover:bg-blue-600 border-blue-500"
            >
              Custom Blue
            </Button>
            <div className="text-xs text-center text-muted-foreground">
              Uses Tailwind colors
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variant="secondary"
              className="w-full bg-success text-success-foreground hover:bg-success/90"
            >
              Success Action
            </Button>
            <div className="text-xs text-center text-muted-foreground">
              Uses semantic colors
            </div>
          </div>

          <div className="space-y-2">
            <Button
              variant="outline"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-purple-500"
            >
              Gradient
            </Button>
            <div className="text-xs text-center text-muted-foreground">
              Combines approaches
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Cards with Color Variations
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-info-muted border-info">
            <MetaContainer title="Information Card">
              <p>Using semantic info colors</p>
            </MetaContainer>
            <CardContent>
              <p className="text-sm text-info-muted-foreground">
                This card uses the info color system for informational content.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200 dark:from-blue-950 dark:to-indigo-900 dark:border-blue-800">
            <MetaContainer title="Custom Card">
              <p>Using Tailwind colors</p>
            </MetaContainer>
            <CardContent>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                This card uses custom Tailwind colors with gradients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Best Practices</h2>

      <Card>
        <MetaContainer title="Color Best Practices">
          <p>Color best practices</p>
        </MetaContainer>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">1. Hierarchy</h4>
            <p className="text-sm text-muted-foreground">
              Use primary for main actions, secondary for supporting actions,
              and muted for less important elements.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">2. Accessibility</h4>
            <p className="text-sm text-muted-foreground">
              Always pair colors with their corresponding foreground colors
              (e.g., bg-primary with text-primary-foreground) to ensure proper
              contrast.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">3. Consistency</h4>
            <p className="text-sm text-muted-foreground">
              Stick to the theme colors for interface elements and use Tailwind
              colors sparingly for accents and illustrations.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">4. Theme Support</h4>
            <p className="text-sm text-muted-foreground">
              Custom theme colors automatically adapt to light/dark modes. When
              using Tailwind colors, consider providing dark mode variants.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>

    <div className="text-center text-sm text-muted-foreground pt-8 border-t">
      <p>All colors support automatic light/dark theme switching</p>
    </div>
  </div>
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
