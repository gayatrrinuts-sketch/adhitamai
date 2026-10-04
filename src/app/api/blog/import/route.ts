import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { importArticles } from "@/lib/blog-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(request: Request) {
  try {
    await requireAdmin();

    const body = await request.json().catch(() => ({}));
    const articles = Array.isArray(body)
      ? body
      : Array.isArray(body.articles)
      ? body.articles
      : body && typeof body === "object" && body.title
      ? [body]
      : [];

    if (!Array.isArray(articles) || articles.length === 0) {
      return NextResponse.json(
        { error: "Invalid import format. Expected an array of blog articles or a single article object with a 'title'." },
        { status: 400 }
      );
    }

    const imported = await importArticles(articles);

    try {
      revalidatePath("/blog");
      revalidatePath("/");
    } catch (revalErr) {
      console.warn("[Blog API] Revalidation notice:", revalErr);
    }

    return NextResponse.json({
      success: true,
      count: imported.imported + imported.updated,
      details: imported,
    });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] Import error:", error);
    return NextResponse.json(
      { error: "Failed to import articles: " + error.message },
      { status: 500 }
    );
  }
}
