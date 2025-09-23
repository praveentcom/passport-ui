import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumb } from "../../../src/components/breadcrumb";
import { Card, CardContent } from "../../../src/components/card";
import { PrefetchLink } from "../../../src/components/prefetch-link";
import { StructuredData } from "../../../src/components/structured-data";
import { ContentContainer } from "../../../src/layouts/content-container";
import { SITE_CONFIG, createPageStructuredData } from "../../constants";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  getAllComponentsByCategory,
} from "../../utils";
import { generateBreadcrumbs } from "../../utils/breadcrumbs";
import { filterAndSortNavigation } from "../../utils/navigation-sort";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  // Validate category exists
  if (!CATEGORIES.includes(category)) {
    notFound();
  }

  // Get all components for this category
  const allComponents = getAllComponentsByCategory(category);

  // Filter only complete components (with slug and storyId)
  const completeComponents = allComponents.filter((c) => c.slug && c.storyId);

  if (completeComponents.length === 0) {
    notFound();
  }

  // Sort components using the navigation sort utility
  const sortedComponents =
    filterAndSortNavigation({ [category]: completeComponents }, "")[category] ||
    completeComponents;

  const categoryLabel =
    CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] || category;
  const breadcrumbs = generateBreadcrumbs(`/${category}`);

  const pageStructuredData = createPageStructuredData({
    name: `${categoryLabel} - Passport UI`,
    description: `Browse all ${categoryLabel.toLowerCase()} components in the Passport UI library. View examples, documentation, and code snippets.`,
    url: `${SITE_CONFIG.baseUrl}/${category}/`,
    breadcrumbName: categoryLabel,
    breadcrumbUrl: `${SITE_CONFIG.baseUrl}/${category}/`,
  });

  return (
    <>
      <StructuredData data={pageStructuredData} />
      <ContentContainer variant="broad">
        {breadcrumbs.length > 1 && <Breadcrumb path={breadcrumbs} />}

        <div className="section-container">
          <div className="meta-container">
            <h3>{categoryLabel}</h3>
            <p>
              Browse all {categoryLabel.toLowerCase()} available in the Passport
              UI library. Click on any component to view examples,
              documentation, and code snippets.
            </p>
          </div>

          <div className="list-container grid-cols-1 md:grid-cols-3">
            {sortedComponents.map((component) => {
              const IconComponent = component.icon;

              return (
                <PrefetchLink
                  key={component.slug}
                  href={`/${category}/${component.slug}`}
                  className="block transition-transform md:hover:scale-[1.01]"
                >
                  <Card className="h-full hover:border-border transition-colors">
                    <CardContent>
                      <div className="flex gap-3">
                        <IconComponent className="size-5 mt-0.5 text-foreground" />
                        <div className="meta-container">
                          <h4 className="font-medium text-foreground">
                            {component.name}
                          </h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {component.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </PrefetchLink>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </>
  );
}

export async function generateStaticParams() {
  const validCategories = CATEGORIES.filter((category) => {
    const components = getAllComponentsByCategory(category);
    const completeComponents = components.filter((c) => c.slug && c.storyId);
    return completeComponents.length > 0;
  });

  return validCategories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;

  if (!CATEGORIES.includes(category)) {
    return {
      title: "Category Not Found",
    };
  }

  const categoryLabel =
    CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] || category;
  const componentCount = getAllComponentsByCategory(category).filter(
    (c) => c.slug && c.storyId
  ).length;

  return {
    title: `${categoryLabel} - Passport UI`,
    description: `Browse all ${componentCount} ${categoryLabel.toLowerCase()} components in the Passport UI library. View examples, documentation, and code snippets.`,
  };
}
