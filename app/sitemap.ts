import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pauretascabili.com";

  const staticPages = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/chi-sono`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/collana-paure-tascabili`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/singoli-volumi`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/kit-segreti`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/risorse-gratuite`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/anteprime`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contatti`, priority: 0.6, changeFrequency: "yearly" as const },
  ];

  const blogPages = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticPages, ...blogPages];
}
