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
