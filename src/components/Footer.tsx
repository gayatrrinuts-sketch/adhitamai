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
                Adhitam <span className="font-sans font-medium text-lg text-[#FAF7F2]">AI</span>
              </span>
              <span className="text-[10px] text-[#FAF7F2]/60 tracking-wider">
                Preparation to Purpose.
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-7 text-xs text-[#FAF7F2]/75 font-medium">
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
              Blog
            </Link>
            <Link href="#faq" className="hover:text-[#D8BE6E] transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Contact & Support */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#FAF7F2]/70">
            <a
              href="mailto:contact@adhitamai.com"
              className="hover:text-[#D8BE6E] transition-colors"
            >
              contact@adhitamai.com
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
