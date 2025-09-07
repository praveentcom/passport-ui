import type { Meta, StoryObj } from "@storybook/nextjs";

import { PageContainer } from "./page-container";
import { MetaContainer } from "./meta-container";
import { Card, CardContent } from "@/client";

const meta: Meta<typeof PageContainer> = {
  title: "Containers/PageContainer",
  component: PageContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A page wrapper component that combines structured data injection with a consistent page layout. Includes optional blur-in animation and automatic structured data handling.",
      },
    },
  },
  argTypes: {
    structuredData: {
      control: "object",
      description: "Schema.org structured data object to inject into the page",
    },
    children: {
      control: false,
      description: "The page content to render",
    },
    skipAnimation: {
      control: "boolean",
      description: "Whether to skip the blur-in animation",
      defaultValue: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageContainer>;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Passport UI Documentation",
  description: "Modern React UI component library for Next.js applications",
  url: "https://passport-ui.example.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://passport-ui.example.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export const Default: Story = {
  args: {
    structuredData: structuredData,
    skipAnimation: false,
    children: (
      <div className="section-container">
        <MetaContainer title="Welcome to Passport UI">
          A modern React component library for Next.js applications
        </MetaContainer>
        <div className="list-container md:grid-cols-2">
          <Card>
            <CardContent>
              <MetaContainer title="Accessible Components">
                Built on Radix UI primitives with full keyboard navigation and
                screen reader support.
              </MetaContainer>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <MetaContainer title="Theme System">
                Complete dark/light mode support with CSS custom properties.
              </MetaContainer>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <MetaContainer title="Motion Primitives">
                Beautiful animations powered by Framer Motion.
              </MetaContainer>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <MetaContainer title="TypeScript First">
                Fully typed components with excellent developer experience.
              </MetaContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
};
