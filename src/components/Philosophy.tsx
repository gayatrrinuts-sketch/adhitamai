export default function Philosophy() {
  return (
    <section id="approach" className="relative w-full py-16 sm:py-24 bg-[#121016] text-[#FAF7F2] overflow-hidden">
      {/* Background Architectural Atmosphere: Historic Rashtrapati Bhavan & India Gate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen filter contrast-125 brightness-95"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-[#121016]/85 to-[#121016]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D8BE6E] block mb-3">
          THE ADHITAM APPROACH
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-5">
          More than a preparation app.
        </h2>
        <p className="text-[15px] sm:text-[16.5px] text-[#FAF7F2]/80 leading-relaxed font-normal max-w-2xl mx-auto mb-12">
          Most aspirants lose months to poor planning, not lack of effort. Adhitam AI removes the guesswork
          so your effort goes where it counts — building the knowledge, perspective, and discipline to serve.
        </p>

        {/* 3 Core Philosophical Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-14">
          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-lg font-bold block mb-2">01. Depth Over Shortcuts</span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              UPSC cannot be gamed by surface-level tricks. We prioritize first-principles conceptual understanding across every standard textbook and syllabus area.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-lg font-bold block mb-2">02. Disciplined Consistency</span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              Every day begins with a clear mission. You never have to spend mental energy deciding what to study, what to revise, or what questions to attempt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-lg font-bold block mb-2">03. Grounded in Reality</span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              Answer evaluations and syllabus progress are linked directly to actual UPSC trends, PYQ weightages, and genuine exam expectations.
            </p>
          </div>
        </div>

        {/* Signature Brand Statement */}
        <div className="inline-block border-t border-b border-[#C9A227]/30 py-4 px-8">
          <p className="font-serif italic text-base sm:text-xl text-[#FAF7F2] tracking-wide">
            &ldquo;Not just to clear an exam, <span className="text-[#D8BE6E]">but to build a better Bharat.&rdquo;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
