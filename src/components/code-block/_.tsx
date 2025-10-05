"use client";

import React, { useState } from "react";

import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import css from "highlight.js/lib/languages/css";
import dart from "highlight.js/lib/languages/dart";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import go from "highlight.js/lib/languages/go";
import gradle from "highlight.js/lib/languages/gradle";
import java from "highlight.js/lib/languages/java";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import kotlin from "highlight.js/lib/languages/kotlin";
import less from "highlight.js/lib/languages/less";
import lua from "highlight.js/lib/languages/lua";
import makefile from "highlight.js/lib/languages/makefile";
import markdown from "highlight.js/lib/languages/markdown";
import perl from "highlight.js/lib/languages/perl";
import php from "highlight.js/lib/languages/php";
import powershell from "highlight.js/lib/languages/powershell";
import python from "highlight.js/lib/languages/python";
import r from "highlight.js/lib/languages/r";
import ruby from "highlight.js/lib/languages/ruby";
import rust from "highlight.js/lib/languages/rust";
import scala from "highlight.js/lib/languages/scala";
import scss from "highlight.js/lib/languages/scss";
import sql from "highlight.js/lib/languages/sql";
import swift from "highlight.js/lib/languages/swift";
import typescript from "highlight.js/lib/languages/typescript";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";
import { Check, Copy } from "lucide-react";

import getFileIcon from "../../lib/markdown/getFileIcon";
import { cn } from "../../lib/utils";

// Register languages for highlight.js
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("js", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("ts", typescript);
hljs.registerLanguage("jsx", javascript);
hljs.registerLanguage("tsx", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("py", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("c++", cpp);
hljs.registerLanguage("c", cpp);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("rs", rust);
hljs.registerLanguage("php", php);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("rb", ruby);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("kt", kotlin);
hljs.registerLanguage("scala", scala);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("cs", csharp);
hljs.registerLanguage("dart", dart);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("r", r);
hljs.registerLanguage("perl", perl);
hljs.registerLanguage("pl", perl);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("sh", bash);
hljs.registerLanguage("zsh", bash);
hljs.registerLanguage("fish", bash);
hljs.registerLanguage("powershell", powershell);
hljs.registerLanguage("ps1", powershell);
hljs.registerLanguage("css", css);
hljs.registerLanguage("scss", scss);
hljs.registerLanguage("sass", scss);
hljs.registerLanguage("less", less);
hljs.registerLanguage("json", json);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("yml", yaml);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("md", markdown);
hljs.registerLanguage("dockerfile", dockerfile);
hljs.registerLanguage("makefile", makefile);
hljs.registerLanguage("gradle", gradle);
hljs.registerLanguage("sql", sql);

export type HighlightTheme =
  | "github"
  | "atom-one"
  | "vs"
  | "monokai"
  | "dracula"
  | "nord"
  | "tokyo-night"
  | "default";

export interface CodeBlockProps extends React.ComponentProps<"div"> {
  /**
   * The code content to display
   */
  code: string;
  /**
   * The programming language for syntax highlighting
   */
  language?: string;
  /**
   * Optional filename to display in header
   */
  filename?: string;
  /**
   * Whether to show line numbers
   * @default false
   */
  hideLineNumbers?: boolean;
  /**
   * Highlight.js theme to use
   * @default "github"
   */
  theme?: HighlightTheme;
}

/**
 * A syntax-highlighted code block component with optional filename header and line numbers
 *
 * Theme Setup:
 * For themed syntax highlighting, import the theme styles in your CSS:
 * ```css
 * @import 'passport-ui/hljs-themes.css';
 * ```
 *
 * @param code - The code content to display
 * @param language - Programming language for syntax highlighting
 * @param filename - Optional filename to show in header
 * @param hideLineNumbers - Whether to display line numbers
 * @param theme - Highlight.js theme to use (requires hljs-themes.css import)
 * @param className - Additional CSS classes
 */
function CodeBlock({
  code,
  language,
  filename,
  hideLineNumbers = false,
  theme = "vs",
  className,
  ...props
}: CodeBlockProps) {
  const lines = code.split("\n");
  const totalLines = lines.length;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const CopyButton = ({ className }: { className?: string }) => (
    <button
      onClick={copyToClipboard}
      className={cn(
        "opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-foreground rounded hover:bg-muted/50",
        className
      )}
      title={copied ? "Copied!" : "Copy code"}
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <Check className="text-success" size={14} />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );

  /**
   * Get the width class for line numbers based on total lines
   */
  const getLineNumberWidth = (total: number) => {
    if (total < 10) return "w-7";
    if (total < 100) return "w-9";
    if (total < 1000) return "w-12";
  };

  const lineNumberWidth = getLineNumberWidth(totalLines);

  /**
   * Highlight a single line of code
   */
  const highlightLine = (line: string): string => {
    if (!line.trim()) return " ";

    if (language && hljs.getLanguage(language)) {
      try {
        return hljs.highlight(line, { language }).value;
      } catch {
        try {
          return hljs.highlightAuto(line).value;
        } catch {
          return line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
      }
    } else {
      try {
        return hljs.highlightAuto(line).value;
      } catch {
        return line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
    }
  };

  const fileIcon = filename ? getFileIcon(filename) : "";

  return (
    <div
      data-slot="code-block"
      className={cn(
        "relative bg-card border border-border rounded-sm overflow-hidden group w-full min-w-0 break-inside-avoid",
        `hljs-theme-${theme}`,
        className
      )}
      {...props}
    >
      {!filename && (
        <CopyButton className="absolute top-2 right-2 z-10 p-1.5 backdrop-blur-md border border-border/50" />
      )}
      {filename && (
        <div
          data-slot="code-block-header"
          className="flex justify-between items-center gap-2 p-2 dark:bg-background bg-border/10 border-b border-border text-muted-foreground"
        >
          <div className="flex gap-2 items-center">
            {fileIcon && (
              <div
                className="opacity-85"
                dangerouslySetInnerHTML={{
                  __html: `${fileIcon}`,
                }}
              />
            )}
            <span className="dark:font-medium leading-none line-clamp-1 tracking-tight">{filename}</span>
          </div>
          <div className="flex gap-2 items-center">
            <CopyButton />
          </div>
        </div>
      )}
      <div className="flex w-full">
        {!hideLineNumbers && (
          <div
            data-slot="code-block-line-numbers"
            className="flex-shrink-0 bg-card"
          >
            {lines.map((line, index) => {
              const lineNumber = index + 1;
              const isFirstLine = index === 0;
              const isLastLine = index === lines.length - 1;
              const lineNumberPadding =
                isFirstLine && isLastLine
                  ? " py-1.5"
                  : isFirstLine
                    ? " pt-1.5"
                    : isLastLine
                      ? " pb-1.5"
                      : "";

              return (
                <div
                  key={index}
                  className={cn(
                    "line-number text-muted-foreground text-right select-none",
                    lineNumberWidth,
                    lineNumberPadding,
                    "px-2"
                  )}
                >
                  {lineNumber}
                </div>
              );
            })}
          </div>
        )}
        <div className="flex-1 min-w-0 bg-card overflow-x-auto">
          <pre
            data-slot="code-block-pre"
            className="p-0 m-0"
            style={{ minWidth: 'max-content' }}
          >
            <code data-slot="code-block-code" className="hljs block py-1.5">
              {lines.map((line, index) => {
                const isFirstLine = index === 0;
                const isLastLine = index === lines.length - 1;
                const contentPadding =
                  isFirstLine && isLastLine
                    ? " py-1.5"
                    : isFirstLine
                      ? " pt-1.5"
                      : isLastLine
                        ? " pb-1.5"
                        : "";

                const highlightedLine = highlightLine(line);

                return (
                  <div key={index} className="block">
                    <span
                      className={cn("line-content" + contentPadding)}
                      dangerouslySetInnerHTML={{ __html: highlightedLine }}
                    />
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export { CodeBlock };
