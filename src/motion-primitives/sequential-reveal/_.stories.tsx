import type { Meta, StoryObj } from "@storybook/nextjs";

import { SequentialReveal } from ".";
import { Badge } from "../../components/badge";
import { Button } from "../../components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/card";

const meta: Meta<typeof SequentialReveal> = {
  title: "Motion Primitives/SequentialReveal",
  component: SequentialReveal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A motion primitive that orchestrates the entrance of multiple child elements with customizable stagger timing and animation patterns, powered by Framer Motion.

## Features
- Multiple animation patterns: cascade, wave, spiral, and random
- Configurable stagger delays for perfect timing control
- Intersection Observer integration for scroll-triggered animations
- Reverse animations support with triggerOnce control
- Accessibility-first with reduced motion support
- Performance optimized with hardware acceleration
- Flexible threshold and delay configurations

## Animation Patterns
1. **Cascade**: Sequential left-to-right or top-to-bottom animation
2. **Wave**: Sine wave-based animation timing for organic flow
3. **Spiral**: Square root-based delays creating spiral-like reveals
4. **Random**: Randomized timing for organic, natural feel

## Performance
Uses CSS transforms and opacity for smooth 60fps animations. Intersection Observer ensures animations only trigger when elements are visible, optimizing performance for long pages.

## Use Cases
Perfect for:
- Feature lists and benefits sections
- Card grids and galleries
- Navigation menu reveals
- Dashboard widget animations
- Product showcase grids
- Testimonial carousels
- Sequential content loading effects`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "The child elements to animate sequentially",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    stagger: {
      control: { type: "range", min: 0, max: 1, step: 0.05 },
      description: "Time delay between each child animation (in seconds)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.1" },
      },
    },
    pattern: {
      control: { type: "select" },
      options: ["cascade", "wave", "spiral", "random"],
      description: "Animation pattern for timing calculations",
      table: {
        type: { summary: "SequentialRevealPattern" },
        defaultValue: { summary: "cascade" },
      },
    },
    triggerOnce: {
      control: { type: "boolean" },
      description:
        "Whether animation should only trigger once or repeat on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    threshold: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
      description: "Intersection threshold for triggering animation (0-1)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.1" },
      },
    },
    initialDelay: {
      control: { type: "range", min: 0, max: 2, step: 0.1 },
      description: "Initial delay before any animations start (in seconds)",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    animateOnMount: {
      control: { type: "boolean" },
      description: "Start animation immediately on mount instead of on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for the container",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const featureCards = [
  {
    title: "Lightning Fast",
    description: "Optimized for performance with 60fps animations",
    icon: "⚡",
  },
  {
    title: "Fully Accessible",
    description: "Respects reduced motion preferences automatically",
    icon: "♿",
  },
  {
    title: "Highly Customizable",
    description: "Multiple patterns and extensive configuration options",
    icon: "🎨",
  },
  {
    title: "Developer Friendly",
    description: "TypeScript native with excellent IntelliSense support",
    icon: "👨‍💻",
  },
];

export const Default: Story = {
  args: {
    stagger: 0.15,
    pattern: "cascade",
    triggerOnce: true,
    threshold: 0.1,
    animateOnMount: true,
  },
  render: (args) => (
    <SequentialReveal {...args} className="grid grid-cols-2 gap-4 max-w-2xl">
      {featureCards.map((feature, index) => (
        <Card key={index} className="p-4">
          <CardHeader className="pb-2">
            <div className="text-2xl mb-2">{feature.icon}</div>
            <CardTitle className="text-lg">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription>{feature.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </SequentialReveal>
  ),
};

export const CascadePattern: Story = {
  args: {
    stagger: 0.1,
    pattern: "cascade",
    animateOnMount: true,
  },
  render: (args) => (
    <SequentialReveal {...args} className="flex flex-col gap-3 max-w-md">
      <Button variant="outline" className="justify-start">
        🏠 Dashboard
      </Button>
      <Button variant="outline" className="justify-start">
        👥 Team Members
      </Button>
      <Button variant="outline" className="justify-start">
        📊 Analytics
      </Button>
      <Button variant="outline" className="justify-start">
        ⚙️ Settings
      </Button>
      <Button variant="outline" className="justify-start">
        📞 Support
      </Button>
    </SequentialReveal>
  ),
};

export const WavePattern: Story = {
  args: {
    stagger: 0.08,
    pattern: "wave",
    animateOnMount: true,
  },
  render: (args) => (
    <SequentialReveal {...args} className="grid grid-cols-3 gap-3 max-w-lg">
      {Array.from({ length: 9 }, (_, i) => (
        <Button key={i + 1}>Item {i + 1}</Button>
      ))}
    </SequentialReveal>
  ),
};

export const SpiralPattern: Story = {
  args: {
    stagger: 0.12,
    pattern: "spiral",
    animateOnMount: true,
  },
  render: (args) => (
    <SequentialReveal {...args} className="grid grid-cols-3 gap-4 max-w-md">
      {Array.from({ length: 9 }, (_, i) => (
        <Button key={i + 1}>Item {i + 1}</Button>
      ))}
    </SequentialReveal>
  ),
};

export const RandomPattern: Story = {
  args: {
    stagger: 0.15,
    pattern: "random",
    animateOnMount: true,
  },
  render: (args) => (
    <SequentialReveal
      {...args}
      className="flex flex-wrap gap-2 max-w-lg justify-center"
    >
      {[
        "React",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Storybook",
        "Vite",
        "ESLint",
        "Prettier",
      ].map((tech) => (
        <Badge key={tech} variant="secondary" className="px-3 py-1">
          {tech}
        </Badge>
      ))}
    </SequentialReveal>
  ),
};
