import type { Meta, StoryObj } from "@storybook/nextjs";

import { Markdown } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof Markdown> = {
  title: "Components/Markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Renders markdown content as sanitized HTML with syntax highlighting.

## Features
- Markdown parsing for headers, lists, links, emphasis, code blocks, tables, blockquotes
- Syntax highlighting with highlight.js
- XSS protection with DOMPurify
- File icons in code headers

## Theme Setup
\`\`\`css
@import 'passport-ui/hljs-themes.css';
\`\`\`

## Themes
GitHub, Atom One, VS, Monokai, Dracula, Nord, Tokyo Night, Default

## Supported Elements
Headers, paragraphs, **bold**, *italic*, ~~strikethrough~~, \`code\`, code blocks, lists, links, images, tables, blockquotes, horizontal rules.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: { type: "text" },
      description: "The markdown content to render",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    muted: {
      control: { type: "boolean" },
      description: "Whether to apply muted styling for less prominent text",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Appearance",
      },
    },
    theme: {
      control: { type: "select" },
      options: [
        "github",
        "atom-one",
        "vs",
        "monokai",
        "dracula",
        "nord",
        "tokyo-night",
        "default",
      ],
      description: "Highlight.js theme to use for code blocks",
      table: {
        type: { summary: "HighlightTheme" },
        defaultValue: { summary: "github" },
        category: "Appearance",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-md">
      <Markdown {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Markdown>;

const sampleMarkdown = `# Markdown Component Demo

This is an **example** of the markdown component featuring various elements.

## Text Formatting

You can use *italic text*, **bold text**, ~~strikethrough~~, and \`inline code\`.

### Lists

#### Unordered List
- First item
- Second item with **bold text**
- Third item with [a link](https://example.com)

#### Ordered List
1. First numbered item
2. Second numbered item
3. Third numbered item

#### Task List
- [x] Completed task
- [ ] Pending task
- [x] Another completed task

### Code Blocks

Here's a JavaScript example:

\`\`\`javascript filename="example.js"
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome, \${name}\`;
}

// Call the function
const message = greet("World");
\`\`\`
  
And a TypeScript example:

\`\`\`typescript filename="types.ts"
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
];
\`\`\`

### Tables

| Name | Role | Experience |
|------|------|------------|
| Alice Johnson | Frontend Developer | 5 years |
| Bob Smith | Backend Developer | 8 years |
| Carol Davis | Full Stack | 3 years |

### Blockquotes

> This is a blockquote that demonstrates how quoted text appears in the markdown component.
> 
> It can span multiple lines and maintain proper formatting.

### Keyboard Shortcuts

Press [[Ctrl+C]] to copy and [[Ctrl+V]] to paste.

### Links and Images

Visit our [documentation](https://example.com) for more information.

![Sample Image](https://placehold.co/400x200/e2e8f0/64748b?text=Sample+Image)

---

This demonstrates the rich formatting capabilities of the Markdown component.`;

export const Default: Story = {
  args: {
    content: sampleMarkdown,
    muted: true,
  },
};
