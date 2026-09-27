import { NextResponse } from "next/server";
import { verifyAdminCode, createAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { code } = body;

    if (!code || typeof code !== "string") {
      return NextResponse.json(
        { error: "Access code is required" },
        { status: 400 }
      );
    }

    const isValid = verifyAdminCode(code);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid access code. Please check your credentials." },
        { status: 401 }
      );
    }

    await createAdminSession();
    return NextResponse.json({ success: true, message: "Authorized" });
  } catch (error) {
    console.error("[Auth API] Login error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred during authorization." },
      { status: 500 }
    );
  }
}
