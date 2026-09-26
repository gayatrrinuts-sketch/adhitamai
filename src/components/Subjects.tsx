import { Landmark, Clock, BookOpen, Globe, TrendingUp, Trees, Cpu, Scale } from "lucide-react";

const subjects = [
  {
    name: "Polity",
    caption: "Constitution, Governance",
    icon: Landmark,
  },
  {
    name: "Modern History",
    caption: "Freedom Struggle",
    icon: Clock,
  },
  {
    name: "Ancient History",
    caption: "Culture, Society, Art",
    icon: BookOpen,
  },
  {
    name: "Geography",
    caption: "India & World",
    icon: Globe,
  },
  {
    name: "Economy",
    caption: "Indian Economy, Budget",
    icon: TrendingUp,
  },
  {
    name: "Environment",
    caption: "Ecology, Climate Change",
    icon: Trees,
  },
  {
    name: "Science & Tech",
    caption: "Current Developments",
    icon: Cpu,
  },
  {
    name: "Ethics",
    caption: "Values, Case Studies",
    icon: Scale,
  },
];

export default function Subjects() {
  return (
    <section id="features" className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              COMPLETE UPSC COVERAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4">
              From basics <br />
              to advanced.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed mb-6 max-w-sm">
              Study every subject with curated resources, concise notes, PYQs, and practice tests &mdash;
              designed for the UPSC syllabus.
            </p>
            <a
              href="#approach"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors"
            >
              <span>Explore Subjects</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column: 8 Subject Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {subjects.map((subj, idx) => {
              const IconComp = subj.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] group-hover:bg-[#C9A227]/20 group-hover:text-[#121016] transition-colors mb-2.5">
                    <IconComp className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-[13.5px] font-bold text-[#1E1B16] mb-0.5">
                    {subj.name}
                  </h3>
                  <span className="text-[10.5px] text-[#8C8371] leading-tight">
                    {subj.caption}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
