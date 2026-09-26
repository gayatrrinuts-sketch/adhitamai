"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function StudyPlan() {
  return (
    <section className="py-24 bg-[#121016] text-[#FAF7F2] relative overflow-hidden border-b border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8371] block mb-2.5">
              YOUR PERSONAL UPSC MENTOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#FAF7F2] leading-tight mb-5">
              A study plan that <br />
              understands you.
            </h2>
            <p className="text-[#FAF7F2]/75 text-[14px] sm:text-[15px] leading-relaxed mb-7 max-w-md">
              Adhitam AI analyses your goals, current level, and learning style to create a structured,
              personalized study plan. You get the right content, in the right order, at the right time.
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#C9A227] text-[#121016] text-xs font-bold tracking-wide shadow-md hover:bg-[#D8BE6E] active:scale-95 transition-all"
            >
              <span>Download App</span>
              <ArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>

          {/* Right Phone Mockups: Clean real screens without outer borders/outlines */}
          <div className="lg:col-span-7 flex justify-center items-center relative py-6">
            <div className="relative w-full max-w-[560px] h-[480px] sm:h-[540px] flex items-center justify-center">
              {/* Secondary Phone (Left / Behind): Prelims Screen */}
              <div className="absolute -left-2 sm:left-4 top-10 w-[200px] sm:w-[240px] aspect-[9/18.5] rounded-[32px] overflow-hidden shadow-2xl -rotate-6 z-10 opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300">
                <Image
                  src="/prelims.png"
                  alt="Adhitam AI Prelims Practice Screen"
                  fill
                  sizes="(max-width: 640px) 200px, 240px"
                  className="object-cover object-top"
                />
              </div>

              {/* Primary Center Phone: Home Screen */}
              <div className="relative w-[240px] sm:w-[280px] aspect-[9/18.5] rounded-[36px] overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform duration-300">
                <Image
                  src="/home.png"
                  alt="Adhitam AI Main Study Plan Interface"
                  fill
                  sizes="(max-width: 640px) 240px, 280px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Secondary Phone (Right / Behind): Mains Screen */}
              <div className="absolute -right-2 sm:right-4 top-10 w-[200px] sm:w-[240px] aspect-[9/18.5] rounded-[32px] overflow-hidden shadow-2xl rotate-6 z-10 opacity-80 hover:opacity-100 hover:z-30 transition-all duration-300">
                <Image
                  src="/mains.png"
                  alt="Adhitam AI Mains Evaluation Screen"
                  fill
                  sizes="(max-width: 640px) 200px, 240px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
