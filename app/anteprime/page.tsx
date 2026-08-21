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
    "Leggi in anteprima i primi capitoli de Il Quaderno degli Incubi Incompleti e Vendetta nel Pollaio di Antonio Andreozzi. Scopri Nathan, Emily, Leo e Giulia.",
  alternates: { canonical: "https://www.pauretascabili.com/anteprime" },
};

const chapter = {
  number: "1",
  title: "Emily Dice di Non Avere Paura... Ma È Sicura?",
  paragraphs: [
    "Nathan Parker aveva sempre la testa piena di storie. A dodici anni, non poteva definirsi un bambino normale, ma a lui andava bene così. Mentre i suoi compagni passavano il pomeriggio a giocare a calcio o ai videogiochi, lui era seduto alla sua scrivania, con un quaderno aperto davanti e una penna tra le dita.",
    "I suoi racconti erano strani, misteriosi, a volte anche un po' paurosi. Non lo faceva per spaventare gli altri — beh, forse un po' — ma perché era così che vedeva il mondo. Per Nathan, ogni ombra nel corridoio poteva nascondere un mostro, e ogni scricchiolio di notte poteva essere un fantasma. Non era spaventato. Era affascinato.",
    "“Ma chi se ne importa”, diceva ogni volta che sua sorella Emily lo prendeva in giro. “Se fossi normale, che noia sarebbe!”",
    "Una sera Emily stava seduta sul letto, abbracciando il suo coniglio di peluche. Aveva la solita espressione da “Non mi interessa”, ma Nathan conosceva bene quella faccia. Sapeva che dietro quegli occhi azzurri c’era una curiosità irrefrenabile.",
    "“Allora?” disse, con un tono che cercava di sembrare disinteressato. “Hai scritto qualcosa di nuovo o no, signor Paura?”",
    "Nathan sorrise. “Forse sì. Ma non credo che sia per te. È... troppo spaventoso.”",
    "Emily aggrontò la fronte. “Io non ho paura. Sei tu che non sai spaventare, ecco tutto.”",
    "Nathan rise. “Ah, davvero? Va bene, allora ascolta. Ma non venire a svegliarmi stanotte quando non riuscirai a dormire, okay?”",
    "Emily sbuffò. “Inizia e basta!”",
    "Nathan si sistemò sul bordo del letto e iniziò:",
    "— La Stanza Senza Fine —",
    "“Era una notte come tante altre, e Charlie, un ragazzino di dieci anni, si era infilato a letto con la sensazione che qualcosa non andasse. La sua stanza sembrava normale: il poster del suo film preferito appeso al muro, la scrivania piena di quaderni e matite, e la porta chiusa, come sempre. Ma c’era qualcosa di diverso.",
    "Quando Charlie si svegliò nel cuore della notte, non capì subito cosa fosse. Si stropinò gli occhi e guardò l’orologio: segnava le 3:33. Si girò per tornare a dormire, ma qualcosa attirò la sua attenzione.",
    "La porta della sua stanza era aperta.",
    "‘Strano,’ pensò. ‘L’avevo chiusa.’",
    "Charlie scese dal letto, sentendo il pavimento gelido sotto i piedi. Aprì la porta per controllare il corridoio, ma non c’era nessun corridoio. Al suo posto, c’era... la sua stanza.",
    "Era identica, ma con una differenza: sul letto c’era un’ombra. Un’ombra che non si muoveva.",
    "Charlie provò a gridare, ma la sua voce non usciva. Chiuse la porta di scatto e si ritrovò di nuovo nella sua stanza. Ma ora, il poster era diverso: invece del suo film preferito, mostrava una figura con un volto nero e occhi luminosi.",
    "Charlie aprì di nuovo la porta, e di nuovo si ritrovò nella stanza. Ogni volta che provava ad uscire, qualcosa cambiava: il letto si spostava, i colori delle pareti diventavano più scuri, e le ombre si muovevano... si avvicinavano.",
    "Alla fine, Charlie capì la verità. Non era più nella sua stanza. Era in un luogo che si travestiva da stanza, un labirinto che lo teneva prigioniero. E la porta non era una via d’uscita. Era un invito a entrare più a fondo.”",
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

const chapter2 = {
  number: "1",
  title: "Il Pollaio di Zio Remo",
  paragraphs: [
    "«È solo per qualche settimana,» disse la mamma, senza staccare gli occhi dalla strada che si snodava tra i campi giallastri come una cicatrice d’asfalto. La voce le tremava un po’, anche se cercava di farla sembrare allegra. Seduto sul sedile posteriore, Leo sbuffò. Accanto a lui, sua sorella Giulia continuava a sfogliare lo stesso fumetto da cinque minuti, senza leggerne neanche una parola.",
    "Il cielo era opaco, il sole nascosto dietro una coperta di nuvole. Le ruote dell’auto sollevavano ciuffi di polvere mentre si allontanavano sempre più dalla città. Leo guardava fuori dal finestrino, dove i palazzi erano spariti da un pezzo e gli alberi sembravano allungarsi verso di loro come dita curiose.",
    "«E zio Remo... com’è?» chiese, senza girarsi.",
    "La mamma esitò. «È... stravagante. Ma gentile. Ama la natura. E gli animali.»",
    "«Che tipo di animali?» chiese Giulia, alzando un sopracciglio.",
    "«Galline. Galli. Qualche tacchino. Ha anche delle anatre, se non sbaglio.»",
    "Leo si voltò verso la sorella. «Quindi ci stai dicendo che passiamo l’estate... in un pollaio?»",
    "Giulia non rise. Posò il fumetto sulle ginocchia e sospirò. «Magari se ci comportiamo malissimo ci rispediscono a casa subito.»",
    "La mamma si voltò appena, incrociando lo sguardo di entrambi dallo specchietto. «Non cominciate. Vi farà bene stare un po’ nella natura. Lontani dai tablet. Dai videogiochi. E da quella serie inquietante che guardate sempre.»",
    "«Si chiama Voci nella cantina, ed è educativa!» protestò Leo, ma la mamma già si era girata di nuovo verso la strada.",
    "Dopo un’altra curva, il paesaggio cambiò. I campi si fecero più vasti, le case sempre più rade. La strada divenne più stretta, il rumore dell’asfalto sotto le ruote più secco. Una sensazione strana si insinua nel petto di Leo, come se l’aria stesse diventando più spessa. Più lenta.",
    "La macchina rallentò davanti a un vecchio cartello di legno piantato storto nel terreno. La scritta era quasi illeggibile, scolorita dal tempo e dalle intemperie. Diceva “Borgo delle Querce” con lettere sghembe, come se fossero state dipinte a mano da qualcuno che aveva finito la pazienza molto prima della vernice.",
    "«Ci siamo quasi,» disse la mamma, mentre affrontava un piccolo ponte di legno sopra un ruscello. L’acqua correva sotto di loro con un rumore fresco e nervoso. Sul lato destro, un gruppo di mucche li osservava passare con occhi lenti e scuri.",
    "Leo si appoggiò al finestrino. Sentiva qualcosa stringersi dentro, come una corda annodata male.",
    "Quando l’auto si fermò, lo fece davanti a un cancello di ferro battuto, arrugginito ai bordi. Dietro di esso, un lungo sentiero di ghiaia portava a una casa a due piani con persiane verdi e tetto spiovente. Accanto alla casa, un recinto di rete conteneva una serie di baracche basse e recinti in legno. Si sentiva un continuo gracchiare, fruscii di piume e uno strano, costante battere... come dita su tamburi invisibili.",
    "La mamma scese dall’auto e aprì il cofano. «Aiutatemi con i bagagli. Remo sarà felice di vedervi.»",
    "Giulia non si mosse. «E noi dovremmo essere felici di vedere lui?»",
    "Leo aprì lo sportello piano. L’aria odorava di fieno, terra umida e qualcosa di pungente, come piume bagnate dimenticate al sole. Un gallo nero sbucò all’improvviso da dietro una siepe, lo sguardo fisso, il becco aperto in un mezzo verso che si fermò sulla punta della lingua.",
    "Leo lo fissò. Il gallo fece due passi avanti. Poi si fermò. Immobile. Come un guardiano.",
    "«Che benvenuto caloroso,» mormorava.",
    "Poi la voce della mamma: «Vi divertirete, vedrete. Zio Remo è un tipo originale, ma vi piacerà. Una volta abituati al suo modo di fare.»",
    "Giulia scese, stringendo la maniglia della sua valigia con troppa forza. I suoi occhi vagavano da un lato all’altro, studiando ogni finestra, ogni cespuglio, ogni ombra tra le assi del fienile.",
    "«Non sono sicura di volermi abituare,» disse piano.",
    "Leo la seguì. Mentre la mamma bussava alla porta della casa, lui alzò lo sguardo verso il cielo. Un gruppo di corvi sorvolava la zona in cerchio. Sembravano girare attorno alla casa come in una danza lenta e segreta.",
    "La porta della casa si aprì con un cigolio lungo e affaticato, come se persino il legno si stesse domandando chi stesse disturbando il suo silenzio. Leo e Giulia rimasero fermi per un istante, trattenendo il fiato. Davanti a loro, incorniciato da una luce gialla e tremolante che proveniva dall’interno, stava un uomo altissimo e magro come un trampoliere. Indossava una camicia con le maniche arrotolate e un paio di pantaloni così larghi da sembrare rubati a uno spaventapasseri.",
    "Aveva occhi piccoli ma vigili, come due spilli piantati nel volto. Il suo sorriso non arrivava mai agli angoli della bocca, eppure sembrava sincero, nel modo in cui può esserlo un sorriso abituato alla solitudine.",
    "«Remo!» esclamò la mamma, sforzandosi di sembrare allegra. «Ti presento Leo e Giulia. I tuoi ospiti per l’estate.»",
    "Zio Remo non disse subito qualcosa. Li osservò a lungo, uno per uno, come si guardano due semi prima di piantarli. Poi annuì lentamente. «Benvenuti nella mia piccola reggia. Accomodatevi, prima che le zanzare vi svuotino come bottiglie.»",
    "Leo varcò l’ingresso per primo. L’aria all’interno era diversa: pesante, carica di odori che non riusciva a identificare. C’era un sentore di legna bruciata, mescolato a qualcosa di dolce, forse miele, e qualcosa di più acido... forse uova marce. Un miscuglio strano, ma non del tutto sgradevole.",
    "La casa era costruita in modo disordinato. Le pareti erano coperte da quadri storti che ritraevano paesaggi di campagna e ritratti di persone con sguardi troppo intensi. Il pavimento scricchiolava ovunque, anche dove non c’erano piedi a calpestarlo.",
    "«Venite, vi mostro la vostra stanza,» disse zio Remo, afferrando una lanterna a olio da una mensola. «La luce elettrica qui si comporta a modo suo. Preferisco l’affidabilità delle fiamme.»",
    "Salirono le scale dietro di lui, che cigolavano a ogni passo come se raccontassero segreti vecchi di decenni. Ogni finestra che attraversavano era chiusa con tende spesse, cucite con tessuti a fiori ormai scoloriti. Nei corridoi aleggiava una luce soffusa che sembrava trattenere il tempo.",
    "«Questa è casa mia da quasi quarant’anni,» spiegò zio Remo senza voltarsi. «L’ho ereditata da mio nonno, e lui da suo padre. È un luogo che si fa rispettare. Ogni chiodo, ogni asse, ha una memoria lunga.»",
    "Arrivati in cima alle scale, Remo si fermò davanti a una porta dipinta di verde bottiglia. La aprì con un gesto fluido. La stanza era semplice ma accogliente: due letti singoli, un comò traballante, una finestra con le imposte chiuse e una poltrona accanto a una stufetta in ghisa.",
    "«Qui starete comodi. Evitate solo di aprire la finestra la notte. I gufi non gradiscono le luci accese.»",
    "Leo lanciò uno sguardo alla sorella. Lei non fece commenti. Osservava ogni dettaglio come se stesse già scrivendo una storia nella testa. Il piumone a righe, le macchie sul soffitto, il tappeto con un motivo a rombi troppo perfetto.",
    "«Grazie, zio,» disse infine Giulia. «La casa è... interessante.»",
    "Remo rise. Una risata sottile, quasi un sibilo. «Qui c’è sempre qualcosa da scoprire. Ma bisogna sapere dove guardare.»",
    "Quando Remo uscì dalla stanza, lasciandoli soli, Leo si avvicinò alla finestra e aprì leggermente le imposte. Davanti a lui si stendeva la fattoria: una distesa di terreno punteggiata da costruzioni basse, staccionate, e animali che si muovevano lenti nell’erba alta. Sul fondo, circondato da alberi storti, c’era il pollaio. Le galline sembravano più piccole del previsto. Più scure. Più immobili.",
    "«Sei sicuro che sia un posto normale?» chiese a bassa voce.",
    "Giulia si sdraiò sul letto, fissando il soffitto. «Niente qui sembra normale. Ma siamo qui, quindi tanto vale capire dove siamo finiti.»",
    "Leo si sedette sulla poltrona accanto alla stufa. La stanza sembrava più fredda del resto della casa. Un’aria leggera si infilava sotto la porta come un serpente curioso. Cercò di ascoltare i rumori intorno: il gracchiare lontano delle galline, un richiamo rauco, lo scricchiolio del legno, e, da qualche parte sotto il pavimento, un lieve fruscio. Come un movimento furtivo, come qualcosa che striscia piano, in attesa.",
    "Abbassò gli occhi. Ai piedi della poltrona, c’era un piccolo tappeto rotondo. Sembrava innocuo. Ma Leo sentiva, senza sapere perché, che sotto quel tappeto c’era qualcosa. Forse una botola. O solo la sua immaginazione.",
    "Fuori, il cielo si stava scurendo. Nuvole basse correvano veloci sopra la casa, portando con sé promesse di temporale.",
    "«Ti sei accorto,» disse Giulia improvvisamente, «che non abbiamo visto altri edifici nel raggio di chilometri?»",
    "Leo annuì piano. La fattoria di zio Remo non era solo vecchia. Era isolata.",
    "Come se qualcuno, un tempo, l’avesse voluta lontana da tutto. O da tutti.",
    "Leo stava per tirare le tende e lasciare perdere tutto, quando un rumore secco lo fece bloccare. Proveniva dal pollaio. Un colpo. Poi un altro. Come se qualcosa stesse sbattendo contro le assi di legno, forte, ritmico, deciso. Si sporse appena. Il recinto era buio, ma qualcosa si muoveva là dentro, qualcosa che stava spingendo contro la porta chiusa. E quando la terza botta fece vibrare perfino il vetro della finestra, Leo vide la serratura del pollaio piegarsi di scatto. Come se... qualcuno, o qualcosa, stesse cercando di uscire.",
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

const bookPages2: BookPage[] = (() => {
  const pages: BookPage[] = [];
  for (let i = 0; i < chapter2.paragraphs.length; i += PARAGRAPHS_PER_PAGE) {
    const slice = chapter2.paragraphs.slice(i, i + PARAGRAPHS_PER_PAGE);
    pages.push({
      paragraphs: slice,
      ...(i === 0
        ? { chapterLabel: `Capitolo ${chapter2.number}`, chapterTitle: chapter2.title }
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

        {/* — Vol.1 Intro + copertina — */}
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
                  src="/quaderno-incubi-incompleti-cover.png"
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

        {/* Vol.1 — Il libro sfogliabile */}
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

        {/* Separatore */}
        <div
          className="w-full h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(184,134,11,0.3), transparent)" }}
          aria-hidden="true"
        />

        {/* — Vol.2 Intro + copertina — */}
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
                  src="/vendetta-nel-pollaio-cover.png"
                  alt="Copertina di Vendetta nel Pollaio — un pollaio buio e inquietante con un gallo nell'ombra"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 160px, 280px"
                />
              </div>
            </div>
            <div className="sm:col-span-2 flex flex-col gap-3">
              <span className="font-cinzel text-xs tracking-[0.4em] uppercase" style={{ color: "var(--accent-blood)" }}>
                Anteprima — Volume 2
              </span>
              <h2 className="font-cinzel font-black text-3xl sm:text-4xl" style={{ color: "var(--accent-moon)" }}>
                Vendetta nel Pollaio
              </h2>
              <p className="font-crimson italic text-xl" style={{ color: "var(--accent-gold)" }}>
                Il Pollaio di Zio Remo
              </p>
            </div>
          </div>
        </section>

        {/* Vol.2 — Il libro sfogliabile */}
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
            <BookReader pages={bookPages2} title="Vendetta nel Pollaio" />

            <div className="flex justify-center mt-4">
              <CTAButton
                href="https://www.amazon.it/gp/product/B0GX94GY2C"
                variant="primary"
                external
                aria-label="Acquista Vendetta nel Pollaio su Amazon per leggere il seguito"
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
