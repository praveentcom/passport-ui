import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { ThemeToggle } from "@/composables/theme-toggle";
import { MetaContainer } from "@/client";

// Dummy component for the documentation story
const IntroductionDocs = () => (
  <div className="max-w-4xl mx-auto p-6 space-y-8">
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Passport UI</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        A modern, customizable UI component library with motion primitives and
        theme support built with React, TypeScript, Tailwind CSS, and shadcn/ui
        components.
      </p>
      <p className="text-base text-muted-foreground">
        Passport UI provides a comprehensive set of components and utilities for
        building beautiful, accessible, and performant Next.js applications.
      </p>
    </div>

    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Quick Start</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Installation</h3>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npm install passport-ui</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Setup</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm font-medium mb-1">
                1. Install peer dependencies:
              </h4>
              <div className="bg-muted p-3 rounded">
                <code className="text-xs">
                  npm install @tailwindcss/postcss tailwindcss motion next react
                  react-dom
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">
                2. Configure PostCSS:
              </h4>
              <div className="bg-muted p-3 rounded">
                <code className="text-xs">
                  {`// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`}
                </code>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">3. Import styles:</h4>
              <div className="bg-muted p-3 rounded">
                <code className="text-xs">{`@import 'passport-ui/styles.css';`}</code>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-1">
                4. Add theme provider:
              </h4>
              <div className="bg-muted p-3 rounded">
                <code className="text-xs">
                  {`import { ThemeProvider } from 'passport-ui/client'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Core Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <MetaContainer title="Design System">
            Built on Tailwind CSS v4 with comprehensive theming support
          </MetaContainer>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• OKLCH color space for better color management</li>
              <li>• Automatic light/dark theme switching</li>
              <li>• Customizable design tokens</li>
              <li>• Consistent spacing and typography</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <MetaContainer title="Accessibility">
            WCAG compliant components with full keyboard navigation
          </MetaContainer>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Built on Radix UI primitives</li>
              <li>• Full ARIA attribute support</li>
              <li>• Screen reader optimized</li>
              <li>• Focus management included</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <MetaContainer title="Motion Primitives">
            Smooth animations powered by Framer Motion
          </MetaContainer>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• BlurIn, BorderTrail, AnimatedBackground</li>
              <li>• Configurable animation properties</li>
              <li>• Performance optimized</li>
              <li>• Reduced motion support</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <MetaContainer title="TypeScript First">
            Full type safety with comprehensive interfaces
          </MetaContainer>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Complete TypeScript definitions</li>
              <li>• IntelliSense support</li>
              <li>• Polymorphic component support</li>
              <li>• Strict type checking</li>
            </ul>
          </CardContent>
          <CardContent>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Complete TypeScript definitions</li>
              <li>• IntelliSense support</li>
              <li>• Polymorphic component support</li>
              <li>• Strict type checking</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Component Architecture</h2>
      <p className="text-muted-foreground">
        Passport UI organizes components into four main categories:
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">UI Components</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Core building blocks for your interface - buttons, inputs, cards,
            dialogs, and more. All built on Radix UI primitives with full
            accessibility support.
          </p>
          <div className="bg-muted p-3 rounded">
            <code className="text-xs">{`import { Button, Card, Dialog, Input } from 'passport-ui/client'`}</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Motion Primitives</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Animation components using Framer Motion for smooth, performant
            animations that enhance user experience.
          </p>
          <div className="bg-muted p-3 rounded">
            <code className="text-xs">{`import { BlurIn, BorderTrail, AnimatedBackground } from 'passport-ui/client'`}</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Composables</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Higher-level components that combine multiple UI elements for common
            patterns like navigation, themes, and layouts.
          </p>
          <div className="bg-muted p-3 rounded">
            <code className="text-xs">{`import { BackButton, ThemeToggle, BulletList } from 'passport-ui/client'`}</code>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium">Containers</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Layout components for consistent page structure, metadata handling,
            and content organization.
          </p>
          <div className="bg-muted p-3 rounded">
            <code className="text-xs">{`import { ContentContainer, MetaContainer, PlaceholderCard } from 'passport-ui/client'`}</code>
          </div>
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Theme Integration</h2>
      <p className="text-muted-foreground mb-4">
        Use the built-in theme system for consistent styling:
      </p>
      <div className="flex items-center gap-4 p-4 border rounded-lg">
        <span className="text-sm">Try switching themes:</span>
        <ThemeToggle />
      </div>
    </div>

    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Next Steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Explore Components</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Browse the complete component library
            </p>
            <Button variant="outline" size="medium">
              View Components
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Color System</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn about the theming and color system
            </p>
            <Button variant="outline" size="medium">
              View Colors
            </Button>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="pt-6">
            <h3 className="font-medium mb-2">Motion Primitives</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Discover animation components
            </p>
            <Button variant="outline" size="medium">
              View Animations
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>

    <div className="text-center text-sm text-muted-foreground pt-8 border-t">
      <p>Built with ❤️ for the Next.js community</p>
      <p className="mt-1">
        <a
          href="https://github.com/praveentcom/passport-ui"
          className="text-primary hover:underline"
        >
          GitHub
        </a>
        {" • "}
        <a
          href="https://www.npmjs.com/package/passport-ui"
          className="text-primary hover:underline"
        >
          npm
        </a>
      </p>
    </div>
  </div>
);

const meta: Meta<typeof IntroductionDocs> = {
  title: "Introduction",
  component: IntroductionDocs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Welcome to Passport UI - a modern, customizable UI component library built for Next.js applications.

The library in itself is an adaptation on top of shadcn/ui, motion primitives and tailwind. You might find certain components very
similar in terms of appearance and functionality. The components in overall is adapted to be more compact, minimal and speeding
up your composable development process much faster.

This documentation provides comprehensive guidance on:
- Getting started with installation and setup
- Understanding the component architecture
- Using the design system and theming
- Building beautiful, accessible interfaces

## Key Features

- **Modern Stack**: Built with React 18+, TypeScript, Tailwind CSS v4
- **Accessibility First**: WCAG compliant with full keyboard navigation
- **Theme System**: Automatic light/dark mode with OKLCH color space
- **Motion Primitives**: Smooth animations with Framer Motion
- **Developer Experience**: Full TypeScript support with excellent IntelliSense

Navigate through the documentation to explore components, learn about the color system, and discover motion primitives.`,
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
