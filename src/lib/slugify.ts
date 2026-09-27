/**
 * Normalizes an article title into an SEO-friendly slug
 */
export function generateSlug(title: string): string {
  if (!title) return "untitled-article";

  return title
    .toLowerCase()
    .trim()
    // Replace punctuation and symbols with spaces
    .replace(/[^\w\s-]/g, "")
    // Replace whitespace and multiple hyphens with single hyphen
    .replace(/[\s_-]+/g, "-")
    // Remove leading and trailing hyphens
    .replace(/^-+|-+$/g, "");
}

/**
 * Ensures a slug is unique within a list of existing slugs or database
 */
export function makeSlugUnique(baseSlug: string, existingSlugs: string[]): string {
  let slug = baseSlug;
  let counter = 1;

  while (existingSlugs.includes(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }

  return slug;
}
