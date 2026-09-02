import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import { getPost, getPostSlugs } from "@/lib/blog";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.seoTitle} — Paure Tascabili`,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `https://www.pauretascabili.com/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.seoTitle,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "James Valentino",
      url: "https://www.pauretascabili.com/chi-sono",
    },
    publisher: {
      "@type": "Organization",
      name: "Paure Tascabili",
      url: "https://www.pauretascabili.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.pauretascabili.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "it-IT",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[45vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 w-full">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/blog"
                className="font-cinzel text-[10px] tracking-widest uppercase transition-colors hover:text-[var(--accent-blood)]"
                style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
              >
                ← Blog
              </Link>
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
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 40px rgba(139,26,26,0.3)",
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </h1>
          </div>
        </section>

        {/* Corpo articolo */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <div
              className="blog-content font-crimson text-lg leading-relaxed"
              style={{ color: "var(--accent-ghost)" }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div
              className="mt-16 p-8 rounded-sm text-center flex flex-col items-center gap-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(184,134,11,0.25)",
                boxShadow: "0 0 40px rgba(184,134,11,0.06)",
              }}
            >
              <p className="font-cinzel font-bold text-lg" style={{ color: "var(--accent-moon)" }}>
                Vuoi usare il folklore italiano per parlare con tuo figlio?
              </p>
              <p className="font-crimson text-base italic" style={{ color: "var(--accent-ghost)" }}>
                Il Codice delle Paure — 42 pagine stampabili, 8 mostri del Sud Italia come chiave per conversazioni vere.
              </p>
              <Link
                href="/kit-segreti"
                className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:opacity-80"
                style={{ background: "var(--accent-blood)", color: "var(--accent-moon)" }}
              >
                Scopri il Kit Segreti
              </Link>
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(155,155,176,0.15)" }}>
              <Link
                href="/blog"
                className="font-cinzel text-xs tracking-widest uppercase transition-colors hover:text-[var(--accent-blood)]"
                style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
              >
                ← Tutti gli articoli
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
