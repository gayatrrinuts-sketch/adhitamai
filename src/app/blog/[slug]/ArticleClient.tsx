"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Bookmark,
  ArrowRight,
  Sparkles,
  Target,
  BookOpen,
  CheckCircle,
  ChevronDown,
  List,
  Download,
  ExternalLink,
  FileText,
} from "lucide-react";
import { BlogPostDoc, BlogBlock } from "@/lib/types/blog";
import { formatArticleDate } from "@/lib/utils";
import Footer from "@/components/Footer";
import SocialRail from "@/components/SocialRail";

interface Props {
  post: BlogPostDoc;
  related: BlogPostDoc[];
}

/**
 * Safely parse inline markdown: **bold**, *italic*, [label](url)
 */
function renderFormattedText(text: string) {
  if (!text) return null;

  // Split by link pattern: [label](url)
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderBasicFormatting(text.substring(lastIndex, match.index), `txt-${lastIndex}`));
    }
    const [_, label, url] = match;
    parts.push(
      <a
        key={`link-${match.index}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#A9821E] hover:text-[#C9A227] underline underline-offset-2 font-medium"
      >
        {label}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(renderBasicFormatting(text.substring(lastIndex), `txt-${lastIndex}`));
  }

  return <>{parts}</>;
}

function renderBasicFormatting(text: string, keyPrefix: string) {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return tokens.map((token, i) => {
    if (token.startsWith("**") && token.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-[#121016]">
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith("*") && token.endsWith("*")) {
      return (
        <em key={`${keyPrefix}-${i}`} className="italic">
          {token.slice(1, -1)}
        </em>
      );
    }
    return token;
  });
}

function RenderBlockItem({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <div id={block.anchor} className="scroll-mt-24 sm:scroll-mt-28 pt-6 pb-2">
          <h2 className="font-serif text-xl sm:text-2xl md:text-[28px] font-bold text-[#1E1B16] leading-snug sm:leading-tight text-wrap-balance">
            {block.content}
          </h2>
        </div>
      );

    case "paragraph":
      return (
        <p className="text-[15px] sm:text-[16.5px] text-[#2C2720] leading-[1.78] sm:leading-[1.82] font-normal break-words">
          {renderFormattedText(block.content)}
        </p>
      );

    case "quote":
      return (
        <blockquote className="my-5 sm:my-6 p-4 sm:p-5 rounded-2xl border-l-4 border-[#C9A227] bg-[#EFE9DA]/50 font-serif italic text-[15px] sm:text-[16px] text-[#1E1B16] leading-relaxed shadow-xs">
          {renderFormattedText(block.content)}
        </blockquote>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="space-y-3 my-4 pl-1 sm:pl-2">
            {block.items.map((item, idx) => (
              <li key={idx} className="flex gap-2.5 sm:gap-3 text-[15px] sm:text-[15.5px] text-[#2C2720] leading-[1.7]">
                <span className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#EFE9DA] text-[#A9821E] text-[10px] sm:text-[11px] font-bold flex items-center justify-center mt-[2px]">
                  {idx + 1}
                </span>
                <span className="break-words">{renderFormattedText(item)}</span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="space-y-2.5 my-4 pl-1 sm:pl-2">
          {block.items.map((item, idx) => (
            <li key={idx} className="flex gap-2.5 sm:gap-3 text-[15px] sm:text-[15.5px] text-[#2C2720] leading-[1.7]">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
              <span className="break-words">{renderFormattedText(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="my-6 rounded-xl border border-[#E4DCC8] bg-[#FBF8F2] shadow-xs overflow-hidden">
          <div className="sm:hidden px-3.5 py-1.5 bg-[#EFE9DA]/70 border-b border-[#E4DCC8] flex items-center justify-between text-[11px] font-mono text-[#8C8371]">
            <span>Scroll horizontally for full table &rarr;</span>
            <span className="uppercase text-[#8C6D1F] font-semibold">Table</span>
          </div>
          <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
            <table className="min-w-full text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#EFE9DA] border-b border-[#E4DCC8]">
                  {block.headers.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className="px-3.5 sm:px-4 py-2.5 sm:py-3 text-left font-bold uppercase tracking-[0.08em] text-[#8C6D1F] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4DCC8]/60">
                {block.rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className={ri % 2 === 0 ? "bg-[#FBF8F2]" : "bg-[#F5F1E8]/50"}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-3.5 sm:px-4 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#2C2720] leading-[1.6] ${
                          ci === 0 ? "font-medium text-[#1E1B16] whitespace-nowrap" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "adhitamPromo":
      return (
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#121016] text-[#FAF7F2] border border-[#2D2838] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 relative overflow-hidden">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-[#D8BE6E] uppercase font-semibold">
              Adhitam AI · Structured System
            </span>
            <h4 className="font-serif text-lg sm:text-xl font-bold text-[#FAF7F2]">
              {block.title || block.customTitle || "Build this into your preparation."}
            </h4>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 leading-relaxed">
              {block.description ||
                block.customDescription ||
                "Bring study, revision and practice into a more structured routine."}
            </p>
          </div>
          <Link
            href="/#download"
            className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#D8BE6E] active:scale-95 text-[#121016] text-xs font-bold tracking-wide shadow-sm whitespace-nowrap transition-all"
          >
            {block.cta || block.ctaText || "Try Adhitam AI →"}
          </Link>
        </div>
      );

    case "link": {
      const isExternal = block.href.startsWith("http");
      return (
        <div className="my-6 p-5 sm:p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] hover:border-[#C9A227] shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6D1F] font-semibold">
                Resource & Reference
              </span>
            </div>
            <h4 className="font-serif text-base sm:text-lg font-bold text-[#1E1B16] leading-snug">
              {block.title || block.label}
            </h4>
            {block.description && (
              <p className="text-xs sm:text-sm text-[#5C5548] leading-relaxed">
                {block.description}
              </p>
            )}
          </div>
          <a
            href={block.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#EFE9DA] hover:bg-[#C9A227] hover:text-[#121016] text-[#1E1B16] text-xs font-bold tracking-wide transition-all shadow-xs active:scale-95 whitespace-nowrap self-start sm:self-auto cursor-pointer"
          >
            <span>{block.label || "Visit Link"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      );
    }

    case "download": {
      return (
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#FAF8F2] border-2 border-[#E4DCC8] hover:border-[#C9A227]/70 shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden">
          <div className="flex items-start gap-4 max-w-xl">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#EFE9DA] border border-[#E4DCC8] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
              <FileText className="w-6 h-6 stroke-[2]" />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-[#C9A227]/15 text-[#8C6D1F] text-[10px] font-mono font-bold uppercase tracking-wider">
                  PDF Document
                </span>
                {block.fileSize && (
                  <span className="text-[11px] font-mono text-[#8C8371]">
                    {block.fileSize}
                  </span>
                )}
              </div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-[#1E1B16] leading-snug">
                {block.title}
              </h4>
              {block.description && (
                <p className="text-xs sm:text-sm text-[#5C5548] leading-relaxed">
                  {block.description}
                </p>
              )}
            </div>
          </div>
          <a
            href={block.fileUrl}
            download={block.fileName || "document.pdf"}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E1B16] hover:bg-[#332C24] active:scale-95 text-[#FAF7F2] text-xs font-bold tracking-wide shadow-sm whitespace-nowrap transition-all cursor-pointer"
          >
            <span>{block.buttonText || "Download Document"}</span>
            <Download className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      );
    }

    case "image":
      return (
        <figure className="my-6 sm:my-8 rounded-2xl overflow-hidden border border-[#E4DCC8] bg-[#F5F1E8] shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={block.src}
              alt={block.alt || "Article illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 760px"
              unoptimized={block.src.startsWith("/api/media/") || block.src.startsWith("http")}
            />
          </div>
          {block.caption && (
            <figcaption className="px-3.5 sm:px-4 py-2 text-xs text-[#5C5548] italic border-t border-[#E4DCC8]/70 bg-[#FBF8F2] flex items-center justify-between">
              <span>{block.caption}</span>
              <span className="text-[10px] sm:text-[11px] not-italic text-[#8C8371] font-mono">
                Adhitam Editorial
              </span>
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

export default function ArticleClient({ post, related }: Props) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Extract all H2 headings for outline and scrollspy
  const headings = post.blocks.filter(
    (b): b is Extract<BlogBlock, { type: "heading" }> => b.type === "heading"
  );

  // Strictly deduplicate related articles to eliminate duplicate key warnings
  const uniqueRelated = Array.from(
    new Map((related || []).map((r) => [r.slug, r])).values()
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      const scrollPos = window.scrollY + 220;
      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i].anchor);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(headings[i].anchor);
          return;
        }
      }
      if (headings.length > 0) {
        setActiveSection(headings[0].anchor);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  const sidebarTopics = post.tags && post.tags.length > 0 ? post.tags : [
    "UPSC 2027",
    "Study Plan",
    "Prelims",
    "Mains Strategy",
    "Answer Writing",
  ];

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#1E1B16] flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-[#121016] overflow-x-hidden">
      {/* Desktop Fixed Left Social Rail (Only visible on xl+ screens) */}
      <SocialRail />

      {/* Reading Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-[#C9A227] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Sticky Navigation */}
      <header className="sticky top-0 z-40 w-full bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#E4DCC8] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black border border-[#C9A227]/40 shrink-0">
              <Image
                src="/logo.png"
                alt="Adhitam AI Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#1E1B16] whitespace-nowrap">
              Adhitam <span className="font-sans font-medium text-base sm:text-lg text-[#1E1B16]">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-[13.5px] font-medium text-[#5C5548]">
            <Link href="/" className="hover:text-[#1E1B16] transition-colors">
              Home
            </Link>
            <Link href="/#features" className="hover:text-[#1E1B16] transition-colors">
              Features
            </Link>
            <Link href="/#journeys" className="hover:text-[#1E1B16] transition-colors">
              For Aspirants
            </Link>
            <Link href="/#approach" className="hover:text-[#1E1B16] transition-colors">
              Approach
            </Link>
            <Link href="/blog" className="text-[#C9A227] font-bold border-b-2 border-[#C9A227] pb-0.5">
              Blog
            </Link>
            <Link href="/#faq" className="hover:text-[#1E1B16] transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="flex items-center">
            <Link
              href="/#download"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-xs sm:text-[13px] font-bold tracking-wide shadow-sm hover:bg-[#D8BE6E] active:scale-95 transition-all whitespace-nowrap"
            >
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-14 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Main Article Content */}
          <main className="lg:col-span-8 flex flex-col min-w-0">
            <article>
              {/* Meta bar */}
              <div className="flex items-center justify-between text-[11px] text-[#8C8371] mb-5">
                <span>
                  {post.readTime} &bull; {Math.round(scrollProgress)}% complete
                </span>
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 hover:text-[#1E1B16] transition-colors cursor-pointer"
                    aria-label="Share article"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={() => alert("Article saved to reading list.")}
                    className="inline-flex items-center gap-1.5 hover:text-[#1E1B16] transition-colors cursor-pointer"
                    aria-label="Save article"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#8C6D1F] mb-3">
                {post.category}
              </div>

              {/* Single H1 per page with balanced mobile scaling */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1E1B16] leading-[1.18] sm:leading-[1.14] mb-4 text-wrap-balance break-words">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#5C5548] leading-relaxed mb-5 font-normal">
                {post.description}
              </p>

              {/* Date & read time */}
              <div className="text-xs text-[#8C8371] pb-5 mb-6 border-b border-[#E4DCC8] flex items-center gap-2.5 sm:gap-3">
                <span>Published {formatArticleDate(post.publishedAt) || "Recently"}</span>
                <span>&bull;</span>
                <span>{post.readTime}</span>
              </div>

              {/* Mobile Collapsible "In This Article" Outline */}
              {headings.length > 0 && (
                <div className="lg:hidden mb-8 p-4 rounded-xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-xs">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-serif text-xs font-bold uppercase tracking-wider text-[#1E1B16] select-none list-none">
                      <span className="flex items-center gap-2">
                        <List className="w-3.5 h-3.5 text-[#C9A227]" />
                        <span>In this article ({headings.length} sections)</span>
                      </span>
                      <span className="text-[#A9821E] text-xs font-mono group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <nav className="mt-3 pt-3 border-t border-[#E4DCC8] space-y-2 text-xs">
                      {headings.map((h, idx) => (
                        <a
                          key={`mob-outline-${idx}`}
                          href={`#${h.anchor}`}
                          className="block text-[#5C5548] hover:text-[#1E1B16] leading-snug py-0.5"
                        >
                          {idx + 1}. {h.content}
                        </a>
                      ))}
                      {post.faqs && post.faqs.length > 0 && (
                        <a
                          href="#article-faqs"
                          className="block text-[#5C5548] hover:text-[#1E1B16] leading-snug py-0.5"
                        >
                          {headings.length + 1}. Frequently Asked Questions
                        </a>
                      )}
                    </nav>
                  </details>
                </div>
              )}

              {/* Structured Article Blocks */}
              <div className="space-y-6">
                {post.blocks.map((block, index) => (
                  <RenderBlockItem key={`block-${index}`} block={block} />
                ))}
              </div>

              {/* Frequently Asked Questions */}
              {post.faqs && post.faqs.length > 0 && (
                <section
                  id="article-faqs"
                  aria-labelledby="article-faqs-title"
                  className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E4DCC8] scroll-mt-24 sm:scroll-mt-28"
                >
                  <h2
                    id="article-faqs-title"
                    className="font-serif text-xl sm:text-2xl md:text-[28px] font-bold text-[#1E1B16] mb-5 sm:mb-6"
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="divide-y divide-[#E4DCC8]">
                    {post.faqs.map((faq, i) => {
                      const isOpen = openFaqIndex === i;
                      return (
                        <div key={`faq-${i}`} className="py-4">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                            className="w-full flex items-start justify-between gap-3 sm:gap-4 text-left group cursor-pointer"
                          >
                            <span className="text-[14px] sm:text-[15px] font-semibold text-[#1E1B16] group-hover:text-[#A9821E] transition-colors leading-snug">
                              {faq.question}
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 shrink-0 text-[#8C8371] mt-0.5 transition-transform duration-200 ${
                                isOpen ? "rotate-180 text-[#C9A227]" : ""
                              }`}
                            />
                          </button>
                          {isOpen && (
                            <div className="pt-3 pr-4 sm:pr-6 animate-fadeIn">
                              <p className="text-[13.5px] sm:text-[14.5px] text-[#5C5548] leading-[1.7]">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              )}
            </article>

            {/* Final CTA */}
            <div className="mt-14 sm:mt-16 p-6 sm:p-10 rounded-2xl bg-[#121016] text-[#FAF7F2] text-center flex flex-col items-center border border-[#C9A227]/25 shadow-lg">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#D8BE6E] mb-2 sm:mb-3">
                FROM PREPARATION TO PURPOSE
              </p>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-[#FAF7F2]">
                Make your preparation more structured.
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/75 max-w-md leading-relaxed mb-6 font-normal">
                Explore Adhitam AI and bring study planning, practice and progress into one system.
              </p>
              <Link
                href="/#download"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all"
              >
                <span>Try Adhitam AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6 sm:gap-8" aria-label="Article sidebar">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Try Adhitam AI Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-xs">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1E1B16] mb-1.5">
                  Try Adhitam AI
                </h3>
                <p className="text-xs text-[#5C5548] leading-relaxed mb-5">
                  A structured, personalised learning system for UPSC aspirants.
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    { Icon: Sparkles, label: "Personalised study plans" },
                    { Icon: Target, label: "Adaptive practice & mocks" },
                    { Icon: BookOpen, label: "Exam-focused current affairs" },
                    { Icon: CheckCircle, label: "Your doubt-solving AI mentor" },
                  ].map(({ Icon, label }) => (
                    <div key={label} className="flex items-center gap-2.5 text-xs text-[#2C2720]">
                      <div className="w-6 h-6 rounded-md bg-[#EFE9DA] flex items-center justify-center text-[#8C6D1F] shrink-0">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/#download"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-xs hover:bg-[#D8BE6E] active:scale-95 transition-all"
                >
                  <span>Try Adhitam AI</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </Link>
              </div>

              {/* In This Article - Auto-generated from H2s (Hidden on small mobile as handled by top collapsible) */}
              {headings.length > 0 && (
                <div className="hidden lg:block p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-xs">
                  <h4 className="font-serif text-xs font-bold text-[#1E1B16] uppercase tracking-wider mb-4">
                    IN THIS ARTICLE
                  </h4>
                  <nav className="relative pl-3 space-y-3 text-xs border-l-2 border-[#E4DCC8]">
                    {headings.map((h, idx) => {
                      const isActive = activeSection === h.anchor;
                      return (
                        <a
                          key={`outline-${idx}`}
                          href={`#${h.anchor}`}
                          className={`block transition-all leading-snug ${
                            isActive
                              ? "text-[#A9821E] font-bold pl-1 border-l-2 border-[#C9A227] -ml-[14px]"
                              : "text-[#5C5548] hover:text-[#1E1B16]"
                          }`}
                        >
                          {h.content}
                        </a>
                      );
                    })}
                    {post.faqs && post.faqs.length > 0 && (
                      <a
                        href="#article-faqs"
                        className={`block transition-all leading-snug ${
                          activeSection === "article-faqs"
                            ? "text-[#A9821E] font-bold pl-1 border-l-2 border-[#C9A227] -ml-[14px]"
                            : "text-[#5C5548] hover:text-[#1E1B16]"
                        }`}
                      >
                        Frequently Asked Questions
                      </a>
                    )}
                  </nav>
                </div>
              )}

              {/* Related Topics */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-xs">
                <h4 className="font-serif text-xs font-bold text-[#1E1B16] uppercase tracking-wider mb-3">
                  RELATED TOPICS
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {sidebarTopics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles - MORE FROM ADHITAM */}
      {uniqueRelated.length > 0 && (
        <section className="bg-[#FAF8F2] border-t border-[#E4DCC8] py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#8C6D1F] font-semibold block mb-1">
                  MORE FROM ADHITAM
                </span>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#1E1B16]">
                  Related UPSC Publications
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors inline-flex items-center gap-1"
              >
                <span>View all</span>
                <span>&rarr;</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {uniqueRelated.map((rel, relIndex) => (
                <Link
                  key={`${rel.slug}-${relIndex}`}
                  href={`/blog/${rel.slug}`}
                  className="p-5 sm:p-6 rounded-2xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8C6D1F] block mb-2">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#1E1B16] leading-snug mb-2 group-hover:text-[#A9821E] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#5C5548] leading-relaxed line-clamp-3">
                      {rel.description}
                    </p>
                  </div>
                  <div className="mt-4 sm:mt-5 pt-3 border-t border-[#E4DCC8]/60 flex items-center justify-between text-[11px] text-[#8C8371]">
                    <span>{rel.readTime}</span>
                    <span className="inline-flex items-center gap-1 font-semibold text-[#1E1B16] group-hover:text-[#C9A227] transition-colors">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
