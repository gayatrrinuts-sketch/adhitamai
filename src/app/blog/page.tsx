import type { Metadata } from "next";
import { getPublishedArticles } from "@/lib/blog-service";
import BlogClient from "./BlogClient";

// Ensure fresh data on every production request so new articles reflect immediately
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Blogs & Insights — Adhitam AI | UPSC Preparation Strategies & Explainers",
  description:
    "Thoughts, strategies, and explainers to help you prepare for the UPSC Civil Services Examination with clarity, depth, and discipline.",
  keywords: [
    "UPSC Blog",
    "IAS Preparation Articles",
    "UPSC Strategy",
    "UPSC Topper Strategy",
    "Prelims Roadmap",
    "Mains Answer Writing",
    "Civil Services Study Plan",
    "Adhitam AI",
  ],
  alternates: {
    canonical: "https://adhitamai.com/blog",
  },
  openGraph: {
    title: "Blogs & Insights — Adhitam AI",
    description:
      "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
    url: "https://adhitamai.com/blog",
    siteName: "Adhitam AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Insights — Adhitam AI",
    description:
      "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://adhitamai.com/blog#blog",
  "name": "Adhitam AI Insights for Aspirants",
  "description":
    "Thoughts, strategies, and explainers to help you prepare for UPSC with clarity and depth.",
  "publisher": {
    "@type": "Organization",
    "name": "Adhitam AI",
    "logo": "https://adhitamai.com/logo.png",
  },
};

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogClient initialArticles={articles} />
    </>
  );
}
