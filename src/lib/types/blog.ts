export type BlogBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "heading";
      level: 2;
      content: string;
      anchor: string;
    }
  | {
      type: "quote";
      content: string;
    }
  | {
      type: "list";
      ordered: boolean;
      items: string[];
    }
  | {
      type: "link";
      label: string;
      href: string;
      title?: string;
      description?: string;
    }
  | {
      type: "adhitamPromo";
      variant: string;
      title?: string;
      description?: string;
      cta?: string;
      customTitle?: string;
      customDescription?: string;
      ctaText?: string;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: "download";
      title: string;
      description?: string;
      fileUrl: string;
      fileName: string;
      fileSize?: string;
      buttonText?: string;
    };

export interface BlogFAQ {
  question: string;
  answer: string;
}

export type BlogPostStatus = "draft" | "published";

export interface BlogPostDoc {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  status: BlogPostStatus;
  tags?: string[];
  introduction?: string;
  blocks: BlogBlock[];
  faqs?: BlogFAQ[];
  relatedTopics?: string[];
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdhitamPromoVariant {
  id: string;
  variant?: string;
  title: string;
  description: string;
  cta: string;
  ctaText?: string;
}

export const ADHITAM_PROMO_VARIANTS: AdhitamPromoVariant[] = [
  {
    id: "study-plan",
    title: "Build this into your study plan.",
    description: "Turn what you're reading into a structured preparation routine.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "clarity",
    title: "Not sure what to study next?",
    description: "Bring your preparation into a clearer daily routine.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "revision",
    title: "Turn reading into revision.",
    description: "Keep important concepts connected to your preparation.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "practice",
    title: "Practice while you learn.",
    description: "Move from understanding a topic to testing it.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "weak-areas",
    title: "Find the areas that need attention.",
    description: "Use practice and progress to guide your next revision.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "structured",
    title: "Make your preparation more structured.",
    description: "Bring study, revision and practice into one system.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "current-affairs",
    title: "Keep current affairs connected.",
    description: "Connect developments with the subjects you're studying.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "ai-mentor",
    title: "Still stuck on a concept?",
    description: "Use the AI Mentor when you need another explanation.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "revisit",
    title: "See what needs another pass.",
    description: "Track what you've studied and where more work is needed.",
    cta: "Try Adhitam AI →",
  },
  {
    id: "purpose",
    title: "Prepare with more clarity.",
    description: "A structured system can make a large syllabus easier to navigate.",
    cta: "Try Adhitam AI →",
  },
];
