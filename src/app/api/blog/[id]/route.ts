import { NextResponse } from "next/server";
import { isAdmin, requireAdmin } from "@/lib/auth";
import {
  getArticleById,
  getArticleBySlug,
  updateArticle,
  deleteArticle,
} from "@/lib/blog-service";
import { validateBlogPost } from "@/lib/blog-validation";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, props: RouteProps) {
  try {
    const { id } = await props.params;
    const authenticated = await isAdmin();

    // Check by ID first, then by slug
    let article = await getArticleById(id);
    if (!article) {
      article = await getArticleBySlug(id, authenticated);
    }

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 });
    }

    if (article.status !== "published" && !authenticated) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ article });
  } catch (error) {
    console.error("[Blog API] GET [id] error:", error);
    return NextResponse.json(
      { error: "Failed to retrieve article" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request, props: RouteProps) {
  try {
    await requireAdmin();
    const { id } = await props.params;

    const rawData = await request.json().catch(() => ({}));
    const validation = validateBlogPost(rawData, true);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    const updated = await updateArticle(id, validation.data);
    if (!updated) {
      return NextResponse.json(
        { error: "Article not found or update failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({ article: updated });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] PATCH [id] error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update article" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, props: RouteProps) {
  try {
    await requireAdmin();
    const { id } = await props.params;

    const deleted = await deleteArticle(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Article not found or delete failed" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Article deleted" });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] DELETE [id] error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete article" },
      { status: 500 }
    );
  }
}
