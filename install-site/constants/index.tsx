// Base URLs and site info
export const SITE_CONFIG = {
  baseUrl: "https://install.passportui.com",
  name: "Passport UI",
  title: "Passport UI - Setup Guide",
  description:
    "Complete installation guide and documentation for Passport UI - a sleek and compact React UI component library built with Tailwind CSS, Radix UI, and Framer Motion.",
  author: {
    name: "Praveen Thirumurugan",
    url: "https://github.com/praveentcom",
  },
  repository: "https://github.com/praveentcom/passport-ui",
  npm: "https://www.npmjs.com/package/passport-ui",
  mainSite: "https://passportui.com/",
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
    "Sleek and compact UI component library built with Tailwind CSS, Radix UI, and Framer Motion. Comprehensive collection of accessible components for Next.js applications.",
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
  releaseNotes:
    "Sleek and compact React UI component library with comprehensive accessibility support",
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

// Page-specific structured data
export const INSTALLATION_PAGE_DATA = createPageStructuredData({
  name: "Passport UI - Installation",
  description:
    "Complete installation guide for Passport UI - a sleek and compact React UI component library built with Tailwind CSS, Radix UI, and Framer Motion.",
  url: SITE_CONFIG.baseUrl + "/",
  breadcrumbName: "Installation",
  breadcrumbUrl: SITE_CONFIG.baseUrl + "/",
});

export const COLORS_PAGE_DATA = createPageStructuredData({
  name: "Passport UI - Color System",
  description:
    "Complete color system documentation for Passport UI component library. Explore design colors, semantic colors, component colors, and chart colors with automatic light/dark theme support.",
  url: SITE_CONFIG.baseUrl + "/colors/",
  breadcrumbName: "Color System",
  breadcrumbUrl: SITE_CONFIG.baseUrl + "/colors/",
  mainEntity: {
    "@type": "Article",
    headline: "Passport UI - Color System",
    description:
      "Comprehensive guide to Passport UI's color system built on OKLCH color space for better color management and automatic light/dark theme support.",
    author: {
      "@type": "Person",
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Passport UI",
      url: SITE_CONFIG.mainSite,
    },
    datePublished: "2024-01-15",
    dateModified: "2024-01-15",
    articleSection: "Documentation",
    keywords: [
      "Color System",
      "Design Tokens",
      "OKLCH Colors",
      "Theme System",
      "Dark Mode",
      "Light Mode",
      "Accessibility",
      "UI Components",
    ],
  },
});

export const FONTS_PAGE_DATA = createPageStructuredData({
  name: "Passport UI - Font System",
  description:
    "Complete font system documentation for Passport UI component library. Explore font weights, font sizes, and font families with automatic light/dark theme support.",
  url: SITE_CONFIG.baseUrl + "/fonts/",
  breadcrumbName: "Font System",
  breadcrumbUrl: SITE_CONFIG.baseUrl + "/fonts/",
});
