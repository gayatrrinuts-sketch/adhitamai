"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121016] text-[#FAF7F2] pt-24 pb-20"
    >
      {/* Background Architectural Atmosphere: Visible monument with subtle overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 filter contrast-110 brightness-100"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        {/* Soft gradient overlay allowing monument to be clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121016]/90 via-[#121016]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-transparent to-[#121016]/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headline and Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Eyebrow */}
          <div className="mb-4 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D8BE6E]">
            DISCIPLINE &bull; DEPTH &bull; DIRECTION
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] leading-[1.1] font-semibold tracking-tight mb-5 text-[#FAF7F2] drop-shadow-md">
            A deeper way <br />
            to prepare for a <br />
            <span className="text-[#C9A227]">higher purpose.</span>
          </h1>

          {/* Description */}
          <p className="text-[14px] sm:text-[15px] text-[#FAF7F2]/85 max-w-lg leading-relaxed mb-7 font-normal drop-shadow-sm">
            Adhitam AI is a personalised learning system for UPSC aspirants that helps you understand
            what to study, when to study it, and how to improve &mdash; with clarity and structure.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all"
            >
              <span>Download App</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-black/30 backdrop-blur-sm border border-[#FAF7F2]/30 text-[#FAF7F2] text-xs font-semibold hover:border-[#D8BE6E] hover:text-[#D8BE6E] transition-all"
            >
              <span>Learn More</span>
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

          {/* Hero Phone Mockup with NO outer outline / stroke */}
          <div className="relative w-[280px] sm:w-[315px] aspect-[9/18.5] rounded-[38px] overflow-hidden shadow-2xl">
            <Image
              src="/home.png"
              alt="Adhitam AI Mobile App Interface"
              fill
              sizes="(max-width: 640px) 280px, 315px"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
