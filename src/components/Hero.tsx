"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#121016] text-[#FAF7F2] py-20 sm:py-24"
    >
      {/* Background Architectural Atmosphere: Visible monument with full-bleed cover */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 filter contrast-110 brightness-100 scale-105"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        {/* Soft gradient overlay allowing monument to be clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121016]/90 via-[#121016]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-transparent to-[#121016]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Headline and Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="mb-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D8BE6E]">
            DISCIPLINE &bull; DEPTH &bull; DIRECTION
          </div>

          {/* Hinglish Editorial Hook */}
          <div className="mb-3 text-[13px] sm:text-[14px] font-medium text-[#FAF7F2]/90 italic font-serif">
            Syllabus bada hai. Preparation random nahi honi chahiye.
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[60px] leading-[1.1] font-semibold tracking-tight mb-5 text-[#FAF7F2] drop-shadow-md">
            A deeper way to prepare for UPSC, <br />
            <span className="text-[#C9A227]">built for a higher purpose.</span>
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[16px] text-[#FAF7F2]/85 max-w-lg leading-relaxed mb-6 font-normal drop-shadow-sm">
            Adhitam AI is a UPSC Civil Services prep companion that helps you decide what to study, what to revise, and what to practice next — around the real UPSC syllabus.
          </p>

          {/* How It Works Supporting Line */}
          <div className="mb-7 text-xs font-semibold text-[#D8BE6E]">
            Daily missions. Spaced revision. Prelims &amp; Mains practice. One place to prepare.
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all"
            >
              <span>Download App</span>
              <span>&rarr;</span>
            </a>
            <a
              href="#journeys"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs font-semibold hover:border-[#D8BE6E] hover:text-[#D8BE6E] transition-all"
            >
              <span>See how it works</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Real Phone Mockup and Quote */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end relative">
          {/* Quote placed on the right */}
          <div className="w-full flex justify-end mb-4">
            <blockquote className="max-w-[280px] font-serif italic text-right text-base text-[#FAF7F2] border-r-2 border-[#C9A227] pr-3 py-1 leading-snug drop-shadow-md">
              &ldquo;Not just to clear an exam, <br />
              <span className="text-[#D8BE6E]">but to build a better Bharat.&rdquo;</span>
            </blockquote>
          </div>

          {/* Hero Phone Mockup: Fitted to exact aspect ratio and generously sized */}
          <div className="relative w-[290px] sm:w-[330px] md:w-[350px] aspect-[852/1846] rounded-[38px] overflow-hidden shadow-2xl">
            <Image
              src="/home.png"
              alt="Adhitam AI UPSC daily study plan on mobile"
              fill
              sizes="(max-width: 640px) 290px, (max-width: 768px) 330px, 350px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
