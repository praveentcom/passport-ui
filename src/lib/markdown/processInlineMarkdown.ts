/**
 * Process inline markdown formatting (bold, italic, code, strikethrough, links, etc.)
 * @param content - The content to process
 * @returns The processed HTML string
 */
export function processInlineMarkdown(content: string): string {
  /**
   * Protect escaped characters
   */
  const escapeMap = new Map<string, string>();
  let escapeCounter = 0;

  let processed = content.replace(
    /\\([\\`*_{}[\]()#+\-.!~|])/g,
    (match, char) => {
      const placeholder = `{{ESCAPED${escapeCounter}}}`;
      escapeMap.set(placeholder, char);
      escapeCounter++;
      return placeholder;
    }
  );

  /**
   * Process inline code first and protect it
   */
  const codeSpans: string[] = [];
  let codeSpanCounter = 0;

  processed = processed.replace(/`([^`]+)`/g, (match, codeContent) => {
    const placeholder = `{{CODESPAN${codeSpanCounter}}}`;
    codeSpans.push(
      `<code class="bg-border/50 px-1 py-0.5 rounded border border-border text-xs font-mono">${codeContent}</code>`
    );
    codeSpanCounter++;
    return placeholder;
  });

  /**
   * Process bold, italic, strikethrough, links, etc.
   */
  processed = processed
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    .replace(/_(.+?)_/g, '<em class="italic">$1</em>')
    .replace(/~~(.*?)~~/g, '<del class="line-through opacity-75">$1</del>')
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" class="rounded-md max-w-full h-auto my-1 border border-border inline-block" />'
    )
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium inline-flex items-center gap-1">$1<svg class="size-3 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>'
    )
    .replace(
      /\[\[([^\]]+)\]\]/g,
      '<kbd class="px-1 py-0.5 text-xs font-mono bg-border/50 border border-border rounded">$1</kbd>'
    );

  /**
   * Restore code spans
   */
  codeSpans.forEach((codeSpan, index) => {
    processed = processed.replace(
      new RegExp(`{{CODESPAN${index}}}`, "g"),
      codeSpan
    );
  });

  /**
   * Restore escaped characters
   */
  escapeMap.forEach((char, placeholder) => {
    processed = processed.replace(
      new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      char
    );
  });

  return processed;
}
