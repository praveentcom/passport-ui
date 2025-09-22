import { Database } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Structured Data",
  icon: Database,
  description: "Component description",
  category: "components",
  storyId: "components-structured-data--default",
  slug: "structured-data",
  importCode: `import { StructuredData } from "passport-ui";`,
  usageCode: `const articleData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Understanding React Component Libraries",
  description: "A deep dive into building and maintaining React component libraries for modern web applications.",
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
};

<StructuredData data={articleData} />`,
};
