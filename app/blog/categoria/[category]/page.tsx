import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import PostCard from "@/components/blog/PostCard";
import { getAllCategories, getCategoryBySlug, getPostsByCategory } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} — Blog Paure Tascabili`,
    description: `Tutti gli articoli della categoria ${category.name}: folklore italiano, leggende del Sud Italia e creature soprannaturali.`,
    alternates: { canonical: `https://www.pauretascabili.com/blog/categoria/${category.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const posts = getPostsByCategory(categorySlug);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <section
          className="relative min-h-[45vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label={`Categoria ${category.name}`}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <Link
              href="/blog"
              className="font-cinzel text-[10px] tracking-widest uppercase transition-colors hover:text-[var(--accent-blood)] inline-block mb-4"
              style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
            >
              ← Blog
            </Link>
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Categoria
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(2.2rem, 6vw, 5rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(139,26,26,0.4)",
                lineHeight: 1.1,
              }}
            >
              {category.name.toUpperCase()}
            </h1>
            <p
              className="mt-4 font-crimson text-xl italic max-w-2xl"
              style={{ color: "var(--accent-ghost)" }}
            >
              {category.count} {category.count === 1 ? "articolo" : "articoli"} in questa categoria.
            </p>
          </div>
        </section>

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <ul className="flex flex-col gap-8" role="list">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
