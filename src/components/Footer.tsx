import Link from "next/link";
import Image from "next/image";
import { ADHITAM_SOCIAL_CONFIG } from "@/lib/social-config";

export default function Footer() {
  const activeSocials = ADHITAM_SOCIAL_CONFIG.filter((s) => s.active);

  return (
    <footer className="bg-[#121016] text-[#FAF7F2] py-14 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#FAF7F2]/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black border border-[#C9A227]/40 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Adhitam AI Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-[#FAF7F2] block leading-tight">
                  Adhitam <span className="font-sans font-medium text-lg text-[#FAF7F2]">AI</span>
                </span>
                <span className="text-[10px] text-[#D8BE6E] tracking-wider uppercase font-mono font-medium">
                  Preparation to Purpose
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#FAF7F2]/60 leading-relaxed max-w-sm">
              A personalised, disciplined learning system for UPSC Civil Services aspirants. Grounded in depth, clarity, and deliberate practice.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D8BE6E] font-semibold mb-4">
              Explore
            </h4>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs text-[#FAF7F2]/75 font-medium">
              <Link href="/" className="hover:text-[#D8BE6E] transition-colors">
                Home
              </Link>
              <Link href="/#features" className="hover:text-[#D8BE6E] transition-colors">
                Features
              </Link>
              <Link href="/#journeys" className="hover:text-[#D8BE6E] transition-colors">
                For Aspirants
              </Link>
              <Link href="/#approach" className="hover:text-[#D8BE6E] transition-colors">
                Approach
              </Link>
              <Link href="/blog" className="hover:text-[#D8BE6E] transition-colors">
                Blog & Insights
              </Link>
              <Link href="/#faq" className="hover:text-[#D8BE6E] transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#D8BE6E] font-semibold mb-3">
              Connect With Us
            </h4>
            
            {/* Social Icon Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {activeSocials.map((social) => {
                const isYouTube = social.platform === "YouTube";
                const isLinkedIn = social.platform === "LinkedIn";

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#1E1B24] border border-[#2D2838] text-xs text-[#FAF7F2] transition-all group ${
                      isLinkedIn
                        ? "hover:border-[#0A66C2] hover:bg-[#0A66C2]/10"
                        : "hover:border-[#FF0000] hover:bg-[#FF0000]/10"
                    }`}
                  >
                    {isLinkedIn && (
                      <svg
                        className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="24" rx="5" fill="#0A66C2" />
                        <path
                          fill="#FFFFFF"
                          d="M19 19h-3.1v-4.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V19H9.7s.04-8.5 0-9.4h3.1v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19zM6.5 8.3c-1.1 0-1.8-.7-1.8-1.7s.7-1.7 1.8-1.7 1.8.7 1.8 1.7-.7 1.7-1.8 1.7zm-1.6 10.7h3.2V9.6H4.9V19z"
                        />
                      </svg>
                    )}
                    {isYouTube && (
                      <svg
                        className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                        viewBox="0 0 24 24"
                      >
                        <rect width="24" height="17" x="0" y="3.5" rx="4.5" fill="#FF0000" />
                        <polygon points="9.5,8 16,12 9.5,16" fill="#FFFFFF" />
                      </svg>
                    )}
                    <span className="font-semibold text-xs tracking-wide text-[#FAF7F2]">{social.platform}</span>
                  </a>
                );
              })}
            </div>

            {/* Email Contact */}
            <div className="pt-1 text-xs text-[#FAF7F2]/60">
              <span>Direct inquiries: </span>
              <a
                href="mailto:contact@adhitamai.com"
                className="text-[#FAF7F2]/90 hover:text-[#D8BE6E] transition-colors underline underline-offset-2 font-mono text-[11px]"
              >
                contact@adhitamai.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Ownership, and Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()} Adhitam AI. All rights reserved.</p>
            <p className="text-[#FAF7F2]/40">
              Adhitam AI is a product of <span className="text-[#FAF7F2]/70 font-medium">Uniworld AI Forum</span>.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="/llms.txt" target="_blank" className="hover:text-[#D8BE6E] transition-colors">
              llms.txt
            </a>
            <Link href="#home" className="hover:text-[#D8BE6E] transition-colors">
              Privacy
            </Link>
            <Link href="#home" className="hover:text-[#D8BE6E] transition-colors">
              Terms
            </Link>
            <a href="mailto:contact@adhitamai.com" className="hover:text-[#D8BE6E] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
