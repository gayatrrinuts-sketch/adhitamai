import Image from "next/image";
import { CheckSquare, History, Award, LineChart } from "lucide-react";

export default function PracticeTests() {
  return (
    <section className="py-16 sm:py-24 bg-[#121016] text-[#FAF7F2] relative overflow-hidden border-b border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#8C8371] block mb-2.5">
              PRELIMS &amp; MAINS PRACTICE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-4">
              UPSC Prelims and Mains <br />
              practice with PYQs.
            </h2>
            <p className="text-[14px] text-[#FAF7F2]/75 leading-relaxed mb-6 max-w-sm">
              Practice UPSC PYQs, topic-wise tests, full-length mocks, and structured Mains answer writing to build speed, accuracy, and real exam confidence.
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8BE6E] hover:text-[#C9A227] transition-colors"
            >
              <span>Explore Tests</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column: 4 Feature Pillars + Clean Real Prelims Phone Mockup without outline */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* 4 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-[320px]">
              <div className="p-4 rounded-xl bg-[#1E1B16] border border-[#C9A227]/25 flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-[#D8BE6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#FAF7F2] mb-1">
                    Topic-wise Practice
                  </h4>
                  <p className="text-[11px] text-[#FAF7F2]/65 leading-relaxed">
                    MCQs arranged as per the UPSC syllabus.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E1B16] border border-[#C9A227]/25 flex items-start gap-3">
                <History className="w-5 h-5 text-[#D8BE6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#FAF7F2] mb-1">
                    Previous Year Questions
                  </h4>
                  <p className="text-[11px] text-[#FAF7F2]/65 leading-relaxed">
                    Year-wise and topic-wise.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E1B16] border border-[#C9A227]/25 flex items-start gap-3">
                <Award className="w-5 h-5 text-[#D8BE6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#FAF7F2] mb-1">
                    Full-length Mocks
                  </h4>
                  <p className="text-[11px] text-[#FAF7F2]/65 leading-relaxed">
                    Simulate real exam conditions.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#1E1B16] border border-[#C9A227]/25 flex items-start gap-3">
                <LineChart className="w-5 h-5 text-[#D8BE6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#FAF7F2] mb-1">
                    Detailed Analysis
                  </h4>
                  <p className="text-[11px] text-[#FAF7F2]/65 leading-relaxed">
                    Identify strengths and weak areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Clean Prelims Phone without outer outline */}
            <div className="relative w-[260px] sm:w-[280px] aspect-[9/18.5] rounded-[38px] overflow-hidden shadow-2xl">
              <Image
                src="/prelims.png"
                alt="UPSC Prelims MCQ practice screen in Adhitam AI"
                fill
                sizes="(max-width: 640px) 260px, 280px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
