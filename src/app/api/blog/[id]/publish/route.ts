import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { setArticleStatus } from "@/lib/blog-service";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function POST(request: Request, props: RouteProps) {
  try {
    await requireAdmin();
    const { id } = await props.params;

    const updated = await setArticleStatus(id, "published");
    if (!updated) {
      return NextResponse.json(
        { error: "Article not found or failed to publish" },
        { status: 404 }
      );
    }

    return NextResponse.json({ article: updated });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] Publish error:", error);
    return NextResponse.json(
      { error: "Failed to publish article" },
      { status: 500 }
    );
  }
}
