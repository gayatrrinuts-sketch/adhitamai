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
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-5 text-wrap-balance">
          More than a preparation app.
        </h2>
        <div className="space-y-3 text-[15px] sm:text-[16.5px] text-[#FAF7F2]/80 leading-relaxed font-normal max-w-2xl mx-auto mb-12">
          <p>
            Most aspirants don&apos;t need another place to collect resources. They need a system that helps them use their limited time well.
          </p>
          <p>
            Adhitam brings planning, study, revision and practice into one preparation flow &mdash; so your effort goes toward building understanding, recall and exam readiness.
          </p>
        </div>

        {/* 3 Core Philosophical Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-14">
          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-base font-bold block mb-2">
              01 &mdash; DEPTH OVER SHORTCUTS
            </span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              UPSC rewards understanding. Build concepts before chasing tricks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-base font-bold block mb-2">
              02 &mdash; CONSISTENCY OVER INTENSITY
            </span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              A sustainable routine beats a perfect timetable that lasts a week.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#1E1B16]/90 border border-[#FAF7F2]/10 backdrop-blur-sm">
            <span className="text-[#C9A227] font-serif text-base font-bold block mb-2">
              03 &mdash; PREPARATION OVER CONSUMPTION
            </span>
            <p className="text-xs sm:text-[13px] text-[#FAF7F2]/70 leading-relaxed">
              Reading is only one part of the journey. Study, revise, practice, review, repeat.
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
