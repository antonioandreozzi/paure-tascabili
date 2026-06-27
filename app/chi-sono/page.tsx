import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Chi Sono",
  description:
    "Scopri chi è Antonio Andreozzi, autore della collana Paure Tascabili: libri horror, fantasy e mistero per ragazzi.",
  alternates: { canonical: "https://www.pauretascabili.com/chi-sono" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Antonio Andreozzi",
  url: "https://www.pauretascabili.com/chi-sono/",
  jobTitle: "Autore di libri horror e fantasy per ragazzi",
  description:
    "Antonio Andreozzi è l'autore della collana Paure Tascabili, libri horror, fantasy e mistero per ragazzi che insegnano coraggio, amicizia e resilienza.",
  sameAs: [
    "https://www.facebook.com/share/19AZyYxTMa/",
    "https://www.instagram.com/pauretascabili",
    "https://www.youtube.com/@PaureTascabili",
  ],
};

export default function ChiSonoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[60vh] flex items-end section-padding overflow-hidden"
          style={{
            background:
              "linear-gradient(to bottom, var(--bg-void) 0%, var(--bg-dark) 100%)",
          }}
          aria-label="Chi Sono — Antonio Andreozzi"
        >
          <GrainOverlay />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(61,43,79,0.4) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              L&apos;Autore
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
              CHI SONO
            </h1>
          </div>
        </section>

        {/* Content */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-void)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16">
            {/* Text */}
            <div className="lg:col-span-3 flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <h2
                  className="font-cinzel font-bold text-3xl"
                  style={{ color: "var(--accent-moon)" }}
                >
                  Antonio Andreozzi
                </h2>
                <p
                  className="font-cinzel text-base"
                  style={{ color: "var(--accent-gold)" }}
                >
                  Autore · Narratore di Storie · Capo Villaggio Spettrale
                </p>
              </div>

              <div
                className="flex flex-col gap-6 font-crimson text-lg leading-relaxed"
                style={{ color: "var(--accent-ghost)" }}
              >
                <p>
                  Salve! Sono Antonio Andreozzi, il capo villaggio di questo piccolo angolo
                  spettrale del web. Nel corso degli anni, la mia missione è diventata quella
                  di creare storie che, pur provocando brividi, insegnano anche lezioni di
                  coraggio, amicizia e resilienza.
                </p>
                <p>
                  Ogni libro che scrivo è un invito a guardare sotto il letto e, invece di
                  temere ciò che potrebbe nascondersi nell&apos;oscurità, a immaginare una storia
                  che potrebbe essere raccontata.
                </p>
                <p>
                  La collana <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong> nasce
                  dall&apos;idea che le storie horror e di mistero possono essere strumenti
                  educativi potentissimi: aiutano i ragazzi a elaborare le proprie paure,
                  a sviluppare l&apos;immaginazione e a comprendere che anche nell&apos;oscurità si
                  può trovare la luce.
                </p>
                <p>
                  Ogni volume è pensato per ragazzi dagli 8 ai 14 anni, con protagonisti
                  della loro età che affrontano sfide straordinarie con coraggio, intelligenza
                  e — soprattutto — l&apos;aiuto dei propri amici.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <CTAButton
                  href="https://amzn.to/4iFM7TY"
                  variant="primary"
                  external
                  aria-label="Acquista i libri di Antonio Andreozzi su Amazon"
                >
                  📚 Scopri i Libri
                </CTAButton>
                <CTAButton href="/contatti" variant="secondary" aria-label="Contatta Antonio Andreozzi">
                  Contattami
                </CTAButton>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-2 flex flex-col gap-8">
              {/* Author card */}
              <div
                className="p-8 rounded-sm flex flex-col items-center gap-6 text-center"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(184,134,11,0.3)",
                  boxShadow: "0 0 40px rgba(61,43,79,0.3)",
                }}
              >
                <div
                  className="relative w-24 h-24 rounded-full overflow-hidden"
                  style={{ border: "1px solid rgba(184,134,11,0.4)" }}
                >
                  <Image
                    src="/antonio-andreozzi.jpg"
                    alt="Antonio Andreozzi"
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3
                    className="font-cinzel font-bold text-xl"
                    style={{ color: "var(--accent-moon)" }}
                  >
                    Antonio Andreozzi
                  </h3>
                  <p
                    className="font-crimson italic mt-2"
                    style={{ color: "var(--accent-ghost)" }}
                  >
                    &ldquo;Ogni ombra nasconde una storia.&rdquo;
                  </p>
                </div>
              </div>

              {/* Social */}
              <div
                className="p-6 rounded-sm flex flex-col gap-4"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(139,26,26,0.2)",
                }}
              >
                <h3
                  className="font-cinzel text-xs tracking-[0.3em] uppercase"
                  style={{ color: "var(--accent-blood)" }}
                >
                  Seguimi
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { name: "Facebook", href: "https://www.facebook.com/share/19AZyYxTMa/" },
                    { name: "Instagram", href: "https://www.instagram.com/pauretascabili" },
                    { name: "YouTube", href: "https://www.youtube.com/@PaureTascabili" },
                    { name: "X / Twitter", href: "https://x.com/pauretascabili" },
                    { name: "Pinterest", href: "https://www.pinterest.it/pauretascabili" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-crimson text-base animated-underline hover:text-[var(--accent-blood)] transition-colors"
                      style={{ color: "var(--accent-ghost)" }}
                      aria-label={`Visita ${s.name} di Paure Tascabili`}
                    >
                      {s.name} →
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
