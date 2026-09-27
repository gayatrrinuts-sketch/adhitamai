import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats an article date string into a clean editorial date (e.g. "27 Sep 2026")
 * and strips any raw ISO timestamp / time offsets (such as "T00:00:00.000Z").
 */
export function formatArticleDate(dateStr?: string | null): string {
  if (!dateStr) return "";

  // Strip ISO time if present (e.g. "2026-09-27T00:00:00.000Z" -> "2026-09-27")
  const dateOnly = dateStr.includes("T") ? dateStr.split("T")[0] : dateStr.trim();

  // If in YYYY-MM-DD format, convert to readable "27 Sep 2026"
  const parts = dateOnly.split("-");
  if (parts.length === 3) {
    const [year, month, day] = parts;
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    const mIdx = parseInt(month, 10) - 1;
    if (mIdx >= 0 && mIdx < 12) {
      const dNum = parseInt(day, 10);
      if (!isNaN(dNum)) {
        return `${dNum} ${months[mIdx]} ${year}`;
      }
    }
  }

  return dateOnly;
}
