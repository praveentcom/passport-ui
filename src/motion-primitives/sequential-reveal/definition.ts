import { Layers } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Sequential Reveal",
  icon: Layers,
  description: "Component description",
  category: "motion-primitives",
  storyId: "motion-primitives-sequential-reveal--default",
  slug: "sequential-reveal",
  importCode: `import { SequentialReveal } from "passport-ui";`,
  usageCode: `<SequentialReveal>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</SequentialReveal>`,
};
