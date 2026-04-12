const categoryColors: Record<string, string> = {
  Privacy: "bg-redish-400/20 text-redish-100",
  Guides: "bg-greeny-400/20 text-greeny-200",
  Technical: "bg-blueish-400/20 text-blueish-100",
  Comparisons: "bg-orangy-400/20 text-orangy-200",
};

export function useCategoryColor(category: string) {
  return categoryColors[category] || "bg-brownish-600 text-brownish-100";
}

export function formatPostDate(date: string, style: "short" | "long" = "short") {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: style === "long" ? "long" : "short",
    day: "numeric",
  });
}

/**
 * Extracts plain text from a Nuxt Content body AST and estimates
 * reading time at ~230 words per minute.
 */
export function estimateReadingTime(body: any): number {
  if (!body) return 5;

  let text = "";
  function walk(node: any) {
    if (typeof node === "string") {
      text += node + " ";
    } else if (node?.value) {
      text += node.value + " ";
    }
    if (node?.children) {
      for (const child of node.children) walk(child);
    }
  }
  walk(body);

  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230));
}
