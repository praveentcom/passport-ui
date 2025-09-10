import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
  ],
  managerHead: (head) => `
    ${head}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3S77KHWEJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z3S77KHWEJ');
    </script>
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png" />
    <link rel="shortcut icon" type="image/png" href="https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png" />
    <link rel="apple-touch-icon" href="https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png" />
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="Passport UI - Sleek and compact UI component library" />
    <meta property="og:description" content="Sleek and compact UI component library built with Tailwind CSS, Radix UI, and Framer Motion. Comprehensive collection of accessible components for Next.js applications." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://passportui.com/" />
    <meta property="og:image" content="https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Passport UI - Sleek and compact UI component library" />
    <meta property="og:site_name" content="Passport UI" />
    <meta property="og:locale" content="en_US" />
    
    <!-- GitHub Repository Link -->
    <meta property="article:author" content="https://github.com/praveentcom/passport-ui" />
    <link rel="alternate" type="application/rss+xml" title="Passport UI Repository" href="https://github.com/praveentcom/passport-ui" />
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Passport UI - Sleek and compact UI component library" />
    <meta name="twitter:description" content="Sleek and compact UI component library built with Tailwind CSS, Radix UI, and Framer Motion." />
    <meta name="twitter:image" content="https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png" />
    <meta name="twitter:image:alt" content="Passport UI Component Library" />
    
    <!-- Additional Meta Tags -->
    <meta name="description" content="Sleek and compact UI component library built with Tailwind CSS, Radix UI, and Framer Motion. Comprehensive collection of accessible components for Next.js applications." />
    <meta name="keywords" content="React, UI Components, Tailwind CSS, Radix UI, Framer Motion, Next.js, Component Library, Design System, Sleek, Compact" />
    <meta name="author" content="Passport UI Team" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://passportui.com/" />
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Passport UI",
      "description": "Sleek and compact UI component library built with Tailwind CSS, Radix UI, and Framer Motion. Comprehensive collection of accessible components for Next.js applications.",
      "url": "https://passportui.com/",
      "author": {
        "@type": "Organization",
        "name": "Passport UI Team",
        "url": "https://github.com/praveentcom/passport-ui"
      },
      "applicationCategory": "DeveloperApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "programmingLanguage": [
        {
          "@type": "ComputerLanguage",
          "name": "TypeScript"
        },
        {
          "@type": "ComputerLanguage", 
          "name": "React"
        }
      ],
      "downloadUrl": "https://www.npmjs.com/package/passport-ui",
      "codeRepository": "https://github.com/praveentcom/passport-ui",
      "softwareVersion": "latest",
      "releaseNotes": "Sleek and compact React UI component library with comprehensive accessibility support",
      "screenshot": "https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png"
    }
    </script>
  `,
  previewHead: (head) => `
    ${head}
    <!-- Google Analytics - Now using Analytics component in React apps -->
    <!-- For React apps, use: <Analytics providers={{ googleAnalytics: { trackingId: 'G-Z3S77KHWEJ' } }} /> -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3S77KHWEJ"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z3S77KHWEJ');
    </script>
    
    <!-- Favicon for preview iframe -->
    <link rel="icon" type="image/png" href="https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png" />
    
    <!-- Preview-specific meta tags -->
    <meta name="description" content="Passport UI Component Library - Interactive component preview" />
    <meta name="robots" content="index, follow" />
  `,
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config) => {
    const webpack = require("webpack");

    /**
     * Config Resolutions
     */
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": require("path").resolve(__dirname, "../src"),
      "next/link": require("path").resolve(__dirname, "./mocks.tsx"),
      "next/navigation": require("path").resolve(__dirname, "./mocks.tsx"),
    };
    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve("process/browser"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    };

    /**
     * Config Plugins
     */
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      })
    );

    /**
     * Config Module Rules
     */
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules = config.module.rules.filter((rule) => {
      if (typeof rule === "object" && rule && rule.test) {
        return !rule.test.toString().includes("css");
      }
      return true;
    });
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: ["@tailwindcss/postcss"],
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });

    return config;
  },
};
export default config;
