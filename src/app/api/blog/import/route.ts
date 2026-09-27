import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { importArticles } from "@/lib/blog-service";

export async function POST(request: Request) {
  try {
    await requireAdmin();

    const body = await request.json().catch(() => ({}));
    const articles = Array.isArray(body) ? body : body.articles;

    if (!Array.isArray(articles) || articles.length === 0) {
      return NextResponse.json(
        { error: "Invalid import format. Expected an array of blog articles." },
        { status: 400 }
      );
    }

    const imported = await importArticles(articles);
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
