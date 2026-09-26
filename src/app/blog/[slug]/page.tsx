import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/lib/blogData";
import ArticleClient from "./ArticleClient";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — Adhitam AI",
    };
  }

  const canonicalUrl = `https://adhitamai.com/blog/${post.slug}`;

  return {
    title: `${post.seoTitle} — Adhitam AI`,
    description: post.seoDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.seoTitle} — Adhitam AI`,
      description: post.seoDescription,
      url: canonicalUrl,
      siteName: "Adhitam AI",
      type: "article",
      publishedTime: post.date,
      authors: ["Adhitam AI Editorial Team"],
      images: [
        {
          url: "/assets/logo-1024.png",
          width: 1024,
          height: 1024,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.seoTitle} — Adhitam AI`,
      description: post.seoDescription,
      images: ["/assets/logo-1024.png"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.seoDescription,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Adhitam AI Editorial Team",
      "url": "https://adhitamai.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Adhitam AI",
      "logo": "https://adhitamai.com/logo.png"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://adhitamai.com/blog/${post.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://adhitamai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://adhitamai.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://adhitamai.com/blog/${post.slug}`
      }
    ]
  };

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
      <ArticleClient post={post} related={related} />
    </>
  );
}
