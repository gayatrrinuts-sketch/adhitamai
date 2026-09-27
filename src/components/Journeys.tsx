import { GraduationCap, Briefcase, User, BookOpen } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "College Students",
    description:
      "Build your foundation without letting preparation get lost between classes, assignments and everything else.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description:
      "Make limited hours count with a study routine that fits around your day.",
  },
  {
    icon: User,
    title: "First-time Aspirants",
    description:
      "Start with clarity instead of trying to figure out the entire syllabus at once.",
  },
  {
    icon: BookOpen,
    title: "Self Learners",
    description:
      "Bring study, revision and practice into one disciplined system.",
  },
];

export default function Journeys() {
  return (
    <section id="journeys" className="w-full py-16 sm:py-20 bg-[#F5F1E8] text-[#1E1B16] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              FOR EVERY ASPIRANT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4">
              Different starting points. <br />
              One clear way forward.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed max-w-sm">
              Whether you&apos;re beginning your first serious attempt, balancing preparation with college or work, or trying to bring structure back to an existing routine, Adhitam AI helps you work from where you are.
            </p>
          </div>

          {/* 4 Minimal Persona Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {personas.map((persona, idx) => {
              const IconComponent = persona.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#FBF8F2] border border-[#E4DCC8] flex flex-col items-start text-left justify-between hover:border-[#C9A227] hover:shadow-md transition-all h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#EFE9DA] flex items-center justify-center text-[#1E1B16] mb-5">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[15px] font-bold text-[#1E1B16] mb-1.5 leading-snug">
                      {persona.title}
                    </h3>
                    <p className="text-[12px] text-[#5C5548] leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Context Banner: Fills vertical space with concrete product value */}
        <div className="p-6 rounded-2xl bg-[#EFE9DA]/70 border border-[#DCD2B8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] border border-[#C9A227]/40 flex items-center justify-center text-[#A9821E] font-serif font-bold text-sm shrink-0">
              अ
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-[#1E1B16]">
                Personalised Daily Missions
              </h4>
              <p className="text-xs text-[#5C5548] leading-relaxed">
                Tell Adhitam your attempt year, available time, and optional subject. Preparation is organized into clear daily missions of study, revision, and practice.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#8C8371] shrink-0 font-medium">
            <span>• Prelims &amp; Mains</span>
            <span>• Spaced Revision</span>
            <span>• Zero Guesswork</span>
          </div>
        </div>
      </div>
    </section>
  );
}
