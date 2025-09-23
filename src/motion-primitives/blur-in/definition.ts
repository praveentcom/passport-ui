import { Eye } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Blur In",
  icon: Eye,
  description: "A component that reveals content with a blur-in animation.",
  category: "motion-primitives",
  storyId: "motion-primitives-blurin--default",
  slug: "blur-in",
  importCode: `import { BlurIn } from "passport-ui";`,
  usageCode: `<BlurIn>
  <h1>This text will blur in</h1>
</BlurIn>`,
};
