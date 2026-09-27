import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getMediaById, deleteMediaById, createMediaResponse } from "@/lib/media-service";

type RouteProps = {
  params: Promise<{ id: string }>;
};

export async function GET(request: Request, props: RouteProps) {
  try {
    const { id } = await props.params;
    const doc = await getMediaById(id);

    if (!doc || !doc.data) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return createMediaResponse(doc);
  } catch (error) {
    console.error("[Media GET API] Error:", error);
    return NextResponse.json(
      { error: "Failed to download media" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, props: RouteProps) {
  try {
    await requireAdmin();
    const { id } = await props.params;

    const deleted = await deleteMediaById(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Media not found or already deleted from database" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Media permanently deleted from database",
    });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Media DELETE API] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to delete media from database" },
      { status: 500 }
    );
  }
}
