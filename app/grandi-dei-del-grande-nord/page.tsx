import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Grandi Dei del Grande Nord — Thor e il Martello Rubato",
  description:
    "Grandi Dei del Grande Nord: la collana di mitologia norrena di James Valentino. Scopri Thor e il Martello Rubato, un'avventura epica tra gli dei di Asgard per ragazzi.",
  alternates: { canonical: "https://www.pauretascabili.com/grandi-dei-del-grande-nord" },
};

const bookSeriesSchema = {
  "@context": "https://schema.org",
  "@type": "BookSeries",
  name: "Grandi Dei del Grande Nord",
  author: { "@type": "Person", name: "James Valentino" },
  genre: ["Mitologia", "Fantasy", "Avventura"],
  audience: { "@type": "Audience", audienceType: "Ragazzi 8-12 anni" },
  url: "https://www.pauretascabili.com/grandi-dei-del-grande-nord",
  workExample: {
    "@type": "Book",
    name: "Thor e il Martello Rubato",
    url: "https://www.amazon.it/dp/B0HN52GLHL/",
    bookFormat: "https://schema.org/EBook",
    author: { "@type": "Person", name: "James Valentino" },
  },
};

export default function GrandiDeiPage() {
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
          className="relative min-h-[65vh] flex items-end section-padding overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #080e1a, var(--bg-void))",
          }}
          aria-label="Grandi Dei del Grande Nord"
        >
          <GrainOverlay />
          {/* Glacial glow — ice blue instead of blood red */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(74,124,156,0.25) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          {/* Aurora borealis hint */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 120% 30% at 50% 10%, rgba(40,90,110,0.15) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-10">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "#5B9EC9" }}
            >
              La Collana
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(2rem, 6vw, 5rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(74,124,156,0.5)",
                lineHeight: 1.1,
              }}
            >
              GRANDI DEI
              <br />
              DEL GRANDE NORD
            </h1>
            <p
              className="mt-6 font-crimson text-xl italic max-w-2xl"
              style={{ color: "var(--accent-ghost)" }}
            >
              Dai ghiacci eterni di Asgard alle foreste dei giganti di ghiaccio: le leggende
              degli dèi norreni rivivono nelle pagine di James Valentino.
            </p>
          </div>
        </section>

        {/* Intro collana */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-void)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col gap-6 text-center">
            <p
              className="font-crimson text-xl leading-relaxed"
              style={{ color: "var(--accent-ghost)" }}
            >
              Benvenuti in{" "}
              <strong style={{ color: "var(--accent-moon)" }}>
                Grandi Dei del Grande Nord
              </strong>
              , la nuova collana di{" "}
              <strong style={{ color: "var(--accent-moon)" }}>James Valentino</strong>{" "}
              dedicata agli dèi, agli eroi e ai mostri della mitologia norrena.
            </p>
            <p
              className="font-crimson text-xl leading-relaxed"
              style={{ color: "var(--accent-ghost)" }}
            >
              Thor, Odino, Loki e le creature dei Nove Regni escono dai libri di storia e
              prendono vita in storie avventurose, scritte per ragazze e ragazzi dagli 8 ai
              12 anni che vogliono scoprire il mondo dei Vichinghi.
            </p>
            <p
              className="font-cinzel text-lg"
              style={{ color: "#5B9EC9" }}
            >
              Il Nord chiama. Siete pronti a rispondere?
            </p>
          </div>
        </section>

        {/* Il libro */}
        <section
          className="relative section-padding"
          style={{
            background: "var(--bg-dark)",
            backgroundImage:
              "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(30,55,90,0.35) 0%, transparent 60%)",
          }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col gap-10">
            <h2
              className="font-cinzel font-bold text-3xl text-center"
              style={{
                color: "var(--accent-moon)",
                textShadow: "0 0 40px rgba(74,124,156,0.3)",
              }}
            >
              Il Primo Volume
            </h2>

            {/* Thor e il Martello Rubato */}
            <article
              className="grid lg:grid-cols-5 gap-10 items-center p-10 rounded-sm"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(74,124,156,0.25)",
                boxShadow: "0 0 60px rgba(74,124,156,0.12)",
              }}
            >
              <div className="lg:col-span-2 flex justify-center">
                <div
                  className="relative w-48 h-64 lg:w-56 lg:h-72 rounded-sm overflow-hidden flex items-center justify-center p-4"
                  style={{
                    background:
                      "radial-gradient(ellipse 90% 80% at 50% 30%, #0d1929 0%, #080e1a 100%)",
                    border: "1px solid rgba(74,124,156,0.4)",
                    boxShadow:
                      "0 0 40px rgba(74,124,156,0.3), -10px 10px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src="/thor-martello-rubato-cover.png"
                    alt="Copertina di Thor e il Martello Rubato — James Valentino, Grandi Dei del Grande Nord"
                    fill
                    className="object-contain p-2"
                    sizes="224px"
                  />
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col gap-4">
                <span
                  className="font-cinzel text-xs tracking-[0.3em] uppercase"
                  style={{ color: "#5B9EC9" }}
                >
                  Volume 1 — Grandi Dei del Grande Nord
                </span>
                <h3
                  className="font-cinzel font-black text-2xl"
                  style={{ color: "var(--accent-moon)" }}
                >
                  Thor e il Martello Rubato
                </h3>
                <p
                  className="font-crimson text-lg leading-relaxed"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  Mjolnir è sparito. Il martello di Thor — l&apos;arma più potente dei Nove
                  Regni — è stato rubato nella notte. Senza Mjolnir, le difese di Asgard
                  si sgretolano e i giganti di ghiaccio avanzano. Thor deve recuperarlo
                  prima che il mondo finisca nel caos.
                </p>
                <p
                  className="font-crimson text-lg leading-relaxed"
                  style={{ color: "var(--accent-ghost)" }}
                >
                  Un&apos;avventura epica tra i Nove Regni della mitologia norrena, con
                  coraggio, astuzia e un pizzico di humor degno di Loki.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <CTAButton
                    href="https://www.amazon.it/dp/B0HN52GLHL/"
                    variant="primary"
                    external
                    aria-label="Acquista Thor e il Martello Rubato su Amazon"
                  >
                    ⚡ Acquista su Amazon
                  </CTAButton>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Il mondo della mitologia norrena */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-void)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
              <h2
                className="font-cinzel font-bold text-3xl"
                style={{ color: "var(--accent-moon)" }}
              >
                Il Mondo dei Vichinghi
              </h2>
              <p
                className="font-crimson text-xl leading-relaxed"
                style={{ color: "var(--accent-ghost)" }}
              >
                La mitologia norrena è uno dei patrimoni culturali più ricchi e affascinanti
                dell&apos;umanità. Dei potenti, mostri immensi, regni nascosti e profezie
                antiche: un universo perfetto per i giovani lettori che cercano avventure
                vere.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Gli Dèi di Asgard",
                  desc: "Thor, Odino, Freya, Loki: personaggi potenti e imperfetti, con forze straordinarie e debolezze umane. Divinità che si scontrano, si alleano e si tradiscono.",
                },
                {
                  icon: "🌍",
                  title: "I Nove Regni",
                  desc: "Da Midgard (il mondo degli uomini) a Jotunheim (il regno dei giganti): ogni regno ha le sue creature, le sue leggi, i suoi pericoli.",
                },
                {
                  icon: "🐉",
                  title: "Mostri e Creature",
                  desc: "Fenrir il lupo gigante, Jormungandr il serpente del mondo, i giganti di ghiaccio e di fuoco: bestie mitologiche che ancora oggi fanno tremare l&apos;immaginazione.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-4 p-8 rounded-sm"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(74,124,156,0.2)",
                  }}
                >
                  <span className="text-4xl" aria-hidden="true">
                    {f.icon}
                  </span>
                  <h3
                    className="font-cinzel font-bold text-lg"
                    style={{ color: "var(--accent-moon)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="font-crimson text-base leading-relaxed"
                    style={{ color: "var(--accent-ghost)" }}
                    dangerouslySetInnerHTML={{ __html: f.desc }}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton
                href="https://www.amazon.it/dp/B0HN52GLHL/"
                variant="primary"
                external
                aria-label="Acquista Thor e il Martello Rubato su Amazon"
              >
                ⚡ Acquista Thor e il Martello Rubato
              </CTAButton>
              <CTAButton href="/collana-paure-tascabili" variant="secondary">
                Scopri Paure Tascabili
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Chi è James Valentino */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-dark)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col gap-6">
            <h2
              className="font-cinzel font-bold text-2xl"
              style={{ color: "var(--accent-moon)" }}
            >
              James Valentino
            </h2>
            <p
              className="font-crimson text-xl leading-relaxed"
              style={{ color: "var(--accent-ghost)" }}
            >
              James Valentino è l&apos;autore di{" "}
              <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong> e
              di{" "}
              <strong style={{ color: "var(--accent-moon)" }}>
                Grandi Dei del Grande Nord
              </strong>
              : due collane nate dalla stessa passione per le storie che fanno battere il
              cuore e accendono la fantasia dei giovani lettori.
            </p>
            <p
              className="font-crimson text-xl leading-relaxed"
              style={{ color: "var(--accent-ghost)" }}
            >
              Orrore folkloristico italiano, mitologia norrena e avventure impossibili: ogni
              libro di James Valentino è un invito a scoprire che il mondo è molto più grande
              — e molto più strano — di quanto sembri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <CTAButton href="/chi-sono" variant="secondary">
                Chi è James Valentino
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
