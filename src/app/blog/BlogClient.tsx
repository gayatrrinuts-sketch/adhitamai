"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Strategy",
  "Polity",
  "History",
  "Geography",
  "Economy",
  "Current Affairs",
  "Ethics",
];

// Map each post slug to its corresponding editorial artwork image
const imageMap: Record<string, string> = {
  "how-to-make-the-most-of-your-first-six-months": "/assets/delhi-monument.jpg",
  "key-topics-in-indian-polity-for-prelims-2027": "/assets/blog-books.jpg",
  "geography-basics-a-concept-first-approach": "/assets/blog-globe.jpg",
  "how-to-improve-your-answer-writing": "/assets/blog-notes.jpg",
  "how-to-read-current-affairs-the-right-way": "/assets/blog-newspaper.jpg",
  "modern-history-themes-that-keep-repeating": "/assets/hero-bg.jpg",
  "environment-and-ecology-key-concepts-for-prelims": "/assets/blog-sprout.jpg",
  "ethics-case-studies-how-to-approach-them": "/assets/blog-emblem.jpg",
};

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
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
        {/* Background Architectural Dome Twilight Panorama */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-75 filter contrast-110 brightness-95"
            style={{ backgroundImage: "url('/assets/blog-hero-bg.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121016] via-[#121016]/80 to-transparent" />
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

            {/* Nav links */}
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

            {/* Right button */}
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

        {/* Hero Section Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#D8BE6E] block mb-3">
            INSIGHTS FOR ASPIRANTS
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#FAF7F2] mb-4">
            Blogs
          </h1>
          <p className="text-base sm:text-lg text-[#FAF7F2]/80 max-w-xl leading-relaxed">
            Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex-1 w-full">
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5 mb-10 pb-6 border-b border-[#E4DCC8]/80">
          {/* Search Input Box */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8371]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FAF8F2] border border-[#E4DCC8] text-sm text-[#1E1B16] placeholder-[#8C8371] focus:outline-none focus:border-[#C9A227] transition-all shadow-inner"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#C9A227] text-[#121016] shadow-sm"
                      : "bg-[#FAF8F2] border border-[#E4DCC8] text-[#5C5548] hover:border-[#C9A227] hover:text-[#1E1B16]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown */}
          {/* <div className="flex items-center gap-2 text-xs font-medium text-[#5C5548] self-end lg:self-auto">
            <span>Sort by</span>
            <div className="px-3 py-1.5 rounded-lg bg-[#FAF8F2] border border-[#E4DCC8] flex items-center gap-2 cursor-pointer font-semibold text-[#1E1B16]">
              <span>Latest</span>
              <ChevronDown className="w-3 h-3 text-[#8C8371]" />
            </div>
          </div> */}
        </div>

        {/* 8 Blog Cards Grid matching the screenshot with links to /blog/[slug] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => {
            const cardImg = imageMap[post.slug] || "/assets/delhi-monument.jpg";
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl bg-[#FAF8F2] border border-[#E4DCC8] overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EFE9DA]">
                    <Image
                      src={cardImg}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#A9821E] block mb-2">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#1E1B16] leading-snug mb-2 group-hover:text-[#A9821E] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#5C5548] leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Date, Read Time, and Arrow Button */}
                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#E4DCC8]/60 text-[11px] text-[#8C8371]">
                  <span>
                    {post.date} &bull; {post.readTime}
                  </span>
                  <div className="w-7 h-7 rounded-full border border-[#DCD2B8] flex items-center justify-center text-[#5C5548] group-hover:border-[#C9A227] group-hover:text-[#A9821E] transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
