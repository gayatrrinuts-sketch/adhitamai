"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { BlogPostDoc } from "@/lib/types/blog";
import { formatArticleDate } from "@/lib/utils";
import Footer from "@/components/Footer";

interface BlogClientProps {
  initialArticles: BlogPostDoc[];
}

export default function BlogClient({ initialArticles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(initialArticles.map((a) => a.category).filter(Boolean))),
  ];

  const filteredPosts = initialArticles.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8F5EE] text-[#1E1B16] flex flex-col font-sans">
      {/* Top Banner & Header matching the reference design */}
      <div className="relative bg-[#121016] text-[#FAF7F2] overflow-hidden">
        {/* Background Architectural Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-75 filter contrast-110 brightness-95"
            style={{ backgroundImage: "url('/assets/blog-hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121016] via-[#121016]/85 to-transparent" />
        </div>

        {/* Top Navbar */}
        <header className="relative z-20 w-full bg-[#FAF7F2] text-[#1E1B16] border-b border-[#E4DCC8] shadow-sm">
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

            {/* Nav links (No link to /blog/create) */}
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
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-[13px] font-bold tracking-wide shadow-sm hover:bg-[#D8BE6E] active:scale-95 transition-all"
              >
                <span>Download App</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#D8BE6E] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Adhitam AI Publications</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#FAF7F2] leading-[1.1] mb-6">
              Insights for serious UPSC aspirants.
            </h1>
            <p className="text-base sm:text-lg text-[#FAF7F2]/80 leading-relaxed font-normal max-w-2xl">
              Thoughtful preparation strategies, topper case studies, and structured methodology to prepare for the Civil Services Examination with discipline, depth, and direction.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Content Area */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex-1 w-full">
        {/* Search & Category Tabs */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-8 border-b border-[#E4DCC8]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#1E1B16] text-[#FAF7F2] shadow-sm font-semibold"
                    : "bg-[#EFE9DA] text-[#5C5548] hover:text-[#1E1B16] hover:bg-[#E4DCC8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#8C8371] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-[#FAF8F2] border border-[#E4DCC8] rounded-xl text-[#1E1B16] placeholder-[#8C8371] focus:outline-none focus:border-[#C9A227] transition-all"
            />
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from(new Map(filteredPosts.map((p) => [p.slug, p])).values()).map((post, postIndex) => (
              <Link
                key={`${post.slug}-${postIndex}`}
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between p-7 sm:p-9 rounded-2xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#EFE9DA] border border-[#E4DCC8] text-[11px] font-semibold text-[#8C6D1F] uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-[#8C8371]">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1E1B16] leading-snug group-hover:text-[#A9821E] transition-colors mb-3">
                    {post.title}
                  </h2>

                  <p className="text-sm text-[#5C5548] leading-relaxed line-clamp-3 mb-6">
                    {post.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E4DCC8] flex items-center justify-between text-xs text-[#8C8371]">
                  <span className="font-mono text-[11px]">
                    {formatArticleDate(post.publishedAt) || "UPSC Publication"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-semibold text-[#1E1B16] group-hover:text-[#C9A227] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8C8371] text-sm">
                No publications found matching your search or category filter.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
