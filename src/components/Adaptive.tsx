import { Brain, RotateCcw, Target, Sparkles } from "lucide-react";

export default function Adaptive() {
  return (
    <section className="relative py-20 sm:py-24 bg-[#121016] text-[#FAF7F2] overflow-hidden border-b border-[#FAF7F2]/10">
      {/* Background Architectural Atmosphere: Historic Rashtrapati Bhavan & India Gate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen filter contrast-125 brightness-90"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-[#121016]/85 to-[#121016]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D8BE6E] block mb-2.5">
              ADAPTIVE REVISION SYSTEM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-4">
              Revise before <br />
              you forget.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#FAF7F2]/75 leading-relaxed max-w-sm mb-6">
              Adhitam AI models your forgetting curve for every topic. Weak areas resurface before they disappear from memory, so revision is timed rather than random.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-[#D8BE6E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Retention-weighted study sequencing</span>
            </div>
          </div>

          {/* Right Column: 3 Pillars with Detailed Tactile Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Pillar 1 */}
            <div className="p-5 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center text-[#D8BE6E] mb-3.5">
                  <Brain className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-[15px] font-bold text-[#FAF7F2] mb-1.5">
                  Smart Sequencing
                </h3>
                <p className="text-[12px] text-[#FAF7F2]/65 leading-relaxed">
                  Prelims and Mains topics ordered by exam weightage and your real progress.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FAF7F2]/10 text-[10.5px] font-medium text-[#C9A227]">
                Weightage-Driven
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-5 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center text-[#D8BE6E] mb-3.5">
                  <RotateCcw className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-[15px] font-bold text-[#FAF7F2] mb-1.5">
                  Spaced Revision
                </h3>
                <p className="text-[12px] text-[#FAF7F2]/65 leading-relaxed">
                  Topics return at planned mathematical intervals to lock concepts into long-term recall.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FAF7F2]/10 text-[10.5px] font-medium text-[#C9A227]">
                Timed Intervals
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-5 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/40 flex items-center justify-center text-[#D8BE6E] mb-3.5">
                  <Target className="w-5 h-5 stroke-[1.8]" />
                </div>
                <h3 className="font-serif text-[15px] font-bold text-[#FAF7F2] mb-1.5">
                  Weak-Area Focus
                </h3>
                <p className="text-[12px] text-[#FAF7F2]/65 leading-relaxed">
                  Low-accuracy areas receive prioritized practice without manual bookmark management.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#FAF7F2]/10 text-[10.5px] font-medium text-[#C9A227]">
                Active Correction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
