"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does Adhitam AI decide what I should study each day?",
    a: "Adhitam uses the preparation details you provide, such as your attempt year, available study time and optional subject, to organize your study into daily missions. The goal is to give you a clear next step instead of making you decide what to study every day.",
  },
  {
    q: "Is Adhitam AI useful if I am preparing without coaching?",
    a: "Yes. Adhitam is designed as a preparation companion for self-directed study, helping organize study, revision and practice around the UPSC syllabus. It can also sit alongside books, classes or other resources you already use.",
  },
  {
    q: "Can I use Adhitam AI with my existing books or coaching?",
    a: "Yes. Adhitam does not require you to replace every resource you already use. It can serve as the system that helps you organize what you're learning, what needs revision and where you need more practice.",
  },
  {
    q: "How does the revision system work?",
    a: "Adhitam brings topics back into your preparation at planned intervals and uses your practice history to identify areas that need more attention. The purpose is to make revision deliberate rather than something you keep postponing.",
  },
  {
    q: "Does Adhitam AI cover both UPSC Prelims and Mains?",
    a: "Yes. The app includes separate preparation experiences for Prelims and Mains, including practice, PYQs, tests and Mains-oriented writing workflows.",
  },
  {
    q: "Can I prepare for UPSC while studying or working?",
    a: "Adhitam is designed around available study time rather than assuming every aspirant can follow the same timetable. You can plan around your daily schedule and build preparation progressively.",
  },
  {
    q: "How can the AI Mentor help with UPSC preparation?",
    a: "You can use the AI Mentor to clarify concepts and questions while studying. The aim is to provide structured explanations connected to UPSC preparation rather than generic conversational answers.",
  },
  {
    q: "Does Adhitam AI include previous year questions and mock tests?",
    a: "The Prelims experience includes PYQ practice, topic-wise practice and mock-test workflows designed to help you move from learning concepts to testing them.",
  },
  {
    q: "Does Adhitam AI help with Mains answer writing?",
    a: "Adhitam includes Mains answer-writing practice with workflows focused on structure, content and presentation.",
  },
  {
    q: "Is Adhitam AI free?",
    a: "Adhitam AI's current access and pricing details are provided in the app/store listing. Check the latest information before getting started.",
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
