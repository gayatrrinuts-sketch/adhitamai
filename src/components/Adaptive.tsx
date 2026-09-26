import { Cog, BarChart2, CheckCircle2 } from "lucide-react";

export default function Adaptive() {
  return (
    <section className="relative py-24 bg-[#121016] text-[#FAF7F2] overflow-hidden border-b border-[#FAF7F2]/10">
      {/* Background Architectural Atmosphere: Historic Rashtrapati Bhavan & India Gate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-screen filter contrast-125 brightness-90"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-[#121016]/85 to-[#121016]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              ADAPTIVE LEARNING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-4">
              Focus on what <br />
              matters, always.
            </h2>
            <p className="text-[14px] text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              Adhitam AI continuously adapts to your progress, identifies strengths and weak areas,
              and adjusts your practice so that every hour you spend is more effective.
            </p>
          </div>

          {/* Right Column: 3 Pillars with Circular Icons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 flex items-center justify-center text-[#D8BE6E] mb-3.5 shadow-sm">
                <Cog className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mb-1">
                Smart Sequencing
              </h3>
              <p className="text-[11.5px] text-[#FAF7F2]/65 leading-relaxed">
                Topics arranged as per your level and goals.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 flex items-center justify-center text-[#D8BE6E] mb-3.5 shadow-sm">
                <BarChart2 className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mb-1">
                Adaptive Practice
              </h3>
              <p className="text-[11.5px] text-[#FAF7F2]/65 leading-relaxed">
                More practice on weak areas.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-12 h-12 rounded-full border border-[#C9A227]/50 bg-[#C9A227]/10 flex items-center justify-center text-[#D8BE6E] mb-3.5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 stroke-[1.8]" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#FAF7F2] mb-1">
                Meaningful Insights
              </h3>
              <p className="text-[11.5px] text-[#FAF7F2]/65 leading-relaxed">
                Track progress and stay consistent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
