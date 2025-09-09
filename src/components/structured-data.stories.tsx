import type { Meta, StoryObj } from "@storybook/nextjs";

import { MetaContainer, Card, CardContent } from "@/client";
import { StructuredData } from "@/server";

const meta: Meta<typeof StructuredData> = {
  title: "Components/StructuredData",
  component: StructuredData,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A SEO-optimized component that injects Schema.org structured data as JSON-LD into the page head for enhanced search engine visibility.

## Features
- Automatic JSON-LD script injection into document head
- Support for all Schema.org structured data types
- SEO optimization for rich search results
- Type-safe structured data handling
- Automatic script cleanup on unmount
- Zero visual impact (head-only injection)
- Google Search Console compatible

## Supported Schema Types
- **Article**: Blog posts, news articles, documentation
- **Organization**: Company and business information
- **Person**: Author and profile information
- **Product**: E-commerce product details
- **WebSite**: Website and search action markup
- **BreadcrumbList**: Navigation breadcrumb markup
- **FAQ**: Frequently asked questions
- **Event**: Events and meetups
- And many more Schema.org types

## SEO Benefits
- Enhanced search result snippets
- Rich search features (ratings, prices, etc.)
- Better content understanding by search engines
- Improved click-through rates
- Knowledge panel eligibility

## Usage
Use structured data for:
- Blog articles and content pages
- Product and service pages
- Organization and contact information
- Events and announcements
- Any content that benefits from rich search results

## Best Practices
- Use appropriate Schema.org types for your content
- Provide complete and accurate information
- Test with Google's Rich Results Test tool
- Include required properties for each schema type

## Implementation
The component automatically injects JSON-LD scripts into the document head without affecting page rendering.`,
      },
    },
  },
  argTypes: {
    data: {
      control: "object",
      description:
        "The Schema.org structured data object to inject as JSON-LD markup",
      table: {
        type: { summary: "Record<string, any>" },
        category: "SEO",
      },
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
