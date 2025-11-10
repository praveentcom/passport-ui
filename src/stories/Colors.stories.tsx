import type { Meta, StoryObj } from "@storybook/nextjs";

import { Separator } from "../components/separator";
import { ThemeToggle } from "../composables/theme-toggle";
import { ContentContainer } from "../layouts/content-container";
import { PageLayout } from "../layouts/page-layout";

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
    name: "Muted Foreground",
    variable: "muted-foreground",
    bg: "bg-muted-foreground",
    text: "text-muted",
    class: "bg-muted-foreground",
    description: "Text on muted",
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
  <div className="space-y-1">
    <div
      className={`w-full h-12 ${color.bg} rounded-sm ${color.border ? "border" : ""} flex items-center justify-center`}
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
  <div className="space-y-1">
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
      <div className="meta-container">
        <h3>Color System</h3>
        <p>All colors support automatic light/dark theme switching</p>
      </div>
    }
    footerOptions={{
      sticky: true,
      blurred: true,
    }}
  >
    <ContentContainer variant="broad">
      <div className="section-container">
        <div className="meta-container">
          <h3>Core Design Colors</h3>
          <p>
            These are the primary colors that define your brand and interface
            hierarchy.
          </p>
        </div>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {designColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {backgroundColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <div className="meta-container">
          <h3>Semantic Colors</h3>
          <p>Colors that convey meaning and state information to users.</p>
        </div>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {semanticColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {mutedSemanticColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <div className="meta-container" title="Component Colors">
          <h3>Component Colors</h3>
          <p>Specialized colors for specific component types.</p>
        </div>
        <div className="list-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-8">
            {interfaceColors.map((color) => (
              <ColorCard key={color.name} color={color} />
            ))}
          </div>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <div className="meta-container" title="Chart Colors">
          <h3>Chart Colors</h3>
          <p>A curated palette for data visualization and charts.</p>
        </div>
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
        <div className="meta-container">
          <h3>Tailwind Colors</h3>
          <p>
            In addition to the custom theme colors, you can use all standard
            Tailwind CSS colors.
          </p>
        </div>
        <div className="list-container">
          {tailwindColors.map((color) => (
            <div key={color} className="grid grid-cols-6 md:grid-cols-11 gap-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
                (weight) => (
                  <TailwindColorCard
                    key={`${color}-${weight}`}
                    color={`${color}-${weight}`}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </ContentContainer>
  </PageLayout>
);

const meta: Meta<typeof ColorsDocs> = {
  title: "Color System",
  component: ColorsDocs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Guide to Passport UI's color system with automatic light/dark theme support.`,
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
