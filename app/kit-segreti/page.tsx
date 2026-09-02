import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";

export const metadata: Metadata = {
  title: "Kit Segreti — Paure Tascabili",
  description:
    "Strumenti digitali per genitori e figli. Kit di conversazione basati sul folklore italiano per affrontare le paure reali dei bambini dagli 8 ai 15 anni.",
  alternates: { canonical: "https://www.pauretascabili.com/kit-segreti" },
};

const kits = [
  {
    id: "codice-delle-paure",
    eyebrow: "Kit Genitori · Figli 8–15 anni",
    title: "Il Codice delle Paure",
    subtitle: "8 mostri del folklore italiano come chiave per parlare delle paure reali dei tuoi figli",
    description:
      "42 pagine A4 stampabili. Otto creature del folklore italiano — dalla Janara all'Uomo Nero — diventano la porta d'ingresso per conversazioni vere su ansia, bullismo, inadeguatezza e paura del futuro. Script pronti, 30 domande per tema, segnali comportamentali per età e un rituale serale da 5 minuti.",
    features: [
      "8 mostri × 2 pagine — origini, paura reale, script pronti, domande per età",
      "30 domande divise per tema: scuola, amici, notti, corpo, futuro",
      "Segnali per età: 8–10, 11–12, 13–15 anni",
      "Il Rituale delle 5 Minuti — abitudine serale per tenersi vicini",
      "4 attività creative da fare insieme (Il Patto dei Mostri, La Lettera al Mostro…)",
      "Basato su Bettelheim, Jung, Narrative Therapy, Gottman",
    ],
    price: "14,90 €",
    tag: "Disponibile ora",
    available: true,
    gumroadUrl: "https://gumroad.com",
    icon: "🌑",
    badge: "BESTSELLER",
  },
];

const comingSoon = [
  {
    icon: "🧿",
    title: "Il Codice dei Conflitti",
    desc: "Per famiglie con figli 10–15 anni. Come trasformare le liti in conversazioni usando il folklore italiano come linguaggio comune.",
    tag: "In arrivo",
  },
  {
    icon: "📖",
    title: "Il Grimorio della Classe",
    desc: "Per insegnanti e educatori. Storie del folklore italiano come strumento didattico — leggende, attività e domande per la classe.",
    tag: "In arrivo",
  },
  {
    icon: "🌀",
    title: "Il Codice dell'Adolescente",
    desc: "Per genitori di figli 13–18 anni. Come restare in connessione quando il dialogo sembra impossibile.",
    tag: "In arrivo",
  },
];

export default function KitSegretiPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <section
          className="relative min-h-[55vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Kit Segreti"
        >
          <GrainOverlay />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 60% 40%, rgba(139,26,26,0.08) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Strumenti digitali per famiglie
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
              KIT SEGRETI
            </h1>
            <p
              className="mt-6 font-crimson text-xl italic max-w-2xl"
              style={{ color: "var(--accent-ghost)" }}
            >
              Non sono libri. Sono strumenti. Basati sul folklore italiano antico e sulla psicologia moderna.
              Per i genitori che vogliono davvero capire i loro figli.
            </p>
          </div>
        </section>

        {/* Kit principale */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-void)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col gap-16">

            {kits.map((kit) => (
              <article
                key={kit.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
              >
                {/* Visual */}
                <div
                  className="relative flex items-center justify-center rounded-sm overflow-hidden"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(139,26,26,0.3)",
                    minHeight: "420px",
                    boxShadow: "0 0 80px rgba(139,26,26,0.12)",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(139,26,26,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-6 p-12 text-center">
                    <span style={{ fontSize: "5rem" }}>{kit.icon}</span>
                    <div>
                      <p
                        className="font-cinzel text-[10px] tracking-[0.35em] uppercase mb-3"
                        style={{ color: "var(--accent-blood)" }}
                      >
                        {kit.eyebrow}
                      </p>
                      <h2
                        className="font-cinzel font-black"
                        style={{
                          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                          color: "var(--accent-moon)",
                          lineHeight: 1.15,
                        }}
                      >
                        {kit.title}
                      </h2>
                    </div>
                    <div
                      className="w-16 h-px"
                      style={{ background: "var(--accent-blood)", opacity: 0.5 }}
                    />
                    <p
                      className="font-crimson text-lg italic"
                      style={{ color: "var(--accent-ghost)", maxWidth: "300px" }}
                    >
                      {kit.subtitle}
                    </p>
                    <div
                      className="font-cinzel font-black text-3xl"
                      style={{ color: "var(--accent-moon)" }}
                    >
                      {kit.price}
                    </div>
                    {kit.badge && (
                      <span
                        className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-4 py-1.5 rounded-sm"
                        style={{
                          background: "rgba(184,134,11,0.15)",
                          color: "#D4AF37",
                          border: "1px solid rgba(184,134,11,0.35)",
                        }}
                      >
                        ★ {kit.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Contenuto */}
                <div className="flex flex-col gap-8 py-4">
                  <div>
                    <span
                      className="font-cinzel text-[10px] tracking-[0.35em] uppercase px-3 py-1 rounded-sm inline-block mb-5"
                      style={{
                        background: "rgba(139,26,26,0.2)",
                        color: "var(--accent-blood)",
                        border: "1px solid rgba(139,26,26,0.4)",
                      }}
                    >
                      {kit.tag}
                    </span>
                    <p
                      className="font-crimson text-lg leading-relaxed"
                      style={{ color: "var(--accent-ghost)" }}
                    >
                      {kit.description}
                    </p>
                  </div>

                  <div
                    className="p-6 rounded-sm"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid rgba(139,26,26,0.2)",
                    }}
                  >
                    <p
                      className="font-cinzel text-[10px] tracking-[0.3em] uppercase mb-4"
                      style={{ color: "var(--accent-blood)" }}
                    >
                      Cosa trovi dentro
                    </p>
                    <ul className="flex flex-col gap-3" role="list">
                      {kit.features.map((f) => (
                        <li
                          key={f}
                          className="font-crimson text-base leading-snug flex items-start gap-3"
                          style={{ color: "var(--accent-ghost)" }}
                        >
                          <span style={{ color: "var(--accent-blood)", flexShrink: 0, marginTop: "2px" }}>›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-4">
                    <a
                      href={kit.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 font-cinzel text-sm tracking-widest uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                      style={{
                        background: "var(--accent-blood)",
                        color: "var(--accent-moon)",
                        boxShadow: "0 0 30px rgba(139,26,26,0.3)",
                      }}
                      aria-label={`Acquista ${kit.title} — ${kit.price}`}
                    >
                      Acquista ora — {kit.price}
                    </a>
                    <p
                      className="font-crimson text-sm text-center italic"
                      style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
                    >
                      PDF stampabile · Consegna immediata via email · Pagamento sicuro
                    </p>
                  </div>

                  <div
                    className="p-5 rounded-sm"
                    style={{
                      background: "rgba(184,134,11,0.06)",
                      border: "1px solid rgba(184,134,11,0.2)",
                    }}
                  >
                    <p
                      className="font-cinzel text-[10px] tracking-[0.25em] uppercase mb-2"
                      style={{ color: "#D4AF37" }}
                    >
                      Su cosa si basa
                    </p>
                    <p
                      className="font-crimson text-sm leading-relaxed italic"
                      style={{ color: "var(--accent-ghost)" }}
                    >
                      Bruno Bettelheim · Carl Jung · Narrative Therapy (White & Epston) · John Gottman ·
                      Ernesto De Martino · Folklore autentico del Sud Italia
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* In arrivo */}
        <section
          className="relative section-padding"
          style={{ background: "var(--bg-dark)" }}
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span
                className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
                style={{ color: "var(--accent-blood)" }}
              >
                Prossimamente
              </span>
              <h2
                className="font-cinzel font-black"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3rem)",
                  color: "var(--accent-moon)",
                }}
              >
                Altri Kit in Arrivo
              </h2>
              <p
                className="font-crimson text-lg italic mt-4 max-w-xl mx-auto"
                style={{ color: "var(--accent-ghost)" }}
              >
                Il folklore italiano come strumento per ogni fase della crescita.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {comingSoon.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-4 p-8 rounded-sm"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid rgba(139,26,26,0.15)",
                    opacity: 0.7,
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }} aria-hidden="true">{item.icon}</span>
                  <span
                    className="font-cinzel text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-sm self-start"
                    style={{
                      background: "rgba(155,155,176,0.1)",
                      color: "var(--accent-ghost)",
                      border: "1px solid rgba(155,155,176,0.2)",
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="font-cinzel font-bold text-lg"
                    style={{ color: "var(--accent-moon)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="font-crimson text-base leading-relaxed"
                    style={{ color: "var(--accent-ghost)" }}
                  >
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>

            <div
              className="mt-12 p-10 rounded-sm text-center flex flex-col items-center gap-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid rgba(184,134,11,0.25)",
                boxShadow: "0 0 40px rgba(184,134,11,0.06)",
              }}
            >
              <p
                className="font-cinzel font-bold text-xl"
                style={{ color: "var(--accent-moon)" }}
              >
                Vuoi sapere quando escono?
              </p>
              <p
                className="font-crimson text-lg italic"
                style={{ color: "var(--accent-ghost)" }}
              >
                Seguici sui social — i Kit Segreti vengono annunciati lì per primi.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://www.instagram.com/pauretascabili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:opacity-80"
                  style={{
                    border: "1px solid rgba(139,26,26,0.5)",
                    color: "var(--accent-moon)",
                  }}
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/19AZyYxTMa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:opacity-80"
                  style={{
                    border: "1px solid rgba(139,26,26,0.5)",
                    color: "var(--accent-moon)",
                  }}
                >
                  Facebook
                </a>
                <a
                  href="https://www.tiktok.com/@pauretascabili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-cinzel text-xs tracking-widest uppercase px-6 py-3 rounded-sm transition-all hover:opacity-80"
                  style={{
                    border: "1px solid rgba(139,26,26,0.5)",
                    color: "var(--accent-moon)",
                  }}
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
