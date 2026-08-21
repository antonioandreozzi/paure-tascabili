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
    "I volumi della collana Paure Tascabili di James Valentino: Il Quaderno degli Incubi Incompleti, Vendetta nel Pollaio e Non Guardare nel Pozzo. Libri horror e avventura per ragazzi dagli 8 ai 14 anni.",
  alternates: { canonical: "https://www.pauretascabili.com/singoli-volumi" },
};

const temi1 = [
  { title: "Coraggio", desc: "Affrontare le proprie paure e superare le sfide con determinazione." },
  { title: "Legami Familiari", desc: "L'importanza del sostegno reciproco tra fratelli di fronte alle avversità." },
  { title: "Mistero e Avventura", desc: "Esplorare l'ignoto e svelare segreti nascosti." },
  { title: "Scoperta di Sé", desc: "Il viaggio interiore dei protagonisti alla ricerca della propria forza interiore." },
];

const temi2 = [
  { title: "Paura dell'Ignoto", desc: "Quando ciò che non si capisce diventa la minaccia più grande." },
  { title: "Fiducia e Segreti", desc: "Zio Remo sa qualcosa. Ma perché non parla?" },
  { title: "Istinto di Sopravvivenza", desc: "Leo e Giulia devono capire in fretta, prima che sia troppo tardi." },
  { title: "Identità", desc: "Quando la tua voce non sembra più solo la tua, chi sei davvero?" },
];

const temi4 = [
  { title: "Folklore Autentico", desc: "Il Munaciello e i cunicoli sotto Napoli: leggende reali che diventano incubo." },
  { title: "Coraggio nell'Ignoto", desc: "Sofia deve scendere nel buio. Prima che sia troppo tardi per lei e la sua famiglia." },
  { title: "Legami Familiari", desc: "Un fratellino di sette anni che ruba ogni scena. La famiglia come ancora nel terrore." },
  { title: "Responsabilità", desc: "Sofia ha fatto arrabbiare il Munaciello. Deve fare i conti con le conseguenze." },
];

export default function SingoliVolumiPage() {
  return (
    <>
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

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-20">

            {/* ── Vol. 1 ── */}
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
                    alt="Copertina de Il Quaderno degli Incubi Incompleti"
                    fill
                    className="object-contain p-2"
                    sizes="256px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div>
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-2" style={{ color: "var(--accent-blood)" }}>
                    Vol. 1
                  </span>
                  <h2 className="font-cinzel font-black text-3xl" style={{ color: "var(--accent-moon)" }}>
                    Il Quaderno degli Incubi Incompleti
                  </h2>
                  <p className="font-crimson text-base mt-2" style={{ color: "var(--accent-gold)" }}>
                    James Valentino · Paure Tascabili
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
                    Un&apos;avventura emozionante che insegna ai giovani lettori l&apos;importanza del
                    coraggio e della collaborazione. Un libro che, pur esplorando temi legati alla
                    paura, lo fa in modo delicato e adatto ai più giovani.
                  </p>
                </div>

                <div
                  className="relative p-8 rounded-sm"
                  style={{ background: "var(--bg-void)", border: "1px solid rgba(139,26,26,0.2)" }}
                >
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
                    Sinossi
                  </span>
                  <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    Emily e Nathan, due fratelli curiosi e intraprendenti, scoprono nella soffitta
                    della loro nuova casa un antico quaderno nero. Ogni storia incompiuta nel quaderno
                    prende vita, trascinandoli in un vortice di eventi inspiegabili. Determinati a
                    svelare il mistero, i due fratelli si immergono in un&apos;avventura che metterà
                    alla prova il loro coraggio e la loro unione.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Temi Principali
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {temi1.map((tema) => (
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
                    <span key={tag} className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(139,26,26,0.2)", color: "var(--accent-blood)", border: "1px solid rgba(139,26,26,0.3)" }}>
                      {tag}
                    </span>
                  ))}
                  <span className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(184,134,11,0.15)", color: "var(--accent-gold)", border: "1px solid rgba(184,134,11,0.3)" }}>
                    8-12 anni
                  </span>
                </div>

                <CTAButton
                  href="https://www.amazon.it/Quaderno-degli-Incubi-Incompleti-incompleti/dp/B0GX1MMY1D/ref=sr_1_3?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=11JMU2GLTBTN6&dib=eyJ2IjoiMSJ9.azb1pTbN8FDhFzUu2klilTLCWH0Z0pXrkR_YC7EkEYzV7oCzO90uh2GFujix-kdxg0seMnRjPSmmyHCus8ruhZPB2cJFFm8eCP1t8rK5P34h_a8mZmASGjQqr4xNI0bji4UIBoL9-Khl1T7DhKy2sehPKKVjUiVIlNbqEvZcI2RoWP-Bph-UXfEHcOx7fRUeWyX-esxZVG1GHUzcruI2gMID7_FokrLDAWku9XdiBsOvdfqKWHUZhe4y02JHg1UwXBnzOTzgZHv5uD6AmZo7GwyY0p5B9xhRTjA6QFnujg8.wj_FBV_2KhPqcLF5o1IAWnErUhQQdyrIrL3-8rBP0kQ&dib_tag=se&keywords=james+valentino&qid=1783119161&sprefix=james+valentin%2Caps%2C185&sr=8-3"
                  variant="primary"
                  external
                  aria-label="Acquista Il Quaderno degli Incubi Incompleti su Amazon"
                >
                  📖 Inizia l&apos;Avventura!
                </CTAButton>
              </div>
            </article>

            {/* ── Vol. 2 ── */}
            <article
              className="grid lg:grid-cols-5 gap-12 items-start p-10 rounded-sm"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)", boxShadow: "0 0 60px rgba(139,26,26,0.15)" }}
            >
              {/* Cover */}
              <div className="lg:col-span-2 flex justify-center lg:sticky lg:top-32">
                <div
                  className="relative w-56 h-72 lg:w-64 lg:h-80 rounded-sm overflow-hidden flex items-center justify-center p-4"
                  style={{
                    background: "radial-gradient(ellipse 90% 80% at 50% 30%, #0d1a0d 0%, #0a120a 100%)",
                    border: "1px solid rgba(184,134,11,0.3)",
                    boxShadow: "0 0 40px rgba(139,26,26,0.4), -10px 10px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src="/vendetta-nel-pollaio-cover.png"
                    alt="Copertina di Vendetta nel Pollaio — James Valentino"
                    fill
                    className="object-contain p-2"
                    sizes="256px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div>
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-2" style={{ color: "var(--accent-blood)" }}>
                    Vol. 2
                  </span>
                  <h2 className="font-cinzel font-black text-3xl" style={{ color: "var(--accent-moon)" }}>
                    Vendetta nel Pollaio
                  </h2>
                  <p className="font-crimson text-base mt-2" style={{ color: "var(--accent-gold)" }}>
                    James Valentino · Paure Tascabili
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                  <p>
                    Il secondo volume della collana <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong> porta
                    Leo e Giulia in una fattoria dove il silenzio nasconde qualcosa di oscuro. Un horror
                    originale con atmosfere inquietanti costruite con cura, mai eccessive, perfette per
                    i lettori dagli 8 anni in su.
                  </p>
                  <p>
                    Personaggi veri, imperfetti e coraggiosi, con cui è impossibile non identificarsi.
                    Un ritmo incalzante che rende impossibile posare il libro.
                  </p>
                </div>

                <div
                  className="relative p-8 rounded-sm"
                  style={{ background: "var(--bg-void)", border: "1px solid rgba(139,26,26,0.2)" }}
                >
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
                    Sinossi
                  </span>
                  <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    Leo e Giulia non volevano passare l&apos;estate nella fattoria di zio Remo. Niente
                    wi-fi, niente amici, solo campi, silenzio e un vecchio che sembra sapere tutto senza
                    spiegare niente. E poi c&apos;è il pollaio: una struttura buia, blindata come una
                    prigione, con catene arrugginite e filo spinato. Leo lo vede dalla finestra la prima
                    notte. E vede anche la serratura che sobbalza dall&apos;interno. Come se qualcosa
                    volesse uscire. Quella stessa notte, una gallina parla:{" "}
                    <em style={{ color: "var(--accent-blood)" }}>&ldquo;Anche tu morirai.&rdquo;</em>
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Temi Principali
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {temi2.map((tema) => (
                      <div
                        key={tema.title}
                        className="flex flex-col gap-1 p-4 rounded-sm"
                        style={{ background: "var(--bg-void)", border: "1px solid rgba(184,134,11,0.2)" }}
                      >
                        <span className="font-cinzel font-bold text-sm" style={{ color: "var(--accent-moon)" }}>
                          🐔 {tema.title}
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
                    <span key={tag} className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(139,26,26,0.2)", color: "var(--accent-blood)", border: "1px solid rgba(139,26,26,0.3)" }}>
                      {tag}
                    </span>
                  ))}
                  <span className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(184,134,11,0.15)", color: "var(--accent-gold)", border: "1px solid rgba(184,134,11,0.3)" }}>
                    8-14 anni
                  </span>
                </div>

                <CTAButton
                  href="https://www.amazon.it/gp/product/B0GX94GY2C"
                  variant="primary"
                  external
                  aria-label="Acquista Vendetta nel Pollaio su Amazon"
                >
                  🐔 Scopri la Vendetta!
                </CTAButton>
              </div>
            </article>

            {/* ── Vol. 4 ── */}
            <article
              className="grid lg:grid-cols-5 gap-12 items-start p-10 rounded-sm"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)", boxShadow: "0 0 60px rgba(139,26,26,0.15)" }}
            >
              {/* Cover */}
              <div className="lg:col-span-2 flex justify-center lg:sticky lg:top-32">
                <div
                  className="relative w-56 h-72 lg:w-64 lg:h-80 rounded-sm overflow-hidden flex items-center justify-center p-4"
                  style={{
                    background: "radial-gradient(ellipse 90% 80% at 50% 30%, #0d0d1c 0%, #080812 100%)",
                    border: "1px solid rgba(184,134,11,0.3)",
                    boxShadow: "0 0 40px rgba(139,26,26,0.4), -10px 10px 40px rgba(0,0,0,0.6)",
                  }}
                >
                  <Image
                    src="/non-guardare-nel-pozzo-cover.jpg"
                    alt="Copertina di Non Guardare nel Pozzo — James Valentino"
                    fill
                    className="object-contain p-2"
                    sizes="256px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="lg:col-span-3 flex flex-col gap-8">
                <div>
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-2" style={{ color: "var(--accent-blood)" }}>
                    Vol. 4
                  </span>
                  <h2 className="font-cinzel font-black text-3xl" style={{ color: "var(--accent-moon)" }}>
                    Non Guardare nel Pozzo
                  </h2>
                  <p className="font-crimson text-base mt-2" style={{ color: "var(--accent-gold)" }}>
                    James Valentino · Paure Tascabili
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                  <p>
                    Il quarto volume della collana <strong style={{ color: "var(--accent-moon)" }}>Paure Tascabili</strong> porta
                    Sofia nel cuore oscuro di Napoli, tra vicoli antichi, cisterne romane e una creatura
                    del folklore partenopeo che i napoletani conoscono da secoli: il Munaciello.
                  </p>
                  <p>
                    Una storia di mistero e avventura soprannaturale costruita sul folklore napoletano autentico,
                    con atmosfere inquietanti mai eccessive e un ritmo incalzante capitolo dopo capitolo.
                  </p>
                </div>

                <div
                  className="relative p-8 rounded-sm"
                  style={{ background: "var(--bg-void)", border: "1px solid rgba(139,26,26,0.2)" }}
                >
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
                    Sinossi
                  </span>
                  <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    Sofia non voleva passare l&apos;estate a Napoli. Niente amiche, niente piscina, niente
                    wi-fi. Solo un vecchio palazzo nel centro storico, un cortile ombroso e una nonna che
                    sorride troppo quando parla del pozzo. La prima notte, trova tre monete d&apos;oro antiche
                    sotto il guanciale. Qualcosa gliele ha lasciate. Qualcosa che i napoletani chiamano
                    il Munaciello — piccolo come un bambino, cappuccio rosso in testa. Se lo tratti bene
                    porta fortuna. Se lo fai arrabbiare, il cappuccio diventa nero.{" "}
                    <em style={{ color: "var(--accent-blood)" }}>Sofia lo ha fatto arrabbiare.</em>{" "}
                    Sotto il palazzo, sotto i sampietrini del cortile, sotto il pozzo, una cisterna romana
                    di duemila anni nasconde un segreto che nessuno avrebbe dovuto toccare.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="font-cinzel text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent-blood)" }}>
                    Temi Principali
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {temi4.map((tema) => (
                      <div
                        key={tema.title}
                        className="flex flex-col gap-1 p-4 rounded-sm"
                        style={{ background: "var(--bg-void)", border: "1px solid rgba(184,134,11,0.2)" }}
                      >
                        <span className="font-cinzel font-bold text-sm" style={{ color: "var(--accent-moon)" }}>
                          🕳️ {tema.title}
                        </span>
                        <span className="font-crimson text-base" style={{ color: "var(--accent-ghost)" }}>
                          {tema.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Horror", "Avventura", "Folklore"].map((tag) => (
                    <span key={tag} className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(139,26,26,0.2)", color: "var(--accent-blood)", border: "1px solid rgba(139,26,26,0.3)" }}>
                      {tag}
                    </span>
                  ))}
                  <span className="font-cinzel text-xs tracking-widest uppercase px-3 py-1 rounded-sm" style={{ background: "rgba(184,134,11,0.15)", color: "var(--accent-gold)", border: "1px solid rgba(184,134,11,0.3)" }}>
                    9-14 anni
                  </span>
                </div>

                <CTAButton
                  href="https://www.amazon.it/dp/B0HFYGYHZ2/"
                  variant="primary"
                  external
                  aria-label="Acquista Non Guardare nel Pozzo su Amazon"
                >
                  🕳️ Scendi nel Buio!
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
