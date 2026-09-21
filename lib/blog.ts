import fs from "fs";
import path from "path";

const postsDir = path.join(process.cwd(), "content", "posts");

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  keywords: string[];
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(postsDir, f), "utf-8")) as BlogPost)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(postsDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as BlogPost;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}

export interface Category {
  name: string;
  slug: string;
  count: number;
}

export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getAllCategories(): Category[] {
  const categories = new Map<string, Category>();
  for (const post of getAllPosts()) {
    const slug = slugifyCategory(post.category);
    const existing = categories.get(slug);
    if (existing) {
      existing.count += 1;
    } else {
      categories.set(slug, { name: post.category, slug, count: 1 });
    }
  }
  return Array.from(categories.values()).sort((a, b) => b.count - a.count);
}

export function getCategoryBySlug(categorySlug: string): Category | null {
  return getAllCategories().find((c) => c.slug === categorySlug) ?? null;
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) => slugifyCategory(post.category) === categorySlug);
}
