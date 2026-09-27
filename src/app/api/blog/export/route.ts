import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { exportAllArticles } from "@/lib/blog-service";

export async function GET() {
  try {
    await requireAdmin();
    const articles = await exportAllArticles();

    return new NextResponse(JSON.stringify(articles, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": `attachment; filename="adhitam-blog-export-${new Date().toISOString().slice(0, 10)}.json"`,
      },
    });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Blog API] Export error:", error);
    return NextResponse.json(
      { error: "Failed to export articles" },
      { status: 500 }
    );
  }
}
