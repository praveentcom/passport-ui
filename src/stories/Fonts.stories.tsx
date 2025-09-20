import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from "../components/button";
import { CodeBlock } from "../components/code-block";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Separator } from "../components/separator";
import { ThemeToggle } from "../composables/theme-toggle";
import { ContentContainer } from "../layouts/content-container";
import { PageLayout } from "../layouts/page-layout";

const FONT_CUSTOMIZATION_CODE = {
  CSS_OVERRIDE: `/* In your main CSS file (e.g., app/globals.css) */
@import 'passport-ui/styles.css';

/* Override the default font after importing passport-ui styles */
@font-face {
  font-family: "Custom Font";
  src: url("./fonts/custom-font-regular.woff2") format("woff2"),
       url("./fonts/custom-font-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Custom Font";
  src: url("./fonts/custom-font-bold.woff2") format("woff2"),
       url("./fonts/custom-font-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-sans: "Custom Font", ui-sans-serif, system-ui, sans-serif;
}`,
};

const FontWeightExample = ({
  weight,
  label,
  input,
}: {
  weight: string;
  label: string;
  input: string;
}) => (
  <div className="meta-container">
    <div className="text-xs text-muted-foreground font-mono">{label}</div>
    <div className={`text-lg ${weight}`}>
      {input || "The quick brown fox jumps over the lazy dog"}
    </div>
  </div>
);

const FontSizeExample = ({
  size,
  label,
  input,
}: {
  size: string;
  label: string;
  input: string;
}) => (
  <div className="meta-container">
    <div className="text-xs text-muted-foreground font-mono">{label}</div>
    <div className={`${size}`}>
      {input || "The quick brown fox jumps over the lazy dog"}
    </div>
  </div>
);

const FontsDocs = () => {
  const [input, setInput] = useState("");

  return (
    <PageLayout
      header={
        <div className="flex justify-between items-center gap-4">
          <h2>Font & Typography</h2>
          <ThemeToggle />
        </div>
      }
      footer={
        <div className="meta-container">
          <h3>Font System Documentation</h3>
          <p>
            Open Runde is the default typeface with comprehensive customization
            options
          </p>
        </div>
      }
      footerOptions={{
        sticky: true,
        blurred: true,
      }}
    >
      <ContentContainer variant="broad">
        <div className="section-container">
          <div className="meta-container">
            <h3>Default Typography</h3>
            <p>
              Passport UI uses &quot;Open Runde&quot; as the default typeface, a
              modern sans-serif font optimized for digital interfaces. The font
              stack includes comprehensive fallbacks to ensure consistent
              rendering across all devices.
            </p>
          </div>
          <div className="meta-container flex">
            <Button asChild>
              <a
                href="https://github.com/lauridskern/open-runde"
                target="_blank"
                rel="noreferrer noopener"
              >
                Open Runde {"\u2197"}
              </a>
            </Button>
          </div>
        </div>

        <Separator />

        <div className="section-container">
          <div className="meta-container">
            <h3>Attribution</h3>
            <p>
              Special thanks to the creators of the fonts that inspire our
              typography system. This includes Open Runde (a rounded variant of
              the typeface Inter) by Rasmus Andersson ({"\u0040rsms"}).
            </p>
          </div>
          <div className="meta-container flex">
            <Button variant="outline" asChild>
              <a
                href="https://github.com/rsms"
                target="_blank"
                rel="noreferrer noopener"
              >
                Rasmus Andersson {"\u2197"}
              </a>
            </Button>
          </div>
        </div>

        <Separator />

        <div className="section-container">
          <div className="meta-container">
            <h3>Font Weights</h3>
            <p>
              Open Runde includes four carefully selected weights for optimal
              hierarchy and readability.
            </p>
          </div>
          <div className="meta-container max-w-64">
            <Label>Preview Text</Label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to display"
            />
          </div>
          <div className="list-container">
            <FontWeightExample
              weight="font-normal"
              label="font-normal (400)"
              input={input}
            />
            <FontWeightExample
              weight="font-medium"
              label="font-medium (500)"
              input={input}
            />
            <FontWeightExample
              weight="font-semibold"
              label="font-semibold (600)"
              input={input}
            />
            <FontWeightExample
              weight="font-bold"
              label="font-bold (700)"
              input={input}
            />
          </div>
        </div>

        <Separator />

        <div className="section-container">
          <div className="meta-container">
            <h3>Typography Scale</h3>
            <p>
              The typography scale follows semantic heading levels with
              consistent spacing and hierarchy.
            </p>
          </div>
          <div className="meta-container max-w-64">
            <Label>Preview Text</Label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to display"
            />
          </div>
          <div className="list-container">
            <FontSizeExample
              size="text-2xl font-medium"
              label="h1 - text-2xl font-medium"
              input={input}
            />
            <FontSizeExample
              size="text-lg font-medium"
              label="h2 - text-lg font-medium"
              input={input}
            />
            <FontSizeExample
              size="text-base font-medium"
              label="h3 - text-base font-medium"
              input={input}
            />
            <FontSizeExample
              size="text-sm font-medium"
              label="h4 - text-sm font-medium"
              input={input}
            />
            <FontSizeExample
              size="text-sm font-medium text-muted-foreground"
              label="h5 - text-sm font-medium text-muted-foreground"
              input={input}
            />
            <FontSizeExample
              size="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              label="h6 - text-xs font-semibold uppercase tracking-wide"
              input={input}
            />
            <FontSizeExample
              size="text-sm"
              label="body - text-sm (default)"
              input={input}
            />
            <FontSizeExample
              size="text-xs text-muted-foreground"
              label="small - text-xs text-muted-foreground"
              input={input}
            />
          </div>
        </div>

        <Separator />

        <div className="section-container">
          <div className="meta-container">
            <h3>Using Custom Fonts</h3>
            <p>
              You can easily override the default fonts in your project using
              several approaches. Choose the method that best fits your project
              setup.
            </p>
          </div>
          <div className="list-container">
            <div className="meta-container">
              <div className="flex gap-1 items-center">
                <p className="text-sm font-medium">Method:</p>
                <p className="text-sm font-normal">CSS Custom Properties</p>
              </div>
              <p className="text-xs">
                Override the font variables after importing passport-ui styles.
              </p>
            </div>
            <CodeBlock
              filename="app/globals.css"
              language="css"
              code={FONT_CUSTOMIZATION_CODE.CSS_OVERRIDE}
            />
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
};

const meta: Meta<typeof FontsDocs> = {
  title: "Font & Typography",
  component: FontsDocs,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Comprehensive guide to Passport UI's typography system, featuring Open Runde as the default typeface with extensive customization options. Learn how to override fonts, implement custom font loading, and maintain consistent typography across your application.`,
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
