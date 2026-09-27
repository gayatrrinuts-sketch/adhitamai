import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/auth";
import {
  getArticleBySlug,
  getPublishedArticles,
  getRelatedArticles,
} from "@/lib/blog-service";
import ArticleClient from "./ArticleClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getArticleBySlug(slug, true);

  if (!post) {
    return {
      title: "Article Not Found — Adhitam AI",
    };
  }

  const canonicalUrl = `https://adhitamai.com/blog/${post.slug}`;
  const seoTitle = post.title;
  const seoDescription = post.description;

  return {
    title: `${seoTitle} — Adhitam AI`,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${seoTitle} — Adhitam AI`,
      description: seoDescription,
      url: canonicalUrl,
      siteName: "Adhitam AI",
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Adhitam AI Editorial Team"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} — Adhitam AI`,
      description: seoDescription,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const authenticated = await isAdmin();
  const post = await getArticleBySlug(slug, authenticated);

  if (!post) {
    notFound();
  }

  const related = await getRelatedArticles(slug, post.category, 3);

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt ? new Date(post.updatedAt).toISOString() : post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Adhitam AI Editorial Team",
      "url": "https://adhitamai.com",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adhitam AI",
      "logo": "https://adhitamai.com/logo.png",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://adhitamai.com/blog/${post.slug}`,
    },
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://adhitamai.com",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://adhitamai.com/blog",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://adhitamai.com/blog/${post.slug}`,
      },
    ],
  };

  // FAQPage JSON-LD (ONLY if FAQs exist)
  const faqJsonLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": post.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <ArticleClient post={post} related={related} />
    </>
  );
}
