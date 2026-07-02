import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import GrainOverlay from "@/components/shared/GrainOverlay";
import CTAButton from "@/components/shared/CTAButton";
import BookReader, { type BookPage } from "@/components/shared/BookReader";

export const metadata: Metadata = {
  title: "Le Stanze dei Segreti",
  description:
    "Apri la porta e scopri quello che nessuno racconta: personaggi nascosti, luoghi misteriosi, magie segrete e anteprime da brividi. Leggi 'Il Primo Autore', il racconto di Timoteo e del quaderno maledetto.",
  alternates: { canonical: "https://www.pauretascabili.com/le-stanze" },
};

const chapters = [
  {
    number: "I",
    title: "La Macchia che Divenne Storia",
    paragraphs: [
      "Nel villaggio di Ombraferma, dove le case avevano tetti storti, le porte scricchiolavano anche quando erano chiuse, e la nebbia sembrava non voler mai andare via, viveva un ragazzo un po'... particolare.",
      "Il suo nome era Timoteo.",
      "Aveva dodici anni, una mantellina sempre troppo grande per lui, i capelli arruffati come se ci dormisse dentro, e le mani perennemente coperte d'inchiostro, anche se giurava di essersi appena lavato.",
      "Timoteo era un apprendista scrivano. Non sapeva usare una spada, inciampava ogni volta che tentava di salire su un cavallo e diceva che le battaglie lo facevano starnutire. Ma dategli una pergamena, una penna, e una bottiglietta d'inchiostro (magari non rovesciata sul pavimento), e avrebbe creato un intero mondo in una sola mattinata.",
      "Le sue storie erano strane, brillanti, a volte buffe, a volte un po' inquietanti... ma tutte, proprio tutte, avevano una particolarità: finivano con una macchia.",
      "“Le storie migliori,” diceva Timoteo mentre cercava di asciugare l'inchiostro con la manica, “devono macchiare un po' la realtà, altrimenti restano finte.”",
      "Era il suo modo di dire che, per scrivere davvero, bisognava sporcare un po' il mondo.",
      "E proprio da una di quelle macchie — una che sembrava muoversi da sola — sarebbe cominciato il peggiore e più straordinario errore della sua vita.",
    ],
  },
  {
    number: "II",
    title: "L'Errore",
    paragraphs: [
      "Un giorno, il cielo su Ombraferma era grigio come un foglio usato troppe volte.",
      "Timoteo aveva deciso di creare il suo inchiostro personale — uno speciale, misterioso, in grado (secondo lui) di scrivere da solo le parole più belle. Una formula segreta che nessuno aveva mai provato.",
      "Nel retro della bottega del maestro scrivano, con le finestre chiuse e le tende tirate, Timoteo mescolava ingredienti raccolti in silenzio per settimane: qualche goccia di linfa di albero antico, un pizzico di cenere di pergamena bruciata, e poi... una goccia.",
      "Non una qualsiasi.",
      "Era caduta dal soffitto, silenziosa come un sussurro. Non era pioggia. Non veniva da una crepa. Era apparsa nel nulla, sospesa nell'aria per un solo istante, luccicante come una lacrima di stella. E Timoteo, curioso com'era, la raccolse subito.",
      "Appena la goccia toccò l'inchiostro, il liquido cambiò colore. Da nero, divenne viola scuro. Poi verde. Poi... nero di nuovo. Ma non il solito nero. Questo era più profondo. Un nero che sembrava guardarti.",
      "Timoteo, eccitato, non perse tempo. Prese una pergamena nuova, intinse la penna e cominciò a scrivere: “C'era una volta, nel villaggio di Ombraferma, un bambino che scriveva storie tanto vive da sembrare vere...”",
      "Le parole scomparvero.",
      "Timoteo sbattè gli occhi, confuso. Ma non era un errore. Le lettere scivolarono via dalla pagina, come formiche in fuga. Si unirono sul bordo del tavolo, si arrampicarono l'una sull'altra... e formarono una nuova frase:",
      "“Benvenuto. Da ora in poi... sarai tu l'inchiostro.”",
      "Timoteo indietreggiò, rovesciando lo sgabello. La penna cadde, ma non toccò mai il pavimento: restò sospesa in aria per qualche secondo, poi si posò con lentezza accanto alla pergamena. L'inchiostro nella boccetta ribolliva piano, come se qualcosa respirasse là dentro.",
      "Timoteo guardò il foglio. Le parole erano cambiate di nuovo.",
      "“Non potrai mai smettere di scrivere.”",
    ],
  },
  {
    number: "III",
    title: "Il Terrore tra le Pagine",
    paragraphs: [
      "L'inchiostro non si era ancora asciugato, ma già si muoveva. Timoteo lo osservava con occhi spalancati, la bocca aperta in un mezzo respiro strozzato.",
      "Le parole che aveva appena scritto — “C'era una volta una finestra che sussurrava segreti nel buio...” — si attorcigliarono da sole. Le lettere si staccarono dal foglio come formiche impazzite, si riordinarono... e cambiarono completamente significato.",
      "Ora la frase diceva: “La finestra si aprì da sola. Qualcosa entrò. E non uscì più.”",
      "Timoteo sgranò gli occhi. “Ma io non ho scritto questo!”",
      "Girò le pagine. Alcune erano ancora bianche... ma non del tutto. Una ad una, sottili righe d'inchiostro apparivano come graffi di un gatto invisibile. Parole che raccontavano storie mai pensate, disegni che si formavano da soli. E al centro di una pagina, un volto.",
      "Un volto che... sembrava guardarlo.",
      "Nei giorni successivi, Ombraferma non fu più la stessa.",
      "Una bambina disse di aver visto una mano nera sotto il suo letto, che scomparve appena accese la lanterna. Un vecchio mugnaio raccontò che il suo mulino parlava nel sonno. E nella fontana della piazza, l'acqua era diventata nera per una notte intera.",
      "Ogni volta che Timoteo sfogliava il quaderno, qualcosa cambiava. Qualcosa nel mondo.",
      "Le storie che leggevano i bambini cominciavano a finire in modo strano. I sogni degli abitanti erano popolati da luoghi e creature mai viste, ma identiche ai disegni apparsi nel quaderno.",
      "Timoteo cercava di chiuderlo. Di smettere. Ma ogni volta che ci provava... la penna gli tornava in mano. E ogni volta che posava lo sguardo sulle pagine, là, in fondo... c'era quella frase.",
      "“Chi inizia, appartiene alla storia.”",
    ],
  },
  {
    number: "IV",
    title: "Il Sigillo del Maestro",
    paragraphs: [
      "Il vento soffiava tra le fessure della torre come un sussurro impaziente. Le candele tremolavano, e le parole continuavano a comparire da sole sul quaderno. Timoteo indietreggiò, gli occhi spalancati, il cuore che batteva come tamburo.",
      "Fu allora che il Maestro Aristeo entrò.",
      "Non disse nulla per lunghi secondi. Guardò il quaderno, poi guardò Timoteo. Il suo volto si fece di colpo più pallido, come se avesse riconosciuto qualcosa che sperava di non rivedere mai più. Le sue mani, sempre ferme, cominciarono a tremare.",
      "Sfiorò le pagine solo per un attimo, poi chiuse il quaderno con un gesto deciso, come si chiude una gabbia per tenere dentro qualcosa che non dovrebbe mai uscire.",
      "“Questo non è solo un errore,” mormorò. “È un richiamo. Qualcosa... si è svegliato.”",
      "Raccolse tre gocce d'inchiostro, un filo d'erba notturna e una piuma d'allocco. Con voce bassa pronunciò parole che non sembravano più appartenere alla lingua degli uomini. Poi sigillò il quaderno con un simbolo che si illuminò per un solo battito di ciglia.",
      "“Lo nasconderò dove le storie dimenticate riposano. E nessuno dovrà più trovarlo.”",
      "Fece per andarsene, ma si voltò un'ultima volta. “Non parlarne mai, Timoteo. Mai.”",
      "Il ragazzo annuì. Ma mentre osservava il Maestro allontanarsi con il quaderno stretto al petto, qualcosa in lui continuava a bruciare. Un'intuizione. Una scintilla.",
      "Perché una storia, se è davvero potente, non si lascia dimenticare.",
    ],
  },
  {
    number: "V",
    title: "La Scomparsa",
    paragraphs: [
      "Passarono due giorni. Il villaggio tornò lentamente alla sua quiete. Timoteo non osava parlare del quaderno, né del Maestro che lo aveva portato via in fretta, con passi pesanti e lo sguardo fisso a terra.",
      "Il terzo giorno, Timoteo non si vedeva più.",
      "Non era nella torre degli scrivani. Non nel mercato. Non al vecchio melo dove amava leggere i racconti antichi. Scomparso. Come una parola cancellata troppo in fretta da una pagina.",
      "Qualcuno disse di averlo visto, l'ultima notte, nella sala della torre. Era chino su un foglio, la luce tremolante di una candela a disegnargli ombre sul volto. Scriveva con furia, come se non potesse fermarsi. Come se non volesse.",
      "Poi, il nulla.",
      "Al centro del tavolo, fu trovato un solo foglio, con una frase scritta in un inchiostro che nessuno riuscì mai più a riprodurre:",
      "“Ciò che inizi, dovrai completare.”",
      "Il Maestro, affranto e addolorato, inserì il foglio nel quaderno che si rilegò da solo agli altri e lo richiuse con la stessa formula sapendo di aver condannato anche Timoteo. Non poté dire nulla ai parenti.",
      "Da allora, nessuno ha più trovato Timoteo.",
      "Ma chi apre quel quaderno, giura di sentirlo. Un respiro. Un sussurro.",
      "Un'idea che non è tua, ma che ti prega di essere scritta.",
    ],
  },
  {
    number: "Epilogo",
    title: "Il Quaderno Ritrovato",
    paragraphs: [
      "Passarono anni. Secoli.",
      "Il villaggio di Ombraferma scomparve dalle mappe, e nessuno ricordava più Timoteo, il suo maestro, o quel giorno in cui l'inchiostro prese vita.",
      "Poi vennero le ruspe, i progetti, i muri. Una scuola sorse proprio dove un tempo c'era la bottega degli scrivani.",
      "Durante i lavori, tra pietre antiche e terra umida, gli operai trovarono un quaderno. Era sigillato, annerito dal tempo, ma ancora intatto.",
      "Le pagine? Bianche. Completamente. Nessuna scritta, nessun segno. Solo silenzio.",
      "Un insegnante lo prese, scrollò le spalle e disse ridendo: “Lo useremo come diario per gli alunni.”",
      "Ma il diario non fu mai usato.",
      "Il quaderno fu dimenticato. Finì dietro a uno scaffale cigolante, in fondo a un corridoio che nessuno percorreva mai. Ci restò per anni. Senza un nome. Senza autore.",
      "Finché un giorno, un bambino curioso — uno di quelli che non amano stare in classe durante l'intervallo — iniziò a sfogliare i vecchi libri polverosi.",
      "E lo trovò.",
      "Lo aprì con delicatezza, anche se le pagine sembravano ancora sigillate. Ma una... una si lasciò aprire. Solo una.",
      "C'era scritta una frase.",
      "“Benvenuto, nuovo autore.”",
      "Da quel giorno, il bambino iniziò a scrivere. Pensava fosse solo un gioco. Solo fantasia.",
      "Ma nessuno gli aveva detto una cosa. Alcune storie non aspettano di essere scritte. Aspettano di prendere vita.",
    ],
  },
];

const PARAGRAPHS_PER_PAGE = 3;

const bookPages: BookPage[] = chapters.flatMap((chapter) => {
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
});

export default function LeStanzeDeiSegretiPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative min-h-[55vh] flex items-end section-padding overflow-hidden"
          style={{ background: "linear-gradient(to bottom, var(--bg-void), var(--bg-dark))" }}
          aria-label="Le Stanze dei Segreti"
        >
          <GrainOverlay />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(61,43,79,0.4) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
            <span
              className="font-cinzel text-xs tracking-[0.4em] uppercase block mb-4"
              style={{ color: "var(--accent-blood)" }}
            >
              Varca la Soglia
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
              LE STANZE DEI SEGRETI
            </h1>
            <p className="mt-6 font-crimson text-xl italic max-w-2xl" style={{ color: "var(--accent-ghost)" }}>
              Apri la porta e scopri quello che nessuno racconta: personaggi nascosti,
              luoghi misteriosi, magie segrete e anteprime da brividi. Qui, ogni angolo
              custodisce una storia tutta da esplorare.
            </p>
          </div>
        </section>

        {/* Intro + Cover */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <div
                className="relative w-64 lg:w-full max-w-sm aspect-[1024/1792] rounded-sm overflow-hidden"
                style={{
                  border: "1px solid rgba(184,134,11,0.3)",
                  boxShadow: "0 0 60px rgba(139,26,26,0.35), 0 20px 60px rgba(0,0,0,0.7)",
                }}
              >
                <Image
                  src="/il-primo-autore-cover.jpg"
                  alt="Copertina de Il Primo Autore — il villaggio di Ombraferma di notte, con uno scrivano incappucciato che cammina tra le case"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 384px"
                />
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-6">
              <span
                className="font-cinzel text-xs tracking-[0.4em] uppercase"
                style={{ color: "var(--accent-blood)" }}
              >
                Una Storia Dimenticata
              </span>
              <h2
                className="font-cinzel font-bold text-4xl"
                style={{ color: "var(--accent-moon)", textShadow: "0 0 40px rgba(139,26,26,0.3)" }}
              >
                Il Primo Autore
              </h2>
              <p className="font-crimson italic text-xl" style={{ color: "var(--accent-gold)" }}>
                Prima che Nathan ed Emily trovassero il quaderno… qualcuno lo aveva già aperto.
              </p>
              <p className="font-crimson text-lg leading-relaxed" style={{ color: "var(--accent-ghost)" }}>
                Nel villaggio di Ombraferma, un giovane scrivano di nome Timoteo scopre un
                inchiostro che scrive da solo. È l&apos;origine dimenticata del quaderno che,
                generazioni dopo, Nathan ed Emily troveranno. Una storia che doveva restare
                incompleta, ma che ha scelto di continuare.
              </p>
              <p
                className="font-cinzel text-xs tracking-widest uppercase"
                style={{ color: "var(--accent-ghost)", opacity: 0.6 }}
              >
                Racconto di Antonio Andreozzi — Collana Paure Tascabili
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
                Sfoglia il Racconto
              </span>
              <p className="font-crimson italic text-base" style={{ color: "var(--accent-ghost)", opacity: 0.7 }}>
                Usa le freccette ← → della tastiera, i bottoni o lo slider per girare pagina.
              </p>
            </div>
            <BookReader pages={bookPages} title="Il Primo Autore" />
          </div>
        </section>

        {/* CTA finale */}
        <section className="relative section-padding" style={{ background: "var(--bg-void)" }}>
          <GrainOverlay />
          <div
            className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6 p-10 rounded-sm"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(139,26,26,0.2)",
              boxShadow: "0 0 60px rgba(139,26,26,0.2)",
            }}
          >
            <h2 className="font-cinzel font-bold text-2xl" style={{ color: "var(--accent-moon)" }}>
              Il quaderno è tornato a circolare.
            </h2>
            <p className="font-crimson text-lg" style={{ color: "var(--accent-ghost)" }}>
              Generazioni dopo Timoteo, Nathan ed Emily lo hanno trovato. Scopri cosa è
              successo a loro in <strong style={{ color: "var(--accent-moon)" }}>Il Quaderno degli Incubi Incompleti</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <CTAButton
                href="https://amzn.to/4iFM7TY"
                variant="primary"
                external
                aria-label="Acquista Il Quaderno degli Incubi Incompleti su Amazon"
              >
                📖 Leggi Il Quaderno degli Incubi Incompleti
              </CTAButton>
              <CTAButton href="/anteprime" variant="secondary">
                Altre Anteprime
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
