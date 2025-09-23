import { Code } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Code Block",
  icon: Code,
  description:
    "A component for displaying formatted code with syntax highlighting.",
  category: "components",
  storyId: "components-code-block--default",
  slug: "code-block",
  importCode: `import { CodeBlock } from "passport-ui";`,
  usageCode: `const sampleCode = \`\`\``,
};
