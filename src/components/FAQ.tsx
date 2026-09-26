"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is my study data actually private?",
    a: "Yes — by default, everything stays on your device. Your study progress, quiz history, notes, and metrics remain local on your device.",
  },
  {
    q: "Do I need an account to use it?",
    a: "No. The full core study-tracking experience — quizzes, syllabus progress, notes, and current affairs review — works with zero mandatory sign-in.",
  },
  {
    q: "What actually makes this an adaptive study system?",
    a: "Adhitam AI monitors what you actively complete — questions attempted, subjects revised, and syllabus topics overdue according to retention curves — and dynamically builds your daily priority missions.",
  },
  {
    q: "Which exam does this cover?",
    a: "UPSC Civil Services Examination — covering General Studies Prelims (GS Paper I & CSAT) and Mains curriculum with static topic linkages.",
  },
  {
    q: "Is it free to start?",
    a: "Yes, the core app and daily study missions are free. No distracting third-party advertisements, ever.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#A9821E] block mb-3">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#1E1B16]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-[#E4DCC8] border-y border-[#E4DCC8]">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 font-serif text-lg sm:text-xl font-medium text-[#1E1B16] hover:text-[#A9821E] transition-colors"
                >
                  <span>{item.q}</span>
                  <div className="w-8 h-8 rounded-full bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="mt-3 text-sm sm:text-base text-[#5C5548] leading-relaxed pr-10">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
