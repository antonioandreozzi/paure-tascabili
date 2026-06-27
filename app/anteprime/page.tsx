import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import BookReader, { type BookPage } from "@/components/shared/BookReader";

export const metadata: Metadata = {
  title: "Anteprime",
  description:
    "Leggi in anteprima il primo capitolo de Il Quaderno degli Incubi Incompleti di Antonio Andreozzi. Scopri Nathan, Emily e il racconto de La Stanza Senza Fine.",
  alternates: { canonical: "https://www.pauretascabili.com/anteprime" },
};

const chapter = {
  number: "1",
  title: "Emily Dice di Non Avere Paura... Ma È Sicura?",
  paragraphs: [
    "Nathan Parker aveva sempre la testa piena di storie. A dodici anni, non poteva definirsi un bambino normale, ma a lui andava bene così. Mentre i suoi compagni passavano il pomeriggio a giocare a calcio o ai videogiochi, lui era seduto alla sua scrivania, con un quaderno aperto davanti e una penna tra le dita.",
    "I suoi racconti erano strani, misteriosi, a volte anche un po' paurosi. Non lo faceva per spaventare gli altri — beh, forse un po' — ma perché era così che vedeva il mondo. Per Nathan, ogni ombra nel corridoio poteva nascondere un mostro, e ogni scricchiolio di notte poteva essere un fantasma. Non era spaventato. Era affascinato.",
    "“Ma chi se ne importa”, diceva ogni volta che sua sorella Emily lo prendeva in giro. “Se fossi normale, che noia sarebbe!”",
    "Una sera Emily stava seduta sul letto, abbracciando il suo coniglio di peluche. Aveva la solita espressione da “Non mi interessa”, ma Nathan conosceva bene quella faccia. Sapeva che dietro quegli occhi azzurri c'era una curiosità irrefrenabile.",
    "“Allora?” disse, con un tono che cercava di sembrare disinteressato. “Hai scritto qualcosa di nuovo o no, signor Paura?”",
    "Nathan sorrise. “Forse sì. Ma non credo che sia per te. È... troppo spaventoso.”",
    "Emily aggrottò la fronte. “Io non ho paura. Sei tu che non sai spaventare, ecco tutto.”",
    "Nathan rise. “Ah, davvero? Va bene, allora ascolta. Ma non venire a svegliarmi stanotte quando non riuscirai a dormire, okay?”",
    "Emily sbuffò. “Inizia e basta!”",
    "Nathan si sistemò sul bordo del letto e iniziò:",
    "— La Stanza Senza Fine —",
    "“Era una notte come tante altre, e Charlie, un ragazzino di dieci anni, si era infilato a letto con la sensazione che qualcosa non andasse. La sua stanza sembrava normale: il poster del suo film preferito appeso al muro, la scrivania piena di quaderni e matite, e la porta chiusa, come sempre. Ma c'era qualcosa di diverso.",
    "Quando Charlie si svegliò nel cuore della notte, non capì subito cosa fosse. Si strofinò gli occhi e guardò l'orologio: segnava le 3:33. Si girò per tornare a dormire, ma qualcosa attirò la sua attenzione.",
    "La porta della sua stanza era aperta.",
    "'Strano,' pensò. 'L'avevo chiusa.'",
    "Charlie scese dal letto, sentendo il pavimento gelido sotto i piedi. Aprì la porta per controllare il corridoio, ma non c'era nessun corridoio. Al suo posto, c'era... la sua stanza.",
    "Era identica, ma con una differenza: sul letto c'era un'ombra. Un'ombra che non si muoveva.",
    "Charlie provò a gridare, ma la sua voce non usciva. Chiuse la porta di scatto e si ritrovò di nuovo nella sua stanza. Ma ora, il poster era diverso: invece del suo film preferito, mostrava una figura con un volto nero e occhi luminosi.",
    "Charlie aprì di nuovo la porta, e di nuovo si ritrovò nella stanza. Ogni volta che provava ad uscire, qualcosa cambiava: il letto si spostava, i colori delle pareti diventavano più scuri, e le ombre si muovevano... si avvicinavano.",
    "Alla fine, Charlie capì la verità. Non era più nella sua stanza. Era in un luogo che si travestiva da stanza, un labirinto che lo teneva prigioniero. E la porta non era una via d'uscita. Era un invito a entrare più a fondo.”",
    "Nathan si fermò e guardò Emily.",
    "Lei era immobile, gli occhi spalancati. “E... poi?” sussurrò.",
    "Nathan scrollò le spalle. “Poi basta. È un incubo incompleto.”",
    "Emily lo fissò, stringendo il coniglio di peluche con forza. “Non è giusto! Deve uscire da lì! Charlie non può rimanere intrappolato!”",
    "“Beh”, disse Nathan, alzandosi. “Forse la prossima volta troverò un finale. O forse no.”",
    "Emily lanciò un cuscino nella sua direzione, ma Nathan era già fuori dalla stanza, ridendo tra sé. Quella notte, però, sentì i passi di Emily nel corridoio. La sua voce tremante lo svegliò.",
    "“Nathan... posso dormire nel tuo letto?”",
    "Nathan sorrise. Forse non era un autore famoso, ma una cosa era certa: i suoi racconti funzionavano.",
  ],
};

const PARAGRAPHS_PER_PAGE = 3;

const bookPages: BookPage[] = (() => {
  const pages: BookPage[] = [];
  for (let i = 0; i < chapter.paragraphs.length; i += PARAGRAPHS_PER_PAGE) {
    const slice = chapter.paragraphs.slice(i, i + PARAGRAPHS_PER_PAGE);
    pages.push({
      paragraphs: slice,
      ...(i === 0
        ? { chapterLabel: `Capitolo ${chapter.number}`, chapterTitle: chapter.title }
        : {}),
    });
  }
  return pages;
})();

export default function AnteprimeePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[50vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Anteprime"
        >
          <GrainOverlay />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Assaggi di Oscurità
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
              ANTEPRIME
            </h1>
            <p className="mt-6 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>
              Entra nel buio. Leggi le prime pagine e decidi... se hai il coraggio di continuare.
            </p>
          </div>
        </section>

        {/* Intro + copertina */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <div
                className="relative w-40 sm:w-full rounded-sm overflow-hidden"
                style={{
                  aspectRatio: "1160 / 1754",
                  border: "1px solid rgba(184,134,11,0.3)",
                  boxShadow: "0 0 40px rgba(139,26,26,0.4), -10px 10px 40px rgba(0,0,0,0.6)",
                }}
              >
                <Image
                  src="/anteprima-quaderno-cover.jpeg"
                  alt="Copertina de Il Quaderno degli Incubi Incompleti — due bambini spaventati davanti a un quaderno aperto in soffitta, con una mano d'ombra dietro una porta"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 160px, 280px"
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-3">
              <span className="font-cinzel text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent-blood)" }}>
                Anteprima — Volume 1
              </span>
              <h2 className="font-cinzel font-black text-3xl sm:text-4xl" style={{ color: "var(--accent-moon)" }}>
                Il Quaderno degli Incubi Incompleti
              </h2>
              <p className="font-crimson italic text-xl" style={{ color: "var(--accent-gold)" }}>
                Emily Dice di Non Avere Paura... Ma È Sicura?
              </p>
            </div>
          </div>
        </section>

        {/* Il libro sfogliabile */}
        <section className="relative section-padding" style={{ background: "var(--bg-dark)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <span
                className="font-cinzel text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--accent-blood)" }}
              >
                Sfoglia l&apos;Anteprima
              </span>
              <p className="font-crimson italic text-base" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
                Usa le freccette ← → della tastiera, i bottoni o lo slider per girare pagina.
              </p>
            </div>
            <BookReader pages={bookPages} title="Il Quaderno degli Incubi Incompleti" />

            <div className="flex justify-center mt-4">
              <CTAButton
                href="https://amzn.to/4iFM7TY"
                variant="primary"
                external
                aria-label="Acquista Il Quaderno degli Incubi Incompleti su Amazon per leggere il seguito"
              >
                Continua a Leggere su Amazon
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Altre anteprime */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div
              className="p-10 rounded-sm text-center flex flex-col items-center gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid rgba(155,155,176,0.15)" }}
            >
              <h3 className="font-cinzel font-bold text-xl" style={{ color: "var(--accent-ghost)" }}>
                Altre Anteprime in Arrivo...
              </h3>
              <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)", opacity: 0.6 }}>
                Nuovi volumi e nuove storie presto disponibili.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
