import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import LegendaryMap from "@/components/leggendario/LegendaryMap";

export const metadata: Metadata = {
  title: "Il Leggendario",
  description:
    "Il Leggendario di Paure Tascabili: una mappa interattiva della Terra di Lavoro con 21 creature e luoghi leggendari, svelati uno al mese.",
  alternates: { canonical: "https://www.pauretascabili.com/leggendario" },
};

const TOTAL_LEGGENDE = 21;
const LEGGENDE_DISPONIBILI = 0;

export default function LeggendarioPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[55vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Il Leggendario"
        >
          <GrainOverlay />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(184,134,11,0.18) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Una Mappa di Misteri
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 6rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(184,134,11,0.35)",
                lineHeight: 1.1,
              }}
            >
              IL LEGGENDARIO
            </h1>
            <p className="mt-6 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>
              21 luoghi. 21 creature. Una Terra di Lavoro che nasconde più di quanto racconta.
            </p>
          </div>
        </section>

        {/* Intro + completion indicator */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col items-center gap-8 text-center">
            <p className="font-crimson text-xl leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              Ogni angolo della Terra di Lavoro custodisce una leggenda: una creatura, un luogo, una storia
              tramandata sottovoce. Esplora la mappa, scopri i punti che si illuminano al passaggio del
              mouse, e segui il calendario delle rivelazioni: una nuova leggenda ogni mese.
            </p>

            <div className="w-full flex flex-col items-center gap-3">
              <div
                className="w-full max-w-md h-3 rounded-full overflow-hidden"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.3)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(LEGGENDE_DISPONIBILI / TOTAL_LEGGENDE) * 100}%`,
                    background: "linear-gradient(to right, var(--accent-blood), var(--accent-gold))",
                  }}
                />
              </div>
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-gold)" }}>
                {LEGGENDE_DISPONIBILI} di {TOTAL_LEGGENDE} leggende disponibili
              </span>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="relative section-padding" style={{ background: "var(--bg-dark)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
            <LegendaryMap />
            <p className="font-crimson italic text-base text-center max-w-xl" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
              Passa il mouse su un punto per scoprirne il nome. Clicca per saperne di più.
            </p>
          </div>
        </section>

        {/* Future expansion teaser */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col gap-6">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase"
              style={{ color: "var(--accent-blood)" }}
            >
              Il Viaggio Continua
            </span>
            <h2 className="font-cinzel font-bold text-2xl sm:text-3xl" style={{ color: "var(--accent-moon)" }}>
              Una Mappa che Crescerà
            </h2>
            <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              Il Leggendario non finisce qui. Anno dopo anno, la mappa si espanderà verso nuove province —
              Napoli, Avellino, Benevento, Salerno — fino ad abbracciare tutto il Sud Italia, in quello che
              diventerà l&apos;Atlante delle Paure Italiane.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
