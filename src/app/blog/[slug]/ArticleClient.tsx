"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Share2,
  Bookmark,
  ArrowRight,
  Sparkles,
  Target,
  BarChart2,
  BookOpen,
  X,
  Lightbulb,
  CheckCircle,
} from "lucide-react";
import { BlogPost, readingHooks } from "@/lib/blogData";
import Footer from "@/components/Footer";

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

export default function ArticleClient({ post, related }: Props) {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [dismissedHooks, setDismissedHooks] = useState<number[]>([]);

  // Reading progress and active heading detection
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check which section is in view
      const headings = post.sections.map((_, i) => `section-${i}`);
      const scrollPosition = window.scrollY + 200;

      for (let i = headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(headings[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(headings[i]);
          return;
        }
      }
      setActiveSection("intro");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.sections]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  const handleSave = () => {
    alert("Article saved to reading list.");
  };

  const dismissHook = (idx: number) => {
    setDismissedHooks((prev) => [...prev, idx]);
  };

  // Deterministic hook selection for article positions
  const hook1 = readingHooks[0];
  const hook2 = readingHooks[4];
  const hook3 = readingHooks[8];

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#1E1B16] flex flex-col font-sans">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-[#C9A227] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Consistent Adhitam AI Header */}
      <header className="sticky top-0 z-40 w-full bg-[#FBF8F2]/95 backdrop-blur-md border-b border-[#E4DCC8] shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black border border-[#C9A227]/40">
              <Image
                src="/logo.png"
                alt="Adhitam AI Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-[#1E1B16]">
              Adhitam <span className="font-sans font-medium text-lg text-[#1E1B16]">AI</span>
            </span>
          </Link>

          {/* Navigation Links */}
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

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-[13px] font-bold tracking-wide shadow-sm hover:bg-[#D8BE6E] active:scale-95 transition-all"
            >
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Article Content (Readable column ~680px-740px) */}
          <main className="lg:col-span-8 flex flex-col">
            <article>
              {/* Progress meta text */}
              <div className="flex items-center justify-between text-[11px] text-[#8C8371] mb-6">
                <span>
                  {post.readTime} &bull; {Math.round(scrollProgress)}% complete
                </span>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 hover:text-[#1E1B16] transition-colors"
                    aria-label="Share article"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-1.5 hover:text-[#1E1B16] transition-colors"
                    aria-label="Save article"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              {/* Category */}
              <div className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#A9821E] mb-3">
                {post.category}
              </div>

              {/* Title */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-semibold text-[#1E1B16] leading-[1.14] mb-4">
                {post.title}
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#5C5548] leading-relaxed mb-4 font-normal">
                {post.description}
              </p>

              {/* Date & Read time */}
              <div className="text-xs text-[#8C8371] pb-8 mb-8 border-b border-[#E4DCC8]">
                {post.date} &bull; {post.readTime}
              </div>

              {/* Sections rendering */}
              <div className="space-y-12">
                {post.sections.map((sec, idx) => (
                  <div key={idx} id={`section-${idx}`} className="scroll-mt-28">
                    {/* Section Number & Heading */}
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#C9A227] select-none">
                        {idx + 1}.
                      </span>
                      <h2 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#1E1B16] leading-tight">
                        {sec.heading}
                      </h2>
                    </div>

                    {/* Section Content Paragraphs */}
                    <div className="text-[15.5px] sm:text-[16.5px] text-[#2C2720] leading-[1.78] space-y-4 font-normal pl-0 sm:pl-10">
                      {sec.content
                        .trim()
                        .split("\n\n")
                        .map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                    </div>

                    {/* Contextual Hook 1 (after section 1: approx 30% progress) */}
                    {idx === 0 && !dismissedHooks.includes(0) && (
                      <div className="mt-8 sm:ml-10 p-5 rounded-2xl bg-[#EFE9DA]/60 border border-[#DCD2B8] flex items-center justify-between gap-4 relative">
                        <button
                          onClick={() => dismissHook(0)}
                          className="absolute top-3 right-3 text-[#8C8371] hover:text-[#1E1B16]"
                          aria-label="Dismiss"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-start gap-3.5 pr-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5 shadow-sm">
                            <Sparkles className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <div>
                            <h4 className="font-serif text-sm font-bold text-[#1E1B16] mb-0.5">
                              {hook1.title}
                            </h4>
                            <p className="text-xs text-[#5C5548] leading-relaxed">
                              {hook1.body}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/#download"
                          className="px-4 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold whitespace-nowrap shadow-sm hover:bg-[#D8BE6E] transition-all shrink-0"
                        >
                          {hook1.cta} &rarr;
                        </Link>
                      </div>
                    )}

                    {/* Contextual Hook 2 (after section 3: approx 60% progress) */}
                    {idx === 2 && !dismissedHooks.includes(1) && (
                      <div className="mt-8 sm:ml-10 p-5 rounded-2xl bg-[#EFE9DA]/60 border border-[#DCD2B8] flex items-center justify-between gap-4 relative">
                        <button
                          onClick={() => dismissHook(1)}
                          className="absolute top-3 right-3 text-[#8C8371] hover:text-[#1E1B16]"
                          aria-label="Dismiss"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-start gap-3.5 pr-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5 shadow-sm">
                            <Target className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <div>
                            <h4 className="font-serif text-sm font-bold text-[#1E1B16] mb-0.5">
                              {hook2.title}
                            </h4>
                            <p className="text-xs text-[#5C5548] leading-relaxed">
                              {hook2.body}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/#download"
                          className="px-4 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold whitespace-nowrap shadow-sm hover:bg-[#D8BE6E] transition-all shrink-0"
                        >
                          {hook2.cta} &rarr;
                        </Link>
                      </div>
                    )}

                    {/* Contextual Hook 3 (after section 5) */}
                    {idx === 4 && !dismissedHooks.includes(2) && (
                      <div className="mt-8 sm:ml-10 p-5 rounded-2xl bg-[#EFE9DA]/60 border border-[#DCD2B8] flex items-center justify-between gap-4 relative">
                        <button
                          onClick={() => dismissHook(2)}
                          className="absolute top-3 right-3 text-[#8C8371] hover:text-[#1E1B16]"
                          aria-label="Dismiss"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-start gap-3.5 pr-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5 shadow-sm">
                            <BarChart2 className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <div>
                            <h4 className="font-serif text-sm font-bold text-[#1E1B16] mb-0.5">
                              {hook3.title}
                            </h4>
                            <p className="text-xs text-[#5C5548] leading-relaxed">
                              {hook3.body}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="/#download"
                          className="px-4 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold whitespace-nowrap shadow-sm hover:bg-[#D8BE6E] transition-all shrink-0"
                        >
                          {hook3.cta} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Conclusion Section */}
              <div id="section-conclusion" className="mt-14 pt-8 border-t border-[#E4DCC8] scroll-mt-28">
                <h2 className="font-serif text-2xl sm:text-[26px] font-semibold text-[#1E1B16] mb-4">
                  Conclusion
                </h2>
                <p className="text-[15.5px] sm:text-[16.5px] text-[#2C2720] leading-[1.78]">
                  Preparation for the UPSC Civil Services is a multi-year journey requiring patience,
                  clarity, and disciplined repetition. Focus on the basics, stay consistent with your
                  study plan, and keep refining your approach as you learn more about the exam. A strong
                  conceptual foundation built early will make the rest of your preparation far more
                  rewarding.
                </p>
              </div>
            </article>

            {/* Restrained In-Article CTA Banner */}
            <div className="mt-14 p-8 rounded-2xl bg-[#121016] text-[#FAF7F2] text-center flex flex-col items-center border border-[#C9A227]/20 shadow-md">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-2">
                Make your preparation more structured.
              </h3>
              <p className="text-sm text-[#FAF7F2]/75 max-w-md leading-relaxed mb-6 font-normal">
                Explore Adhitam AI and bring study planning, practice and progress into one system.
              </p>
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all"
              >
                <span>Try Adhitam AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </main>

          {/* Right Column: Sticky Sidebar matching the reference screenshot */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            <div className="sticky top-24 space-y-8">
              {/* Card 1: Try Adhitam AI (Product capabilities card) */}
              <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1E1B16] mb-1.5">
                  Try Adhitam AI
                </h3>
                <p className="text-xs text-[#5C5548] leading-relaxed mb-5">
                  A structured, personalised learning system for UPSC aspirants.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2.5 text-xs text-[#2C2720]">
                    <div className="w-6 h-6 rounded-md bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span>Personalised study plans</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#2C2720]">
                    <div className="w-6 h-6 rounded-md bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span>Practice, tests and analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#2C2720]">
                    <div className="w-6 h-6 rounded-md bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                      <BookOpen className="w-3.5 h-3.5" />
                    </div>
                    <span>Current affairs, simplified</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[#2C2720]">
                    <div className="w-6 h-6 rounded-md bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Your AI mentor for doubts</span>
                  </div>
                </div>

                <Link
                  href="/#download"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-sm hover:bg-[#D8BE6E] active:scale-95 transition-all"
                >
                  <span>Download App</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </Link>
              </div>

              {/* Card 2: In This Article (Sticky Outline with Active Tracking) */}
              <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-sm">
                <h4 className="font-serif text-sm font-bold text-[#1E1B16] uppercase tracking-wider mb-4">
                  In this article
                </h4>

                <nav className="relative pl-4 space-y-3.5 text-xs border-l-2 border-[#E4DCC8]">
                  {post.sections.map((sec, idx) => {
                    const id = `section-${idx}`;
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={idx}
                        href={`#${id}`}
                        className={`block transition-all leading-snug ${
                          isActive
                            ? "text-[#C9A227] font-bold pl-1 border-l-2 border-[#C9A227] -ml-[18px]"
                            : "text-[#5C5548] hover:text-[#1E1B16]"
                        }`}
                      >
                        {idx + 1}. {sec.heading}
                      </a>
                    );
                  })}
                  <a
                    href="#section-conclusion"
                    className={`block transition-all ${
                      activeSection === "section-conclusion"
                        ? "text-[#C9A227] font-bold pl-1 border-l-2 border-[#C9A227] -ml-[18px]"
                        : "text-[#5C5548] hover:text-[#1E1B16]"
                    }`}
                  >
                    Conclusion
                  </a>
                </nav>
              </div>

              {/* Card 3: Short on Time prompt */}
              <div className="p-5 rounded-2xl bg-[#EFE9DA]/60 border border-[#DCD2B8] flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FBF8F2] flex items-center justify-center text-[#A9821E] shrink-0">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-bold text-[#1E1B16]">
                      Short on time?
                    </h5>
                    <p className="text-[11px] text-[#5C5548] leading-relaxed">
                      Get a 6-month roadmap tailored to your schedule.
                    </p>
                  </div>
                </div>
                <Link
                  href="/#download"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-[11px] font-bold shadow-sm hover:bg-[#D8BE6E] transition-all"
                >
                  <span>Try Adhitam AI</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Card 4: Related Topics Pills */}
              <div className="p-6 rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] shadow-sm">
                <h4 className="font-serif text-sm font-bold text-[#1E1B16] mb-3">
                  Related Topics
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    Study Plan
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    NCERTs
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    Time Management
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    Current Affairs
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    Prelims Strategy
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#EFE9DA] text-[#5C5548] font-medium">
                    Beginner Guide
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Section: More from Category matching reference screenshot */}
      <section className="bg-[#FAF8F2] border-t border-[#E4DCC8] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B16]">
              More from {post.category}
            </h3>
            <Link
              href="/blog"
              className="text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors inline-flex items-center gap-1"
            >
              <span>View all</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A9821E] block mb-1.5">
                    {rel.category}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#1E1B16] leading-snug mb-2 group-hover:text-[#A9821E] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#5C5548] leading-relaxed line-clamp-2">
                    {rel.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E4DCC8]/60 flex items-center justify-between text-[11px] text-[#8C8371]">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#5C5548] group-hover:text-[#A9821E] group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
