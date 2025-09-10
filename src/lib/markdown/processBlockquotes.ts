/**
 * Process blockquotes in markdown, including multi-line and nested blockquotes
 * @param content - The content to process
 * @returns The processed HTML
 */
function processBlockquotes(content: string): string {
  const lines = content.split("\n");
  const result: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    /**
     * Check if the line starts a blockquote and has content
     */
    const blockquoteMatch = line.match(/^(>+)\s*(.*)/);

    if (blockquoteMatch) {
      const quoteLevel = blockquoteMatch[1].length;
      const content = blockquoteMatch[2];

      /**
       * Collect all consecutive blockquote lines
       */
      const blockquoteLines: { level: number; content: string }[] = [];
      blockquoteLines.push({ level: quoteLevel, content });

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

      /**
       * Process the collected blockquote lines
       */
      const processedBlockquote = processBlockquoteLines(blockquoteLines);
      result.push(processedBlockquote);

      i = j;
    } else {
      result.push(line);
      i++;
    }
  }

  return result.join("\n");
}

/**
 * Process collected blockquote lines into HTML
 * @param lines - The lines to process
 * @returns The processed HTML
 */
function processBlockquoteLines(
  lines: { level: number; content: string }[]
): string {
  if (lines.length === 0) return "";

  let html = "";
  let currentLevel = 0;
  const openTags: number[] = [];

  for (const line of lines) {
    const { level, content } = line;

    /**
     * Handle nesting - close tags if we're going to a lower level
     */
    while (currentLevel > level) {
      html += "</blockquote>";
      openTags.pop();
      currentLevel--;
    }

    /**
     * Handle nesting - open tags if we're going to a higher level
     */
    while (currentLevel < level) {
      const isFirst = currentLevel === 0;
      html += `<blockquote data-slot="blockquote" class="relative pl-4 py-1.5 ${isFirst ? "mb-3" : "mt-1"} bg-primary/5 rounded-xs text-xs leading-relaxed text-muted-foreground">`;
      if (currentLevel === 0) {
        html +=
          '<div class="absolute left-1 top-1 bottom-1 w-0.5 bg-primary/40 rounded-xs"></div>';
      }
      openTags.push(level);
      currentLevel++;
    }

    /**
     * Add the content if it's not empty
     */
    if (content.trim() === "") {
      html += "<br>";
    } else {
      html += content;
      const isLastLine = line === lines[lines.length - 1];
      if (!isLastLine) {
        html += "<br>";
      }
    }
  }

  /**
   * Close all remaining open tags if any
   */
  while (openTags.length > 0) {
    html += "</blockquote>";
    openTags.pop();
  }

  /**
   * Return the processed HTML
   */
  return html;
}

export default processBlockquotes;
