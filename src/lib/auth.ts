import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "adhitam_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days in seconds

function getSecretKey(): string {
  return process.env.BLOG_ADMIN_CODE || "adhitam-editorial-default-secret-code-2026";
}

/**
 * Creates a signed HMAC token: timestamp.signature
 */
function createToken(): string {
  const timestamp = Date.now().toString();
  const secret = getSecretKey();
  const signature = crypto
    .createHmac("sha256", secret)
    .update(`admin:${timestamp}`)
    .digest("hex");
  return `${timestamp}.${signature}`;
}

/**
 * Verifies that the signed token has a valid signature and has not expired.
 */
function verifyToken(token: string): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timestampStr, signature] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Check expiration (7 days)
  const age = (Date.now() - timestamp) / 1000;
  if (age > SESSION_MAX_AGE || age < -60) return false;

  const secret = getSecretKey();
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(`admin:${timestampStr}`)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(expectedSignature, "hex")
    );
  } catch {
    return false;
  }
}

/**
 * Validates the raw access code against process.env.BLOG_ADMIN_CODE
 */
export function verifyAdminCode(inputCode: string): boolean {
  if (!inputCode) return false;
  const correctCode = getSecretKey();
  try {
    const inputBuf = Buffer.from(inputCode.trim());
    const correctBuf = Buffer.from(correctCode.trim());
    if (inputBuf.length !== correctBuf.length) return false;
    return crypto.timingSafeEqual(inputBuf, correctBuf);
  } catch {
    return false;
  }
}

/**
 * Checks if the current request has a valid admin session cookie.
 */
export async function isAdmin(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get(COOKIE_NAME);
    if (!sessionCookie || !sessionCookie.value) return false;
    return verifyToken(sessionCookie.value);
  } catch {
    return false;
  }
}

/**
 * Throws an error or returns 401 if current request is not authenticated.
 */
export async function requireAdmin(): Promise<void> {
  const authenticated = await isAdmin();
  if (!authenticated) {
    throw new Error("Unauthorized: Admin access required");
  }
}

/**
 * Creates the admin session by setting the HTTP-only cookie.
 */
export async function createAdminSession(): Promise<string> {
  const token = createToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return token;
}

/**
 * Clears the admin session cookie.
 */
export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
