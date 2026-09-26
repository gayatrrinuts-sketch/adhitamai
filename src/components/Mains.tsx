import Image from "next/image";
import { PenTool, FileCheck, Layers } from "lucide-react";

export default function Mains() {
  return (
    <section id="mains" className="w-full py-20 sm:py-24 bg-[#FAF8F2] text-[#1E1B16] border-b border-[#E4DCC8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Mains Explanation */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              UPSC MAINS ANSWER WRITING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4">
              Write. Get evaluated. <br />
              Improve.
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#5C5548] leading-relaxed mb-6 max-w-md">
              Practice Mains answers within word limits and get feedback on structure, content, and presentation. Built around the real syllabus and GS paper expectations.
            </p>

            {/* 3 Feedback Dimensions */}
            <div className="space-y-3.5 w-full max-w-sm mb-6">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFE9DA]/60 border border-[#DCD2B8]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#C9A227]/40 flex items-center justify-center text-[#A9821E] shrink-0">
                  <PenTool className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1E1B16]">
                    Structure &amp; Introduction
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Direct thesis statements with clear question breakdown
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFE9DA]/60 border border-[#DCD2B8]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#C9A227]/40 flex items-center justify-center text-[#A9821E] shrink-0">
                  <Layers className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1E1B16]">
                    Multi-Dimensional Body
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Constitutional, economic, and policy linkages
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#EFE9DA]/60 border border-[#DCD2B8]">
                <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] border border-[#C9A227]/40 flex items-center justify-center text-[#A9821E] shrink-0">
                  <FileCheck className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-bold text-[#1E1B16]">
                    Actionable Conclusion
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Way forward and committee recommendations
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#download"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors"
            >
              <span>Explore Mains Writing</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column: Real Mains Mobile App Screenshot */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-[280px] sm:w-[320px] aspect-[852/1846] rounded-[38px] overflow-hidden shadow-2xl bg-[#121016]">
              <Image
                src="/mains.png"
                alt="UPSC Mains answer writing screen in Adhitam AI"
                fill
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
