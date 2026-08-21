import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per il sito pauretascabili.com.",
  alternates: { canonical: "https://www.pauretascabili.com/privacy-policy" },
  robots: { index: false, follow: false },
};

const LAST_UPDATE = "21 agosto 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2
        className="font-cinzel font-bold text-xl"
        style={{ color: "var(--accent-moon)" }}
      >
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[40vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Privacy Policy"
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
              PRIVACY POLICY
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
              La presente informativa è resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679
              (GDPR) agli utenti che visitano il sito web{" "}
              <strong style={{ color: "var(--accent-moon)" }}>pauretascabili.com</strong>{" "}
              (di seguito &ldquo;il Sito&rdquo;).
            </p>

            <Section title="1. Titolare del Trattamento">
              <p>
                Il Titolare del trattamento dei dati personali è:
              </p>
              <div
                className="p-6 rounded-sm"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)" }}
              >
                <p><strong style={{ color: "var(--accent-moon)" }}>Antonio Andreozzi</strong></p>
                <p>Email: <a href="mailto:info@pauretascabili.com" className="animated-underline" style={{ color: "var(--accent-blood)" }}>info@pauretascabili.com</a></p>
                <p>Sito web: <span style={{ color: "var(--accent-moon)" }}>www.pauretascabili.com</span></p>
              </div>
            </Section>

            <Section title="2. Dati Raccolti e Finalità del Trattamento">
              <p>Il Sito è un sito statico che <strong style={{ color: "var(--accent-moon)" }}>non raccoglie né elabora dati personali direttamente</strong>. Non sono presenti sistemi di registrazione utenti, newsletter, analytics o cookie di profilazione.</p>
              <p>Le uniche categorie di dati trattati sono le seguenti:</p>

              <div className="flex flex-col gap-6 mt-2">
                <div className="p-5 rounded-sm" style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p><strong style={{ color: "var(--accent-moon)" }}>a) Dati di navigazione (log Cloudflare)</strong></p>
                  <p className="mt-2">
                    Il Sito è ospitato su Cloudflare Pages. Come qualsiasi servizio web, il sistema di hosting
                    registra automaticamente alcuni dati tecnici necessari alla fornitura del servizio:
                    indirizzo IP, browser utilizzato, sistema operativo, data e ora di accesso, pagina richiesta.
                  </p>
                  <p className="mt-2"><strong style={{ color: "var(--accent-moon)" }}>Finalità:</strong> sicurezza informatica, prevenzione abusi, corretta erogazione del servizio.</p>
                  <p className="mt-1"><strong style={{ color: "var(--accent-moon)" }}>Base giuridica:</strong> legittimo interesse (art. 6, par. 1, lett. f GDPR).</p>
                  <p className="mt-1"><strong style={{ color: "var(--accent-moon)" }}>Conservazione:</strong> per il tempo strettamente necessario alle finalità di sicurezza, come da policy di Cloudflare.</p>
                </div>

                <div className="p-5 rounded-sm" style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.15)" }}>
                  <p><strong style={{ color: "var(--accent-moon)" }}>b) Dati di contatto (email)</strong></p>
                  <p className="mt-2">
                    Il Sito mette a disposizione un modulo di contatto che, al momento dell&apos;invio,
                    apre il client di posta elettronica dell&apos;utente precompilando i campi del messaggio.{" "}
                    <strong style={{ color: "var(--accent-moon)" }}>Nessun dato viene trasmesso ai server del Sito</strong>:
                    l&apos;invio del messaggio avviene tramite il servizio email dell&apos;utente e viene
                    ricevuto nella casella di posta del Titolare.
                  </p>
                  <p className="mt-2">
                    I dati contenuti nelle email ricevute (nome, indirizzo email, contenuto del messaggio)
                    vengono trattati esclusivamente per rispondere alla richiesta.
                  </p>
                  <p className="mt-2"><strong style={{ color: "var(--accent-moon)" }}>Finalità:</strong> gestione delle comunicazioni e delle richieste degli utenti.</p>
                  <p className="mt-1"><strong style={{ color: "var(--accent-moon)" }}>Base giuridica:</strong> esecuzione di misure precontrattuali e legittimo interesse (art. 6, par. 1, lett. b e f GDPR).</p>
                  <p className="mt-1"><strong style={{ color: "var(--accent-moon)" }}>Conservazione:</strong> per il tempo necessario a gestire la richiesta e comunque non oltre 2 anni.</p>
                </div>
              </div>
            </Section>

            <Section title="3. Dati Non Raccolti">
              <p>Il Sito <strong style={{ color: "var(--accent-moon)" }}>non raccoglie</strong> le seguenti tipologie di dati:</p>
              <ul className="flex flex-col gap-2 list-none">
                {[
                  "Dati tramite sistemi di analytics (es. Google Analytics, Facebook Pixel)",
                  "Dati per finalità di marketing o profilazione",
                  "Categorie particolari di dati (dati sensibili)",
                  "Dati di minori al di sotto dei 14 anni",
                  "Newsletter o iscrizioni a mailing list",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-blood)" }} aria-hidden="true">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="4. Responsabili del Trattamento (Sub-processor)">
              <p>Il Titolare si avvale del seguente responsabile esterno del trattamento:</p>
              <div className="p-5 rounded-sm" style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.15)" }}>
                <p><strong style={{ color: "var(--accent-moon)" }}>Cloudflare, Inc.</strong></p>
                <p>101 Townsend St, San Francisco, CA 94107, USA</p>
                <p className="mt-2">Cloudflare agisce come responsabile del trattamento per la fornitura dei servizi di hosting e CDN.
                  Il trasferimento dei dati negli USA avviene nel rispetto delle garanzie previste dal GDPR
                  (Data Processing Addendum e Standard Contractual Clauses).</p>
                <p className="mt-2">
                  <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                    Privacy Policy di Cloudflare →
                  </a>
                </p>
              </div>
            </Section>

            <Section title="5. Trasferimento di Dati Extra-UE">
              <p>
                I dati di navigazione elaborati da Cloudflare possono essere trattati su server situati
                anche al di fuori dell&apos;Unione Europea. Cloudflare garantisce un livello adeguato di
                protezione tramite le Standard Contractual Clauses approvate dalla Commissione Europea.
              </p>
            </Section>

            <Section title="6. Diritti dell'Interessato">
              <p>Ai sensi degli artt. 15–22 del GDPR, hai il diritto di:</p>
              <ul className="flex flex-col gap-2 list-none">
                {[
                  "Accedere ai tuoi dati personali (art. 15)",
                  "Rettificare i dati inesatti (art. 16)",
                  "Ottenere la cancellazione dei dati («diritto all'oblio») (art. 17)",
                  "Richiedere la limitazione del trattamento (art. 18)",
                  "Ottenere la portabilità dei dati (art. 20)",
                  "Opporti al trattamento (art. 21)",
                  "Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: "var(--accent-blood)" }} aria-hidden="true">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Per esercitare i tuoi diritti, scrivi a:{" "}
                <a href="mailto:info@pauretascabili.com" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                  info@pauretascabili.com
                </a>
              </p>
              <p>
                Hai inoltre il diritto di proporre reclamo al{" "}
                <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                  Garante per la protezione dei dati personali
                </a>
                {" "}(www.garanteprivacy.it).
              </p>
            </Section>

            <Section title="7. Cookie">
              <p>
                Per informazioni dettagliate sull&apos;uso dei cookie da parte di questo Sito, consulta la{" "}
                <Link href="/cookie-policy" className="animated-underline" style={{ color: "var(--accent-blood)" }}>
                  Cookie Policy
                </Link>.
              </p>
            </Section>

            <Section title="8. Modifiche alla Privacy Policy">
              <p>
                Il Titolare si riserva il diritto di aggiornare la presente informativa in qualsiasi momento.
                Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
                Si invita a consultare periodicamente questa pagina.
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
                Redatto in conformità al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
