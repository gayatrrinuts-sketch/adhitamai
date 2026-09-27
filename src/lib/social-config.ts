export interface SocialLink {
  platform: "YouTube" | "LinkedIn" | "X" | "Instagram" | "Telegram";
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
  ...(process.env.NEXT_PUBLIC_SOCIAL_X
    ? [
        {
          platform: "X" as const,
          url: process.env.NEXT_PUBLIC_SOCIAL_X,
          ariaLabel: "Follow Adhitam AI on X",
          active: true,
        },
      ]
    : []),
  ...(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM
    ? [
        {
          platform: "Instagram" as const,
          url: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
          ariaLabel: "Follow Adhitam AI on Instagram",
          active: true,
        },
      ]
    : []),
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
