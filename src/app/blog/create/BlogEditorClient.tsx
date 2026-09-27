"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  BlogPostDoc,
  BlogBlock,
  BlogFAQ,
  BlogPostStatus,
  ADHITAM_PROMO_VARIANTS,
} from "@/lib/types/blog";
import { generateSlug } from "@/lib/slugify";

interface BlogEditorClientProps {
  initialArticles: BlogPostDoc[];
}

export default function BlogEditorClient({ initialArticles }: BlogEditorClientProps) {
  const router = useRouter();
  const [articles, setArticles] = useState<BlogPostDoc[]>(initialArticles);
  const [activeTab, setActiveTab] = useState<"list" | "editor">("list");
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [customSlug, setCustomSlug] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Strategy");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10));
  const [readTime, setReadTime] = useState("10 min read");
  const [tagsInput, setTagsInput] = useState("UPSC, IAS, Preparation");
  const [blocks, setBlocks] = useState<BlogBlock[]>([]);
  const [faqs, setFaqs] = useState<BlogFAQ[]>([]);
  const [status, setStatus] = useState<BlogPostStatus>("published");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [deleteModalDoc, setDeleteModalDoc] = useState<BlogPostDoc | null>(null);
  const [importModalOpen, setImportModalOpen] = useState(false);
  const [importJsonText, setImportJsonText] = useState("");

  // Sync title changes with slug if not custom
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!customSlug) {
      setSlug(generateSlug(val));
    }
  };

  const handleStartNewArticle = () => {
    setEditingArticleId(null);
    setTitle("");
    setSlug("");
    setCustomSlug(false);
    setDescription("");
    setCategory("Strategy");
    setPublishedAt(new Date().toISOString().slice(0, 10));
    setReadTime("8 min read");
    setTagsInput("UPSC, IAS");
    setBlocks([
      {
        type: "paragraph",
        content: "Write your introductory thoughts and core premise here...",
      },
      {
        type: "heading",
        level: 2,
        content: "Key Strategic Principles",
        anchor: "key-strategic-principles",
      },
      {
        type: "paragraph",
        content: "Explain the structured methodology required for depth and consistency.",
      },
    ]);
    setFaqs([
      {
        question: "How should an aspirant begin this phase?",
        answer: "Start by reading NCERT foundations thoroughly before progressing to advanced standard references.",
      },
    ]);
    setStatus("published");
    setErrorMsg("");
    setSuccessMsg("");
    setActiveTab("editor");
  };

  const handleEditArticle = (art: BlogPostDoc) => {
    setEditingArticleId(art._id || art.slug);
    setTitle(art.title);
    setSlug(art.slug);
    setCustomSlug(true);
    setDescription(art.description);
    setCategory(art.category);
    setPublishedAt(art.publishedAt || new Date().toISOString().slice(0, 10));
    setReadTime(art.readTime);
    setTagsInput(art.tags?.join(", ") || "");
    setBlocks(JSON.parse(JSON.stringify(art.blocks || [])));
    setFaqs(JSON.parse(JSON.stringify(art.faqs || [])));
    setStatus(art.status);
    setErrorMsg("");
    setSuccessMsg("");
    setActiveTab("editor");
  };

  const refreshArticles = async () => {
    try {
      const res = await fetch("/api/blog?all=true");
      if (res.ok) {
        const data = await res.json();
        if (data.articles) {
          setArticles(data.articles);
        }
      }
    } catch (e) {
      console.error("Failed to refresh articles:", e);
    }
  };

  const handleSaveArticle = async (forcedStatus?: BlogPostStatus) => {
    setErrorMsg("");
    setSuccessMsg("");
    setIsSubmitting(true);

    const targetStatus = forcedStatus || status;
    const finalSlug = slug.trim() || generateSlug(title);

    const payload = {
      title: title.trim(),
      slug: finalSlug,
      description: description.trim(),
      category: category.trim(),
      publishedAt: publishedAt || new Date().toISOString().slice(0, 10),
      readTime: readTime.trim(),
      status: targetStatus,
      tags: tagsInput.split(",").map((t) => t.trim()).filter(Boolean),
      blocks,
      faqs,
    };

    try {
      let res;
      if (editingArticleId) {
        res = await fetch(`/api/blog/${editingArticleId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        res = await fetch("/api/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }

      const resData = await res.json();

      if (!res.ok) {
        const msg = resData.error || (resData.details ? resData.details.join(", ") : "Failed to save article");
        setErrorMsg(msg);
      } else {
        setSuccessMsg(
          targetStatus === "published"
            ? "Article published successfully!"
            : "Article draft saved."
        );
        setStatus(targetStatus);
        await refreshArticles();
        if (!editingArticleId && resData.article?._id) {
          setEditingArticleId(resData.article._id);
        }
      }
    } catch {
      setErrorMsg("Network error while saving article.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteArticle = async () => {
    if (!deleteModalDoc) return;
    setIsSubmitting(true);
    try {
      const targetId = deleteModalDoc._id || deleteModalDoc.slug;
      const res = await fetch(`/api/blog/${targetId}`, { method: "DELETE" });
      if (res.ok) {
        setArticles(articles.filter((a) => a._id !== targetId && a.slug !== targetId));
        setDeleteModalDoc(null);
        if (editingArticleId === targetId) {
          setActiveTab("list");
        }
      } else {
        const d = await res.json();
        alert(d.error || "Failed to delete article");
      }
    } catch {
      alert("Failed to delete article");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggleStatus = async (art: BlogPostDoc) => {
    const targetId = art._id || art.slug;
    const isCurrentlyPublished = art.status === "published";
    const endpoint = isCurrentlyPublished ? `/api/blog/${targetId}/unpublish` : `/api/blog/${targetId}/publish`;

    try {
      const res = await fetch(endpoint, { method: "POST" });
      if (res.ok) {
        await refreshArticles();
      } else {
        alert("Failed to update status");
      }
    } catch {
      alert("Failed to update status");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  // Block manipulation helpers
  const addBlock = (block: BlogBlock) => {
    setBlocks([...blocks, block]);
  };

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index));
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= blocks.length) return;
    const next = [...blocks];
    const temp = next[index];
    next[index] = next[targetIdx];
    next[targetIdx] = temp;
    setBlocks(next);
  };

  const updateBlock = (index: number, updated: BlogBlock) => {
    const next = [...blocks];
    next[index] = updated;
    setBlocks(next);
  };

  // FAQ manipulation helpers
  const addFaq = () => {
    setFaqs([
      ...faqs,
      {
        question: "New Frequently Asked Question",
        answer: "Provide a direct, thoughtful and accurate answer here.",
      },
    ]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const moveFaq = (index: number, direction: "up" | "down") => {
    const targetIdx = direction === "up" ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= faqs.length) return;
    const next = [...faqs];
    const temp = next[index];
    next[index] = next[targetIdx];
    next[targetIdx] = temp;
    setFaqs(next);
  };

  const updateFaq = (index: number, field: "question" | "answer", value: string) => {
    const next = [...faqs];
    next[index] = { ...next[index], [field]: value };
    setFaqs(next);
  };

  // Table manipulation helper
  const handleInsertTablePrompt = () => {
    const rowsStr = window.prompt("Enter number of data rows (e.g. 4):", "4");
    if (!rowsStr) return;
    const colsStr = window.prompt("Enter number of columns (e.g. 3):", "3");
    if (!colsStr) return;

    const rowCount = Math.max(1, Math.min(20, parseInt(rowsStr, 10) || 3));
    const colCount = Math.max(1, Math.min(8, parseInt(colsStr, 10) || 3));

    const headers: string[] = [];
    for (let c = 0; c < colCount; c++) {
      headers.push(`Column ${c + 1}`);
    }

    const rows: string[][] = [];
    for (let r = 0; r < rowCount; r++) {
      const row: string[] = [];
      for (let c = 0; c < colCount; c++) {
        row.push(c === 0 ? `Row ${r + 1}` : `Details`);
      }
      rows.push(row);
    }

    addBlock({
      type: "table",
      headers,
      rows,
    });
  };

  // Import JSON handler
  const handleImportSubmit = async () => {
    try {
      const parsed = JSON.parse(importJsonText);
      const res = await fetch("/api/blog/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed),
      });
      const data = await res.json();
      if (res.ok) {
        alert(`Successfully imported ${data.count} article(s)!`);
        setImportModalOpen(false);
        setImportJsonText("");
        await refreshArticles();
      } else {
        alert(data.error || "Failed to import");
      }
    } catch {
      alert("Invalid JSON format. Please verify the copied structure.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#211D17] flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-[#121016]">
      {/* Top Editorial Bar */}
      <header className="sticky top-0 z-40 bg-[#121016] text-[#FAF7F2] border-b border-[#2D2838] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D8BE6E] font-semibold hover:text-[#FAF7F2] transition-colors flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            Adhitam AI
          </Link>
          <span className="text-[#383244]">/</span>
          <span className="text-xs font-serif font-medium text-[#FAF7F2]">
            Editorial Console
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("list")}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "list"
                ? "bg-[#2D2838] text-[#FAF7F2]"
                : "text-[#8C8371] hover:text-[#FAF7F2]"
            }`}
          >
            Articles ({articles.length})
          </button>
          <button
            onClick={handleStartNewArticle}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeTab === "editor" && !editingArticleId
                ? "bg-[#C9A227] text-[#121016] font-semibold"
                : "bg-[#1E1B16] text-[#D8BE6E] border border-[#383244] hover:border-[#C9A227]"
            }`}
          >
            <span>+</span> New Article
          </button>

          <div className="h-4 w-px bg-[#2D2838] mx-1 hidden sm:block" />

          <a
            href="/api/blog/export"
            download
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs text-[#8C8371] hover:text-[#FAF7F2] hover:bg-[#1E1B16] transition-colors"
          >
            Export JSON
          </a>

          <button
            onClick={() => setImportModalOpen(true)}
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-xs text-[#8C8371] hover:text-[#FAF7F2] hover:bg-[#1E1B16] transition-colors"
          >
            Import
          </button>

          <button
            onClick={handleLogout}
            title="Log out"
            className="text-xs text-[#8C8371] hover:text-rose-400 px-2 py-1.5 transition-colors ml-2"
          >
            Exit
          </button>
        </div>
      </header>

      {/* Main Work Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-8">
        {activeTab === "list" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Table Header & Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 shadow-sm">
              <div>
                <h1 className="text-xl sm:text-2xl font-serif font-medium text-[#1E1B16]">
                  Production UPSC Publications
                </h1>
                <p className="text-xs sm:text-sm text-[#5C5548] mt-1">
                  Articles stored persistently in MongoDB. Public blog renders only published articles.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/blog"
                  target="_blank"
                  className="px-4 py-2 text-xs font-medium text-[#5C5548] hover:text-[#1E1B16] bg-[#EFE9DA] hover:bg-[#E4DCC8] rounded-xl transition-all"
                >
                  View Public Blog ↗
                </Link>
                <button
                  onClick={handleStartNewArticle}
                  className="px-5 py-2.5 bg-[#1E1B16] hover:bg-[#332C24] text-[#FAF7F2] rounded-xl text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  + Create Article
                </button>
              </div>
            </div>

            {/* Articles Table */}
            <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#E4DCC8] bg-[#EFE9DA]/60 text-[#5C5548] uppercase tracking-wider font-mono text-[10px]">
                      <th className="py-3.5 px-6 font-semibold">Title</th>
                      <th className="py-3.5 px-4 font-semibold">Category</th>
                      <th className="py-3.5 px-4 font-semibold">Status</th>
                      <th className="py-3.5 px-4 font-semibold">Updated</th>
                      <th className="py-3.5 px-6 text-right font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4DCC8]">
                    {articles.map((art) => {
                      const isPublished = art.status === "published";
                      return (
                        <tr
                          key={art._id || art.slug}
                          className="hover:bg-[#EFE9DA]/30 transition-colors group"
                        >
                          <td className="py-4 px-6 max-w-md">
                            <div className="font-serif font-medium text-sm text-[#1E1B16] group-hover:text-[#C9A227] transition-colors line-clamp-2">
                              {art.title}
                            </div>
                            <div className="text-[11px] font-mono text-[#8C8371] mt-0.5">
                              /blog/{art.slug}
                            </div>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <span className="inline-block px-2.5 py-1 bg-[#EFE9DA] border border-[#E4DCC8] rounded-full text-[10px] font-medium text-[#5C5548]">
                              {art.category}
                            </span>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap">
                            <button
                              onClick={() => handleToggleStatus(art)}
                              title="Click to toggle publish status"
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
                                isPublished
                                  ? "bg-emerald-950/10 text-emerald-800 border border-emerald-300 hover:bg-emerald-100"
                                  : "bg-amber-950/10 text-amber-800 border border-amber-300 hover:bg-amber-100"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  isPublished ? "bg-emerald-600" : "bg-amber-600"
                                }`}
                              />
                              {isPublished ? "Published" : "Draft"}
                            </button>
                          </td>
                          <td className="py-4 px-4 whitespace-nowrap text-[#8C8371] font-mono text-[11px]">
                            {art.updatedAt
                              ? new Date(art.updatedAt).toLocaleDateString("en-IN", {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                })
                              : art.publishedAt || "—"}
                          </td>
                          <td className="py-4 px-6 text-right whitespace-nowrap">
                            <div className="inline-flex items-center gap-2">
                              <button
                                onClick={() => handleEditArticle(art)}
                                className="px-3 py-1.5 bg-[#1E1B16] hover:bg-[#332C24] text-[#FAF7F2] rounded-lg text-xs font-medium transition-colors"
                              >
                                Edit
                              </button>
                              {isPublished && (
                                <Link
                                  href={`/blog/${art.slug}`}
                                  target="_blank"
                                  className="px-3 py-1.5 bg-[#EFE9DA] hover:bg-[#E4DCC8] text-[#211D17] rounded-lg text-xs font-medium transition-colors"
                                >
                                  View ↗
                                </Link>
                              )}
                              <button
                                onClick={() => setDeleteModalDoc(art)}
                                className="px-2.5 py-1.5 text-rose-700 hover:bg-rose-100/60 rounded-lg text-xs transition-colors"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {articles.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-[#8C8371]">
                          No articles found. Click "+ Create Article" to add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "editor" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Editor Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-4 sm:p-6 shadow-sm sticky top-[68px] z-30 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("list")}
                  className="px-3 py-1.5 text-xs text-[#5C5548] hover:text-[#1E1B16] bg-[#EFE9DA] hover:bg-[#E4DCC8] rounded-xl transition-all"
                >
                  ← All Articles
                </button>
                <div className="h-4 w-px bg-[#E4DCC8]" />
                <span className="text-xs font-mono text-[#8C8371]">
                  {editingArticleId ? `Editing: ${slug}` : "New Publication"}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    status === "published"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {status.toUpperCase()}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setPreviewOpen(true)}
                  className="px-4 py-2 border border-[#E4DCC8] hover:border-[#1E1B16] text-[#211D17] text-xs font-medium rounded-xl transition-all"
                >
                  Preview
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSaveArticle("draft")}
                  className="px-4 py-2 bg-[#EFE9DA] hover:bg-[#E4DCC8] text-[#211D17] text-xs font-medium rounded-xl transition-all disabled:opacity-50"
                >
                  Save Draft
                </button>
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSaveArticle("published")}
                  className="px-5 py-2 bg-[#C9A227] hover:bg-[#D8BE6E] active:scale-[0.99] text-[#121016] text-xs font-semibold rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Saving..." : "Publish Article →"}
                </button>
              </div>
            </div>

            {/* Notification messages */}
            {errorMsg && (
              <div className="bg-rose-50 border border-rose-300 text-rose-800 text-xs rounded-xl p-4">
                <strong>Error:</strong> {errorMsg}
              </div>
            )}
            {successMsg && (
              <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-xl p-4 flex items-center justify-between">
                <span>{successMsg}</span>
                {status === "published" && (
                  <Link
                    href={`/blog/${slug}`}
                    target="_blank"
                    className="underline font-semibold"
                  >
                    View live page ↗
                  </Link>
                )}
              </div>
            )}

            {/* Form Fields Card */}
            <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-sm font-mono uppercase tracking-wider text-[#8C8371] font-semibold border-b border-[#E4DCC8] pb-3">
                Publication Metadata
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                    Article Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="e.g. UPSC 2027 Preparation Strategy: Complete Month-by-Month IAS Study Plan"
                    className="w-full bg-[#FAF8F2] border border-[#E4DCC8] focus:border-[#C9A227] rounded-xl px-4 py-3 text-base font-serif text-[#1E1B16] placeholder-[#8C8371]/50 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-semibold text-[#1E1B16]">
                        Slug (URL identifier) *
                      </label>
                      <button
                        type="button"
                        onClick={() => setCustomSlug(!customSlug)}
                        className="text-[10px] text-[#C9A227] hover:underline"
                      >
                        {customSlug ? "Auto-generate from title" : "Edit manually"}
                      </button>
                    </div>
                    <div className="flex items-center bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl px-3 py-2 text-xs font-mono">
                      <span className="text-[#8C8371] select-none">/blog/</span>
                      <input
                        type="text"
                        value={slug}
                        readOnly={!customSlug}
                        onChange={(e) => setSlug(e.target.value)}
                        className="bg-transparent flex-1 focus:outline-none text-[#1E1B16] ml-0.5"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                      Category *
                    </label>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Strategy, Topper Journey, Mains, Optional..."
                      className="w-full bg-[#FAF8F2] border border-[#E4DCC8] focus:border-[#C9A227] rounded-xl px-3 py-2 text-xs text-[#1E1B16] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                    Description & Meta Summary *
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Clear editorial summary of the article. Used for SEO meta description, cards, and opening overview."
                    className="w-full bg-[#FAF8F2] border border-[#E4DCC8] focus:border-[#C9A227] rounded-xl px-4 py-2.5 text-xs text-[#211D17] placeholder-[#8C8371]/50 focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                      Published Date
                    </label>
                    <input
                      type="date"
                      value={publishedAt}
                      onChange={(e) => setPublishedAt(e.target.value)}
                      className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl px-3 py-2 text-xs text-[#1E1B16] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                      Read Time
                    </label>
                    <input
                      type="text"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="e.g. 12 min read"
                      className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl px-3 py-2 text-xs text-[#1E1B16] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B16] mb-1.5">
                      Tags (comma separated)
                    </label>
                    <input
                      type="text"
                      value={tagsInput}
                      onChange={(e) => setTagsInput(e.target.value)}
                      placeholder="UPSC, Prelims, Mains"
                      className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl px-3 py-2 text-xs text-[#1E1B16] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Structured Content Blocks Editor */}
            <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E4DCC8] pb-4">
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-wider text-[#8C8371] font-semibold">
                    Article Content Blocks ({blocks.length})
                  </h2>
                  <p className="text-xs text-[#5C5548] mt-0.5">
                    Safe, structured representation. Sections (H2) automatically generate the table of contents.
                  </p>
                </div>

                {/* Add Block Toolbar */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      addBlock({
                        type: "heading",
                        level: 2,
                        content: "New Section Title",
                        anchor: generateSlug("New Section Title"),
                      })
                    }
                    className="px-2.5 py-1.5 bg-[#1E1B16] text-[#FAF7F2] rounded-lg text-xs font-medium hover:bg-[#332C24] transition-colors"
                  >
                    + Add Section (H2)
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      addBlock({
                        type: "paragraph",
                        content: "New paragraph text...",
                      })
                    }
                    className="px-2.5 py-1.5 bg-[#EFE9DA] text-[#211D17] rounded-lg text-xs font-medium hover:bg-[#E4DCC8] transition-colors"
                  >
                    + Paragraph
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      addBlock({
                        type: "list",
                        ordered: false,
                        items: ["First key takeaway", "Second key takeaway"],
                      })
                    }
                    className="px-2.5 py-1.5 bg-[#EFE9DA] text-[#211D17] rounded-lg text-xs font-medium hover:bg-[#E4DCC8] transition-colors"
                  >
                    + List
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      addBlock({
                        type: "quote",
                        content: "Notable quote or critical realization...",
                      })
                    }
                    className="px-2.5 py-1.5 bg-[#EFE9DA] text-[#211D17] rounded-lg text-xs font-medium hover:bg-[#E4DCC8] transition-colors"
                  >
                    + Quote
                  </button>
                  <button
                    type="button"
                    onClick={handleInsertTablePrompt}
                    className="px-2.5 py-1.5 bg-[#EFE9DA] text-[#211D17] rounded-lg text-xs font-medium hover:bg-[#E4DCC8] transition-colors"
                  >
                    + Insert Table
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      addBlock({
                        type: "adhitamPromo",
                        variant: "structured",
                        title: "Build this into your preparation.",
                        description:
                          "Bring study, revision and practice into a more structured daily routine with Adhitam AI.",
                        cta: "Try Adhitam AI →",
                      })
                    }
                    className="px-2.5 py-1.5 bg-[#C9A227]/20 border border-[#C9A227] text-[#1E1B16] rounded-lg text-xs font-semibold hover:bg-[#C9A227]/30 transition-colors"
                  >
                    + Add Adhitam AI
                  </button>
                </div>
              </div>

              {/* Blocks List */}
              <div className="space-y-4">
                {blocks.map((block, index) => {
                  return (
                    <div
                      key={index}
                      className="border border-[#E4DCC8] rounded-xl p-4 bg-[#FAF8F2] relative group transition-all hover:border-[#8C8371]"
                    >
                      {/* Block header bar */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#E4DCC8]/70 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#EFE9DA] text-[#5C5548] flex items-center justify-center font-mono text-[10px]">
                            {index + 1}
                          </span>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[#8C8371] font-semibold">
                            {block.type === "heading"
                              ? "Section Heading (H2)"
                              : block.type === "adhitamPromo"
                              ? "Adhitam AI Promotion"
                              : block.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => moveBlock(index, "up")}
                            disabled={index === 0}
                            className="p-1 text-[#8C8371] hover:text-[#1E1B16] disabled:opacity-30"
                            title="Move Up"
                          >
                            ↑
                          </button>
                          <button
                            type="button"
                            onClick={() => moveBlock(index, "down")}
                            disabled={index === blocks.length - 1}
                            className="p-1 text-[#8C8371] hover:text-[#1E1B16] disabled:opacity-30"
                            title="Move Down"
                          >
                            ↓
                          </button>
                          <button
                            type="button"
                            onClick={() => removeBlock(index)}
                            className="p-1 text-rose-600 hover:text-rose-800 ml-1"
                            title="Remove Block"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      {/* Block contents based on type */}
                      {block.type === "heading" && (
                        <div className="space-y-2">
                          <input
                            type="text"
                            value={block.content}
                            onChange={(e) => {
                              const val = e.target.value;
                              updateBlock(index, {
                                ...block,
                                content: val,
                                anchor: generateSlug(val),
                              });
                            }}
                            className="w-full bg-[#FBF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-sm font-serif font-semibold text-[#1E1B16] focus:outline-none focus:border-[#C9A227]"
                          />
                          <div className="text-[10px] font-mono text-[#8C8371]">
                            Anchor ID: <span className="text-[#C9A227]">#{block.anchor}</span> (auto-linked in sidebar outline)
                          </div>
                        </div>
                      )}

                      {block.type === "paragraph" && (
                        <div>
                          <textarea
                            rows={4}
                            value={block.content}
                            onChange={(e) =>
                              updateBlock(index, {
                                ...block,
                                content: e.target.value,
                              })
                            }
                            className="w-full bg-[#FBF8F2] border border-[#E4DCC8] rounded-lg p-3 text-xs text-[#211D17] leading-relaxed focus:outline-none focus:border-[#C9A227]"
                          />
                          <p className="text-[10px] text-[#8C8371] mt-1">
                            Tip: You can use standard markdown: <code>**bold**</code>, <code>*italic*</code>, and <code>[link title](https://...)</code>.
                          </p>
                        </div>
                      )}

                      {block.type === "quote" && (
                        <textarea
                          rows={2}
                          value={block.content}
                          onChange={(e) =>
                            updateBlock(index, {
                              ...block,
                              content: e.target.value,
                            })
                          }
                          className="w-full bg-[#FBF8F2] border-l-4 border-l-[#C9A227] border border-[#E4DCC8] rounded-lg p-3 text-xs italic font-serif text-[#1E1B16] focus:outline-none"
                        />
                      )}

                      {block.type === "list" && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 mb-2 text-xs">
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                checked={!block.ordered}
                                onChange={() =>
                                  updateBlock(index, { ...block, ordered: false })
                                }
                              />
                              <span>Bullet List</span>
                            </label>
                            <label className="flex items-center gap-1.5 cursor-pointer">
                              <input
                                type="radio"
                                checked={block.ordered}
                                onChange={() =>
                                  updateBlock(index, { ...block, ordered: true })
                                }
                              />
                              <span>Numbered List</span>
                            </label>
                          </div>
                          {block.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-center gap-2">
                              <span className="text-xs text-[#8C8371] font-mono w-4">
                                {block.ordered ? `${itemIdx + 1}.` : "•"}
                              </span>
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => {
                                  const newItems = [...block.items];
                                  newItems[itemIdx] = e.target.value;
                                  updateBlock(index, { ...block, items: newItems });
                                }}
                                className="flex-1 bg-[#FBF8F2] border border-[#E4DCC8] rounded-lg px-2.5 py-1.5 text-xs text-[#211D17] focus:outline-none"
                              />
                              <button
                                type="button"
                                onClick={() => {
                                  const newItems = block.items.filter(
                                    (_, i) => i !== itemIdx
                                  );
                                  updateBlock(index, { ...block, items: newItems });
                                }}
                                className="text-xs text-rose-500 hover:text-rose-700 px-1"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => {
                              updateBlock(index, {
                                ...block,
                                items: [...block.items, "New list item"],
                              });
                            }}
                            className="text-xs text-[#C9A227] hover:underline font-medium mt-1 inline-block"
                          >
                            + Add Item
                          </button>
                        </div>
                      )}

                      {block.type === "adhitamPromo" && (
                        <div className="bg-[#121016] text-[#FAF7F2] p-4 rounded-xl border border-[#2D2838] space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono text-[#D8BE6E] tracking-wider uppercase">
                              Adhitam In-Article Hook
                            </span>
                            <select
                              value={block.variant}
                              onChange={(e) => {
                                const v = e.target.value;
                                const match = ADHITAM_PROMO_VARIANTS.find(
                                  (p) => p.id === v || p.title === v
                                );
                                updateBlock(index, {
                                  ...block,
                                  variant: v,
                                  title: match ? match.title : block.title,
                                  description: match
                                    ? match.description
                                    : block.description,
                                  cta: match ? match.cta : "Try Adhitam AI →",
                                });
                              }}
                              className="bg-[#1B1822] text-[#FAF7F2] border border-[#383244] text-[11px] rounded px-2 py-1 focus:outline-none"
                            >
                              {ADHITAM_PROMO_VARIANTS.map((p) => (
                                <option key={p.id} value={p.id}>
                                  {p.title}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-[10px] text-[#8C8371] block">
                              Hook Headline
                            </label>
                            <input
                              type="text"
                              value={block.title || block.customTitle || ""}
                              onChange={(e) =>
                                updateBlock(index, {
                                  ...block,
                                  title: e.target.value,
                                })
                              }
                              className="w-full bg-[#1B1822] border border-[#383244] rounded px-2.5 py-1 text-xs text-[#FAF7F2] focus:outline-none mt-1"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-[#8C8371] block">
                              Hook Subtitle / Description
                            </label>
                            <textarea
                              rows={2}
                              value={block.description || block.customDescription || ""}
                              onChange={(e) =>
                                updateBlock(index, {
                                  ...block,
                                  description: e.target.value,
                                })
                              }
                              className="w-full bg-[#1B1822] border border-[#383244] rounded px-2.5 py-1 text-xs text-[#FAF7F2] focus:outline-none mt-1"
                            />
                          </div>
                        </div>
                      )}

                      {block.type === "table" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-[11px] text-[#5C5548]">
                              Interactive Table Editor ({block.headers.length} cols ×{" "}
                              {block.rows.length} rows)
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  const newColName = `Col ${block.headers.length + 1}`;
                                  updateBlock(index, {
                                    ...block,
                                    headers: [...block.headers, newColName],
                                    rows: block.rows.map((r) => [...r, ""]),
                                  });
                                }}
                                className="text-[10px] bg-[#EFE9DA] px-2 py-1 rounded hover:bg-[#E4DCC8]"
                              >
                                + Add Column
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const newRow = new Array(block.headers.length).fill(
                                    ""
                                  );
                                  updateBlock(index, {
                                    ...block,
                                    rows: [...block.rows, newRow],
                                  });
                                }}
                                className="text-[10px] bg-[#EFE9DA] px-2 py-1 rounded hover:bg-[#E4DCC8]"
                              >
                                + Add Row
                              </button>
                            </div>
                          </div>

                          <div className="overflow-x-auto border border-[#E4DCC8] rounded-lg">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="bg-[#EFE9DA] border-b border-[#E4DCC8]">
                                  {block.headers.map((h, colIdx) => (
                                    <th key={colIdx} className="p-1.5 min-w-[120px]">
                                      <input
                                        type="text"
                                        value={h}
                                        onChange={(e) => {
                                          const newH = [...block.headers];
                                          newH[colIdx] = e.target.value;
                                          updateBlock(index, {
                                            ...block,
                                            headers: newH,
                                          });
                                        }}
                                        className="w-full bg-[#FAF8F2] border border-[#DCD2B8] rounded px-1.5 py-1 font-semibold text-[#1E1B16] focus:outline-none"
                                      />
                                    </th>
                                  ))}
                                  <th className="w-8 p-1"></th>
                                </tr>
                              </thead>
                              <tbody>
                                {block.rows.map((row, rowIdx) => (
                                  <tr
                                    key={rowIdx}
                                    className="border-b border-[#E4DCC8]/50"
                                  >
                                    {row.map((cell, colIdx) => (
                                      <td key={colIdx} className="p-1.5">
                                        <input
                                          type="text"
                                          value={cell}
                                          onChange={(e) => {
                                            const newRows = block.rows.map(
                                              (r, rI) =>
                                                rI === rowIdx
                                                  ? r.map((c, cI) =>
                                                      cI === colIdx
                                                        ? e.target.value
                                                        : c
                                                    )
                                                  : r
                                            );
                                            updateBlock(index, {
                                              ...block,
                                              rows: newRows,
                                            });
                                          }}
                                          className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded px-1.5 py-1 text-xs focus:outline-none"
                                        />
                                      </td>
                                    ))}
                                    <td className="p-1 text-center">
                                      <button
                                        type="button"
                                        onClick={() => {
                                          updateBlock(index, {
                                            ...block,
                                            rows: block.rows.filter(
                                              (_, rI) => rI !== rowIdx
                                            ),
                                          });
                                        }}
                                        className="text-[10px] text-rose-500 hover:text-rose-700"
                                      >
                                        ✕
                                      </button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {blocks.length === 0 && (
                  <div className="py-8 text-center border-2 border-dashed border-[#E4DCC8] rounded-xl text-xs text-[#8C8371]">
                    No content blocks added yet. Click "+ Add Section" or "+ Paragraph" above.
                  </div>
                )}
              </div>
            </div>

            {/* FAQ Builder */}
            <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#E4DCC8] pb-4">
                <div>
                  <h2 className="text-sm font-mono uppercase tracking-wider text-[#8C8371] font-semibold">
                    Frequently Asked Questions ({faqs.length})
                  </h2>
                  <p className="text-xs text-[#5C5548] mt-0.5">
                    Automatically generates structured FAQPage JSON-LD schema matching visible questions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={addFaq}
                  className="px-3.5 py-1.5 bg-[#1E1B16] text-[#FAF7F2] rounded-lg text-xs font-medium hover:bg-[#332C24] transition-colors"
                >
                  + Add FAQ
                </button>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-[#E4DCC8] rounded-xl p-4 bg-[#FAF8F2] space-y-3"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#8C8371] text-[11px] font-semibold">
                        FAQ #{index + 1}
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => moveFaq(index, "up")}
                          disabled={index === 0}
                          className="p-1 text-[#8C8371] hover:text-[#1E1B16] disabled:opacity-30"
                        >
                          ↑
                        </button>
                        <button
                          type="button"
                          onClick={() => moveFaq(index, "down")}
                          disabled={index === faqs.length - 1}
                          className="p-1 text-[#8C8371] hover:text-[#1E1B16] disabled:opacity-30"
                        >
                          ↓
                        </button>
                        <button
                          type="button"
                          onClick={() => removeFaq(index)}
                          className="p-1 text-rose-600 hover:text-rose-800 ml-1"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] text-[#5C5548] font-semibold block mb-1">
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFaq(index, "question", e.target.value)}
                        className="w-full bg-[#FBF8F2] border border-[#E4DCC8] rounded-lg px-3 py-2 text-xs font-semibold text-[#1E1B16] focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-[#5C5548] font-semibold block mb-1">
                        Answer
                      </label>
                      <textarea
                        rows={3}
                        value={faq.answer}
                        onChange={(e) => updateFaq(index, "answer", e.target.value)}
                        className="w-full bg-[#FBF8F2] border border-[#E4DCC8] rounded-lg p-3 text-xs text-[#211D17] leading-relaxed focus:outline-none focus:border-[#C9A227]"
                      />
                    </div>
                  </div>
                ))}

                {faqs.length === 0 && (
                  <p className="text-xs text-[#8C8371] italic text-center py-4">
                    No FAQs defined. (FAQ schema will be omitted).
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      {deleteModalDoc && (
        <div className="fixed inset-0 z-50 bg-[#121016]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="text-lg font-serif font-semibold text-[#1E1B16]">
              Delete Article Permanently?
            </h3>
            <p className="text-xs text-[#5C5548] leading-relaxed">
              Are you sure you want to delete{" "}
              <strong className="text-[#1E1B16]">"{deleteModalDoc.title}"</strong>?
              This action cannot be undone and the URL <code>/blog/{deleteModalDoc.slug}</code> will return 404.
            </p>
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#E4DCC8]">
              <button
                type="button"
                onClick={() => setDeleteModalDoc(null)}
                className="px-4 py-2 text-xs text-[#5C5548] hover:text-[#1E1B16] bg-[#EFE9DA] rounded-xl"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handleDeleteArticle}
                className="px-4 py-2 text-xs bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-medium shadow-sm"
              >
                {isSubmitting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {importModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#121016]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FBF8F2] border border-[#E4DCC8] rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-serif font-semibold text-[#1E1B16]">
                Import Articles (JSON)
              </h3>
              <button
                onClick={() => setImportModalOpen(false)}
                className="text-xs text-[#8C8371] hover:text-[#1E1B16]"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-[#5C5548]">
              Paste the exported JSON array of blog articles to restore or bulk insert.
            </p>
            <textarea
              rows={8}
              value={importJsonText}
              onChange={(e) => setImportJsonText(e.target.value)}
              placeholder="[ { title: '...', slug: '...', blocks: [...] } ]"
              className="w-full bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl p-3 text-xs font-mono text-[#1E1B16] focus:outline-none"
            />
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setImportModalOpen(false)}
                className="px-4 py-2 text-xs text-[#5C5548] bg-[#EFE9DA] rounded-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleImportSubmit}
                className="px-4 py-2 text-xs bg-[#1E1B16] text-[#FAF7F2] rounded-xl font-medium hover:bg-[#332C24]"
              >
                Run Import
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 z-50 bg-[#121016]/90 backdrop-blur-md flex flex-col p-4 sm:p-8">
          <div className="bg-[#1E1B16] border border-[#383244] text-[#FAF7F2] rounded-t-2xl px-6 py-3 flex items-center justify-between">
            <span className="text-xs font-mono text-[#D8BE6E]">
              Live Editorial Preview · {slug}
            </span>
            <button
              onClick={() => setPreviewOpen(false)}
              className="px-3 py-1 bg-[#2D2838] hover:bg-[#383244] text-xs rounded-lg text-[#FAF7F2]"
            >
              Close Preview ✕
            </button>
          </div>
          <div className="flex-1 bg-[#FAF8F2] overflow-y-auto rounded-b-2xl p-6 sm:p-12 text-[#211D17]">
            <article className="max-w-3xl mx-auto space-y-8">
              <header className="space-y-4 border-b border-[#E4DCC8] pb-8">
                <span className="inline-block px-3 py-1 bg-[#EFE9DA] border border-[#E4DCC8] rounded-full text-xs font-medium text-[#5C5548]">
                  {category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E1B16] leading-tight">
                  {title || "Untitled Article"}
                </h1>
                <p className="text-base text-[#5C5548] leading-relaxed">
                  {description}
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-[#8C8371]">
                  <span>{publishedAt}</span>
                  <span>·</span>
                  <span>{readTime}</span>
                </div>
              </header>

              <div className="space-y-6">
                {blocks.map((b, i) => {
                  if (b.type === "heading") {
                    return (
                      <h2
                        key={i}
                        id={b.anchor}
                        className="text-2xl font-serif font-bold text-[#1E1B16] pt-6 border-t border-[#E4DCC8]/60"
                      >
                        {b.content}
                      </h2>
                    );
                  }
                  if (b.type === "paragraph") {
                    return (
                      <p key={i} className="text-base text-[#211D17] leading-relaxed">
                        {b.content}
                      </p>
                    );
                  }
                  if (b.type === "quote") {
                    return (
                      <blockquote
                        key={i}
                        className="p-4 border-l-4 border-[#C9A227] bg-[#EFE9DA]/40 rounded-r-xl italic font-serif text-[#1E1B16]"
                      >
                        {b.content}
                      </blockquote>
                    );
                  }
                  if (b.type === "list") {
                    const ListTag = b.ordered ? "ol" : "ul";
                    return (
                      <ListTag
                        key={i}
                        className={`space-y-2 pl-6 text-sm text-[#211D17] ${
                          b.ordered ? "list-decimal" : "list-disc"
                        }`}
                      >
                        {b.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ListTag>
                    );
                  }
                  if (b.type === "adhitamPromo") {
                    return (
                      <div
                        key={i}
                        className="my-8 p-6 bg-[#121016] text-[#FAF7F2] rounded-2xl border border-[#2D2838] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-[10px] font-mono tracking-widest text-[#D8BE6E] uppercase mb-1">
                            Adhitam AI
                          </div>
                          <h4 className="text-lg font-serif font-bold text-[#FAF7F2]">
                            {b.title || b.customTitle || "Build this into your preparation"}
                          </h4>
                          <p className="text-xs text-[#8C8371] mt-1 max-w-md">
                            {b.description ||
                              b.customDescription ||
                              "Bring study, revision and practice into a structured daily routine."}
                          </p>
                        </div>
                        <span className="px-4 py-2 bg-[#C9A227] text-[#121016] rounded-xl text-xs font-semibold whitespace-nowrap">
                          {b.cta || b.ctaText || "Try Adhitam AI →"}
                        </span>
                      </div>
                    );
                  }
                  if (b.type === "table") {
                    return (
                      <div
                        key={i}
                        className="overflow-x-auto border border-[#E4DCC8] rounded-xl my-6"
                      >
                        <table className="w-full text-left text-xs">
                          <thead>
                            <tr className="bg-[#EFE9DA] border-b border-[#E4DCC8]">
                              {b.headers.map((h, colI) => (
                                <th
                                  key={colI}
                                  className="py-3 px-4 font-semibold text-[#1E1B16]"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#E4DCC8]">
                            {b.rows.map((r, rowI) => (
                              <tr key={rowI} className="hover:bg-[#EFE9DA]/20">
                                {r.map((c, colI) => (
                                  <td
                                    key={colI}
                                    className={`py-2.5 px-4 ${
                                      colI === 0 ? "font-medium text-[#1E1B16]" : ""
                                    }`}
                                  >
                                    {c}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {faqs.length > 0 && (
                <div className="pt-10 border-t border-[#E4DCC8] space-y-4">
                  <h3 className="text-xl font-serif font-bold text-[#1E1B16]">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((f, fI) => (
                      <div
                        key={fI}
                        className="border border-[#E4DCC8] rounded-xl p-4 bg-[#FBF8F2]"
                      >
                        <h4 className="font-semibold text-sm text-[#1E1B16] mb-1">
                          {f.question}
                        </h4>
                        <p className="text-xs text-[#5C5548] leading-relaxed">
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </div>
      )}
    </div>
  );
}
