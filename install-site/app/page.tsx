import { Breadcrumb } from "../../src/components/breadcrumb";
import { CodeBlock } from "../../src/components/code-block";
import { StructuredData } from "../../src/components/structured-data";
import { ContentContainer } from "../../src/layouts/content-container";
import { SITE_CONFIG, createPageStructuredData } from "../constants";
import { generateBreadcrumbs } from "../utils/breadcrumbs";

const INSTALLATION_CODE = {
  PACKAGE_INSTALL: `npm install passport-ui`,
  POSTCSS_SETUP: `export default {
  plugins: ["@tailwindcss/postcss"],
};`,
  CSS_IMPORT: `@source '../../node_modules/passport-ui/src';
@import 'passport-ui/styles.css';

/* Optional styles based on requirement */
@import 'passport-ui/hljs-themes.css'; /* Optional: for code highlighting */
@import 'passport-ui/tailwind-colors.css'; /* Optional: dynamic usage of tailwind colors */`,
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

export default function IntroductionPage() {
  const breadcrumbs = generateBreadcrumbs("/");

  return (
    <ContentContainer variant="broad">
      {breadcrumbs.length > 1 && <Breadcrumb path={breadcrumbs} />}
      <StructuredData
        data={createPageStructuredData({
          name: "Passport UI - Installation",
          description:
            "Installation guide for Passport UI - a React UI component library built with Tailwind CSS, Radix UI, and Framer Motion.",
          url: SITE_CONFIG.baseUrl + "/",
          breadcrumbName: "Installation",
          breadcrumbUrl: SITE_CONFIG.baseUrl + "/",
        })}
      />
      <div className="meta-container">
        <h1>Installation</h1>
        <p>
          To get started, install the library and its dependencies by following
          the steps below.
        </p>
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
  );
}
