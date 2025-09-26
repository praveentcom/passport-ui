import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CodeXml } from "lucide-react";
import { Eye } from "lucide-react";

import { Breadcrumb } from "../../../../src/components/breadcrumb";
import { Button } from "../../../../src/components/button";
import { CodeBlock } from "../../../../src/components/code-block";
import { PrefetchLink } from "../../../../src/components/prefetch-link";
import { Separator } from "../../../../src/components/separator";
import { StructuredData } from "../../../../src/components/structured-data";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../src/components/tabs";
import { ContentContainer } from "../../../../src/layouts/content-container";
import { SITE_CONFIG, createPageStructuredData } from "../../../constants";
import {
  CATEGORIES,
  getAllComponentsByCategory,
  getComponentBySlugAndCategory,
} from "../../../utils";
import { generateBreadcrumbs } from "../../../utils/breadcrumbs";

interface CategoryComponentPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

function StorybookEmbed({ storyId }: { storyId: string }) {
  const storybookHost = SITE_CONFIG.storybook;
  const embedUrl = `${storybookHost}/iframe?globals=&args=&id=${storyId}--default&viewMode=story`;

  return (
    <div className="w-full border rounded-sm overflow-hidden bg-background">
      <iframe
        src={embedUrl}
        className="w-full h-96 border-0"
        title="Component Preview"
        loading="lazy"
      />
    </div>
  );
}

export default async function CategoryComponentPage({
  params,
}: CategoryComponentPageProps) {
  const { category, slug } = await params;
  const component = getComponentBySlugAndCategory(slug, category);

  if (
    !component ||
    !component.storyId ||
    !component.importCode ||
    !component.usageCode
  ) {
    notFound();
  }

  const IconComponent = component.icon;
  const storybookHost = SITE_CONFIG.storybook;
  const breadcrumbs = generateBreadcrumbs(`/${category}/${slug}`);

  const pageStructuredData = createPageStructuredData({
    name: `${component.name} - Passport UI`,
    description: `${component.description}. View examples, API documentation, and code snippets.`,
    url: `${SITE_CONFIG.baseUrl}/${category}/${component.slug}/`,
    breadcrumbName: component.name,
    breadcrumbUrl: `${SITE_CONFIG.baseUrl}/${category}/${component.slug}/`,
  });

  return (
    <>
      <StructuredData data={pageStructuredData} />
      <ContentContainer variant="broad">
        {breadcrumbs.length > 1 && <Breadcrumb path={breadcrumbs} />}
        <div className="section-container">
          <div className="meta-container">
            <div className="flex items-center gap-2">
              <IconComponent className="size-6" />
              <h1>{component.name}</h1>
            </div>
            <p>{component.description}</p>
          </div>
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code" icon={CodeXml}>
                Code
              </TabsTrigger>
              <TabsTrigger value="preview" icon={Eye}>
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="preview">
              <div className="space-y-4">
                <div className="meta-container">
                  <h4>Interactive Example</h4>
                  <p>
                    Try out the component with different props and
                    configurations.
                  </p>
                </div>
                <StorybookEmbed storyId={component.storyId} />
              </div>
            </TabsContent>

            <TabsContent value="code">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="meta-container">
                    <h4>Installation</h4>
                    <p>Import the component from the passport-ui package.</p>
                  </div>
                  <CodeBlock
                    language="typescript"
                    code={component.importCode}
                    filename="components/example.tsx"
                  />
                </div>

                <div className="space-y-4">
                  <div className="meta-container">
                    <h4>Usage</h4>
                    <p>Basic example showing how to use the component.</p>
                  </div>
                  <CodeBlock
                    language="tsx"
                    code={component.usageCode}
                    filename="components/example.tsx"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <Separator />

        <div className="section-container">
          <div className="meta-container">
            <h4>Additional resources</h4>
            <p>Documentation and examples are available in Storybook.</p>
          </div>
          <div className="meta-container flex">
            <Button asChild>
              <PrefetchLink
                href={`${storybookHost}/?path=/docs/${component.storyId}--docs`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View in Storybook ↗
              </PrefetchLink>
            </Button>
          </div>
        </div>
      </ContentContainer>
    </>
  );
}

export async function generateStaticParams() {
  const allParams: { category: string; slug: string }[] = [];

  for (const category of CATEGORIES) {
    const components = getAllComponentsByCategory(category);
    for (const component of components) {
      if (component.slug) {
        allParams.push({
          category,
          slug: component.slug,
        });
      }
    }
  }

  return allParams;
}

export async function generateMetadata({
  params,
}: CategoryComponentPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const component = getComponentBySlugAndCategory(slug, category);

  if (!component) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${component.name} - Passport UI`,
    description: `${component.description}. View examples, API documentation, and code snippets.`,
  };
}
