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
  title: "Adhitam AI — Private, Adaptive UPSC Preparation Companion",
  description:
    "Adhitam AI is an adaptive, privacy-first UPSC Civil Services preparation companion. Features personalized daily missions, spaced-repetition forgetting curves, Prelims & Mains curriculum coverage, and local-first data privacy.",
  applicationName: "Adhitam AI",
  authors: [{ name: "Uniworld AI Forum", url: "https://adhitamai.com" }],
  creator: "Uniworld AI Forum",
  publisher: "Adhitam AI",
  keywords: [
    "Adhitam AI",
    "UPSC Preparation App",
    "UPSC Civil Services",
    "UPSC Prelims",
    "UPSC Mains",
    "Adaptive Learning UPSC",
    "UPSC AI Mentor",
    "Forgetting Curve Study",
    "Private UPSC App",
    "Civil Services Exam India",
  ],
  metadataBase: new URL("https://adhitamai.com"),
  alternates: {
    canonical: "https://adhitamai.com",
  },
  openGraph: {
    title: "Adhitam AI — The UPSC Prep Companion That Adapts to You",
    description:
      "A deeper way to prepare for a higher purpose. Adaptive study sequencing, real retention curves, and structured AI doubt-solving for UPSC civil services aspirants.",
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
    title: "Adhitam AI — Private, Adaptive UPSC Preparation Companion",
    description:
      "A deeper way to prepare for a higher purpose. Personalised daily missions and forgetting curve models built around your real progress.",
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
      "@type": "SoftwareApplication",
      "@id": "https://adhitamai.com/#app",
      "name": "Adhitam AI",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "iOS, Android",
      "description": "Adaptive, privacy-first UPSC preparation companion that reads your real study signals and models forgetting curves to plan daily study missions.",
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
      "description": "A deeper way to prepare for a higher purpose.",
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
          "name": "Is my study data actually private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — by default, 100% of your study data stays on your device. Your profile, quiz logs, notes, and progress never leave your phone unless you choose to turn on an optional online feature."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need an account to use Adhitam AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The full core study-tracking experience — quizzes, syllabus progress, flashcards, notes, and current affairs review — works with zero mandatory sign-in."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Adhitam AI an adaptive learning system?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam AI analyzes active study signals — streak, subject mastery, forgetting curve decay, and mock frequency — to dynamically assign prioritized daily study missions rather than static checklists."
          }
        },
        {
          "@type": "Question",
          "name": "Which exam does Adhitam AI cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "UPSC Civil Services Examination (CSE) — covering General Studies Prelims (Paper I & CSAT) and Mains curriculum with static topic linkages."
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
