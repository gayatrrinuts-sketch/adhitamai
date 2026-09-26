import { GraduationCap, Briefcase, User, BookOpen } from "lucide-react";

const personas = [
  {
    icon: GraduationCap,
    title: "College Students",
    description: "Build strong foundations early with a structured approach.",
  },
  {
    icon: Briefcase,
    title: "Working Professionals",
    description: "Flexible plans that fit your schedule.",
  },
  {
    icon: User,
    title: "First-time Aspirants",
    description: "Step-by-step guidance with clarity.",
  },
  {
    icon: BookOpen,
    title: "Self Learners",
    description: "Curated resources and disciplined practice.",
  },
];

export default function Journeys() {
  return (
    <section id="journeys" className="py-20 bg-[#F5F1E8] border-b border-[#E4DCC8] text-[#1E1B16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C8371] block mb-2.5">
              FOR EVERY ASPIRANT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-4">
              Built for different <br />
              journeys, with <br />
              one purpose.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed max-w-sm">
              Whether you are in college, working, or a first-time aspirant, Adhitam AI adapts to your background, time, and goals.
            </p>
          </div>

          {/* Right Column: 4 Minimal Persona Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {personas.map((persona, idx) => {
              const IconComponent = persona.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FBF8F2] border border-[#E4DCC8] flex flex-col items-start text-left justify-between hover:border-[#C9A227] transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFE9DA] flex items-center justify-center text-[#1E1B16] mb-4">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[15px] font-bold text-[#1E1B16] mb-1.5 leading-snug">
                      {persona.title}
                    </h3>
                    <p className="text-[11.5px] text-[#5C5548] leading-relaxed">
                      {persona.description}
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
