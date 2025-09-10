import * as React from "react";

import DOMPurify from "isomorphic-dompurify";

import { CodeBlock, type HighlightTheme } from "@/components/code-block";
import parseMarkdown from "@/lib/markdown/parseMarkdown";
import {
  extractBlockquotes,
  extractCodeBlocks,
  extractTables,
  renderTable,
} from "@/lib/markdown/parseMarkdownComponents";
import { cn } from "@/lib/utils";

export interface MarkdownProps {
  /**
   * The markdown content to render
   */
  content: string;
  /**
   * Whether to apply muted styling for less prominent text
   * @default true
   */
  muted?: boolean;
  /**
   * Additional CSS class names to apply to the article container
   */
  className?: string;
  /**
   * Highlight.js theme to use for code blocks
   * @default "github"
   */
  theme?: HighlightTheme;
}

/**
 * A component that renders markdown content as sanitized HTML with syntax highlighting support
 *
 * Features:
 * - Markdown parsing with support for headers, lists, links, emphasis, code blocks, tables, and blockquotes
 * - Syntax highlighting for code blocks using highlight.js
 * - Configurable themes for code syntax highlighting
 * - XSS protection with DOMPurify sanitization
 * - Responsive tables and rich formatting
 *
 * Theme Setup:
 * For themed syntax highlighting in code blocks, import the theme styles in your CSS:
 * ```css
 * @import 'passport-ui/hljs-themes.css';
 * ```
 *
 * @param content - The markdown string to parse and render
 * @param muted - Whether to apply muted text styling (default: true)
 * @param theme - Highlight.js theme for code blocks (requires hljs-themes.css import)
 * @param className - Additional CSS classes for the container
 * @returns A React component that renders the parsed markdown
 */
export function Markdown({
  content,
  muted = true,
  className,
  theme = "github",
}: MarkdownProps) {
  // Extract components first
  const { content: afterTables, tables } = extractTables(content);
  const { content: afterCodeBlocks, codeBlocks } =
    extractCodeBlocks(afterTables);
  const { content: afterBlockquotes, blockquotes } =
    extractBlockquotes(afterCodeBlocks);

  // Parse the remaining markdown
  const html = parseMarkdown(afterBlockquotes);

  /**
   * Sanitize HTML to prevent XSS attacks
   * Using isomorphic-dompurify for both client and server-side sanitization
   */
  const sanitizedHtml = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "br",
      "strong",
      "em",
      "del",
      "code",
      "pre",
      "ul",
      "ol",
      "li",
      "hr",
      "a",
      "img",
      "div",
      "span",
      "sup",
      "kbd",
      "input",
      "svg",
      "path",
      "polyline",
    ],
    ALLOWED_ATTR: [
      "href",
      "target",
      "rel",
      "class",
      "src",
      "alt",
      "type",
      "disabled",
      "checked",
      "id",
      "viewBox",
      "fill",
      "stroke",
      "stroke-width",
      "stroke-linecap",
      "stroke-linejoin",
      "d",
      "points",
    ],
    ALLOWED_URI_REGEXP:
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.-]+(?:[^a-z+.\-:]|$))/i,
  });

  // Combine all components
  const allComponents = new Map([...tables, ...codeBlocks, ...blockquotes]);

  // Split HTML by component placeholders and render
  const renderContent = () => {
    const parts = sanitizedHtml.split(/({{[^}]+}})/);

    return parts
      .map((part, index) => {
        // Check if this part is a component placeholder
        if (part.match(/^{{[^}]+}}$/)) {
          const componentData = allComponents.get(part);
          if (componentData) {
            switch (componentData.type) {
              case "blockquote":
                return componentData.content;
              case "codeblock":
                return (
                  <CodeBlock
                    key={`codeblock-${index}`}
                    {...componentData.props}
                    theme={theme}
                  />
                );
              case "table":
                return (
                  <div key={`table-${index}`}>
                    {renderTable(componentData.props)}
                  </div>
                );
              default:
                return null;
            }
          }
          return null;
        }

        // Regular HTML content
        if (part.trim()) {
          return (
            <div
              key={`html-${index}`}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          );
        }

        return null;
      })
      .filter(Boolean);
  };

  return (
    <article
      data-slot="markdown"
      className={cn(
        "passport-ui",
        "article-base",
        muted && "article-muted",
        className
      )}
    >
      {renderContent()}
    </article>
  );
}
