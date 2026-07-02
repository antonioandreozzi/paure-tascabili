import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Singoli Volumi",
  description:
    "Il Quaderno degli Incubi Incompleti — primo volume della collana Paure Tascabili di Antonio Andreozzi. Emily e Nathan, un quaderno nero, e un'avventura che metterà alla prova il loro coraggio.",
  alternates: { canonical: "https://www.pauretascabili.com/singoli-volumi" },
};

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Il Quaderno degli Incubi Incompleti",
  author: { "@type": "Person", name: "Antonio Andreozzi" },
  genre: ["Horror", "Fantasy", "Mistero"],
  audience: { "@type": "Audience", audienceType: "Ragazzi 8-12 anni" },
  url: "https://amzn.to/4iFM7TY",
  publisher: { "@type": "Organization", name: "Paure Tascabili" },
};

const temi = [
  {
    title: "Coraggio",
    desc: "Affrontare le proprie paure e superare le sfide con determinazione.",
  },
  {
    title: "Legami Familiari",
    desc: "L'importanza del sostegno reciproco tra fratelli di fronte alle avversità.",
  },
  {
    title: "Mistero e Avventura",
    desc: "Esplorare l'ignoto e svelare segreti nascosti.",
  },
  {
    title: "Scoperta di Sé",
    desc: "Il viaggio interiore dei protagonisti alla ricerca della propria forza interiore.",
  },
];

export default function SingoliVolumiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Singoli Volumi"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
              I Libri
            </span>
            <h1 className="font-cinzel font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "var(--accent-moon)", textShadow: "0 0 60px rgba(139,26,26,0.4)", lineHeight: 1.1 }}>
              SINGOLI VOLUMI
            </h1>
          </div>
        </section>

        {/* Il volume */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">
            <article
              className="grid lg:grid-cols-5 gap-12 items-start p-10 rounded-sm"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)", boxShadow: "0 0 60px rgba(139,26,26,0.15)" }}
            >
              {/* Cover */}
              <div className="lg:col-span-2 flex justify-center lg:sticky lg:top-32">
                <div
                  className="relative w-56 h-72 lg:w-64 lg:h-80 rounded-sm overflow-hidden flex items-center justify-center p-4"
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
                    sizes="256px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div>
                  <h2 className="font-cinzel font-black text-3xl" style={{ color: "var(--accent-moon)" }}>
                    Il Quaderno degli Incubi Incompleti
                  </h2>
                  <p className="font-crimson text-base mt-2" style={{ color: "var(--accent-gold)" }}>
                    Primo volume della collana Paure Tascabili
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                  <p>
                    <em>Il Quaderno degli Incubi Incompleti</em> è il primo volume della collana{" "}
                    <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong>, una serie
                    di racconti pensati per avvicinare i giovani lettori al genere horror in modo
                    delicato e coinvolgente.
                  </p>
                  <p>
                    È un&apos;avventura emozionante che insegna ai giovani lettori l&apos;importanza del
                    coraggio e della collaborazione. Un libro che, pur esplorando temi legati alla
                    paura, lo fa in modo delicato e adatto ai più giovani, rendendolo una lettura
                    ideale per chi desidera avvicinarsi al mondo del mistero e dell&apos;horror.
                  </p>
                </div>

                {/* Sinossi */}
                <div
                  className="relative p-8 rounded-sm"
                  style={{ background: "var(--bg-void)", border: "1px solid rgba(139,26,26,0.2)" }}
                >
                  <span
                    className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
                    style={{ color: "var(--accent-blood)" }}
                  >
                    Sinossi
                  </span>
                  <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    Emily e Nathan, due fratelli curiosi e intraprendenti, scoprono nella soffitta
                    della loro nuova casa un antico quaderno nero. Inizialmente affascinati, si
                    rendono presto conto che ogni storia incompiuta nel quaderno prende vita,
                    trascinandoli in un vortice di eventi inspiegabili. Determinati a svelare il
                    mistero e a riportare la normalità, i due fratelli si immergono in
                    un&apos;avventura che metterà alla prova il loro coraggio e la loro unione.
                  </p>
                </div>

                {/* Temi principali */}
                <div className="flex flex-col gap-4">
                  <span
                    className="font-cinzel text-xs tracking-[0.4em] uppercase"
                    style={{ color: "var(--accent-blood)" }}
                  >
                    Temi Principali
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {temi.map((tema) => (
                      <div
                        key={tema.title}
                        className="flex flex-col gap-1 p-4 rounded-sm"
                        style={{ background: "var(--bg-void)", border: "1px solid rgba(184,134,11,0.2)" }}
                      >
                        <span className="font-cinzel font-bold text-sm" style={{ color: "var(--accent-moon)" }}>
                          📕 {tema.title}
                        </span>
                        <span className="font-crimson text-base" style={{ color: "var(--accent-ghost)" }}>
                          {tema.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Horror", "Avventura", "Mistero"].map((tag) => (
                    <span
                      key={tag}
                      className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
                      style={{ background: "rgba(139,26,26,0.2)", color: "var(--accent-blood)", border: "1px solid rgba(139,26,26,0.3)" }}
                    >
                      {tag}
                    </span>
                  ))}
                  <span
                    className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm"
                    style={{ background: "rgba(184,134,11,0.15)", color: "var(--accent-gold)", border: "1px solid rgba(184,134,11,0.3)" }}
                  >
                    8-12 anni
                  </span>
                </div>

                <CTAButton
                  href="https://amzn.to/4iFM7TY"
                  variant="primary"
                  external
                  aria-label="Inizia l'avventura — acquista Il Quaderno degli Incubi Incompleti su Amazon"
                >
                  📖 Inizia l&apos;Avventura!
                </CTAButton>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
