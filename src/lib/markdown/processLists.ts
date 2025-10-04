/**
 * Process lists in markdown
 * @param html - The HTML to process
 * @returns The processed HTML
 */
function processLists(html: string): string {
  const lines = html.split("\n");
  const result: string[] = [];
  let currentListType: "ul" | "ol" | null = null;
  let listItems: string[] = [];

  const flushList = () => {
    if (currentListType && listItems.length > 0) {
      const listClass =
        currentListType === "ol"
          ? "list-decimal pl-0 ml-4 [&>li]:pl-1"
          : "list-disc pl-0 ml-4 [&>li]:pl-1";
      result.push(`<${currentListType} class="${listClass}">`);
      result.push(...listItems);
      result.push(`</${currentListType}>`);
      listItems = [];
      currentListType = null;
    }
  };

  for (const line of lines) {
    /**
     * Check for unordered list items (-, *, +)
     */
    const unorderedMatch = line.match(/^[\s]*[-*+]\s+(.*)$/);

    /**
     * Check for ordered list items (1., 2., etc.)
     */
    const orderedMatch = line.match(/^[\s]*\d+\.\s+(.*)$/);

    /**
     * Check for task list items
     */
    const taskUncheckedMatch = line.match(/^[\s]*[-*+]\s+\[\s*\]\s+(.*)$/);
    const taskCheckedMatch = line.match(/^[\s]*[-*+]\s+\[x\]\s+(.*)$/);

    if (taskUncheckedMatch) {
      if (currentListType !== "ul") {
        flushList();
        currentListType = "ul";
      }
      listItems.push(
        `<li class="ml-1 mb-1 text-sm leading-relaxed flex items-center gap-1.5"><input type="checkbox" disabled class="rounded border-border text-primary focus:ring-primary/50" /> ${taskUncheckedMatch[1]}</li>`
      );
    } else if (taskCheckedMatch) {
      if (currentListType !== "ul") {
        flushList();
        currentListType = "ul";
      }
      listItems.push(
        `<li class="ml-1 mb-1 text-sm leading-relaxed flex items-center gap-1.5"><input type="checkbox" checked disabled class="rounded border-border text-primary focus:ring-primary/50" /> ${taskCheckedMatch[1]}</li>`
      );
    } else if (unorderedMatch) {
      if (currentListType !== "ul") {
        flushList();
        currentListType = "ul";
      }
      listItems.push(
        `<li class="mb-1 text-sm leading-relaxed">${unorderedMatch[1]}</li>`
      );
    } else if (orderedMatch) {
      if (currentListType !== "ol") {
        flushList();
        currentListType = "ol";
      }
      listItems.push(
        `<li class="mb-1 text-sm leading-relaxed">${orderedMatch[1]}</li>`
      );
    } else {
      flushList();
      if (line.trim()) {
        result.push(line);
      }
    }
  }

  /**
   * Flush any remaining list
   */
  flushList();

  /**
   * Join the result array into a string
   */
  return result.join("\n");
}

export default processLists;
