"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Adhitam AI good for UPSC self-study?",
    a: "Yes. Adhitam AI is engineered specifically for self-directed aspirants who need structure. It eliminates planning fatigue by breaking down the standard UPSC syllabus into daily missions, targeted revisions, and syllabus-linked practice.",
  },
  {
    q: "Can I prepare for UPSC while working?",
    a: "Absolutely. You can set your available daily study hours, and Adhitam AI dynamically prioritizes high-yield topics and revision due today, ensuring your limited study time is spent with maximum retention and zero guesswork.",
  },
  {
    q: "Does Adhitam AI cover both Prelims and Mains?",
    a: "Yes. The curriculum covers General Studies across Prelims (GS Paper I & CSAT) and Mains (GS Papers I–IV, Essay, and Ethics), linking static textbook concepts directly with answer writing and PYQ practice.",
  },
  {
    q: "How does spaced repetition help in UPSC?",
    a: "The UPSC syllabus is vast, and aspirants often forget older topics. Spaced repetition models your retention curve and schedules timely review of previously covered topics before they fade from memory, converting short-term recall into lasting exam-day mastery.",
  },
  {
    q: "Is Adhitam AI free?",
    a: "Yes, you can download Adhitam AI and start using the core study planner, daily missions, and syllabus progress tracking. There are no intrusive third-party banner ads.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
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
