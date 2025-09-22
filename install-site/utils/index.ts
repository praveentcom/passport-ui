import { definitions } from "../../src/registry";
import { ComponentDefinition } from "../../src/types/definition";

export function getAllComponentSlugs() {
  return definitions.map((definition) => definition.slug);
}

export function getComponentBySlug(slug: string) {
  return definitions.find((definition) => definition.slug === slug);
}

export const COMPONENTS_BY_CATEGORY = definitions.reduce(
  (acc, definition) => {
    acc[definition.category] = acc[definition.category] || [];
    acc[definition.category].push(definition);
    return acc;
  },
  {} as Record<string, ComponentDefinition[]>
);

export const CATEGORY_LABELS = {
  layout: "Layout",
  components: "Components",
  composables: "Composables",
  "motion-primitives": "Motion Primitives",
};

export function getComponentBySlugAndCategory(slug: string, category: string) {
  return definitions.find(
    (definition) =>
      definition.slug === slug &&
      (definition.category === category ||
        (category === "components" && definition.category === "components") ||
        (category === "composables" && definition.category === "composables"))
  );
}

export function getAllComponentsByCategory(category: string) {
  return definitions.filter(
    (definition) =>
      definition.category === category ||
      (category === "components" && definition.category === "components") ||
      (category === "composables" && definition.category === "composables")
  );
}
