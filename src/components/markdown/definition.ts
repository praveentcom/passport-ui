import { FileText } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Markdown",
  icon: FileText,
  description: "Component description",
  category: "components",
  storyId: "components-markdown--default",
  slug: "markdown",
  importCode: `import { Markdown } from "passport-ui";`,
  usageCode: `const markdownContent = \`\`\``,
};
