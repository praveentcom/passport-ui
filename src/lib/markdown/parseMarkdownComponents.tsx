import React from "react";

import { Blockquote } from "@/components/blockquote";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

interface BlockquoteData {
  type: "blockquote";
  props: { nested: boolean };
  content: React.ReactNode;
}

interface CodeBlockData {
  type: "codeblock";
  props: {
    code: string;
    language?: string;
    filename?: string;
    hideLineNumbers: boolean;
  };
}

interface TableData {
  type: "table";
  props: {
    headers: string[];
    rows: string[][];
    alignments: string[];
  };
}

export type ComponentData = BlockquoteData | CodeBlockData | TableData;

export interface ParsedMarkdown {
  html: string;
  components: Map<string, ComponentData>;
}

/**
 * Extract blockquote data from markdown content
 */
export function extractBlockquotes(content: string): {
  content: string;
  blockquotes: Map<string, ComponentData>;
} {
  const blockquotes = new Map<string, ComponentData>();
  const lines = content.split("\n");
  const result: string[] = [];
  let i = 0;
  let blockquoteCounter = 0;

  while (i < lines.length) {
    const line = lines[i];
    const blockquoteMatch = line.match(/^(>+)\s*(.*)/);

    if (blockquoteMatch) {
      const quoteLevel = blockquoteMatch[1].length;
      const firstContent = blockquoteMatch[2];

      // Collect all consecutive blockquote lines
      const blockquoteLines: { level: number; content: string }[] = [];
      blockquoteLines.push({ level: quoteLevel, content: firstContent });

      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j];
        const nextMatch = nextLine.match(/^(>+)\s*(.*)/);

        if (nextMatch) {
          const nextLevel = nextMatch[1].length;
          const nextContent = nextMatch[2];
          blockquoteLines.push({ level: nextLevel, content: nextContent });
          j++;
        } else if (nextLine.trim() === "") {
          const lineAfterEmpty = j + 1 < lines.length ? lines[j + 1] : "";
          const afterEmptyMatch = lineAfterEmpty.match(/^(>+)\s*(.*)/);

          if (afterEmptyMatch) {
            blockquoteLines.push({ level: quoteLevel, content: "" });
            j++;
          } else {
            break;
          }
        } else {
          break;
        }
      }

      // Process the collected blockquote lines into React content
      const processedContent = processBlockquoteLines(blockquoteLines);

      const placeholder = `{{BLOCKQUOTE${blockquoteCounter}}}`;
      blockquotes.set(placeholder, {
        type: "blockquote",
        props: { nested: false },
        content: processedContent,
      });

      result.push(placeholder);
      blockquoteCounter++;
      i = j;
    } else {
      result.push(line);
      i++;
    }
  }

  return { content: result.join("\n"), blockquotes };
}

/**
 * Process blockquote lines into React content
 */
function processBlockquoteLines(
  lines: { level: number; content: string }[]
): React.ReactNode {
  if (lines.length === 0) return null;

  const elements: React.ReactNode[] = [];
  let currentLevel = 0;
  const openElements: React.ReactNode[][] = [];

  for (let i = 0; i < lines.length; i++) {
    const { level, content } = lines[i];

    // Handle nesting - close elements if we're going to a lower level
    while (currentLevel > level) {
      const children = openElements.pop();
      if (children && children.length > 0) {
        if (openElements.length > 0) {
          openElements[openElements.length - 1].push(
            <Blockquote key={`nested-${i}`} nested>
              {children}
            </Blockquote>
          );
        } else {
          elements.push(
            <Blockquote key={`root-${i}`} nested>
              {children}
            </Blockquote>
          );
        }
      }
      currentLevel--;
    }

    // Handle nesting - open elements if we're going to a higher level
    while (currentLevel < level) {
      openElements.push([]);
      currentLevel++;
    }

    // Add content
    if (content.trim() === "") {
      if (openElements.length > 0) {
        openElements[openElements.length - 1].push(<br key={`br-${i}`} />);
      } else {
        elements.push(<br key={`br-${i}`} />);
      }
    } else {
      const contentElement = <span key={`content-${i}`}>{content}</span>;
      if (openElements.length > 0) {
        openElements[openElements.length - 1].push(contentElement);
        // Add line break if not the last line
        if (i < lines.length - 1) {
          openElements[openElements.length - 1].push(
            <br key={`br-after-${i}`} />
          );
        }
      } else {
        elements.push(contentElement);
        if (i < lines.length - 1) {
          elements.push(<br key={`br-after-${i}`} />);
        }
      }
    }
  }

  // Close all remaining open elements
  while (openElements.length > 0) {
    const children = openElements.pop();
    if (children && children.length > 0) {
      if (openElements.length > 0) {
        openElements[openElements.length - 1].push(
          <Blockquote key={`final-nested-${openElements.length}`} nested>
            {children}
          </Blockquote>
        );
      } else {
        elements.push(<Blockquote key={`final-root`}>{children}</Blockquote>);
      }
    }
  }

  return elements.length === 1 ? elements[0] : <>{elements}</>;
}

/**
 * Extract code blocks from markdown content
 */
export function extractCodeBlocks(content: string): {
  content: string;
  codeBlocks: Map<string, ComponentData>;
} {
  const codeBlocks = new Map<string, ComponentData>();
  let codeBlockCounter = 0;

  const processedContent = content.replace(
    /```(\w+)?(?:\s+filename="([^"]+)")?\n([\s\S]*?)```/g,
    (match, lang, filename, code) => {
      const placeholder = `{{CODEBLOCK${codeBlockCounter}}}`;

      codeBlocks.set(placeholder, {
        type: "codeblock",
        props: {
          code: code.trim(),
          language: lang,
          filename: filename,
          hideLineNumbers: false,
        },
      });

      codeBlockCounter++;
      return placeholder;
    }
  );

  return { content: processedContent, codeBlocks };
}

/**
 * Extract tables from markdown content
 */
export function extractTables(content: string): {
  content: string;
  tables: Map<string, ComponentData>;
} {
  const tables = new Map<string, ComponentData>();
  const lines = content.split("\n");
  const result: string[] = [];
  let i = 0;
  let tableCounter = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      lines[i + 1].includes("|") &&
      lines[i + 1].includes("-")
    ) {
      const headerLine = line;
      const separatorLine = lines[i + 1];

      // Parse headers
      const headers = headerLine
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell !== "");

      // Parse alignments
      const alignments = separatorLine
        .split("|")
        .map((cell) => {
          const trimmed = cell.trim();
          if (trimmed.startsWith(":") && trimmed.endsWith(":")) return "center";
          if (trimmed.endsWith(":")) return "right";
          return "left";
        })
        .filter((_, index) => index < headers.length);

      // Collect table rows
      const rows: string[][] = [];
      let j = i + 2;
      while (j < lines.length && lines[j].includes("|")) {
        const rowLine = lines[j];
        const cells = rowLine
          .split("|")
          .map((cell) => cell.trim())
          .filter((cell) => cell !== "");

        if (cells.length > 0) {
          rows.push(cells);
        }
        j++;
      }

      const placeholder = `{{TABLE${tableCounter}}}`;
      tables.set(placeholder, {
        type: "table",
        props: {
          headers,
          rows,
          alignments,
        },
      });

      result.push(placeholder);
      tableCounter++;
      i = j;
    } else {
      result.push(line);
      i++;
    }
  }

  return { content: result.join("\n"), tables };
}

/**
 * Render a table component from parsed data
 */
export function renderTable({
  headers,
  rows,
  alignments,
}: {
  headers: string[];
  rows: string[][];
  alignments: string[];
}) {
  return (
    <div className="my-4">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => {
              const alignment = alignments[index] || "left";
              const textAlign =
                alignment === "center"
                  ? "text-center"
                  : alignment === "right"
                    ? "text-right"
                    : "text-left";
              return (
                <TableHead key={index} className={textAlign}>
                  {header}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => {
                const alignment = alignments[cellIndex] || "left";
                const textAlign =
                  alignment === "center"
                    ? "text-center"
                    : alignment === "right"
                      ? "text-right"
                      : "text-left";
                return (
                  <TableCell key={cellIndex} className={textAlign}>
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
