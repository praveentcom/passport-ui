import { CodeBlock } from "../../src/components/code-block";
import { StructuredData } from "../../src/components/structured-data";
import { ContentContainer } from "../../src/layouts/content-container";
import { INSTALLATION_PAGE_DATA } from "../constants";

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
  return (
    <ContentContainer variant="broad">
      <StructuredData data={INSTALLATION_PAGE_DATA} />
      <div className="meta-container">
        <h3>Installation</h3>
        <p>
          To get started, install the library and its dependencies by following
          the steps below.
        </p>
      </div>
      <div className="meta-container">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-medium">Step 1:</p>
          <p className="text-sm font-normal">Install the passport-ui package</p>
        </div>
        <CodeBlock
          filename="zsh/bash"
          hideLineNumbers
          code={INSTALLATION_CODE.PACKAGE_INSTALL}
        />
      </div>
      <div className="meta-container">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-medium">Step 2:</p>
          <p className="text-sm font-normal">
            Configure PostCSS to use tailwindcss
          </p>
        </div>
        <CodeBlock
          filename="postcss.config.mjs"
          language="javascript"
          code={INSTALLATION_CODE.POSTCSS_SETUP}
        />
      </div>
      <div className="meta-container">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-medium">Step 3:</p>
          <p className="text-sm font-normal">
            Import passport-ui styles in your main stylesheet
          </p>
        </div>
        <CodeBlock
          filename="styles.css"
          language="css"
          code={INSTALLATION_CODE.CSS_IMPORT}
        />
      </div>
      <div className="meta-container">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-medium">Step 4:</p>
          <p className="text-sm font-normal">
            Wrap your app with the theme provider (for theme support)
          </p>
        </div>
        <CodeBlock
          filename="app.tsx"
          language="typescript"
          code={INSTALLATION_CODE.THEME_PROVIDER}
        />
      </div>
      <div className="meta-container">
        <div className="flex gap-1 items-center">
          <p className="text-sm font-medium">Step 5:</p>
          <p className="text-sm font-normal">
            Use the components (example: Button, Card, etc.)
          </p>
        </div>
        <CodeBlock
          filename="app.tsx"
          language="typescript"
          code={INSTALLATION_CODE.COMPONENTS_IMPORT}
        />
      </div>
    </ContentContainer>
  );
}
