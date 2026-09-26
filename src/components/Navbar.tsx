"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#121016]/90 backdrop-blur-md shadow-lg border-b border-[#FAF7F2]/10 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        {/* Brand Wordmark & Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center bg-black/50 border border-[#C9A227]/40">
            <Image
              src="/logo.png"
              alt="Adhitam AI Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF7F2] group-hover:text-[#D8BE6E] transition-colors">
            Adhitam <span className="font-sans font-medium text-lg sm:text-xl text-[#FAF7F2]">AI</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-9 text-[13.5px] font-medium text-[#FAF7F2]/90 drop-shadow-sm">
          <Link href="/" className="text-[#C9A227] font-semibold border-b border-[#C9A227] pb-0.5">
            Home
          </Link>
          <Link href="#features" className="hover:text-[#D8BE6E] transition-colors">
            Features
          </Link>
          <Link href="#journeys" className="hover:text-[#D8BE6E] transition-colors">
            For Aspirants
          </Link>
          <Link href="#approach" className="hover:text-[#D8BE6E] transition-colors">
            Approach
          </Link>
          <Link href="/blog" className="hover:text-[#D8BE6E] transition-colors">
            Blogs
          </Link>
          <Link href="#faq" className="hover:text-[#D8BE6E] transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#C9A227] text-[#121016] text-[13px] font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all duration-150"
          >
            <span>Download App</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#FAF7F2] hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121016]/95 backdrop-blur-md border-b border-[#FAF7F2]/10 px-6 py-6 flex flex-col gap-4 text-sm font-medium text-[#FAF7F2]/80">
          <Link href="#home" onClick={() => setMobileMenuOpen(false)} className="text-[#C9A227]">
            Home
          </Link>
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D8BE6E]">
            Features
          </Link>
          <Link href="#journeys" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D8BE6E]">
            For Aspirants
          </Link>
          <Link href="#approach" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D8BE6E]">
            Approach
          </Link>
          <Link href="/blog" className="hover:text-[#D8BE6E] transition-colors">
            Blogs
          </Link>
          <Link href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D8BE6E]">
            FAQ
          </Link>
          <a
            href="#download"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] font-bold text-xs"
          >
            <span>Download App</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
}
