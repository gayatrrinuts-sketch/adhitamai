import { ObjectId } from "mongodb";
import { getBlogsCollection } from "./mongodb";
import { BlogPostDoc, BlogPostStatus } from "./types/blog";
import { initialSeedArticles } from "./blog-seed";
import { generateSlug, makeSlugUnique } from "./slugify";

// In-memory runtime fallback cache when MongoDB is offline / disconnected
let memoryArticles: BlogPostDoc[] = [...initialSeedArticles];
let isSeededInDb = false;

/**
 * Initializes and seeds the MongoDB collection with initial approved articles if empty
 */
export async function ensureDbSeeded(): Promise<void> {
  if (isSeededInDb) return;

  try {
    const col = await getBlogsCollection();
    if (!col) return;

    const count = await col.countDocuments();
    if (count === 0) {
      await col.insertMany(initialSeedArticles as any);
      console.log(`[Blog CMS] Seeded MongoDB with ${initialSeedArticles.length} initial articles.`);
    }
    isSeededInDb = true;
  } catch (error) {
    console.warn("[Blog CMS] Seed check failed, using fallback:", error);
  }
}

/**
 * Ensures 'Adhitam AI' is always included as a default tag for SEO, search engines and branding
 */
export function ensureDefaultTags(tags?: string[]): string[] {
  const defaultTag = "Adhitam AI";
  if (!tags || tags.length === 0) {
    return [defaultTag, "UPSC", "IAS"];
  }
  const hasDefault = tags.some(
    (t) => t.toLowerCase() === "adhitam ai" || t.toLowerCase() === "adhitamai"
  );
  if (!hasDefault) {
    return [defaultTag, ...tags];
  }
  return tags;
}

/**
 * Strips raw ISO time offsets like 'T00:00:00.000Z' and keeps only the YYYY-MM-DD date
 */
export function cleanDate(dateStr?: string | null): string | undefined {
  if (!dateStr) return undefined;
  return dateStr.includes("T") ? dateStr.split("T")[0] : dateStr.trim();
}

/**
 * Fetches all published articles for the public blog
 */
export async function getPublishedArticles(): Promise<BlogPostDoc[]> {
  await ensureDbSeeded();

  try {
    const col = await getBlogsCollection();
    if (col) {
      const docs = await col
        .find({ status: "published" })
        .sort({ publishedAt: -1, createdAt: -1 })
        .toArray();

      if (docs && docs.length > 0) {
        const seen = new Set<string>();
        const uniqueDocs: BlogPostDoc[] = [];
        for (const d of docs) {
          if (!seen.has(d.slug)) {
            seen.add(d.slug);
            const enrichedTags = ensureDefaultTags(d.tags);
            uniqueDocs.push({
              ...d,
              _id: d._id?.toString(),
              publishedAt: cleanDate(d.publishedAt),
              tags: enrichedTags,
              relatedTopics: d.relatedTopics && d.relatedTopics.length > 0 ? d.relatedTopics : enrichedTags,
            } as BlogPostDoc);
          }
        }
        return uniqueDocs;
      }
    }
  } catch (error) {
    console.warn("[Blog CMS] Failed to query published articles from DB, using fallback:", error);
  }

  // Memory fallback deduplicated
  const seenMem = new Set<string>();
  return memoryArticles.filter((a) => {
    if (a.status !== "published") return false;
    if (seenMem.has(a.slug)) return false;
    seenMem.add(a.slug);
    return true;
  });
}

/**
 * Fetches a single article by its slug
 */
export async function getArticleBySlug(
  slug: string,
  includeDraft: boolean = false
): Promise<BlogPostDoc | null> {
  await ensureDbSeeded();

  try {
    const col = await getBlogsCollection();
    if (col) {
      const filter: any = { slug };
      if (!includeDraft) {
        filter.status = "published";
      }

      const doc = await col.findOne(filter);
      if (doc) {
        const enrichedTags = ensureDefaultTags(doc.tags);
        return {
          ...doc,
          _id: doc._id?.toString(),
          publishedAt: cleanDate(doc.publishedAt),
          tags: enrichedTags,
          relatedTopics: doc.relatedTopics && doc.relatedTopics.length > 0 ? doc.relatedTopics : enrichedTags,
        } as BlogPostDoc;
      }
    }
  } catch (error) {
    console.warn(`[Blog CMS] Failed to find article by slug '${slug}' in DB:`, error);
  }

  // Memory fallback
  const match = memoryArticles.find((a) => a.slug === slug || a._id === slug);
  if (!match) return null;
  if (!includeDraft && match.status !== "published") return null;
  const matchTags = ensureDefaultTags(match.tags);
  return {
    ...match,
    publishedAt: cleanDate(match.publishedAt),
    tags: matchTags,
    relatedTopics: match.relatedTopics && match.relatedTopics.length > 0 ? match.relatedTopics : matchTags,
  };
}
 
/**
 * Fetches an article by its ID or Slug
 */
export async function getArticleById(
  idOrSlug: string,
  includeDraft: boolean = true
): Promise<BlogPostDoc | null> {
  return getArticleBySlug(idOrSlug, includeDraft);
}

/**
 * Fetches all articles (drafts + published) for editorial admin console
 */
export async function getAllArticlesForAdmin(): Promise<BlogPostDoc[]> {
  await ensureDbSeeded();

  try {
    const col = await getBlogsCollection();
    if (col) {
      const docs = await col.find({}).sort({ updatedAt: -1, createdAt: -1 }).toArray();
      if (docs && docs.length > 0) {
        return docs.map((d) => {
          const enrichedTags = ensureDefaultTags(d.tags);
          return {
            ...d,
            _id: d._id?.toString(),
            publishedAt: cleanDate(d.publishedAt),
            tags: enrichedTags,
            relatedTopics: d.relatedTopics && d.relatedTopics.length > 0 ? d.relatedTopics : enrichedTags,
          };
        }) as BlogPostDoc[];
      }
    }
  } catch (error) {
    console.warn("[Blog CMS] Failed to query all admin articles from DB:", error);
  }

  return memoryArticles.map((d) => {
    const enrichedTags = ensureDefaultTags(d.tags);
    return {
      ...d,
      tags: enrichedTags,
      relatedTopics: d.relatedTopics && d.relatedTopics.length > 0 ? d.relatedTopics : enrichedTags,
    };
  });
}

/**
 * Creates a new article in MongoDB
 */
export async function createArticle(
  data: Omit<BlogPostDoc, "_id" | "createdAt" | "updatedAt">
): Promise<BlogPostDoc> {
  await ensureDbSeeded();

  const now = new Date().toISOString();
  const allArticles = await getAllArticlesForAdmin();
  const existingSlugs = allArticles.map((a) => a.slug);

  const baseSlug = data.slug ? generateSlug(data.slug) : generateSlug(data.title);
  const slug = makeSlugUnique(baseSlug, existingSlugs);

  const tagsWithDefault = ensureDefaultTags(data.tags);
  const newDoc: BlogPostDoc = {
    ...data,
    slug,
    tags: tagsWithDefault,
    relatedTopics: data.relatedTopics && data.relatedTopics.length > 0 ? data.relatedTopics : tagsWithDefault,
    status: data.status || "draft",
    publishedAt: data.status === "published" ? cleanDate(data.publishedAt) || now.slice(0, 10) : undefined,
    createdAt: now,
    updatedAt: now,
    seoTitle: data.seoTitle || data.title,
    seoDescription: data.seoDescription || data.description,
  };

  try {
    const col = await getBlogsCollection();
    if (col) {
      const result = await col.insertOne(newDoc as any);
      newDoc._id = result.insertedId.toString();
    }
  } catch (error) {
    console.warn("[Blog CMS] Failed to insert article into DB:", error);
    newDoc._id = `mem-${Date.now()}`;
  }

  // Update memory cache
  memoryArticles.unshift(newDoc);
  return newDoc;
}

/**
 * Updates an existing article in MongoDB by ID or Slug
 */
export async function updateArticle(
  idOrSlug: string,
  updates: Partial<BlogPostDoc>
): Promise<BlogPostDoc | null> {
  await ensureDbSeeded();

  const now = new Date().toISOString();
  const filter: any = {};

  if (ObjectId.isValid(idOrSlug)) {
    filter._id = new ObjectId(idOrSlug);
  } else {
    filter.slug = idOrSlug;
  }

  // Handle slug change if title or slug is being updated
  let resolvedUpdates: any = {
    ...updates,
    updatedAt: now,
  };

  if (updates.tags) {
    resolvedUpdates.tags = ensureDefaultTags(updates.tags);
    if (!resolvedUpdates.relatedTopics) {
      resolvedUpdates.relatedTopics = resolvedUpdates.tags;
    }
  }

  if (updates.status === "published" && !updates.publishedAt) {
    resolvedUpdates.publishedAt = now.slice(0, 10);
  } else if (updates.publishedAt) {
    resolvedUpdates.publishedAt = cleanDate(updates.publishedAt);
  }

  try {
    const col = await getBlogsCollection();
    if (col) {
      const res = await col.findOneAndUpdate(
        filter,
        { $set: resolvedUpdates },
        { returnDocument: "after" }
      );

      if (res) {
        const updatedDoc = {
          ...res,
          _id: res._id?.toString(),
        } as BlogPostDoc;

        // Sync memory cache
        const memIdx = memoryArticles.findIndex(
          (a) => a._id === idOrSlug || a.slug === idOrSlug
        );
        if (memIdx !== -1) {
          memoryArticles[memIdx] = updatedDoc;
        } else {
          memoryArticles.unshift(updatedDoc);
        }

        return updatedDoc;
      }
    }
  } catch (error) {
    console.warn("[Blog CMS] Failed to update article in DB:", error);
  }

  // Memory fallback
  const memIdx = memoryArticles.findIndex(
    (a) => a._id === idOrSlug || a.slug === idOrSlug
  );
  if (memIdx === -1) return null;

  const updatedDoc: BlogPostDoc = {
    ...memoryArticles[memIdx],
    ...resolvedUpdates,
  };
  memoryArticles[memIdx] = updatedDoc;
  return updatedDoc;
}

/**
 * Deletes an article from MongoDB by ID or Slug
 */
export async function deleteArticle(idOrSlug: string): Promise<boolean> {
  await ensureDbSeeded();

  const filter: any = {};
  if (ObjectId.isValid(idOrSlug)) {
    filter._id = new ObjectId(idOrSlug);
  } else {
    filter.slug = idOrSlug;
  }

  try {
    const col = await getBlogsCollection();
    if (col) {
      const result = await col.deleteOne(filter);
      const deleted = result.deletedCount > 0;
      if (deleted) {
        memoryArticles = memoryArticles.filter(
          (a) => a._id !== idOrSlug && a.slug !== idOrSlug
        );
      }
      return deleted;
    }
  } catch (error) {
    console.warn("[Blog CMS] Failed to delete article from DB:", error);
  }

  const initialLength = memoryArticles.length;
  memoryArticles = memoryArticles.filter(
    (a) => a._id !== idOrSlug && a.slug !== idOrSlug
  );
  return memoryArticles.length < initialLength;
}

/**
 * Publishes or unpublishes an article
 */
export async function setArticleStatus(
  idOrSlug: string,
  status: BlogPostStatus
): Promise<BlogPostDoc | null> {
  const updates: Partial<BlogPostDoc> = { status };
  if (status === "published") {
    updates.publishedAt = new Date().toISOString().slice(0, 10);
  }
  return updateArticle(idOrSlug, updates);
}

/**
 * Finds related articles strictly among published articles, excluding current
 */
export async function getRelatedArticles(
  currentSlug: string,
  category?: string,
  limit: number = 3
): Promise<BlogPostDoc[]> {
  const allPublished = await getPublishedArticles();
  const others = allPublished.filter((a) => a.slug !== currentSlug);

  if (others.length === 0) return [];

  // Match by category first
  const sameCategory = category
    ? others.filter((a) => a.category.toLowerCase() === category.toLowerCase())
    : [];

  const diffCategory = others.filter(
    (a) => !category || a.category.toLowerCase() !== category.toLowerCase()
  );

  const combined = [...sameCategory, ...diffCategory];
  const seenSlugs = new Set<string>();
  const uniqueRelated: BlogPostDoc[] = [];
  for (const art of combined) {
    if (!seenSlugs.has(art.slug)) {
      seenSlugs.add(art.slug);
      uniqueRelated.push(art);
    }
  }

  return uniqueRelated.slice(0, limit);
}

/**
 * Exports all articles as JSON
 */
export async function exportAllArticles(): Promise<BlogPostDoc[]> {
  return getAllArticlesForAdmin();
}

/**
 * Imports articles array with resilient fallback, slug auto-generation, and ID deduplication
 */
export async function importArticles(
  docs: any[]
): Promise<{ imported: number; updated: number; skipped: number; errors: string[] }> {
  await ensureDbSeeded();
  let imported = 0;
  let updated = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (let i = 0; i < docs.length; i++) {
    const rawDoc = docs[i];
    if (!rawDoc || typeof rawDoc !== "object") {
      skipped++;
      errors.push(`Article #${i + 1} is empty or not an object.`);
      continue;
    }

    if (!rawDoc.title || typeof rawDoc.title !== "string" || !rawDoc.title.trim()) {
      skipped++;
      errors.push(`Article #${i + 1} is missing a required 'title'.`);
      continue;
    }

    // Clone and strip any existing _id to prevent MongoDB duplicate key error
    const doc: any = { ...rawDoc };
    delete doc._id;

    // Auto-generate slug if missing
    if (!doc.slug || typeof doc.slug !== "string" || !doc.slug.trim()) {
      doc.slug = generateSlug(doc.title);
    } else {
      doc.slug = generateSlug(doc.slug);
    }

    // Default status to published if not explicitly set to draft
    doc.status = doc.status === "draft" ? "draft" : "published";

    // Ensure description meets minimum validation length
    if (!doc.description || typeof doc.description !== "string" || doc.description.trim().length < 5) {
      doc.description = doc.title;
    }

    // Ensure category exists
    if (!doc.category || typeof doc.category !== "string") {
      doc.category = "Strategy";
    }

    // Ensure readTime exists
    if (!doc.readTime || typeof doc.readTime !== "string") {
      doc.readTime = "8 min read";
    }

    // Ensure blocks array exists
    if (!Array.isArray(doc.blocks) || doc.blocks.length === 0) {
      doc.blocks = [
        {
          type: "paragraph",
          content: doc.introduction || doc.content || doc.description || "Article content.",
        },
      ];
    }

    try {
      const existing = await getArticleBySlug(doc.slug, true);
      if (existing) {
        // If updating existing, preserve original _id and update
        const updatedDoc = await updateArticle(doc.slug, doc);
        if (updatedDoc) {
          updated++;
        } else {
          skipped++;
          errors.push(`Article #${i + 1} ('${doc.title}') could not be updated.`);
        }
      } else {
        const createdDoc = await createArticle(doc);
        if (createdDoc) {
          imported++;
        } else {
          skipped++;
          errors.push(`Article #${i + 1} ('${doc.title}') could not be created.`);
        }
      }
    } catch (err: any) {
      skipped++;
      errors.push(`Article #${i + 1} error: ${err.message || "Unknown error"}`);
    }
  }

  return { imported, updated, skipped, errors };
}
