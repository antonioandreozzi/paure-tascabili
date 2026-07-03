import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Risorse Gratuite",
  description:
    "Risorse gratuite di Paure Tascabili: guide alla lettura, attività per bambini, schede didattiche e materiali per genitori e insegnanti.",
  alternates: { canonical: "https://www.pauretascabili.com/risorse-gratuite" },
};

const resources = [
  {
    icon: "📔",
    title: "Il Diario del Coraggio",
    desc: "Una guida pratica per aiutare bambini e ragazzi a trasformare le paure in forza. Esercizi, riflessioni e strumenti concreti per crescere con coraggio ogni giorno.",
    tag: "Scarica Gratis",
    href: "/diario-del-coraggio-guida.pdf",
    available: true,
  },
  {
    icon: "🌱",
    title: "La Forza delle Piccole Cose",
    desc: "Una guida per genitori e insegnanti sulla potenza dei piccoli gesti quotidiani. Come le abitudini sane costruiscono la resilienza nei bambini.",
    tag: "Scarica Gratis",
    href: "/la-forza-delle-piccole-cose-guida.pdf",
    available: true,
  },
  {
    icon: "📖",
    title: "Guida allo Storytelling Educativo",
    desc: "Come usare le storie per insegnare valori, stimolare l'empatia e sviluppare il pensiero critico nei ragazzi. Tecniche e consigli pratici per genitori e insegnanti.",
    tag: "Scarica Gratis",
    href: "/guida-storytelling-educativo.pdf",
    available: true,
  },
  {
    icon: "💛",
    title: "Educare alla Gentilezza",
    desc: "Storie e attività per insegnare ai bambini il valore della gentilezza, dell'empatia e del rispetto verso gli altri. Una risorsa completa per famiglie e classi.",
    tag: "Scarica Gratis",
    href: "/educare-alla-gentilezza-guida.pdf",
    available: true,
  },
];

export default function RisorseGratuitePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Risorse Gratuite"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Per Genitori e Insegnanti
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
              RISORSE GRATUITE
            </h1>
            <p className="mt-6 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>
              Strumenti pratici per portare le storie di Paure Tascabili in famiglia e in classe.
            </p>
          </div>
        </section>

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((r) => (
                <article
                  key={r.title}
                  className="flex flex-col gap-5 p-8 rounded-sm"
                  style={{
                    background: "var(--bg-card)",
                    border: r.available
                      ? "1px solid rgba(139,26,26,0.35)"
                      : "1px solid rgba(139,26,26,0.15)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-4xl" aria-hidden="true">{r.icon}</span>
                    <span
                      className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm flex-shrink-0"
                      style={
                        r.available
                          ? { background: "rgba(139,26,26,0.2)", color: "var(--accent-blood)", border: "1px solid rgba(139,26,26,0.4)" }
                          : { background: "rgba(155,155,176,0.1)", color: "var(--accent-ghost)", border: "1px solid rgba(155,155,176,0.2)" }
                      }
                    >
                      {r.tag}
                    </span>
                  </div>
                  <h2 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>{r.title}</h2>
                  <p className="font-crimson text-lg leading-relaxed flex-1" style={{ color: "var(--accent-ghost)" }}>{r.desc}</p>
                  {r.available && r.href && (
                    <a
                      href={r.href}
                      download
                      className="inline-flex items-center gap-2 self-start font-cinzel text-sm tracking-widest uppercase px-6 py-3 rounded-sm transition-all duration-200 hover:opacity-80"
                      style={{
                        background: "var(--accent-blood)",
                        color: "var(--accent-moon)",
                      }}
                      aria-label={`Scarica gratis: ${r.title}`}
                    >
                      ⬇ Scarica Gratis
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div
              className="p-10 rounded-sm text-center flex flex-col items-center gap-6"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 0 40px rgba(184,134,11,0.1)" }}
            >
              <h2 className="font-cinzel font-bold text-2xl" style={{ color: "var(--accent-moon)" }}>
                Vuoi essere avvisato quando le risorse saranno disponibili?
              </h2>
              <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)" }}>
                Segui Paure Tascabili sui social per non perdere nessun aggiornamento.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CTAButton href="https://www.facebook.com/share/19AZyYxTMa/" variant="secondary" external aria-label="Seguici su Facebook">
                  Seguici su Facebook
                </CTAButton>
                <CTAButton href="https://www.instagram.com/pauretascabili" variant="secondary" external aria-label="Seguici su Instagram">
                  Seguici su Instagram
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
