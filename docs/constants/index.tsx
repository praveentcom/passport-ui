import { AUTHOR } from "../../src/constants";

// Base URLs and site info
export const SITE_CONFIG = {
  baseUrl: "https://passportui.com",
  name: "Passport UI - React Component Library designed for building apps blazingly fast",
  title:
    "Passport UI - React Component Library designed for building apps blazingly fast",
  description:
    "Built on top of shadcn/ui's excellent foundation, but designed as a complete library solution. Explore the collection of 75+ premium components, composed with Tailwind CSS, Radix UI, and Motion.",
  author: {
    name: AUTHOR.name,
    url: AUTHOR.url,
  },
  repository: "https://github.com/praveentcom/passport-ui",
  npm: "https://www.npmjs.com/package/passport-ui",
  mainSite: "https://passportui.com/",
  storybook: "https://storybook.passportui.com",
  images: {
    openGraph:
      "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/open_graph_light%402x.png",
    logo: "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/logo_external_light%401x.png",
    logoSquareDark:
      "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/logo_square_dark%401x.png",
    logoSquareLight:
      "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/logo_square_light%401x.png",
    logoHorizontalDark:
      "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/logo_horizontal_dark%401x.png",
    logoHorizontalLight:
      "https://storage.googleapis.com/praveentcom-public/projects/passport-ui/logo_horizontal_light%401x.png",
  },
} as const;

// Base structured data for the software application
export const BASE_SOFTWARE_APPLICATION = {
  "@type": "SoftwareApplication",
  name: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.mainSite,
  author: {
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    url: SITE_CONFIG.author.url,
  },
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  programmingLanguage: [
    {
      "@type": "ComputerLanguage",
      name: "TypeScript",
    },
    {
      "@type": "ComputerLanguage",
      name: "React",
    },
  ],
  downloadUrl: SITE_CONFIG.npm,
  codeRepository: SITE_CONFIG.repository,
  softwareVersion: "latest",
  releaseNotes: "https://github.com/praveentcom/passport-ui/releases",
} as const;

// Structured data generators
export const createPageStructuredData = (pageData: {
  name?: string;
  description?: string;
  url: string;
  breadcrumbName: string;
  breadcrumbUrl: string;
  mainEntity?: Record<string, unknown>;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageData.name ? pageData.name : SITE_CONFIG.title,
  description: pageData.description
    ? pageData.description
    : SITE_CONFIG.description,
  url: pageData.url,
  mainEntity: pageData.mainEntity || BASE_SOFTWARE_APPLICATION,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.baseUrl + "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageData.breadcrumbName,
        item: pageData.breadcrumbUrl,
      },
    ],
  },
});
