"use client";

import React, { useState } from "react";
import { ADHITAM_SOCIAL_CONFIG, SocialLink } from "@/lib/social-config";

// Pixel-perfect official brand icons
function PlatformIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "YouTube":
      return (
        <svg
          className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="17" x="0" y="3.5" rx="4.5" fill="#FF0000" />
          <polygon points="9.5,8 16,12 9.5,16" fill="#FFFFFF" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg
          className="w-5 h-5 shrink-0 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" rx="5" fill="#0A66C2" />
          <path
            fill="#FFFFFF"
            d="M19 19h-3.1v-4.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V19H9.7s.04-8.5 0-9.4h3.1v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.2V19zM6.5 8.3c-1.1 0-1.8-.7-1.8-1.7s.7-1.7 1.8-1.7 1.8.7 1.8 1.7-.7 1.7-1.8 1.7zm-1.6 10.7h3.2V9.6H4.9V19z"
          />
        </svg>
      );
    case "X":
      return (
        <svg className="w-3.5 h-3.5 text-[#121016]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          className="w-4 h-4 text-[#E4405F]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "Facebook":
      return (
        <svg className="w-4 h-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "Threads":
      return (
        <svg className="w-4 h-4 text-[#121016]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24C5.584 24 0 18.591 0 12.186 0 5.604 5.405 0 12.186 0 18.614 0 24 5.405 24 12.186c0 1.27-.156 2.518-.46 3.714l-.066.257-2.614-.707.065-.256a9.49 9.49 0 0 0 .36-3.008c0-5.234-4.256-9.49-9.49-9.49-5.234 0-9.49 4.256-9.49 9.49 0 5.234 4.256 9.49 9.49 9.49 2.76 0 5.334-1.2 7.064-3.292l1.988 1.666C18.665 22.42 15.545 24 12.186 24zm4.498-10.428c-.287 3.568-2.584 5.37-5.59 5.37-2.903 0-5.188-1.996-5.188-4.83 0-3.018 2.394-4.877 5.766-4.877 1.884 0 3.398.54 4.417 1.57l.08.082-.016.115c-.217 1.503-.43 2.14-.469 2.57zm-2.478-.178c.17-1.127.135-2.008-.636-2.532-.602-.41-1.478-.54-2.348-.54-2.02 0-3.328 1.054-3.328 2.593 0 1.488 1.137 2.453 2.793 2.453 1.956 0 3.344-1.144 3.519-1.974z" />
        </svg>
      );
    case "Telegram":
      return (
        <svg
          className="w-4 h-4 text-[#229ED9]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialRail() {
  const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);
  const activeLinks = ADHITAM_SOCIAL_CONFIG.filter((s) => s.active);

  if (activeLinks.length === 0) return null;

  return (
    <aside
      aria-label="Adhitam AI Social Profiles"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-2 p-2 rounded-2xl bg-[#FAF8F2]/95 backdrop-blur-md border border-[#E4DCC8] shadow-sm text-[#5C5548]"
    >
      <div className="flex flex-col items-center gap-1 mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
      </div>

      {activeLinks.map((social: SocialLink) => {
        const isHovered = hoveredPlatform === social.platform;
        return (
          <div key={social.platform} className="relative flex items-center">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              onMouseEnter={() => setHoveredPlatform(social.platform)}
              onMouseLeave={() => setHoveredPlatform(null)}
              className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-[#EFE9DA] hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <PlatformIcon platform={social.platform} />
            </a>

            {/* Clean tooltip positioned on the right */}
            {isHovered && (
              <div className="absolute left-11 whitespace-nowrap px-2.5 py-1 bg-[#121016] text-[#FAF7F2] text-[11px] font-medium rounded-lg shadow-md pointer-events-none animate-fadeIn z-50">
                {social.platform}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
