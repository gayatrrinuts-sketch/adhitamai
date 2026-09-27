import { FileText, Search, Link2 } from "lucide-react";

export default function CurrentAffairs() {
  return (
    <section className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading, Pillars, and Link */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              STAY CONNECTED
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4 text-wrap-balance">
              Current affairs, <br />
              mapped to the syllabus.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed mb-6 max-w-md">
              You don&apos;t need more news. You need to know which news matters, why it matters, and where it fits in your preparation.
            </p>

            {/* 3 Pillars row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md mb-6">
              <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] mb-2">
                  <FileText className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h4 className="font-serif text-xs font-bold text-[#1E1B16] mb-0.5">
                  Daily Updates
                </h4>
                <p className="text-[10.5px] text-[#5C5548] leading-tight">
                  Stay informed without getting buried in information.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] mb-2">
                  <Search className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h4 className="font-serif text-xs font-bold text-[#1E1B16] mb-0.5">
                  Exam-Focused Analysis
                </h4>
                <p className="text-[10.5px] text-[#5C5548] leading-tight">
                  Understand the issue beyond the headline.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] flex flex-col items-center text-center">
                <div className="w-9 h-9 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] mb-2">
                  <Link2 className="w-4 h-4 stroke-[1.8]" />
                </div>
                <h4 className="font-serif text-xs font-bold text-[#1E1B16] mb-0.5">
                  Static Linkages
                </h4>
                <p className="text-[10.5px] text-[#5C5548] leading-tight">
                  Connect current developments with the concepts you&apos;re already studying.
                </p>
              </div>
            </div>

            {/* Closing Line */}
            <div className="text-xs font-semibold text-[#A9821E] italic font-serif mb-6">
              Read the news. Understand the issue. Connect it to the syllabus.
            </div>

            <a
              href="#approach"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors"
            >
              <span>Explore Current Affairs</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column: Newspaper Editorial Cards matching the reference layout */}
          <div className="lg:col-span-6 flex justify-center items-center relative py-4">
            <div className="relative w-full max-w-[420px] h-[280px] flex items-center justify-center">
              {/* Back Card: Summary */}
              <div className="absolute right-2 top-4 w-[160px] h-[220px] rounded-lg bg-[#EFE9DA] border border-[#DCD2B8] shadow-md p-3 rotate-6 flex flex-col justify-between text-left">
                <span className="font-serif text-[11px] font-bold text-[#1E1B16]">
                  Summary
                </span>
                <div className="space-y-1.5">
                  <div className="w-full h-1 bg-[#DCD2B8] rounded" />
                  <div className="w-5/6 h-1 bg-[#DCD2B8] rounded" />
                  <div className="w-4/6 h-1 bg-[#DCD2B8] rounded" />
                </div>
                <span className="text-[9px] text-[#8C8371]">GS Paper III</span>
              </div>

              {/* Front Card: The Hindu Analysis */}
              <div className="absolute left-4 top-0 w-[200px] h-[250px] rounded-lg bg-[#FBF8F2] border border-[#E4DCC8] shadow-xl p-4 -rotate-3 flex flex-col justify-between text-left z-10">
                <div>
                  <div className="border-b border-[#E4DCC8] pb-1.5 mb-2">
                    <span className="font-serif text-xs font-bold block text-[#1E1B16]">
                      The Hindu Analysis
                    </span>
                  </div>
                  <div className="w-full h-20 rounded bg-[#EFE9DA]/60 mb-2 overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center filter contrast-125 sepia-[0.4]"
                      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-1 bg-[#E4DCC8] rounded" />
                    <div className="w-11/12 h-1 bg-[#E4DCC8] rounded" />
                    <div className="w-3/4 h-1 bg-[#E4DCC8] rounded" />
                  </div>
                </div>
                <span className="text-[9px] text-[#A9821E] font-semibold">GS Paper II</span>
              </div>

              {/* Rightmost Card: Explained */}
              <div className="absolute right-0 top-12 w-[140px] h-[190px] rounded-lg bg-[#FBF8F2] border border-[#E4DCC8] shadow-md p-3 rotate-12 flex flex-col justify-between text-left opacity-90">
                <span className="font-serif text-[10px] font-bold text-[#1E1B16]">
                  Explained
                </span>
                <div className="space-y-1">
                  <div className="w-full h-1 bg-[#E4DCC8] rounded" />
                  <div className="w-4/5 h-1 bg-[#E4DCC8] rounded" />
                </div>
                <span className="text-[8.5px] text-[#8C8371]">UPSC Syllabus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
