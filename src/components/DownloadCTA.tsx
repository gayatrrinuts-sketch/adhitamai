import Image from "next/image";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative w-full py-12 sm:py-16 bg-[#F5F1E8] text-[#1E1B16] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and App Store Badges */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-[#1E1B16] leading-[1.15] mb-3">
              Start your journey <br />
              today.
            </h2>
            <p className="text-[14px] text-[#5C5548] leading-relaxed mb-6 max-w-md">
              Download Adhitam AI and take the next step towards a higher purpose.
            </p>

            {/* Official App Store & Google Play Badges matching the image */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#download"
                className="inline-block transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
                aria-label="Get it on Google Play"
              >
                <div className="h-10 px-3.5 rounded-lg bg-black text-white flex items-center justify-center shadow-md">
                  <Image
                    src="/assets/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={110}
                    height={32}
                    className="h-7 w-auto object-contain"
                  />
                </div>
              </a>

              <a
                href="#download"
                className="inline-block transition-transform duration-150 hover:-translate-y-0.5 active:scale-95"
                aria-label="Download on App Store"
              >
                <div className="h-10 px-3.5 rounded-lg bg-black text-white flex items-center justify-center shadow-md">
                  <Image
                    src="/assets/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={110}
                    height={32}
                    className="h-6 w-auto"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Indian Monument Architectural visual matching the reference design */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="w-[340px] h-[190px] rounded-2xl overflow-hidden shadow-xl border border-[#C9A227]/30 relative">
              <div
                className="absolute inset-0 bg-cover bg-center filter contrast-110 sepia-[0.3]"
                style={{ backgroundImage: "url('/assets/delhi-monument.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121016]/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
