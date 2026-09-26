import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adhitam AI: UPSC Preparation App with AI Mentor & Daily Study Plan",
  description:
    "Adaptive UPSC preparation app for Prelims & Mains. Daily study plan, revision reminders, PYQs, mock tests, current affairs and AI doubt solving.",
  applicationName: "Adhitam AI",
  authors: [{ name: "Uniworld AI Forum", url: "https://adhitamai.com" }],
  creator: "Uniworld AI Forum",
  publisher: "Adhitam AI",
  keywords: [
    "UPSC preparation app",
    "UPSC AI mentor",
    "IAS preparation app",
    "UPSC study planner",
    "UPSC Prelims and Mains preparation",
    "UPSC Civil Services",
    "Adhitam AI",
  ],
  metadataBase: new URL("https://adhitamai.com"),
  alternates: {
    canonical: "https://adhitamai.com",
  },
  openGraph: {
    title: "Adhitam AI: UPSC Preparation App with AI Mentor & Daily Study Plan",
    description:
      "Adaptive UPSC preparation app for Prelims & Mains. Daily study plan, revision reminders, PYQs, mock tests, current affairs and AI doubt solving.",
    url: "https://adhitamai.com",
    siteName: "Adhitam AI",
    images: [
      {
        url: "/assets/logo-1024.png",
        width: 1024,
        height: 1024,
        alt: "Adhitam AI Emblem",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhitam AI: UPSC Preparation App with AI Mentor & Daily Study Plan",
    description:
      "Adaptive UPSC preparation app for Prelims & Mains. Daily study plan, revision reminders, PYQs, mock tests, current affairs and AI doubt solving.",
    images: ["/assets/logo-1024.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Rich Structured Data (JSON-LD) for Search Engines & AI Search Engines (Perplexity, ChatGPT, Claude)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://adhitamai.com/#organization",
      "name": "Adhitam AI",
      "legalName": "Uniworld AI Forum",
      "url": "https://adhitamai.com",
      "logo": "https://adhitamai.com/assets/logo-1024.png",
      "description": "Educational technology initiative dedicated to disciplined, adaptive civil services preparation.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@adhitamai.com",
        "contactType": "Customer Support"
      }
    },
    {
      "@type": "MobileApplication",
      "@id": "https://adhitamai.com/#app",
      "name": "Adhitam AI",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "iOS, Android",
      "description": "Adaptive UPSC preparation mobile app with daily study plan, spaced revision, PYQs, mock tests, current affairs and AI doubt solving.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "author": {
        "@id": "https://adhitamai.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://adhitamai.com/#website",
      "url": "https://adhitamai.com",
      "name": "Adhitam AI",
      "description": "A deeper way to prepare for UPSC, built for a higher purpose.",
      "publisher": {
        "@id": "https://adhitamai.com/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://adhitamai.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Adhitam AI good for UPSC self-study?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adhitam AI is engineered specifically for self-directed aspirants who need structure. It eliminates planning fatigue by breaking down the standard UPSC syllabus into daily missions, targeted revisions, and syllabus-linked practice."
          }
        },
        {
          "@type": "Question",
          "name": "Can I prepare for UPSC while working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. You can set your available daily study hours, and Adhitam AI dynamically prioritizes high-yield topics and revision due today, ensuring your limited study time is spent with maximum retention and zero guesswork."
          }
        },
        {
          "@type": "Question",
          "name": "Does Adhitam AI cover both Prelims and Mains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The curriculum covers General Studies across Prelims (GS Paper I & CSAT) and Mains (GS Papers I–IV, Essay, and Ethics), linking static textbook concepts directly with answer writing and PYQ practice."
          }
        },
        {
          "@type": "Question",
          "name": "How does spaced repetition help in UPSC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The UPSC syllabus is vast, and aspirants often forget older topics. Spaced repetition models your retention curve and schedules timely review of previously covered topics before they fade from memory, converting short-term recall into lasting exam-day mastery."
          }
        },
        {
          "@type": "Question",
          "name": "Is Adhitam AI free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can download Adhitam AI and start using the core study planner, daily missions, and syllabus progress tracking. There are no intrusive third-party banner ads."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM context file" />
      </head>
      <body
        suppressHydrationWarning
        className="font-sans bg-[#121016] text-[#FAF7F2] antialiased selection:bg-[#C9A227]/25 selection:text-[#121016]"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
