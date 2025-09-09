import type { Meta, StoryObj } from "@storybook/nextjs";
import { CodeBlock } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof CodeBlock> = {
  title: "Components/CodeBlock",
  component: CodeBlock,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A syntax-highlighted code block component with optional filename header and line numbers.

## Features
- Syntax highlighting with highlight.js for 30+ languages
- Configurable themes (GitHub, Atom One, VS, Monokai, Dracula, Nord, Tokyo Night, Default)
- Automatic light/dark mode support for compatible themes
- Line numbers with smart width calculation
- File icons in header based on filename extension

## Theme Setup
For themed syntax highlighting, import the theme styles in your CSS:
\`\`\`css
@import 'passport-ui/hljs-themes.css';
\`\`\`

## Available Themes
- **GitHub**: Clean, professional GitHub-style (light/dark)
- **Atom One**: Popular Atom editor theme (light/dark)
- **VS**: Visual Studio theme (light/dark)
- **Monokai**: Classic dark theme with vibrant colors
- **Dracula**: Popular purple-tinted dark theme
- **Nord**: Minimalist Arctic-inspired theme
- **Tokyo Night**: Modern dark theme with blue accents
- **Default**: Fallback theme with basic colors`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    code: {
      control: { type: "text" },
      description: "The code content to display",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    language: {
      control: { type: "text" },
      description: "The programming language for syntax highlighting",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    filename: {
      control: { type: "text" },
      description: "Optional filename to display in header",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    hideLineNumbers: {
      control: { type: "boolean" },
      description: "Whether to hide line numbers",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
      description: "Highlight.js theme to use",
      table: {
        type: { summary: "HighlightTheme" },
        defaultValue: { summary: "github" },
        category: "Appearance",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <div className="w-sm">
      <CodeBlock {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sampleCode = `function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return \`Welcome, \${name}\`;
}

// Call the function
const message = greet("World");
console.log(message);`;

export const Default: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    hideLineNumbers: false,
  },
};

export const FilenameHeader: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "example.js",
    hideLineNumbers: false,
  },
};

export const GitHubTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "github-theme.js",
    theme: "github",
    hideLineNumbers: false,
  },
};

export const AtomOneTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "atom-one-theme.js",
    theme: "atom-one",
    hideLineNumbers: false,
  },
};

export const VSTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "vs-theme.js",
    theme: "vs",
    hideLineNumbers: false,
  },
};

export const MonokaiTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "monokai-theme.js",
    theme: "monokai",
    hideLineNumbers: false,
  },
};

export const DraculaTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "dracula-theme.js",
    theme: "dracula",
    hideLineNumbers: false,
  },
};

export const NordTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "nord-theme.js",
    theme: "nord",
    hideLineNumbers: false,
  },
};

export const TokyoNightTheme: Story = {
  args: {
    code: sampleCode,
    language: "javascript",
    filename: "tokyo-night-theme.js",
    theme: "tokyo-night",
    hideLineNumbers: false,
  },
};
