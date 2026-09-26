import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journeys from "@/components/Journeys";
import StudyPlan from "@/components/StudyPlan";
import Subjects from "@/components/Subjects";
import Adaptive from "@/components/Adaptive";
import AIMentor from "@/components/AIMentor";
import Mains from "@/components/Mains";
import PracticeTests from "@/components/PracticeTests";
import CurrentAffairs from "@/components/CurrentAffairs";
import Philosophy from "@/components/Philosophy";
import FAQ from "@/components/FAQ";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121016] text-[#FAF7F2] relative">
      <Navbar />

      {/* 
        Stacking Parallax Effect:
        On desktop (lg+), each section is sticky top-0 with increasing z-index so as you scroll,
        the upcoming section naturally moves up and covers the previous section!
        On mobile (< lg), sections scroll naturally so that multi-card vertical layouts and tall
        mockups are 100% visible and never clipped.
      */}
      <div id="home" className="relative lg:sticky lg:top-0 z-10 w-full min-h-0 lg:min-h-screen shadow-2xl flex items-center justify-center">
        <Hero />
      </div>

      <div id="journeys" className="relative lg:sticky lg:top-0 z-20 w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <Journeys />
      </div>

      <div className="relative lg:sticky lg:top-0 z-30 w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#121016] flex items-center justify-center">
        <StudyPlan />
      </div>

      <div id="features" className="relative lg:sticky lg:top-0 z-40 w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <Subjects />
      </div>

      <div className="relative lg:sticky lg:top-0 z-50 w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#121016] flex items-center justify-center">
        <Adaptive />
      </div>

      <div className="relative lg:sticky lg:top-0 z-[60] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <AIMentor />
      </div>

      <div className="relative lg:sticky lg:top-0 z-[65] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#FAF8F2] flex items-center justify-center">
        <Mains />
      </div>

      <div className="relative lg:sticky lg:top-0 z-[70] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#121016] flex items-center justify-center">
        <PracticeTests />
      </div>

      <div className="relative lg:sticky lg:top-0 z-[80] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <CurrentAffairs />
      </div>

      <div id="approach" className="relative lg:sticky lg:top-0 z-[90] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#121016] flex items-center justify-center">
        <Philosophy />
      </div>

      <div id="faq" className="relative lg:sticky lg:top-0 z-[100] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <FAQ />
      </div>

      {/* Final Download CTA: Stacks smoothly on desktop */}
      <div id="download" className="relative lg:sticky lg:top-0 z-[110] w-full min-h-0 lg:min-h-screen shadow-2xl bg-[#F5F1E8] flex items-center justify-center">
        <DownloadCTA />
      </div>

      {/* Footer rolls naturally over the final CTA */}
      <div className="relative z-[120] w-full bg-[#121016]">
        <Footer />
      </div>
    </main>
  );
}
