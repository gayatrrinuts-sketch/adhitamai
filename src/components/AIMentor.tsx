import { MessageSquareText, FileText, Image as ImageIcon, ShieldCheck } from "lucide-react";

export default function AIMentor() {
  return (
    <section className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Description */}
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              UPSC AI MENTOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4 text-wrap-balance">
              Doubts answered <br />
              the UPSC way.
            </h2>
            <div className="space-y-3 text-[14px] sm:text-[15px] text-[#5C5548] leading-relaxed max-w-sm mb-6">
              <p>
                Getting an answer isn&apos;t enough. You need an explanation you can understand, connect to the syllabus, and use in preparation.
              </p>
              <p>
                Ask a question, clarify the concept, explore the relevant context, and go deeper when something doesn&apos;t make sense.
              </p>
            </div>
            <div className="text-xs font-semibold text-[#A9821E] italic font-serif">
              When you get stuck, don&apos;t start another chapter. Ask.
            </div>
          </div>

          {/* Right Column: Interactive Chat Snippet + Features List matching the reference image */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6">
            {/* Chat Box Snippet */}
            <div className="w-full sm:w-[340px] rounded-xl p-4 bg-[#FBF8F2] border border-[#E4DCC8] shadow-sm flex flex-col gap-3">
              {/* Question */}
              <div className="flex items-start gap-2.5">
                <span className="text-xs text-[#8C8371] mt-0.5">💬</span>
                <div className="p-2.5 rounded-lg bg-[#EFE9DA] text-xs font-medium text-[#1E1B16] leading-snug">
                  Explain the Basic Structure Doctrine.
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#121016] border border-[#C9A227]/40 flex items-center justify-center text-[11px] font-serif font-bold text-[#D8BE6E] shrink-0 mt-0.5">
                  अ
                </div>
                <div className="p-3 rounded-lg bg-[#121016] text-[11px] text-[#FAF7F2]/90 leading-relaxed border border-[#FAF7F2]/10 space-y-1.5">
                  <p className="font-medium text-[#D8BE6E]">
                    Kesavananda Bharati v. State of Kerala (1973)
                  </p>
                  <p>
                    The Basic Structure Doctrine holds that Parliament&apos;s power to amend the Constitution under Article 368 does not extend to destroying its fundamental structure. The principle emerged from Kesavananda Bharati v. State of Kerala (1973).
                  </p>
                </div>
              </div>
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-4 w-full sm:w-[280px]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B16] uppercase tracking-wide">
                    Content-Aware Answers
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Explanations built around the question you&apos;re asking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B16] uppercase tracking-wide">
                    Structured Explanations
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Start with the core idea, then go deeper.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B16] uppercase tracking-wide">
                    Relevant Examples
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Make difficult concepts easier to understand.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[#A9821E]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1E1B16] uppercase tracking-wide">
                    UPSC-Focused Context
                  </h4>
                  <p className="text-[11px] text-[#5C5548] leading-tight">
                    Keep learning connected to the exam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
