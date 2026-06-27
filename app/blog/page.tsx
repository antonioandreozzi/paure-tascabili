import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Il blog di Paure Tascabili: storie educative, consigli di lettura e riflessioni sulla genitorialità e l'educazione emotiva attraverso la letteratura horror per ragazzi.",
  alternates: { canonical: "https://www.pauretascabili.com/blog" },
};

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-end section-padding overflow-hidden" style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }} aria-label="Blog di Paure Tascabili">
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>Il Blog</span>
            <h1 className="font-cinzel font-black" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--accent-moon)", textShadow: "0 0 60px rgba(139,26,26,0.4)", lineHeight: 1.1 }}>BLOG</h1>
            <p className="mt-4 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>Riflessioni, storie e consigli per genitori e giovani lettori appassionati del mistero.</p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((a) => (
                <article key={a.slug} className="group flex flex-col rounded-sm overflow-hidden" style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  {/* Image */}
                  <div className="h-52 relative overflow-hidden" style={{ background: `linear-gradient(135deg, var(--bg-void) 0%, ${a.categoryColor}40 100%)` }}>
                    {a.image ? (
                      <Image
                        src={a.image}
                        alt={a.imageAlt || a.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                        <span className="font-cinzel font-black text-8xl" style={{ color: `${a.categoryColor}15` }}>{a.title.charAt(0)}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${a.categoryColor}30 0%, transparent 70%)` }} />
                  </div>

                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm" style={{ background: `${a.categoryColor}20`, color: a.categoryColor, border: `1px solid ${a.categoryColor}40` }}>{a.category}</span>
                      <span className="font-crimson text-sm" style={{ color: "var(--accent-ghost)", opacity: 0.6 }}>{a.readTime}</span>
                    </div>

                    <h2 className="font-cinzel font-bold text-base leading-snug" style={{ color: "var(--accent-moon)" }}>
                      <Link href={`/blog/${a.slug}`} className="hover:text-[var(--accent-blood)] transition-colors">{a.title}</Link>
                    </h2>

                    <p className="font-crimson text-base leading-relaxed flex-1" style={{ color: "var(--accent-ghost)" }}>{a.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(139,26,26,0.15)" }}>
                      <time className="font-crimson text-sm" style={{ color: "var(--accent-ghost)", opacity: 0.6 }} dateTime={a.date}>{a.date}</time>
                      <Link href={`/blog/${a.slug}`} className="font-cinzel text-[10px] tracking-widest uppercase hover:text-[var(--accent-blood)] transition-colors" style={{ color: "var(--accent-ghost)" }} aria-label={`Leggi: ${a.title}`}>Leggi →</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
