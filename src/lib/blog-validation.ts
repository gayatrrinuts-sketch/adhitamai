import { BlogBlock, BlogFAQ, BlogPostDoc } from "./types/blog";

export interface ValidationResult<T = any> {
  valid: boolean;
  errors: string[];
  data?: T;
}

export function sanitizeUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  // Disallow javascript:, data:, vbscript: protocols
  if (/^(javascript|data|vbscript):/i.test(trimmed)) {
    return "#";
  }
  return trimmed;
}

export function validateBlock(block: any, index: number): string | null {
  if (!block || typeof block !== "object") {
    return `Block #${index + 1} is invalid or malformed.`;
  }

  switch (block.type) {
    case "paragraph":
      if (typeof block.content !== "string") {
        return `Paragraph block #${index + 1} content must be text.`;
      }
      break;

    case "heading":
      if (typeof block.content !== "string" || !block.content.trim()) {
        return `Section heading #${index + 1} must have text content.`;
      }
      if (block.level !== 2) {
        return `Heading block #${index + 1} must be an H2 section.`;
      }
      break;

    case "quote":
      if (typeof block.content !== "string") {
        return `Quote block #${index + 1} content must be text.`;
      }
      break;

    case "list":
      if (!Array.isArray(block.items) || block.items.length === 0) {
        return `List block #${index + 1} must contain at least one item.`;
      }
      break;

    case "link":
      if (!block.href || (!block.label && !block.title)) {
        return `Link block #${index + 1} requires a destination URL and label.`;
      }
      break;

    case "download":
      if (!block.title || !block.fileUrl) {
        return `Downloadable document #${index + 1} requires a title and uploaded file URL.`;
      }
      break;

    case "adhitamPromo":
      if (!block.variant && !block.title && !block.customTitle) {
        return `Adhitam promotional block #${index + 1} requires a valid variant or title.`;
      }
      break;

    case "table":
      if (!Array.isArray(block.headers) || block.headers.length === 0) {
        return `Table block #${index + 1} must have headers.`;
      }
      if (!Array.isArray(block.rows)) {
        return `Table block #${index + 1} must have rows array.`;
      }
      break;

    case "image":
      if (!block.src) {
        return `Image block #${index + 1} requires an image source.`;
      }
      break;

    default:
      return `Unknown block type '${block.type}' at position #${index + 1}.`;
  }

  return null;
}

export function validateBlogPost(
  data: any,
  isPartial: boolean = false
): ValidationResult<BlogPostDoc> {
  const errors: string[] = [];

  if (!isPartial || data.title !== undefined) {
    if (!data.title || typeof data.title !== "string" || data.title.trim().length < 5) {
      errors.push("Title is required and must be at least 5 characters.");
    }
  }

  if (!isPartial || data.description !== undefined) {
    if (!data.description || typeof data.description !== "string" || data.description.trim().length < 10) {
      errors.push("Description is required and must be at least 10 characters.");
    }
  }

  if (!isPartial || data.category !== undefined) {
    if (!data.category || typeof data.category !== "string" || !data.category.trim()) {
      errors.push("Category is required.");
    }
  }

  if (data.status && data.status !== "draft" && data.status !== "published") {
    errors.push("Status must be either 'draft' or 'published'.");
  }

  if (data.blocks) {
    if (!Array.isArray(data.blocks)) {
      errors.push("Article blocks must be an array.");
    } else {
      data.blocks.forEach((block: any, i: number) => {
        const blockErr = validateBlock(block, i);
        if (blockErr) errors.push(blockErr);
      });
    }
  }

  if (data.faqs) {
    if (!Array.isArray(data.faqs)) {
      errors.push("FAQs must be an array.");
    } else {
      data.faqs.forEach((faq: any, i: number) => {
        if (!faq.question || !faq.answer) {
          errors.push(`FAQ #${i + 1} must have both question and answer.`);
        }
      });
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    data: errors.length === 0 ? (data as BlogPostDoc) : undefined,
  };
}
