import { Code } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Code Block",
  icon: Code,
  description:
    "A component for displaying formatted code with syntax highlighting.",
  category: "components",
  storyId: "components-codeblock",
  slug: "code-block",
  importCode: `import { CodeBlock } from "passport-ui";`,
  usageCode: `const sampleCode = \`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}\`;

<CodeBlock code={sampleCode} language="javascript" />;`,
};
