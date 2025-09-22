import { Type } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Typewriter Text",
  icon: Type,
  description: "Component description",
  category: "motion-primitives",
  storyId: "motion-primitives-typewriter-text--default",
  slug: "typewriter-text",
  importCode: `import { TypewriterText } from "passport-ui";`,
  usageCode: `<TypewriterText
  text="Hello, World!"
  speed={50}
/>`,
};
