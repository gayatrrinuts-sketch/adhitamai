import { MessageSquareText, FileText, Image as ImageIcon, ShieldCheck } from "lucide-react";

export default function AIMentor() {
  return (
    <section className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              AI MENTOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4">
              Your doubt-solving <br />
              companion.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed max-w-sm">
              Ask questions, get clear and structured explanations, and understand concepts in depth.
              Adhitam AI goes beyond short answers to help you truly learn.
            </p>
          </div>

          {/* Right Column: Interactive Chat Snippet + Features List matching the reference image */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-6">
            {/* Chat Box Snippet */}
            <div className="w-full sm:w-[320px] rounded-xl p-4 bg-[#FBF8F2] border border-[#E4DCC8] shadow-sm flex flex-col gap-3">
              {/* Question */}
              <div className="flex items-start gap-2.5">
                <span className="text-xs text-[#8C8371] mt-0.5">💬</span>
                <div className="p-2.5 rounded-lg bg-[#EFE9DA] text-xs font-medium text-[#1E1B16] leading-snug">
                  Explain the concept of Basic Structure Doctrine.
                </div>
              </div>

              {/* Answer */}
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md bg-[#121016] border border-[#C9A227]/40 flex items-center justify-center text-[11px] font-serif font-bold text-[#D8BE6E] shrink-0 mt-0.5">
                  अ
                </div>
                <div className="p-3 rounded-lg bg-[#121016] text-[10.5px] text-[#FAF7F2]/90 leading-relaxed border border-[#FAF7F2]/10">
                  The Basic Structure Doctrine means that Parliament can amend the Constitution, but it
                  cannot alter its basic structure or essential features such as democracy, rule of
                  law, judicial review, and federalism...
                </div>
              </div>
            </div>

            {/* 4 Feature Items */}
            <div className="space-y-3.5 w-full sm:w-[260px]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                  <MessageSquareText className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#1E1B16]">
                  Content-aware answers
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#1E1B16]">
                  Simple and structured explanations
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                  <ImageIcon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#1E1B16]">
                  Examples and diagrams where relevant
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#A9821E]" />
                </div>
                <span className="text-xs font-semibold text-[#1E1B16]">
                  Always aligned with the UPSC syllabus
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
