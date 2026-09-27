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
          "name": "How does Adhitam AI decide what I should study each day?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam uses the preparation details you provide, such as your attempt year, available study time and optional subject, to organize your study into daily missions. The goal is to give you a clear next step instead of making you decide what to study every day."
          }
        },
        {
          "@type": "Question",
          "name": "Is Adhitam AI useful if I am preparing without coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adhitam is designed as a preparation companion for self-directed study, helping organize study, revision and practice around the UPSC syllabus. It can also sit alongside books, classes or other resources you already use."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use Adhitam AI with my existing books or coaching?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adhitam does not require you to replace every resource you already use. It can serve as the system that helps you organize what you're learning, what needs revision and where you need more practice."
          }
        },
        {
          "@type": "Question",
          "name": "How does the revision system work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam brings topics back into your preparation at planned intervals and uses your practice history to identify areas that need more attention. The purpose is to make revision deliberate rather than something you keep postponing."
          }
        },
        {
          "@type": "Question",
          "name": "Does Adhitam AI cover both UPSC Prelims and Mains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The app includes separate preparation experiences for Prelims and Mains, including practice, PYQs, tests and Mains-oriented writing workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Can I prepare for UPSC while studying or working?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam is designed around available study time rather than assuming every aspirant can follow the same timetable. You can plan around your daily schedule and build preparation progressively."
          }
        },
        {
          "@type": "Question",
          "name": "How can the AI Mentor help with UPSC preparation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can use the AI Mentor to clarify concepts and questions while studying. The aim is to provide structured explanations connected to UPSC preparation rather than generic conversational answers."
          }
        },
        {
          "@type": "Question",
          "name": "Does Adhitam AI include previous year questions and mock tests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Prelims experience includes PYQ practice, topic-wise practice and mock-test workflows designed to help you move from learning concepts to testing them."
          }
        },
        {
          "@type": "Question",
          "name": "Does Adhitam AI help with Mains answer writing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam includes Mains answer-writing practice with workflows focused on structure, content and presentation."
          }
        },
        {
          "@type": "Question",
          "name": "Is Adhitam AI free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Adhitam AI's current access and pricing details are provided in the app/store listing. Check the latest information before getting started."
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
