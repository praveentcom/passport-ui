'use client'

import { ThemeToggle } from '../../src/composables/theme-toggle'
import { MetaContainer } from '../../src/composables/meta-container'
import { PageLayout } from '../../src/layouts/page-layout'
import { CodeBlock } from '../../src/components/code-block'
import { SidebarContainer, SidebarContainerMenuItem } from '../../src/layouts/sidebar-container'
import { Home, Palette } from 'lucide-react'

const INSTALLATION_CODE = {
  PACKAGE_INSTALL: `npm install passport-ui`,
  DEPENDENCIES_INSTALL: `npm install tailwindcss @tailwindcss/postcss`,
  POSTCSS_SETUP: `export default {
  plugins: ["@tailwindcss/postcss"],
};`,
  CSS_IMPORT: `@source '../../node_modules/passport-ui/src';
@import 'passport-ui/styles.css';

/* Optional styles based on requirement */
@import 'passport-ui/hljs-themes.css'; /* Optional: for code highlighting */
@import 'passport-ui/tailwind-colors.css'; /* Optional: dynamic usage of tailwind colors */`,
  THEME_PROVIDER: `import { ThemeProvider } from "passport-ui/client";

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
} from "passport-ui/client";

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

const sidebarMenuItems: SidebarContainerMenuItem[] = [
  {
    title: "Installation",
    href: "/",
    isActive: true,
    icon: Home,
  },
  {
    title: "Color System",
    href: "/colors",
    isActive: false,
    icon: Palette
  },
];

const sidebar = (
  <SidebarContainer
    menuItems={sidebarMenuItems}
    searchable={true}
    searchPlaceholder='Search...'
    sidebarHeader={
      <MetaContainer title="Passport UI">
        Sleek & Compact UI Library
      </MetaContainer>
    }
  />
);

export default function IntroductionPage() {
  return (
    <PageLayout
      sidebar={sidebar}
      contentVariant="relaxed"
      header={
        <div className="flex justify-between items-center gap-4">
          <h2>Passport UI</h2>
          <ThemeToggle />
        </div>
      }
      footer={
        <MetaContainer title="Maintained by Praveen Thirumurugan">
          <div className="flex gap-2 items-center">
            <a
              href="https://github.com/praveentcom/passport-ui"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://www.npmjs.com/package/passport-ui"
              className="text-primary hover:underline"
            >
              npm
            </a>
          </div>
        </MetaContainer>
      }
      footerSticky
      footerBlurred
    >
      <div className="section-container">
        <MetaContainer>
          <div className="grid">
            <h3>Installation</h3>
            <p>
              To get started, install the library and its dependencies by following the steps below.
            </p>
          </div>
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 1:</p>
            <p className="text-xs font-normal">Install the passport-ui package</p>
          </div>
          <CodeBlock filename="zsh/bash" hideLineNumbers code={INSTALLATION_CODE.PACKAGE_INSTALL} />
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 2:</p>
            <p className="text-xs font-normal">Install required dependencies</p>
          </div>
          <CodeBlock filename="zsh/bash" hideLineNumbers code={INSTALLATION_CODE.DEPENDENCIES_INSTALL} />
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 3:</p>
            <p className="text-xs font-normal">Configure PostCSS to use tailwindcss</p>
          </div>
          <CodeBlock filename="postcss.config.mjs" language="javascript" code={INSTALLATION_CODE.POSTCSS_SETUP} />
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 4:</p>
            <p className="text-xs font-normal">Import passport-ui styles in your main stylesheet</p>
          </div>
          <CodeBlock filename="styles.css" language="css" code={INSTALLATION_CODE.CSS_IMPORT} />
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 5:</p>
            <p className="text-xs font-normal">Wrap your app with the theme provider (for theme support)</p>
          </div>
          <CodeBlock filename="app.tsx" language="typescript" code={INSTALLATION_CODE.THEME_PROVIDER} />
        </MetaContainer>
        <MetaContainer>
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium">Step 6:</p>
            <p className="text-xs font-normal">Use the components (example: Button, Card, etc.)</p>
          </div>
          <CodeBlock filename="app.tsx" language="typescript" code={INSTALLATION_CODE.COMPONENTS_IMPORT} />
        </MetaContainer>
      </div>
    </PageLayout>
  )
}
