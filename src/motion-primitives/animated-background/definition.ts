import { Waves } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Animated Background",
  icon: Waves,
  description: "A component for creating animated, gradient backgrounds.",
  category: "motion-primitives",
  storyId: "motion-primitives-animated-background--default",
  slug: "animated-background",
  importCode: `import { AnimatedBackground } from "passport-ui";`,
  usageCode: `<AnimatedBackground
  className="h-64 w-full"
  colors={["#ff6b6b", "#4ecdc4", "#45b7d1"]}
/>`,
};
