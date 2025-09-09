import processLists from "./processLists";

/**
 * Parse markdown
 * @param content
 * @returns The processed HTML
 */
function parseMarkdown(content: string): string {
  /**
   * Sequence: Process the headers
   */
  let processedContent = content
    .replace(/^###### (.*$)/gim, '<h6 class="mb-3 mt-2">$1</h6>')
    .replace(/^##### (.*$)/gim, '<h5 class="mb-3 mt-2">$1</h5>')
    .replace(/^#### (.*$)/gim, '<h4 class="mb-3 mt-3">$1</h4>')
    .replace(/^### (.*$)/gim, '<h3 class="mb-3 mt-4">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="mb-3 mt-5">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="mb-3 mt-6">$1</h1>');

  /**
   * Sequence: Process escape characters (before other inline processing)
   */
  const escapeMap = new Map<string, string>();
  let escapeCounter = 0;

  processedContent = processedContent.replace(
    /\\([\\`*_{}[\]()#+\-.!~|])/g,
    (match, char) => {
      const placeholder = `{{ESCAPED${escapeCounter}}}`;
      escapeMap.set(placeholder, char);
      escapeCounter++;
      return placeholder;
    },
  );

  /**
   * Sequence: Process footnotes
   */
  const footnotes = new Map<string, string>();
  const footnoteRefs: string[] = [];

  processedContent = processedContent.replace(
    /^\[\^([^\]]+)\]:\s*(.+)$/gm,
    (match, id, definition) => {
      footnotes.set(id, definition.trim());
      return "";
    },
  );

  processedContent = processedContent.replace(
    /\[\^([^\]]+)\]/g,
    (match, id) => {
      if (footnotes.has(id)) {
        if (!footnoteRefs.includes(id)) {
          footnoteRefs.push(id);
        }
        const index = footnoteRefs.indexOf(id) + 1;
        return `<sup><a href="#footnote-${id}" id="footnote-ref-${id}" class="text-primary hover:underline text-xs">${index}</a></sup>`;
      }
      return match;
    },
  );

  /**
   * Sequence: Process inline code and protect it
   */
  const codeSpans: string[] = [];
  let codeSpanCounter = 0;

  // Extract and protect code spans
  processedContent = processedContent.replace(
    /`([^`]+)`/g,
    (match, content) => {
      const placeholder = `{{CODESPAN${codeSpanCounter}}}`;
      codeSpans.push(
        `<code class="bg-border/50 px-1 py-0.5 rounded border border-border text-xs font-mono">${content}</code>`,
      );
      codeSpanCounter++;
      return placeholder;
    },
  );

  /**
   * Sequence: Process the other inline elements
   */
  processedContent = processedContent
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/_(.+?)_/g, '<em class="italic">$1</em>')
    .replace(/~~(.*?)~~/g, '<del class="line-through opacity-75">$1</del>')
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="rounded-sm max-w-full h-auto my-3 border border-border block" />',
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium inline-flex items-center gap-1">$1<svg class="size-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>',
    )
    .replace(/^---$/gm, '<hr class="my-4 border-t border-border" />')
    .replace(/ {2}$/gm, "<br />")
    .replace(
      /\[\[([^\]]+)\]\]/g,
      '<kbd class="px-1 py-0.5 text-xs font-mono bg-border/50 border border-border rounded">$1</kbd>',
    );

  /**
   * Sequence: Process blockquotes - handled separately by component extraction
   */

  /**
   * Sequence: Process the lists
   */
  processedContent = processLists(processedContent);

  /**
   * Sequence: Process the paragraphs
   */
  processedContent = processedContent
    .replace(/\n\n/g, '</p><p class="mb-3">')
    .replace(/^(?!<[h|l|p|c|b|i|d|u|t])/gm, '<p class="mb-3">')
    .replace(/(?<!>)$/gm, "</p>")
    .replace(/<p class="mb-3"><\/p>/g, "")
    .replace(/<p class="mb-3">(<[h|l|p|c|b|i|d|u|t])/g, "$1");

  /**
   * Sequence: Restore code spans
   */
  codeSpans.forEach((codeSpan, index) => {
    processedContent = processedContent.replace(
      new RegExp(`{{CODESPAN${index}}}`, "g"),
      codeSpan,
    );
  });

  /**
   * Sequence: Restore escaped characters
   */
  escapeMap.forEach((char, placeholder) => {
    processedContent = processedContent.replace(
      new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      char,
    );
  });

  /**
   * Sequence: Add footnotes section at the end if any footnotes exist
   */
  if (footnoteRefs.length > 0) {
    let footnotesHtml =
      '<div class="footnotes mt-8 pt-4 border-t border-border/50"><h4 class="text-sm font-medium mb-3">Footnotes</h4><ol class="text-xs space-y-2">';

    footnoteRefs.forEach((id) => {
      const definition = footnotes.get(id);
      footnotesHtml += `<li id="footnote-${id}" class="text-muted-foreground leading-relaxed">${definition}</li>`;
    });

    footnotesHtml += "</ol></div>";
    processedContent += footnotesHtml;
  }

  /**
   * End of sequence: Return the processed markdown HTML
   */
  return processedContent;
}

export default parseMarkdown;
