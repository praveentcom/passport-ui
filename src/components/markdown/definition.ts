import { FileText } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Markdown",
  icon: FileText,
  description: "A component for rendering Markdown text with styles.",
  category: "components",
  storyId: "components-markdown--default",
  slug: "markdown",
  importCode: `import { Markdown } from "passport-ui";`,
  usageCode: `const markdownContent = \`
# Hello, Markdown!

This is a paragraph.

- List item 1
- List item 2

\`\`\`javascript
console.log("Hello, from a code block!");
\`\`\`
\`;

<Markdown content={markdownContent} />;`,
};
