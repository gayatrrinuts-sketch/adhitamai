import {
  Landmark,
  Clock,
  BookOpen,
  Globe,
  TrendingUp,
  Trees,
  Cpu,
  Scale,
  Palette,
  Shield,
  Network,
  Users,
  PenTool,
  Calculator,
} from "lucide-react";

const subjects = [
  {
    name: "Polity",
    caption: "Constitution · Governance · Institutions",
    icon: Landmark,
  },
  {
    name: "Modern History",
    caption: "Freedom Struggle · National Movement",
    icon: Clock,
  },
  {
    name: "Ancient History",
    caption: "Culture · Society · Art & Architecture",
    icon: BookOpen,
  },
  {
    name: "Geography",
    caption: "Physical · Human · India & World",
    icon: Globe,
  },
  {
    name: "Economy",
    caption: "Indian Economy · Budget · Survey",
    icon: TrendingUp,
  },
  {
    name: "Environment",
    caption: "Ecology · Biodiversity · Climate Change",
    icon: Trees,
  },
  {
    name: "Science & Technology",
    caption: "Space · AI · Defence · Developments",
    icon: Cpu,
  },
  {
    name: "Ethics",
    caption: "Case Studies · Thinkers · Integrity",
    icon: Scale,
  },
  {
    name: "Art & Culture",
    caption: "Visual Arts · Performing Arts · Literature",
    icon: Palette,
  },
  {
    name: "Internal Security",
    caption: "Cybersecurity · Borders · Emerging Challenges",
    icon: Shield,
  },
  {
    name: "International Relations",
    caption: "Bilateral Ties · Treaties · Multilateral Institutions",
    icon: Network,
  },
  {
    name: "Society",
    caption: "Social Issues · Diversity · Governance",
    icon: Users,
  },
  {
    name: "Essay",
    caption: "Themes · Structure · Argumentation",
    icon: PenTool,
  },
  {
    name: "CSAT",
    caption: "Comprehension · Reasoning · Quantitative Aptitude",
    icon: Calculator,
  },
];

export default function Subjects() {
  return (
    <section id="features" className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              THE SYLLABUS, IN CONTEXT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4 text-wrap-balance">
              From the first chapter <br />
              to the final revision.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed mb-6 max-w-sm">
              UPSC preparation becomes difficult when subjects feel like disconnected piles of information. Adhitam brings subjects, notes, questions and practice into a structure built around the examination.
            </p>
            <a
              href="#approach"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A9821E] hover:text-[#C9A227] transition-colors"
            >
              <span>Explore Subjects</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Right Column: 14 Compact Subject Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {subjects.map((subj, idx) => {
              const IconComp = subj.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] hover:border-[#C9A227] hover:shadow-sm transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#A9821E] group-hover:bg-[#C9A227]/20 group-hover:text-[#121016] transition-colors mb-2">
                    <IconComp className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h3 className="font-serif text-[12.5px] font-bold text-[#1E1B16] mb-0.5 leading-snug">
                    {subj.name}
                  </h3>
                  <span className="text-[10px] text-[#8C8371] leading-tight line-clamp-2">
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
