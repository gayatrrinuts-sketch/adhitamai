import { Metadata } from "next";
import { isAdmin } from "@/lib/auth";
import { getAllArticlesForAdmin } from "@/lib/blog-service";
import AccessCodeScreen from "./AccessCodeScreen";
import BlogEditorClient from "./BlogEditorClient";

export const metadata: Metadata = {
  title: "Adhitam AI — Editorial Console",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function BlogCreatePage() {
  const authorized = await isAdmin();

  if (!authorized) {
    return <AccessCodeScreen />;
  }

  const articles = await getAllArticlesForAdmin();

  return <BlogEditorClient initialArticles={articles} />;
}
