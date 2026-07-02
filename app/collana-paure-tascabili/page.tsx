import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Collana Paure Tascabili",
  description:
    "Collana Paure Tascabili di Antonio Andreozzi: racconti horror per ragazzi dagli 8 ai 12 anni. Scopri Il Quaderno degli Incubi Incompleti e i prossimi volumi della serie.",
  alternates: { canonical: "https://www.pauretascabili.com/collana-paure-tascabili" },
};

const bookSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: "Paure Tascabili",
  author: { "@type": "Person", name: "Antonio Andreozzi" },
  genre: ["Horror", "Fantasy", "Mistero"],
  audience: { "@type": "Audience", audienceType: "Ragazzi 8-12 anni" },
  url: "https://www.pauretascabili.com/collana-paure-tascabili",
};

export default function CollanaPaureTascabiliPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSeriesSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[60vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Collana Paure Tascabili"
        >
          <GrainOverlay />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,26,26,0.2) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              La Collana
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(139,26,26,0.4)",
                lineHeight: 1.1,
              }}
            >
              PAURE TASCABILI
            </h1>
            <p className="mt-6 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>
              Ciao giovani esploratori dell&apos;ignoto! Siete pronti a immergervi in storie
              che vi faranno battere il cuore e accendere l&apos;immaginazione?
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col gap-6 text-center">
            <p className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              Benvenuti in <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong>,
              la collana di racconti pensata per voi, ragazzi e ragazze curiosi e coraggiosi,
              dagli 8 ai 12 anni.
            </p>
            <p className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              In ogni libro di questa serie, vi accompagneremo in avventure misteriose, dove il
              brivido si mescola al divertimento e ogni pagina vi porterà a scoprire mondi
              nascosti e segreti da svelare.
            </p>
            <p className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              Il primo racconto, <strong style={{ color: "var(--accent-moon)" }}>Il Quaderno
              degli Incubi Incompleti</strong>, vi introdurrà nel cuore di questa avventura,
              facendovi conoscere personaggi straordinari e situazioni mozzafiato.
            </p>
            <p className="font-cinzel text-lg" style={{ color: "var(--accent-blood)" }}>
              Allacciate le cinture dell&apos;immaginazione e partiamo insieme in questo viaggio
              straordinario!
            </p>
          </div>
        </section>

        {/* Elenco dei Volumi */}
        <section
          className="relative section-padding"
          style={{
            background: "var(--bg-dark)",
            backgroundImage: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(61,43,79,0.3) 0%, transparent 60%)",
          }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-10">
            <h2
              className="font-cinzel font-bold text-3xl text-center"
              style={{ color: "var(--accent-moon)", textShadow: "0 0 40px rgba(139,26,26,0.3)" }}
            >
              Elenco dei Volumi
            </h2>

            <article
              className="grid lg:grid-cols-5 gap-10 items-center p-10 rounded-sm"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)", boxShadow: "0 0 60px rgba(139,26,26,0.15)" }}
            >
              <div className="lg:col-span-2 flex justify-center">
                <div
                  className="relative w-48 h-64 lg:w-56 lg:h-72 rounded-sm overflow-hidden flex items-center justify-center p-4"
                  style={{
                    background: "radial-gradient(ellipse 90% 80% at 50% 30%, #1c1428 0%, #0f0c16 100%)",
                    border: "1px solid rgba(184,134,11,0.3)",
                    boxShadow: "0 0 40px rgba(139,26,26,0.4), -10px 10px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src="/quaderno-incubi-incompleti-cover.png"
                    alt="Copertina de Il Quaderno degli Incubi Incompleti — Antonio Andreozzi"
                    fill
                    className="object-contain p-2"
                    sizes="224px"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-4">
                <span
                  className="font-cinzel text-xs tracking-[0.3em] uppercase"
                  style={{ color: "var(--accent-blood)" }}
                >
                  Volume 1
                </span>
                <h3 className="font-cinzel font-black text-2xl" style={{ color: "var(--accent-moon)" }}>
                  Il Quaderno degli Incubi Incompleti
                </h3>
                <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                  Emily e Nathan trovano in soffitta un antico quaderno nero: ogni storia
                  incompiuta al suo interno prende vita. Un&apos;avventura sul coraggio e
                  l&apos;unione tra fratelli, per chi vuole avvicinarsi al mistero e all&apos;horror
                  in modo delicato.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <CTAButton
                    href="https://amzn.to/4iFM7TY"
                    variant="primary"
                    external
                    aria-label="Acquista ora Il Quaderno degli Incubi Incompleti su Amazon"
                  >
                    📚 Acquista Ora
                  </CTAButton>
                  <CTAButton href="/singoli-volumi" variant="secondary">
                    Scopri di Più
                  </CTAButton>
                </div>
              </div>
            </article>

            <p
              className="font-crimson italic text-lg text-center"
              style={{ color: "var(--accent-ghost)", opacity: 0.7 }}
            >
              Preparatevi a sfidare le vostre paure, a ridere, a stupirvi e, soprattutto, a
              divertirvi! Con Paure Tascabili, l&apos;avventura è sempre a portata di mano.
            </p>
          </div>
        </section>

        {/* La filosofia della collana */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
              <h2 className="font-cinzel font-bold text-3xl" style={{ color: "var(--accent-moon)" }}>
                La Filosofia della Collana
              </h2>
              <p className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                Ogni libro della collana Paure Tascabili è progettato per far vivere ai ragazzi
                avventure emozionanti, dove la paura diventa il motore della crescita personale.
                I protagonisti — coetanei dei lettori — affrontano sfide straordinarie armati
                di coraggio, intelligenza e amicizia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Età 8–12 anni",
                  desc: "Storie calibrate per lettori giovani, con protagonisti della loro età e sfide che rispecchiano le loro paure reali.",
                },
                {
                  icon: "🧠",
                  title: "Educativa",
                  desc: "Ogni avventura nasconde una lezione: coraggio, amicizia, fiducia, resilienza. La paura come strumento di crescita.",
                },
                {
                  icon: "📖",
                  title: "Avvincente",
                  desc: "Capitoli brevi e ritmo serrato che tengono i lettori incollati alle pagine. Ideale anche per chi non ama leggere.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-4 p-8 rounded-sm"
                  style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)" }}
                >
                  <span className="text-4xl" aria-hidden="true">{f.icon}</span>
                  <h3 className="font-cinzel font-bold text-lg" style={{ color: "var(--accent-moon)" }}>
                    {f.title}
                  </h3>
                  <p className="font-crimson text-base leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                href="https://amzn.to/4iFM7TY"
                variant="primary"
                external
                aria-label="Acquista Il Quaderno degli Incubi Incompleti su Amazon"
              >
                📚 Acquista su Amazon
              </CTAButton>
              <CTAButton href="/singoli-volumi" variant="secondary">
                Tutti i Volumi
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
