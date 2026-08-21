import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie del sito pauretascabili.com, ai sensi del Provvedimento del Garante Privacy dell'8 gennaio 2022.",
  alternates: { canonical: "https://www.pauretascabili.com/cookie-policy" },
  robots: { index: false, follow: false },
};

const LAST_UPDATE = "21 agosto 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
        {title}
      </h2>
      <div
        className="font-crimson text-lg leading-relaxed flex flex-col gap-3"
        style={{ color: "var(--accent-ghost)" }}
      >
        {children}
      </div>
    </section>
  );
}

export default function CookiePolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Cookie Policy"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Legale
            </span>
            <h1
              className="font-cinzel font-black"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                color: "var(--accent-moon)",
                lineHeight: 1.1,
              }}
            >
              COOKIE POLICY
            </h1>
            <p className="mt-4 font-crimson text-base italic" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
              Ultimo aggiornamento: {LAST_UPDATE}
            </p>
          </div>
        </section>

        {/* Contenuto */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col gap-12">

            {/* Intro */}
            <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
              La presente Cookie Policy descrive come il sito{" "}
              <strong style={{ color: "var(--accent-moon)" }}>pauretascabili.com</strong>{" "}
              utilizza i cookie e tecnologie analoghe, in conformità all&apos;art. 122 del D.Lgs. 196/2003
              (Codice Privacy) e al Provvedimento del Garante per la protezione dei dati personali
              dell&apos;8 gennaio 2022 recante «Linee guida cookie e altri strumenti di tracciamento».
            </p>

            <Section title="1. Cosa Sono i Cookie">
              <p>
                I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente inviano
                al suo browser, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti
                alla visita successiva. Consentono ai siti di ricordare le preferenze dell&apos;utente
                (lingua, dimensione caratteri, ecc.) e, nella loro versione &ldquo;tecnica&rdquo;,
                sono necessari al corretto funzionamento del sito.
              </p>
            </Section>

            <Section title="2. Cookie Utilizzati da Questo Sito">
              {/* Riepilogo */}
              <div
                className="p-5 rounded-sm"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.3)", boxShadow: "0 0 20px rgba(184,134,11,0.08)" }}
              >
                <p className="font-cinzel text-sm" style={{ color: "var(--accent-gold)" }}>
                  Sintesi: questo sito non utilizza cookie di profilazione né cookie di analisi statistica.
                  Non è presente alcun sistema di tracciamento pubblicitario.
                </p>
              </div>

              <p>
                Il sito è realizzato come applicazione statica (Next.js, esportazione statica) ospitata
                su Cloudflare Pages. <strong style={{ color: "var(--accent-moon)" }}>Non imposta cookie propri</strong>.
              </p>
              <p>
                Cloudflare, in qualità di fornitore dell&apos;infrastruttura di hosting e CDN, può impostare
                i seguenti cookie tecnici di sicurezza:
              </p>

              {/* Tabella cookie */}
              <div className="overflow-x-auto">
                <table className="w-full text-base" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(139,26,26,0.3)" }}>
                      {["Nome cookie", "Fornitore", "Tipologia", "Durata", "Scopo"].map((h) => (
                        <th key={h} className="text-left py-3 pr-4 font-cinzel text-xs tracking-wider uppercase" style={{ color: "var(--accent-blood)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "__cf_bm",
                        provider: "Cloudflare",
                        type: "Tecnico – necessario",
                        duration: "30 minuti",
                        purpose: "Protezione da bot e abusi (Bot Management)",
                      },
                      {
                        name: "__cflb",
                        provider: "Cloudflare",
                        type: "Tecnico – necessario",
                        duration: "Sessione",
                        purpose: "Bilanciamento del carico tra server (Load Balancing)",
                      },
                    ].map((row, i) => (
                      <tr key={row.name} style={{ borderBottom: "1px solid rgba(74,63,92,0.3)", background: i % 2 === 0 ? "rgba(17,14,26,0.4)" : "transparent" }}>
                        <td className="py-3 pr-4 font-crimson" style={{ color: "var(--accent-moon)", fontFamily: "monospace" }}>{row.name}</td>
                        <td className="py-3 pr-4 font-crimson" style={{ color: "var(--accent-ghost)" }}>{row.provider}</td>
                        <td className="py-3 pr-4 font-crimson" style={{ color: "var(--accent-ghost)" }}>{row.type}</td>
                        <td className="py-3 pr-4 font-crimson" style={{ color: "var(--accent-ghost)" }}>{row.duration}</td>
                        <td className="py-3 font-crimson" style={{ color: "var(--accent-ghost)" }}>{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                I cookie tecnici necessari non richiedono il consenso dell&apos;utente ai sensi
                dell&apos;art. 122, comma 1, del D.Lgs. 196/2003 e del Provvedimento del Garante
                dell&apos;8 gennaio 2022.
              </p>
            </Section>

            <Section title="3. Cookie di Terze Parti">
              <p>
                Il sito <strong style={{ color: "var(--accent-moon)" }}>non carica script o risorse da domini di terze parti</strong>{" "}
                a runtime. I font tipografici (Cinzel Decorative e Crimson Pro) sono scaricati da
                Google Fonts in fase di compilazione del sito e serviti direttamente da Cloudflare:
                <strong style={{ color: "var(--accent-moon)" }}> il browser dell&apos;utente non contatta mai i server Google</strong>.
              </p>
              <p>
                I link ai social network (Facebook, Instagram, YouTube, LinkedIn, X, Pinterest) e ad
                Amazon sono semplici link che aprono siti esterni in una nuova scheda. Questi siti
                terzi potranno impostare propri cookie secondo le rispettive privacy policy, sulle
                quali il Titolare non ha alcun controllo.
              </p>
            </Section>

            <Section title="4. Perché Non è Presente un Banner Cookie">
              <p>
                In conformità al Provvedimento del Garante dell&apos;8 gennaio 2022, il consenso
                tramite banner è richiesto soltanto per i cookie tecnici non necessari, per i cookie
                analitici non anonimizzati e per i cookie di profilazione/marketing.
              </p>
              <p>
                Poiché questo sito utilizza esclusivamente cookie tecnici strettamente necessari
                (impostati da Cloudflare per ragioni di sicurezza), <strong style={{ color: "var(--accent-moon)" }}>non è necessario
                raccogliere il consenso</strong> e pertanto non è presente alcun banner cookie.
              </p>
            </Section>

            <Section title="5. Come Gestire o Disabilitare i Cookie">
              <p>
                Puoi gestire, disabilitare o eliminare i cookie direttamente dalle impostazioni del
                tuo browser. Di seguito le istruzioni per i browser più comuni:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { name: "Mozilla Firefox", url: "https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" },
                  { name: "Apple Safari", url: "https://support.apple.com/it-it/guide/safari/sfri11471/mac" },
                  { name: "Microsoft Edge", url: "https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie" },
                ].map((b) => (
                  <li key={b.name} className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-blood)" }} aria-hidden="true">▸</span>
                    <a href={b.url} target="_blank" rel="noopener noreferrer" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                      {b.name}
                    </a>
                  </li>
                ))}
              </ul>
              <p>
                Attenzione: la disabilitazione dei cookie tecnici potrebbe compromettere il corretto
                funzionamento di alcune funzionalità del Sito o dei servizi di sicurezza.
              </p>
            </Section>

            <Section title="6. Titolare del Trattamento">
              <p>
                Per maggiori informazioni sul trattamento dei dati personali, consulta la{" "}
                <Link href="/privacy-policy" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                  Privacy Policy
                </Link>{" "}
                oppure contatta il Titolare:
              </p>
              <div
                className="p-5 rounded-sm"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)" }}
              >
                <p><strong style={{ color: "var(--accent-moon)" }}>Antonio Andreozzi</strong></p>
                <p>Email: <a href="mailto:info@pauretascabili.com" className="animated-underline" style={{ color: "var(--accent-blood)" }}>info@pauretascabili.com</a></p>
              </div>
            </Section>

            <Section title="7. Modifiche alla Cookie Policy">
              <p>
                Il Titolare si riserva di modificare la presente Cookie Policy in qualsiasi momento,
                anche in risposta a variazioni normative o tecniche. Le modifiche saranno pubblicate
                su questa pagina con indicazione della data di aggiornamento.
              </p>
            </Section>

            {/* Data aggiornamento */}
            <div
              className="p-6 rounded-sm text-center"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(184,134,11,0.2)" }}
            >
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase" style={{ color: "var(--accent-gold)" }}>
                Documento aggiornato al {LAST_UPDATE}
              </p>
              <p className="font-crimson text-base mt-2" style={{ color: "var(--accent-ghost)" }}>
                Redatta in conformità all&apos;art. 122 D.Lgs. 196/2003 e al Provvedimento del Garante Privacy dell&apos;8 gennaio 2022.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
