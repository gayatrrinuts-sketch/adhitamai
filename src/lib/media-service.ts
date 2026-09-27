import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getMediaCollection, MediaDoc } from "./mongodb";

export async function getMediaById(id: string): Promise<MediaDoc | null> {
  if (!ObjectId.isValid(id)) return null;
  const col = await getMediaCollection();
  if (!col) return null;
  return col.findOne({ _id: new ObjectId(id) });
}

export async function deleteMediaById(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const col = await getMediaCollection();
  if (!col) return false;
  const res = await col.deleteOne({ _id: new ObjectId(id) });
  return (res.deletedCount || 0) > 0;
}

export function createMediaResponse(doc: MediaDoc, overrideFilename?: string): NextResponse {
  // Convert BSON Binary / Buffer
  const buffer = Buffer.isBuffer(doc.data)
    ? doc.data
    : (doc.data as any).buffer
    ? Buffer.from((doc.data as any).buffer)
    : Buffer.from(doc.data as any);

  const isImage = doc.contentType?.startsWith("image/");
  const rawFilename = overrideFilename || doc.filename || (isImage ? "image.jpg" : "document.pdf");
  // Clean filename: strip carriage returns, quotes, and backslashes
  const safeFilename = rawFilename.replace(/[\r\n"\\;]/g, "_").trim();
  const encodedFilename = encodeURIComponent(safeFilename);

  const headers = new Headers();
  headers.set("Content-Type", doc.contentType || (isImage ? "image/jpeg" : "application/pdf"));
  headers.set("Content-Length", buffer.length.toString());

  if (isImage) {
    headers.set("Cache-Control", "public, max-age=31536000, immutable");
    headers.set("Content-Disposition", `inline; filename="${safeFilename}"`);
  } else {
    // Force attachment download for documents
    headers.set("Content-Disposition", `attachment; filename="${safeFilename}"`);
    headers.set("Cache-Control", "private, no-cache, no-store, must-revalidate");
  }

  return new NextResponse(buffer, {
    status: 200,
    headers,
  });
}
