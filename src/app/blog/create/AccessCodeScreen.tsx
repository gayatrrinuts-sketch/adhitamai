"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AccessCodeScreen() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!code.trim()) {
      setError("Please enter your access code.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Invalid access code. Please try again.");
      } else {
        // Refresh page to render the authenticated editor
        router.refresh();
      }
    } catch {
      setError("Failed to verify access code. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#121016] text-[#FAF7F2] flex items-center justify-center p-6 selection:bg-[#C9A227] selection:text-[#121016]">
      <div className="w-full max-w-md bg-[#1B1822] border border-[#2D2838] rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227]" />
            <span className="text-[11px] tracking-[0.2em] font-mono text-[#D8BE6E] uppercase font-semibold">
              Adhitam AI
            </span>
          </div>
          <h1 className="text-2xl font-serif tracking-tight font-medium text-[#FAF7F2]">
            Editorial Console
          </h1>
          <p className="text-xs text-[#8C8371] mt-2">
            Restricted access. Enter your editorial secret code to manage UPSC publications.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="accessCode"
              className="block text-xs font-medium text-[#FAF7F2]/80 uppercase tracking-wider mb-2"
            >
              Enter Access Code
            </label>
            <input
              id="accessCode"
              type="password"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError("");
              }}
              placeholder="••••••••••••••••"
              disabled={loading}
              autoFocus
              className="w-full bg-[#121016] border border-[#383244] focus:border-[#C9A227] rounded-xl px-4 py-3 text-sm text-[#FAF7F2] placeholder-[#5C5548] focus:outline-none transition-colors"
            />
          </div>

          {error && (
            <div className="text-xs text-rose-400 bg-rose-950/40 border border-rose-800/50 rounded-lg p-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C9A227] hover:bg-[#D8BE6E] active:scale-[0.99] text-[#121016] font-medium py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Continue →"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#2D2838] text-center">
          <p className="text-[11px] text-[#5C5548]">
            Adhitam AI Editorial Publishing System · Protected Endpoint
          </p>
        </div>
      </div>
    </div>
  );
}
