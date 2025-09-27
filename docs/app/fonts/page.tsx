import { Metadata } from "next";

import { Breadcrumb } from "../../../src/components/breadcrumb";
import { Button } from "../../../src/components/button";
import { CodeBlock } from "../../../src/components/code-block";
import { PrefetchLink } from "../../../src/components/prefetch-link";
import { Separator } from "../../../src/components/separator";
import { StructuredData } from "../../../src/components/structured-data";
import { ContentContainer } from "../../../src/layouts/content-container";
import {
  FontWeightsSection,
  TypographyScaleSection,
} from "../../components/font";
import { createPageStructuredData } from "../../constants";
import { SITE_CONFIG } from "../../constants";
import { generateBreadcrumbs } from "../../utils/breadcrumbs";

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

export default function FontsPage() {
  const breadcrumbs = generateBreadcrumbs("/fonts");

  return (
    <ContentContainer variant="broad">
      {breadcrumbs.length > 1 && <Breadcrumb path={breadcrumbs} />}
      <StructuredData
        data={createPageStructuredData({
          name: SITE_CONFIG.title + " - Font & Typography",
          url: SITE_CONFIG.baseUrl + "/fonts/",
          breadcrumbName: "Font & Typography",
          breadcrumbUrl: SITE_CONFIG.baseUrl + "/fonts/",
        })}
      />
      <div className="section-container">
        <div className="meta-container">
          <h1>Font & Typography</h1>
          <p>
            Passport UI uses &quot;Open Runde&quot; as the default typeface, a
            modern sans-serif font optimized for digital interfaces.
          </p>
        </div>
        <div className="meta-container flex">
          <Button asChild>
            <PrefetchLink
              href="https://github.com/lauridskern/open-runde"
              target="_blank"
              rel="noreferrer noopener"
            >
              Open Runde {"\u2197"}
            </PrefetchLink>
          </Button>
        </div>
      </div>

      <Separator />

      <div className="section-container">
        <div className="meta-container">
          <h3>Attribution</h3>
          <p>
            Special thanks to the creators of the fonts that inspire our
            typography system. Open Runde is a rounded variant of the typeface
            Inter by Rasmus Andersson ({"\u0040rsms"}).
          </p>
        </div>
        <div className="meta-container flex">
          <Button asChild>
            <PrefetchLink
              href="https://github.com/lauridskern"
              target="_blank"
              rel="noreferrer noopener"
            >
              Laurids Kern {"\u2197"}
            </PrefetchLink>
          </Button>
          <Button asChild>
            <PrefetchLink
              href="https://github.com/rsms"
              target="_blank"
              rel="noreferrer noopener"
            >
              Rasmus Andersson {"\u2197"}
            </PrefetchLink>
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
        <FontWeightsSection />
      </div>

      <Separator />

      <div className="section-container">
        <div className="meta-container">
          <h3>Typography Scale</h3>
          <p>
            The typography scale follows semantic heading levels with consistent
            spacing and hierarchy.
          </p>
        </div>
        <TypographyScaleSection />
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
  );
}

export const metadata: Metadata = {
  title: SITE_CONFIG.title + " - Font & Typography",
  description: SITE_CONFIG.description,
};
