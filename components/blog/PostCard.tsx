import Link from "next/link";
import { slugifyCategory, type BlogPost } from "@/lib/blog";

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <li>
      <article
        className="p-8 rounded-sm transition-all duration-200 hover:border-[rgba(139,26,26,0.5)]"
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(139,26,26,0.2)",
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <Link
            href={`/blog/categoria/${slugifyCategory(post.category)}`}
            className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm transition-colors hover:opacity-80"
            style={{
              background: "rgba(139,26,26,0.15)",
              color: "var(--accent-blood)",
              border: "1px solid rgba(139,26,26,0.3)",
            }}
          >
            {post.category}
          </Link>
          <time
            dateTime={post.publishedAt}
            className="font-cinzel text-[10px] tracking-wider uppercase"
            style={{ color: "var(--accent-ghost)", opacity: 0.5 }}
          >
            {new Date(post.publishedAt).toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <Link href={`/blog/${post.slug}`} className="block group">
          <h2
            className="font-cinzel font-bold mb-3 group-hover:text-[var(--accent-blood)] transition-colors"
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
              color: "var(--accent-moon)",
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h2>
          <p
            className="font-crimson text-lg leading-relaxed"
            style={{ color: "var(--accent-ghost)", opacity: 0.8 }}
          >
            {post.excerpt}
          </p>
          <span
            className="inline-block mt-5 font-cinzel text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-blood)" }}
          >
            Leggi l&apos;articolo →
          </span>
        </Link>
      </article>
    </li>
  );
}
