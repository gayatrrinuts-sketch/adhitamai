import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Journeys from "@/components/Journeys";
import StudyPlan from "@/components/StudyPlan";
import Subjects from "@/components/Subjects";
import Adaptive from "@/components/Adaptive";
import AIMentor from "@/components/AIMentor";
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
        Each section has sticky top-0 and an increasing z-index so as you scroll, 
        the upcoming section naturally moves up and covers the previous section!
      */}
      <div className="sticky top-0 z-10 w-full min-h-screen shadow-2xl">
        <Hero />
      </div>

      <div className="sticky top-0 z-20 w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <Journeys />
      </div>

      <div className="sticky top-0 z-30 w-full min-h-screen shadow-2xl bg-[#121016]">
        <StudyPlan />
      </div>

      <div className="sticky top-0 z-40 w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <Subjects />
      </div>

      <div className="sticky top-0 z-50 w-full min-h-screen shadow-2xl bg-[#121016]">
        <Adaptive />
      </div>

      <div className="sticky top-0 z-[60] w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <AIMentor />
      </div>

      <div className="sticky top-0 z-[70] w-full min-h-screen shadow-2xl bg-[#121016]">
        <PracticeTests />
      </div>

      <div className="sticky top-0 z-[80] w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <CurrentAffairs />
      </div>

      <div className="sticky top-0 z-[90] w-full min-h-screen shadow-2xl bg-[#121016]">
        <Philosophy />
      </div>

      <div className="sticky top-0 z-[100] w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <FAQ />
      </div>

      <div className="sticky top-0 z-[110] w-full min-h-screen shadow-2xl bg-[#F5F1E8]">
        <DownloadCTA />
      </div>

      <div className="relative z-[120] w-full bg-[#121016]">
        <Footer />
      </div>
    </main>
  );
}
