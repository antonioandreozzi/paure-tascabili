import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "FAQ — Domande Frequenti",
  description:
    "Domande frequenti su Paure Tascabili: età consigliata, contenuti, dove acquistare, la serie di libri horror e mistero per ragazzi di Antonio Andreozzi.",
  alternates: { canonical: "https://www.pauretascabili.com/faq" },
};

const faqs = [
  {
    question: "A che età sono adatti i libri Paure Tascabili?",
    answer:
      "I libri della collana Paure Tascabili sono pensati per ragazzi dagli 8 ai 14 anni. Il contenuto è adatto all'età: nessuna violenza gratuita, solo brividi sani che stimolano l'immaginazione.",
  },
  {
    question: "I libri sono davvero spaventosi?",
    answer:
      "Dipende! Sono storie di mistero e paura, ma calibrate per i giovani lettori. L'obiettivo è emozionare, non traumatizzare. Molti bambini che 'non amano leggere' diventano lettori appassionati proprio grazie a questi libri.",
  },
  {
    question: "Dove posso acquistare i libri?",
    answer:
      "I libri Paure Tascabili sono disponibili su Amazon. Puoi trovare Il Quaderno degli Incubi Incompleti al link dedicato nella pagina Singoli Volumi.",
  },
  {
    question: "Ci sono altri volumi in arrivo?",
    answer:
      "Sì! Antonio Andreozzi sta lavorando a nuovi volumi della collana. Segui Paure Tascabili sui social per essere il primo a sapere quando usciranno.",
  },
  {
    question: "Posso usare i libri a scuola?",
    answer:
      "Assolutamente sì! I libri Paure Tascabili sono ottimi strumenti didattici. Nella sezione Risorse Gratuite troverai materiali per insegnanti e genitori.",
  },
  {
    question: "Come posso contattare l'autore?",
    answer:
      "Puoi contattare Antonio Andreozzi tramite il modulo nella pagina Contatti, oppure sui suoi profili social: Facebook, Instagram, YouTube.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="FAQ — Domande Frequenti"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4" style={{ color: "var(--accent-blood)" }}>
              Hai Dubbi?
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
              FAQ
            </h1>
          </div>
        </section>

        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-3xl mx-auto px-6 flex flex-col gap-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-sm overflow-hidden"
                style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.2)" }}
              >
                <summary
                  className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-[var(--accent-blood)]/10 transition-colors"
                >
                  <h2 className="font-cinzel font-bold text-base" style={{ color: "var(--accent-moon)" }}>
                    {faq.question}
                  </h2>
                  <span className="font-cinzel text-lg flex-shrink-0" style={{ color: "var(--accent-blood)" }} aria-hidden="true">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <div className="w-full h-[1px] mb-4" style={{ background: "rgba(139,26,26,0.2)" }} />
                  <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}

            <div
              className="mt-8 p-8 rounded-sm text-center flex flex-col items-center gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(139,26,26,0.15)" }}
            >
              <h2 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-moon)" }}>
                Non hai trovato risposta?
              </h2>
              <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)" }}>
                Scrivimi direttamente — rispondo sempre!
              </p>
              <CTAButton href="/contatti" variant="primary" aria-label="Vai alla pagina contatti">
                Contattami
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
