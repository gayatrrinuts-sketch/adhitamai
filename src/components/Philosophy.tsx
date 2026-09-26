export default function Philosophy() {
  return (
    <section id="approach" className="relative py-28 bg-[#121016] text-[#FAF7F2] overflow-hidden border-b border-[#FAF7F2]/10">
      {/* Background Architectural Atmosphere: Historic Rashtrapati Bhavan & India Gate */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen filter contrast-125 brightness-95"
          style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121016] via-[#121016]/85 to-[#121016]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#8C8371] block mb-3">
          THE ADHITAM APPROACH
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-[#FAF7F2] leading-[1.15] mb-5">
          More than a preparation app.
        </h2>
        <p className="text-[14px] sm:text-[15.5px] text-[#FAF7F2]/75 leading-relaxed font-normal max-w-2xl mx-auto">
          Adhitam AI is built on the belief that UPSC preparation is not just about clearing an exam,
          but about building the knowledge, perspective and discipline to contribute to a better India.
        </p>
      </div>
    </section>
  );
}
