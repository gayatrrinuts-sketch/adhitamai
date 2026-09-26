import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#121016] text-[#FAF7F2] py-14 border-t border-[#FAF7F2]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#FAF7F2]/10">
          {/* Brand Mark and Tagline matching image */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-black border border-[#C9A227]/40">
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
                Adhitam <span className="font-sans font-medium text-lg text-[#FAF7F2]">Ai</span>
              </span>
              <span className="text-[10px] text-[#FAF7F2]/60 tracking-wider">
                Preparation to Purpose.
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-7 text-xs text-[#FAF7F2]/75 font-medium">
            <Link href="#home" className="hover:text-[#D8BE6E] transition-colors">
              Home
            </Link>
            <Link href="#features" className="hover:text-[#D8BE6E] transition-colors">
              Features
            </Link>
            <Link href="#journeys" className="hover:text-[#D8BE6E] transition-colors">
              For Aspirants
            </Link>
            <Link href="#approach" className="hover:text-[#D8BE6E] transition-colors">
              Approach
            </Link>
            <Link href="#faq" className="hover:text-[#D8BE6E] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Social Icons (X, Instagram, YouTube, LinkedIn) */}
          <div className="flex items-center gap-4 text-[#FAF7F2]/60">
            {/* X */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D8BE6E] transition-colors"
              aria-label="X (formerly Twitter)"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D8BE6E] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D8BE6E] transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#D8BE6E] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Ownership, and Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#FAF7F2]/50 gap-4">
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
