import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";

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

        {/* Placeholder */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
