import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blogs & Insights — Adhitam AI | UPSC Preparation Strategies & Explainers",
  description:
    "Thoughts, strategies, and explainers to help you prepare for the UPSC Civil Services Examination with clarity, depth, and discipline.",
  alternates: {
    canonical: "https://adhitamai.com/blog",
  },
  openGraph: {
    title: "Blogs & Insights — Adhitam AI",
    description:
      "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
    url: "https://adhitamai.com/blog",
    siteName: "Adhitam AI",
    images: [
      {
        url: "/assets/blog-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Adhitam AI Blogs Header",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights — Adhitam AI",
    description:
      "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
    images: ["/assets/blog-hero-bg.jpg"],
  },
};

// Structured Blog JSON-LD schema
const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://adhitamai.com/blog#blog",
  "name": "Adhitam AI Insights for Aspirants",
  "description": "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
  "publisher": {
    "@type": "Organization",
    "name": "Adhitam AI",
    "logo": "https://adhitamai.com/logo.png"
  }
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogClient />
    </>
  );
}
