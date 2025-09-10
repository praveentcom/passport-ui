import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Markdown } from "../../src";

const meta: Meta<typeof Markdown> = {
  title: "Components/Markdown",
  component: Markdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A component that renders markdown content as sanitized HTML with syntax highlighting, tables, and rich formatting support.

## Features
- Markdown parsing with support for headers, lists, links, emphasis, code blocks, tables, and blockquotes
- Syntax highlighting for code blocks using highlight.js
- Configurable themes for code syntax highlighting
- XSS protection with DOMPurify sanitization
- Responsive tables and rich formatting
- File icons in code block headers

## Theme Setup
For themed syntax highlighting in code blocks, import the theme styles in your CSS:
\`\`\`css
@import 'passport-ui/hljs-themes.css';
\`\`\`

## Available Code Block Themes
- **GitHub**: Clean, professional GitHub-style (light/dark)
- **Atom One**: Popular Atom editor theme (light/dark)  
- **VS**: Visual Studio theme (light/dark)
- **Monokai**: Classic dark theme with vibrant colors
- **Dracula**: Popular purple-tinted dark theme
- **Nord**: Minimalist Arctic-inspired theme
- **Tokyo Night**: Modern dark theme with blue accents
- **Default**: Fallback theme with basic colors

## Supported Markdown Elements
- Headers (H1-H6)
- Paragraphs and line breaks
- **Bold** and *italic* text
- ~~Strikethrough~~ text
- \`Inline code\`
- Code blocks with syntax highlighting
- Unordered and ordered lists
- Links and images
- Tables with responsive design
- Blockquotes
- Horizontal rules
- Keyboard shortcuts (\`<kbd>\` tags)`,
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

This is a **comprehensive example** of the markdown component featuring various elements.

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
