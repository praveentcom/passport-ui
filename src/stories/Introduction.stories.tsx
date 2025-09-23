import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { CodeBlock } from "../components/code-block";
import { PrefetchLink } from "../components/prefetch-link";
import { ThemeToggle } from "../composables/theme-toggle";
import { AUTHOR } from "../constants";
import { ContentContainer } from "../layouts/content-container";
import { PageLayout } from "../layouts/page-layout";

const INSTALLATION_CODE = {
  PACKAGE_INSTALL: `npm install passport-ui`,
  POSTCSS_SETUP: `export default {
  plugins: ["@tailwindcss/postcss"],
};`,
  CSS_IMPORT: `@source '../../node_modules/passport-ui/src';
@import 'passport-ui/styles.css';

/* Optional styles based on requirement */
@import 'passport-ui/hljs-themes.css'; /* for code highlighting */
@import 'passport-ui/tailwind-colors.css'; /* for dynamic construction of colors */`,
  THEME_PROVIDER: `import { ThemeProvider } from "passport-ui";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Your app content */}
    </ThemeProvider>
  );
}`,
  COMPONENTS_IMPORT: `import {
  Button,
  Card,
  CardContent
} from "passport-ui";

function App() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}`,
};

const IntroductionDocs = () => (
  <PageLayout
    header={
      <div className="flex justify-between items-center gap-4">
        <h2>Passport UI</h2>
        <ThemeToggle />
      </div>
    }
    footer={
      <div className="meta-container">
        <h3>
          Maintained by <a href={AUTHOR.url}>{AUTHOR.name}</a>
        </h3>
        <div className="flex gap-2 items-center">
          <PrefetchLink
            href="https://github.com/praveentcom/passport-ui"
            className="text-primary hover:underline"
          >
            GitHub
          </PrefetchLink>
          <span>•</span>
          <PrefetchLink
            href="https://www.npmjs.com/package/passport-ui"
            className="text-primary hover:underline"
          >
            npm
          </PrefetchLink>
        </div>
      </div>
    }
    footerOptions={{
      sticky: true,
      blurred: true,
    }}
  >
    <ContentContainer variant="broad">
      <div className="meta-container">
        <div className="grid">
          <h3>Installation</h3>
          <p>
            To get started, install the library and its dependencies by
            following the steps below.
          </p>
        </div>
      </div>
      <div className="meta-container">
        <p className="text-sm">
          <span className="font-medium">Step 1:</span>{" "}
          <span className="font-normal">Install the passport-ui package</span>
        </p>
        <CodeBlock
          filename="zsh/bash"
          hideLineNumbers
          code={INSTALLATION_CODE.PACKAGE_INSTALL}
        />
      </div>
      <div className="meta-container">
        <p className="text-sm">
          <span className="font-medium">Step 2:</span>{" "}
          <span className="font-normal">
            Configure PostCSS to use tailwindcss
          </span>
        </p>
        <CodeBlock
          filename="postcss.config.mjs"
          language="javascript"
          code={INSTALLATION_CODE.POSTCSS_SETUP}
        />
      </div>
      <div className="meta-container">
        <p className="text-sm">
          <span className="font-medium">Step 3:</span>{" "}
          <span className="font-normal">
            Import passport-ui styles in your main stylesheet
          </span>
        </p>
        <CodeBlock
          filename="styles.css"
          language="css"
          code={INSTALLATION_CODE.CSS_IMPORT}
        />
      </div>
      <div className="meta-container">
        <p className="text-sm">
          <span className="font-medium">Step 4:</span>{" "}
          <span className="font-normal">
            Wrap your app with the theme provider
          </span>
        </p>
        <CodeBlock
          filename="app.tsx"
          language="typescript"
          code={INSTALLATION_CODE.THEME_PROVIDER}
        />
      </div>
      <div className="meta-container">
        <p className="text-sm">
          <span className="font-medium">Step 5:</span>{" "}
          <span className="font-normal">
            Use the components (example: Button, Card, etc.)
          </span>
        </p>
        <CodeBlock
          filename="app.tsx"
          language="typescript"
          code={INSTALLATION_CODE.COMPONENTS_IMPORT}
        />
      </div>
    </ContentContainer>
  </PageLayout>
);

const meta: Meta<typeof IntroductionDocs> = {
  title: "Introduction",
  component: IntroductionDocs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Passport UI is a React component library for Next.js applications, built on shadcn/ui, Tailwind CSS v4, and Framer Motion.`,
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
