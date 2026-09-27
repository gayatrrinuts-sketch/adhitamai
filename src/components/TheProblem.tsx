import { Compass, RotateCcw, PenLine } from "lucide-react";

export default function TheProblem() {
  const pillars = [
    {
      icon: Compass,
      title: "Know What to Study",
      description: "Start each day with a clear next step.",
      highlight: "Clarity",
    },
    {
      icon: RotateCcw,
      title: "Know What to Revisit",
      description: "Bring important topics back before they fade from memory.",
      highlight: "Retention",
    },
    {
      icon: PenLine,
      title: "Know What to Practice",
      description: "Use questions and writing to turn study into preparation.",
      highlight: "Exam Readiness",
    },
  ];

  return (
    <section
      id="the-problem"
      className="w-full py-16 sm:py-24 bg-[#FAF8F2] text-[#1E1B16] border-b border-[#E4DCC8]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: The Problem Explanation */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#A9821E] block mb-2.5">
              THE PROBLEM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-5 text-wrap-balance">
              The hardest part isn&apos;t always studying. <br />
              <span className="text-[#A9821E]">
                Sometimes it&apos;s deciding what deserves your time.
              </span>
            </h2>
            <div className="space-y-4 text-[14px] sm:text-[15.5px] text-[#5C5548] leading-relaxed max-w-lg">
              <p>
                UPSC gives you an enormous syllabus, years of previous questions, constantly changing current affairs and limited hours in the day.
              </p>
              <p>
                The result is familiar: too many resources, unfinished plans, revision that keeps getting postponed, and no clear sense of what needs attention next.
              </p>
              <p className="font-medium text-[#1E1B16]">
                Adhitam AI is built around that problem.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Concrete Anchors */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] hover:shadow-md transition-all flex items-start gap-4 text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFE9DA] border border-[#C9A227]/30 flex items-center justify-center text-[#A9821E] shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-serif text-[16px] font-bold text-[#1E1B16]">
                        {pillar.title}
                      </h3>
                      <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-[#8C8371] px-2 py-0.5 rounded bg-[#EFE9DA]">
                        {pillar.highlight}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#5C5548] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
