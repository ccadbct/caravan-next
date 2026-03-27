import type { MetadataRoute } from "next";
import { SITE_URL, MENU_CATEGORIES } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/lunch-special`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const menuPages: MetadataRoute.Sitemap = MENU_CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/menu/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { getAllBlogPosts } = await import("@/lib/sanity/queries");
    const blogPosts = await getAllBlogPosts();
    blogPages = blogPosts.map((post) => ({
      url: `${SITE_URL}/news/${post.slug.current}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));
  } catch {
    // Sanity client may not be available during static build
  }

  return [...staticPages, ...menuPages, ...blogPages];
}
