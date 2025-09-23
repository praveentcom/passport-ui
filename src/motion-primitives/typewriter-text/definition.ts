import { Type } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Typewriter Text",
  icon: Type,
  description: "A component that animates text with a typewriter effect.",
  category: "motion-primitives",
  storyId: "motion-primitives-typewritertext--default",
  slug: "typewriter-text",
  importCode: `import { TypewriterText } from "passport-ui";`,
  usageCode: `<TypewriterText
  text="Hello, World!"
  speed={50}
/>`,
};
