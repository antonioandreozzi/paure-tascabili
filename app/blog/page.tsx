import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Paure Tascabili",
  description:
    "Il blog di Paure Tascabili: folklore italiano, leggende del Sud Italia, creature soprannaturali e consigli per genitori e giovani lettori.",
  alternates: { canonical: "https://www.pauretascabili.com/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Blog di Paure Tascabili"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Il Blog
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(139,26,26,0.4)",
                lineHeight: 1.1,
              }}
            >
              BLOG
            </h1>
            <p
              className="mt-4 font-crimson text-xl italic max-w-2xl"
              style={{ color: "var(--accent-ghost)" }}
            >
              Folklore, leggende e creature del Sud Italia. Storie per chi vuole capire davvero il mistero.
            </p>
          </div>
        </section>

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            {posts.length === 0 ? (
              <div
                className="p-10 rounded-sm text-center flex flex-col items-center gap-4"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(155,155,176,0.15)" }}
              >
                <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-ghost)" }}>
                  Articoli in Arrivo...
                </h3>
                <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)", opacity: 0.6 }}>
                  Nuovi contenuti presto disponibili.
                </p>
              </div>
            ) : (
              <ul className="flex flex-col gap-8" role="list">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <article
                        className="p-8 rounded-sm transition-all duration-200 group-hover:border-[rgba(139,26,26,0.5)]"
                        style={{
                          background: "var(--bg-card)",
                          border: "1px solid rgba(139,26,26,0.2)",
                        }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span
                            className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm"
                            style={{
                              background: "rgba(139,26,26,0.15)",
                              color: "var(--accent-blood)",
                              border: "1px solid rgba(139,26,26,0.3)",
                            }}
                          >
                            {post.category}
                          </span>
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
                      </article>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
