// Base URLs and site info
export const SITE_CONFIG = {
  baseUrl: "https://passportui.com",
  name: "Passport UI",
  title: "Passport UI - Docs",
  description:
    "Installation guide for Passport UI - a React UI component library built with Tailwind CSS, Radix UI, and Framer Motion.",
  author: {
    name: "Praveen Thirumurugan",
    url: "https://github.com/praveentcom",
  },
  repository: "https://github.com/praveentcom/passport-ui",
  npm: "https://www.npmjs.com/package/passport-ui",
  mainSite: "https://passportui.com/",
  storybook: "https://storybook.passportui.com/",
  images: {
    openGraph:
      "https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png",
    logo: "https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png",
  },
} as const;

// Base structured data for the software application
export const BASE_SOFTWARE_APPLICATION = {
  "@type": "SoftwareApplication",
  name: "Passport UI",
  description:
    "React UI component library built with Tailwind CSS, Radix UI, and Framer Motion. Collection of accessible components for Next.js applications.",
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
  releaseNotes: "React UI component library with accessibility support",
} as const;

// Structured data generators
export const createPageStructuredData = (pageData: {
  name: string;
  description: string;
  url: string;
  breadcrumbName: string;
  breadcrumbUrl: string;
  mainEntity?: Record<string, unknown>;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageData.name,
  description: pageData.description,
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
