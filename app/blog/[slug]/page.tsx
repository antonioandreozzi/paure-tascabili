import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import { blogPosts, type InlineLink, type BlogBlock } from "@/lib/blog-posts";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

function buildToc(content: BlogBlock[]): TocEntry[] {
  const used = new Map<string, number>();
  const entries: TocEntry[] = [];
  for (const block of content) {
    let text: string | null = null;
    let level: 2 | 3 | null = null;
    if ("h2" in block) {
      text = block.h2;
      level = 2;
    } else if ("h3" in block) {
      text = block.h3;
      level = 3;
    }
    if (text === null || level === null) continue;
    const base = slugify(text);
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count}`;
    entries.push({ id, text, level });
  }
  return entries;
}

function renderParagraph(text: string, links?: InlineLink[]) {
  if (!links || links.length === 0) return text;

  let remaining: (string | { link: InlineLink })[] = [text];
  for (const link of links) {
    remaining = remaining.flatMap((segment) => {
      if (typeof segment !== "string") return [segment];
      const idx = segment.indexOf(link.text);
      if (idx === -1) return [segment];
      return [
        segment.slice(0, idx),
        { link },
        segment.slice(idx + link.text.length),
      ];
    });
  }

  return remaining.map((segment, i) => {
    if (typeof segment === "string") return <span key={i}>{segment}</span>;
    const { link } = segment;
    const linkClass = "underline hover:text-[var(--accent-blood)] transition-colors";
    const linkStyle = { color: "var(--accent-gold)" };
    if (link.external) {
      return (
        <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass} style={linkStyle}>
          {link.text}
        </a>
      );
    }
    return (
      <Link key={i} href={link.href} className={linkClass} style={linkStyle}>
        {link.text}
      </Link>
    );
  });
}

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);
  if (!article) return { title: "Articolo non trovato" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://www.pauretascabili.com/blog/${slug}` },
  };
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = blogPosts.find((p) => p.slug === slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: "Antonio Andreozzi" },
    datePublished: article.date,
    publisher: { "@type": "Organization", name: "Paure Tascabili" },
    url: `https://www.pauretascabili.com/blog/${slug}`,
  };

  const toc = buildToc(article.content);
  let headingIndex = 0;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end section-padding overflow-hidden" style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 w-full flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm" style={{ background: `${article.categoryColor}20`, color: article.categoryColor, border: `1px solid ${article.categoryColor}40` }}>{article.category}</span>
              <time className="font-crimson text-sm" style={{ color: "var(--accent-ghost)", opacity: 0.6 }}>{article.date}</time>
              <span className="font-crimson text-sm" style={{ color: "var(--accent-ghost)", opacity: 0.6 }}>· {article.readTime} di lettura</span>
            </div>
            <h1 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", color: "var(--accent-moon)", textShadow: "0 0 40px rgba(139,26,26,0.3)", lineHeight: 1.2 }}>{article.title}</h1>
            <p className="font-crimson italic text-xl" style={{ color: "var(--accent-ghost)" }}>{article.excerpt}</p>
          </div>
        </section>

        {/* Featured image */}
        {article.image && (
          <section className="relative" style={{ background: "var(--bg-void)" }}>
            <div className="relative z-10 max-w-4xl mx-auto px-6 -mt-10 sm:-mt-16">
              <div
                className="relative w-full aspect-[16/9] rounded-sm overflow-hidden"
                style={{ border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 0 50px rgba(139,26,26,0.3), 0 20px 50px rgba(0,0,0,0.6)" }}
              >
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            {toc.length > 0 && (
              <nav
                aria-label="Indice dell'articolo"
                className="mb-12 p-6 sm:p-8 rounded-sm"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.25)" }}
              >
                <span
                  className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-5"
                  style={{ color: "var(--accent-blood)" }}
                >
                  Indice
                </span>
                <ol className="flex flex-col gap-2.5" role="list">
                  {toc.map((entry) => (
                    <li key={entry.id} className={entry.level === 3 ? "pl-5" : undefined}>
                      <a
                        href={`#${entry.id}`}
                        className="font-crimson text-base hover:text-[var(--accent-blood)] transition-colors animated-underline"
                        style={{ color: entry.level === 3 ? "var(--accent-gold)" : "var(--accent-ghost)" }}
                      >
                        {entry.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <article className="flex flex-col gap-7">
              {article.content.map((block, i) => {
                if ("h2" in block) {
                  const id = toc[headingIndex]?.id;
                  headingIndex += 1;
                  return (
                    <h2
                      key={i}
                      id={id}
                      className="font-cinzel font-bold text-2xl sm:text-3xl mt-4"
                      style={{ color: "var(--accent-moon)", textShadow: "0 0 30px rgba(139,26,26,0.25)", scrollMarginTop: "100px" }}
                    >
                      {block.h2}
                    </h2>
                  );
                }
                if ("h3" in block) {
                  const id = toc[headingIndex]?.id;
                  headingIndex += 1;
                  return (
                    <h3
                      key={i}
                      id={id}
                      className="font-cinzel font-bold text-xl"
                      style={{ color: "var(--accent-gold)", scrollMarginTop: "100px" }}
                    >
                      {block.h3}
                    </h3>
                  );
                }
                if ("list" in block) {
                  return (
                    <ul key={i} className="flex flex-col gap-3 pl-2" role="list">
                      {block.list.map((item, j) => (
                        <li
                          key={j}
                          className="font-crimson text-xl leading-relaxed flex gap-3"
                          style={{ color: "var(--accent-ghost)" }}
                        >
                          <span style={{ color: "var(--accent-blood)" }} aria-hidden="true">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if ("download" in block) {
                  return (
                    <div
                      key={i}
                      className="flex flex-col sm:flex-row items-center gap-5 p-6 rounded-sm"
                      style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 0 30px rgba(184,134,11,0.1)" }}
                    >
                      <span className="text-3xl" aria-hidden="true">📘</span>
                      <p className="font-crimson text-lg flex-1" style={{ color: "var(--accent-ghost)" }}>
                        Scarica la guida gratuita in PDF per metterti subito in pratica.
                      </p>
                      <CTAButton href={block.download.href} variant="primary" external aria-label={`Scarica il PDF: ${block.download.label}`}>
                        ⬇ Scarica Qui
                      </CTAButton>
                    </div>
                  );
                }
                return (
                  <p key={i} className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    {renderParagraph(block.p, block.links)}
                  </p>
                );
              })}
            </article>

            {/* CTA */}
            <div className="mt-20 p-10 rounded-sm text-center flex flex-col items-center gap-6" style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)", boxShadow: "0 0 40px rgba(139,26,26,0.15)" }}>
              <h2 className="font-cinzel font-bold text-2xl" style={{ color: "var(--accent-moon)" }}>Hai apprezzato questo articolo?</h2>
              <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)" }}>Scopri la collana Paure Tascabili e metti alla prova il coraggio dei tuoi ragazzi.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CTAButton href="https://amzn.to/4iFM7TY" variant="primary" external aria-label="Acquista Paure Tascabili su Amazon">📚 Acquista su Amazon</CTAButton>
                <CTAButton href="/blog" variant="secondary">← Tutti gli Articoli</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
