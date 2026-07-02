import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Antonio Andreozzi di Paure Tascabili: per collaborazioni, richieste stampa, adozioni scolastiche o semplicemente per dire ciao.",
  alternates: { canonical: "https://www.pauretascabili.com/contatti" },
};

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/share/19AZyYxTMa/" },
  { name: "Instagram", href: "https://www.instagram.com/pauretascabili" },
  { name: "YouTube", href: "https://www.youtube.com/@PaureTascabili" },
  { name: "X / Twitter", href: "https://x.com/pauretascabili" },
  { name: "Pinterest", href: "https://www.pinterest.it/pauretascabili" },
];

export default function ContattiPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Contatti"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
              Parliamo
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "var(--accent-moon)",
                textShadow: "0 0 60px rgba(139,26,26,0.4)",
                lineHeight: 1.1,
              }}
            >
              CONTATTI
            </h1>
          </div>
        </section>

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="font-cinzel font-bold text-2xl" style={{ color: "var(--accent-moon)" }}>
                  Scrivi un Messaggio
                </h2>
                <p className="font-crimson text-lg mt-3" style={{ color: "var(--accent-ghost)" }}>
                  Per collaborazioni, richieste stampa, adozioni scolastiche, o semplicemente per dire ciao.
                </p>
              </div>

              <form className="flex flex-col gap-5" aria-label="Modulo di contatto" action="mailto:info@pauretascabili.com" method="GET">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Nome *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="px-4 py-3 font-crimson text-base rounded-sm focus:outline-none transition-all"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.3)", color: "var(--accent-moon)" }}
                    placeholder="Il tuo nome"
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="px-4 py-3 font-crimson text-base rounded-sm focus:outline-none transition-all"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.3)", color: "var(--accent-moon)" }}
                    placeholder="tua@email.com"
                    aria-required="true"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Oggetto
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="px-4 py-3 font-crimson text-base rounded-sm focus:outline-none transition-all"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.3)", color: "var(--accent-moon)" }}
                    placeholder="Di cosa vorresti parlare?"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="body"
                    required
                    rows={6}
                    className="px-4 py-3 font-crimson text-base rounded-sm focus:outline-none transition-all resize-none"
                    style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.3)", color: "var(--accent-moon)" }}
                    placeholder="Il tuo messaggio..."
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start px-8 py-4 font-cinzel text-sm tracking-widest uppercase transition-all duration-300 glow-cta"
                  style={{ background: "var(--accent-blood)", color: "var(--accent-moon)", border: "none", cursor: "pointer" }}
                >
                  Invia Messaggio
                </button>
              </form>
            </div>

            <div className="flex flex-col gap-8">
              <div
                className="p-8 rounded-sm flex flex-col gap-6"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)" }}
              >
                <h2 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                  Trovami sui Social
                </h2>
                <ul className="flex flex-col gap-4" role="list">
                  {socialLinks.map((s) => (
                    <li key={s.name}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-crimson text-lg animated-underline hover:text-[var(--accent-blood)] transition-colors"
                        style={{ color: "var(--accent-ghost)" }}
                        aria-label={`Visita ${s.name} di Paure Tascabili`}
                      >
                        {s.name} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-8 rounded-sm flex flex-col gap-4"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.2)" }}
              >
                <h2 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                  Per Cosa Puoi Scrivermi
                </h2>
                <ul className="font-crimson text-lg flex flex-col gap-3" style={{ color: "var(--accent-ghost)" }} role="list">
                  {[
                    "Collaborazioni editoriali",
                    "Richieste stampa e interviste",
                    "Adozioni scolastiche e laboratori",
                    "Feedback sui libri",
                    "Proposte e idee",
                    "Semplicemente per salutare!",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span style={{ color: "var(--accent-blood)" }} aria-hidden="true">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
