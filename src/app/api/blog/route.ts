import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAdmin, requireAdmin } from "@/lib/auth";
import {
  getPublishedArticles,
  getAllArticlesForAdmin,
  createArticle,
} from "@/lib/blog-service";
import { validateBlogPost } from "@/lib/blog-validation";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const wantsAll = searchParams.get("all") === "true";

    const authenticated = await isAdmin();

    if (wantsAll && authenticated) {
      const articles = await getAllArticlesForAdmin();
      return NextResponse.json(
        { articles },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
        }
      );
    }

    // Default to published articles
    const articles = await getPublishedArticles();
    return NextResponse.json(
      { articles },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        },
      }
    );
  } catch (error) {
    console.error("[Blog API] GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();

    const rawData = await request.json().catch(() => ({}));
    const validation = validateBlogPost(rawData);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    const created = await createArticle(validation.data);

    // Invalidate static caches so production pages reflect immediately
    try {
      revalidatePath("/blog");
      revalidatePath(`/blog/${created.slug}`);
      revalidatePath("/");
    } catch (revalErr) {
      console.warn("[Blog API] Revalidation notice:", revalErr);
    }

    return NextResponse.json({ article: created }, { status: 201 });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] POST error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create article" },
      { status: 500 }
    );
  }
}
