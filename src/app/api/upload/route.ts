import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getMediaCollection, MediaDoc } from "@/lib/mongodb";

const MAX_IMAGE_SIZE_BYTES = 2 * 1024 * 1024; // 2 MB
const MAX_DOCUMENT_SIZE_BYTES = 3 * 1024 * 1024; // 3 MB

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export async function POST(request: Request) {
  try {
    await requireAdmin();

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const uploadType = (formData.get("type") as string) || "auto";

    if (!file) {
      return NextResponse.json({ error: "No file provided for upload" }, { status: 400 });
    }

    const filename = file.name || "uploaded-file";
    const fileSize = file.size;
    const mimeType = file.type.toLowerCase();
    const isPdf =
      mimeType === "application/pdf" || filename.toLowerCase().endsWith(".pdf");
    const isImage =
      mimeType.startsWith("image/") ||
      /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(filename);

    // Determine target category
    const isDocumentUpload =
      uploadType === "document" || uploadType === "pdf" || (!isImage && isPdf);

    if (isDocumentUpload) {
      if (!isPdf) {
        return NextResponse.json(
          { error: "Invalid document format. Only PDF documents up to 3 MB are permitted." },
          { status: 400 }
        );
      }
      if (fileSize > MAX_DOCUMENT_SIZE_BYTES) {
        return NextResponse.json(
          {
            error: `PDF document size (${formatBytes(fileSize)}) exceeds maximum allowed limit of 3 MB.`,
          },
          { status: 400 }
        );
      }
    } else {
      // Must be an image
      if (!isImage) {
        return NextResponse.json(
          { error: "Invalid file type. Please upload a valid image (JPEG, PNG, WebP, SVG) up to 2 MB." },
          { status: 400 }
        );
      }
      if (fileSize > MAX_IMAGE_SIZE_BYTES) {
        return NextResponse.json(
          {
            error: `Image size (${formatBytes(fileSize)}) exceeds maximum allowed limit of 2 MB.`,
          },
          { status: 400 }
        );
      }
    }

    // Read file bytes into Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const mediaCol = await getMediaCollection();
    if (!mediaCol) {
      return NextResponse.json(
        { error: "Database connection unavailable for media storage." },
        { status: 500 }
      );
    }

    const resolvedContentType = isPdf
      ? "application/pdf"
      : mimeType || "image/jpeg";

    const mediaDoc: MediaDoc = {
      filename,
      contentType: resolvedContentType,
      size: fileSize,
      data: buffer,
      createdAt: new Date().toISOString(),
    };

    const insertResult = await mediaCol.insertOne(mediaDoc);
    const mediaId = insertResult.insertedId.toString();
    const safeUrlFilename = encodeURIComponent(filename.replace(/[\r\n"\\;]/g, "_").trim());
    const mediaUrl = `/api/media/${mediaId}/${safeUrlFilename}`;

    return NextResponse.json({
      success: true,
      id: mediaId,
      url: mediaUrl,
      filename,
      size: fileSize,
      sizeFormatted: formatBytes(fileSize),
      contentType: resolvedContentType,
      isPdf,
    });
  } catch (error: any) {
    if (error.message?.includes("Unauthorized")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    console.error("[Media Upload API] Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload file to database" },
      { status: 500 }
    );
  }
}
