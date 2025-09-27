import { Metadata } from "next";

import { Breadcrumb } from "../../../src/components/breadcrumb";
import { CodeBlock } from "../../../src/components/code-block";
import { StructuredData } from "../../../src/components/structured-data";
import { ContentContainer } from "../../../src/layouts/content-container";
import { SITE_CONFIG, createPageStructuredData } from "../../constants";
import { generateBreadcrumbs } from "../../utils/breadcrumbs";

const INSTALLATION_STEPS = [
  {
    title: "Install the passport-ui package",
    code: `npm install passport-ui`,
    filename: "zsh/bash",
    hideLineNumbers: true,
    language: "shell",
  },
  {
    title: "Configure PostCSS to use tailwindcss",
    code: `export default {
  plugins: ["@tailwindcss/postcss"],
};`,
    filename: "postcss.config.mjs",
    hideLineNumbers: false,
    language: "javascript",
  },
  {
    title: "Import passport-ui styles in your main stylesheet",
    code: `@source '../../node_modules/passport-ui/src';
@import 'passport-ui/styles.css';

/* Optional: for code highlighting */
@import 'passport-ui/hljs-themes.css';`,
    filename: "styles.css",
    hideLineNumbers: false,
    language: "css",
  },
  {
    title: "Wrap your app with the theme provider",
    code: `import { ThemeProvider } from "passport-ui";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Your app content */}
    </ThemeProvider>
  );
}`,
    filename: "app.tsx",
    hideLineNumbers: false,
    language: "typescript",
  },
  {
    title: "Use the components (example: Button, Card, etc.)",
    code: `import {
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
    filename: "app.tsx",
    hideLineNumbers: false,
    language: "typescript",
  },
];

export default function InstallationPage() {
  const breadcrumbs = generateBreadcrumbs("/installation");

  return (
    <ContentContainer variant="broad">
      {breadcrumbs.length > 1 && <Breadcrumb path={breadcrumbs} />}
      <StructuredData
        data={createPageStructuredData({
          name: SITE_CONFIG.title + " - Installation",
          url: SITE_CONFIG.baseUrl + "/installation",
          breadcrumbName: "Installation",
          breadcrumbUrl: SITE_CONFIG.baseUrl + "/installation",
        })}
      />
      <div className="meta-container">
        <h1>Installation</h1>
        <p>
          To get started, install the library and its dependencies by following
          the steps below.
        </p>
      </div>
      {INSTALLATION_STEPS.map((step, index) => (
        <div className="list-container" key={index}>
          <div className="meta-container gap-0">
            <p className="text-md font-medium">Step {index + 1}</p>
            <span>{step.title}</span>
          </div>
          <CodeBlock
            filename={step.filename}
            language={step.language || "typescript"}
            code={step.code}
            hideLineNumbers={step.hideLineNumbers}
          />
        </div>
      ))}
    </ContentContainer>
  );
}

export const metadata: Metadata = {
  title: SITE_CONFIG.title + " - Installation",
  description: SITE_CONFIG.description,
};
