export interface SocialLink {
  platform: "LinkedIn" | "YouTube" | "X" | "Instagram" | "Facebook" | "Threads" | "Telegram";
  url: string;
  ariaLabel: string;
  active: boolean;
}

export const ADHITAM_SOCIAL_CONFIG: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "https://www.linkedin.com/company/adhitam-ias",
    ariaLabel: "Connect with Adhitam AI on LinkedIn",
    active: true,
  },
  {
    platform: "YouTube",
    url: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "https://www.youtube.com/@AdhitamIAS",
    ariaLabel: "Subscribe to Adhitam AI on YouTube",
    active: true,
  },
  {
    platform: "X",
    url: process.env.NEXT_PUBLIC_SOCIAL_X || "https://x.com/aiadhitam",
    ariaLabel: "Follow Adhitam AI on X",
    active: true,
  },
  {
    platform: "Instagram",
    url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "https://www.instagram.com/adhitam.ai/",
    ariaLabel: "Follow Adhitam AI on Instagram",
    active: true,
  },
  {
    platform: "Facebook",
    url: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "https://www.facebook.com/profile.php?id=61595018791631",
    ariaLabel: "Follow Adhitam AI on Facebook",
    active: true,
  },
  {
    platform: "Threads",
    url: process.env.NEXT_PUBLIC_SOCIAL_THREADS || "https://www.threads.com/@adhitam.ai",
    ariaLabel: "Follow Adhitam AI on Threads",
    active: true,
  },
  ...(process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM
    ? [
        {
          platform: "Telegram" as const,
          url: process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM,
          ariaLabel: "Join Adhitam AI Telegram Channel",
          active: true,
        },
      ]
    : []),
];
