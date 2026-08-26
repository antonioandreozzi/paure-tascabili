export interface InlineLink {
  text: string;
  href: string;
  external?: boolean;
}

export type BlogBlock =
  | { h2: string }
  | { h3: string }
  | { p: string; links?: InlineLink[] }
  | { list: string[] }
  | { download: { label: string; href: string } };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  categoryColor: string;
  image: string | null;
  imageAlt: string;
  excerpt: string;
  readTime: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [];
