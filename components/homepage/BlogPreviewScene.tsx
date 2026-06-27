"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import GrainOverlay from "@/components/shared/GrainOverlay";
import SectionTitle from "@/components/shared/SectionTitle";
import { cardVariants, staggerContainerVariants } from "@/lib/animations";
import { blogPosts } from "@/lib/blog-posts";

const articles = blogPosts.slice(0, 3);

export default function BlogPreviewScene() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative section-padding overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
      aria-labelledby="blog-heading"
    >
      <GrainOverlay />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
        <SectionTitle
          tag="Dal Blog"
          title="ULTIMI ARTICOLI"
          subtitle="Riflessioni, storie e consigli per genitori e giovani lettori appassionati del mistero."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={prefersReduced ? {} : staggerContainerVariants}
          initial={prefersReduced ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {articles.map((article) => (
            <motion.article
              key={article.slug}
              variants={prefersReduced ? {} : cardVariants}
              className="group relative flex flex-col rounded-sm overflow-hidden"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(139,26,26,0.15)",
              }}
            >
              {/* Image */}
              <div
                className="relative h-48 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, var(--bg-void) 0%, ${article.categoryColor}40 100%)`,
                }}
              >
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                    <span
                      className="font-cinzel font-black text-6xl pointer-events-none select-none"
                      style={{ color: `${article.categoryColor}20` }}
                    >
                      {article.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, ${article.categoryColor}30 0%, transparent 70%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 p-6 flex-1">
                {/* Category tag */}
                <span
                  className="font-cinzel text-[10px] tracking-[0.3em] uppercase self-start px-3 py-1 rounded-sm"
                  style={{
                    background: `${article.categoryColor}20`,
                    color: article.categoryColor,
                    border: `1px solid ${article.categoryColor}40`,
                  }}
                >
                  {article.category}
                </span>

                <h3
                  className="font-cinzel font-bold text-base leading-snug animated-underline"
                  style={{ color: "var(--accent-moon)" }}
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-[var(--accent-blood)] transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p
                  className="font-crimson text-base leading-relaxed flex-1"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "rgba(139,26,26,0.15)" }}>
                  <span
                    className="font-crimson text-sm"
                    style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
                  >
                    {article.date}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-cinzel text-[10px] tracking-widest uppercase hover:text-[var(--accent-blood)] transition-colors"
                    style={{ color: "var(--accent-ghost)" }}
                    aria-label={`Leggi l'articolo: ${article.title}`}
                  >
                    Leggi →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/blog"
            className="group font-cinzel text-sm tracking-widest uppercase flex items-center gap-3 hover:text-[var(--accent-blood)] transition-colors"
            style={{ color: "var(--accent-ghost)" }}
          >
            Scopri Tutti gli Articoli
            <motion.span
              animate={prefersReduced ? {} : { x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
