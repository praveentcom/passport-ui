import type { Meta, StoryObj } from "@storybook/nextjs";

import { StructuredData } from "./structured-data";
import { Card, CardContent } from "./card";
import { MetaContainer } from "@/client";

const meta: Meta<typeof StructuredData> = {
  title: "Components/StructuredData",
  component: StructuredData,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component that injects structured data (JSON-LD) into the page head for SEO purposes. Supports any Schema.org structured data format.",
      },
    },
  },
  argTypes: {
    data: {
      control: "object",
      description: "The structured data object to inject as JSON-LD",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StructuredData>;

const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Understanding React Component Libraries",
  description:
    "A deep dive into building and maintaining React component libraries for modern web applications.",
  author: {
    "@type": "Person",
    name: "Jordan Chen",
    url: "https://example.com/authors/jordan-chen",
  },
  datePublished: "2024-01-15T09:00:00Z",
  dateModified: "2024-01-20T16:45:00Z",
  publisher: {
    "@type": "Organization",
    name: "Tech Insights",
    logo: {
      "@type": "ImageObject",
      url: "https://placehold.co/300x100/059669/ffffff?text=Tech+Insights",
    },
  },
  image: {
    "@type": "ImageObject",
    url: "https://placehold.co/800x400/0ea5e9/ffffff?text=React+Components",
    width: 800,
    height: 400,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://example.com/articles/react-component-libraries",
  },
};

export const Article: Story = {
  args: {
    data: articleData,
  },
  decorators: [
    (Story) => (
      <div className="w-sm">
        <Card>
          <CardContent>
            <MetaContainer title="Structured Data">
              Helps search engines understand article content, author
              information, publication dates, and enables rich snippets in
              search results.
            </MetaContainer>
            <MetaContainer title="Example">
              This component injects Article schema markup for blog posts and
              articles. Check the browser&apos;s developer tools to see the
              JSON-LD script tag.
            </MetaContainer>
          </CardContent>
        </Card>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Article structured data for blog posts, news articles, and documentation pages.",
      },
    },
  },
};
