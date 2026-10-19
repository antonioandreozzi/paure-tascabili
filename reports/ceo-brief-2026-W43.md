# CEO Brief — Settimana 43/2026
*Generato il Monday 19 October 2026 alle 07:22 UTC*

---

## 📊 SETTIMANA IN REVIEW

### Contenuti pubblicati
- **Post Facebook:** 6 (13/10 → 18/10) — Hook categorie: **TRADIZIONI E RITUALI** (#351), **CREATURE E MOSTRI** (#401), **MOMENTI E RICORRENZE** (#451), **DOMANDE E SONDAGGI** (#27), **LO SAPEVI CHE...** (#52), **QUIZ E INDOVINELLI** (#102) — sei categorie diverse su sei post, la rotazione automatica introdotta a inizio ottobre (commit `687f31c`) continua a funzionare senza eccezioni per la terza settimana consecutiva.
- **Articoli blog:** 2 — "Il Monachicchio: il folletto che abita trulli e masserie di Puglia" (13/10) e "Il Lupo Mannaro nel folklore italiano: mito, storia e varianti regionali" (17/10).
- **Storie:** 6 (13/10 → 18/10, cadenza quotidiana senza buchi) — Ognissanti e tradizioni italiane, Malocchio: origini nell'invidia, Malocchio e effetto nocebo, Indovinello su ombra e pareidolia, Rituale di lettura serale in 5 passi, Dietro le quinte: il processo creativo di Paure Tascabili.
- **Caroselli:** 2 — "Basilisco, il re dei serpenti: curiosità" (13/10) e "Come aiutare un bambino a superare la paura dei mostri sotto il letto" (17/10).
- **Hook totali usati:** 38/500 su Facebook (prossimo: #152, categoria CURIOSITÀ STORICHE, già ricercato — vedi sotto) · 35/1000 sulle Storie.

### Post più recente
**18/10 — hook #102, categoria QUIZ E INDOVINELLI:**
"INDOVINELLO: Sono fatta di paura, ma non ho corpo. Vivo di notte, muoio all'alba. I vecchi mi temono, i giovani mi dimenticano. Cosa sono?"
Il post sviluppa la Pandafeche abruzzese come spiegazione popolare della paralisi del sonno, citando lo studio del 2015 di Padova/Harvard/Cambridge (38% degli intervistati abruzzesi attribuisce l'esperienza alla creatura). Post completo, ben documentato, in linea con lo standard alto della settimana.

---

## 🎯 PRIORITÀ SETTIMANA PROSSIMA

1. **Pubblicare il post già ricercato (#152, CURIOSITÀ STORICHE)** — Perché: il commit `8005290` ("Post Facebook ricercato - gancio #152") ha già prodotto il testo in `content/facebook-post-ready.md` (il malocchio come medicina popolare dal 1799 a oggi, con de Martino e il "segnatore"/janara), ma al momento di questo report non risulta ancora pubblicato (nessun `fb_post_id`, nessun log datato 19/10). È la prima azione della settimana, da sbloccare prima che scada la finestra editoriale del lunedì.
2. **Recuperare la leggenda dell'Azzurrina, sparita dal piano editoriale per la seconda settimana** — Perché: il report W42 l'aveva segnalata come reel prioritario per questa settimana appena conclusa, ma non c'è alcuna traccia nei post, nelle storie o nei caroselli pubblicati tra il 13 e il 18/10 — resta solo come voce nel backlog `content/article-ideas.json` ("La leggenda di Azzurrina nel Castello di Montebello: il fantasma più famoso d'Italia", su un totale di 1832 idee non ancora lavorate). Con il filone Ognissanti già aperto questa settimana (storia "Ognissanti e tradizioni italiane", 13/10) e con Ognissanti sempre più vicino, è il momento naturale per completarla.
3. **Monitorare l'esaurimento della categoria DOMANDE E SONDAGGI** — Perché: la categoria conta già 27 hook usati su 50 (54%), eredità del consumo sequenziale di settembre prima della rotazione automatica; tutte le altre 9 categorie sono ferme a 1-2 hook usati. Al ritmo attuale di rotazione (+1 hook a categoria per ciclo completo) DOMANDE E SONDAGGI resterà la prima a esaurirsi, con un margine di sole 23 uscite residue contro 48-49 delle altre categorie — non è un'urgenza operativa oggi, ma va tenuta d'occhio nei prossimi report per evitare un blocco improvviso della rotazione quando il pool si svuota.
4. **Dare continuità al filone "storia vera legata a un luogo"** — Perché: dopo Triora (06/10) e la nonna calabrese (09/10), questa settimana non è arrivato un terzo capitolo del filone, nonostante fosse validato nei report precedenti come formato che funziona. L'Azzurrina (priorità #2) è anche il contenuto naturale per questo filone.
5. **Verificare la data di pubblicazione effettiva vs. editoriale degli articoli blog** — Perché: l'articolo sul Serpegatto, raccomandato nel report W42 come "da scrivere la settimana prossima", risultava già pubblicato (commit del 12/10) al momento in cui quella raccomandazione è stata generata — un piccolo disallineamento tra il calendario calcolato dal report e lo stato reale del repo. Da ricontrollare che il prossimo brief legga sempre lo stato del repo aggiornato al momento dell'esecuzione, non a uno snapshot precedente.

---

## 📝 SUGGERIMENTO CONTENUTO

### Prossimo articolo blog consigliato
**Titolo:** "L'Azzurrina del Castello di Montebello: la leggenda vera che cercano ogni cinque anni"
**Perché ora:** la ricerca di questa settimana confirma che il tema del rientro a scuola è ormai sfruttato solo da fonti generaliste (AGI, Nostrofiglio, Blitz Quotidiano — stessi consigli psicologici standard già visti nei report precedenti), mentre Ognissanti e il filone "storia vera" restano gli angoli più freschi per il brand, e l'idea è già pronta da due settimane nel backlog.
**Angolo:** a differenza di Monachicchio e Lupo Mannaro (creature regionali spiegate ai bambini), questo pezzo punta sul formato "mistero verificabile" — un evento datato (1375), un rito di verifica che si ripete ogni cinque anni, fonti giornalistiche contemporanee sul fenomeno — e porta per la prima volta l'Emilia-Romagna nel catalogo geografico del brand.
**Keyword principale:** "Azzurrina Castello di Montebello leggenda" (variante long-tail: "fantasma più famoso d'Italia")

### Prossimo reel consigliato
**Soggetto:** L'Azzurrina — la bambina scomparsa nel Castello di Montebello (Rimini, 1375)
**Hook consigliato:** "Nel 1375, in un castello della Romagna, una bambina entrò in una stanza per giocare e non ne uscì più. Da allora, ogni cinque anni, qualcuno dice di sentirla ancora chiamare."
**Perché:** stesso angolo del suggerimento di blog, ma in formato breve per recuperare la priorità rimasta inevasa dal report precedente; aggancia anche il crescente riconoscimento istituzionale del folklore locale (FITP, Borghi Animati del Ministero della Cultura) che rafforza la credibilità del brand come fonte seria.

---

## 🔍 TREND DELLA SETTIMANA

1. **Rientro a scuola: tema confermato ormai esaurito per angoli editoriali nuovi** — La ricerca mostra solo consigli psicologici standard (ascolto attivo, routine di sonno graduale, evitare di trasmettere ansia ai figli) da fonti generaliste come AGI (7/9) e Nostrofiglio, identici a quelli già rilevati nei report W40/W41. Confirma la scelta, già presa due report fa, di non tornare su questo tema e di restare concentrati su Ognissanti/autunno, dove il brand ha già investito con successo (storia "Ognissanti e tradizioni italiane", 13/10).
2. **Creature regionali ibride ancora sottosfruttate online** — La ricerca sui mostri del folklore italiano virale conferma Serpegatto e il meno noto Tatzelwurm (Trentino-Alto Adige, incrocio drago-serpente) come figure poco coperte anche dai media generalisti; Paure Tascabili ha già pubblicato il Serpegatto (12/10) ma il Tatzelwurm resta un'opportunità scoperta per rafforzare la copertura del Nord Italia, finora quasi assente dal catalogo del brand.
3. **Riconoscimento istituzionale crescente del folklore locale** — Confermato anche questa settimana: il circuito "Città del Folklore" della FITP continua ad allargarsi nel 2026 e il progetto "I Borghi Animati" del Ministero della Cultura trasforma leggende di borgo in storie illustrate digitali — un argomento utile da citare per posizionare Paure Tascabili come fonte seria di folklore, non solo contenuto per bambini.

---

## ⚠️ SEGNALAZIONI

1. **Post Facebook del 10/10, segnalato incompleto nei due report precedenti, risulta ora corretto**: il testo pubblicato (hook #201, LEGGENDE E MITI) ha oggi un corpo di 2763 caratteri, ben distinto dal solo gancio — la segnalazione aperta da due settimane si considera chiusa, nessuna azione ulteriore richiesta.
2. **Leggenda Azzurrina non realizzata per la seconda settimana consecutiva**: priorità #5 del report W42, non eseguita — vedi priorità #2 di questo report per il piano di recupero.
3. **Post Facebook del lunedì (#152) ricercato ma non ancora pubblicato al momento di questo brief**: vedi priorità #1. Da verificare che non si ripeta il sintomo già visto il 10/10 (pubblicazione con solo gancio) quando il post verrà effettivamente messo online.
4. **Nessun problema nella cadenza di Storie e Caroselli**: entrambi i formati hanno mantenuto una cadenza regolare tutta la settimana, senza buchi né contenuti duplicati.

---

## 📅 PROSSIMA SETTIMANA — CALENDARIO SUGGERITO

| Giorno | Contenuto | Tipo |
|--------|-----------|------|
| Lunedì | Pubblicazione del gancio già pronto #152 (malocchio e segnatori, CURIOSITÀ STORICHE) | Facebook |
| Martedì | Reel sull'Azzurrina — la bambina scomparsa al Castello di Montebello | Reel/Shorts |
| Mercoledì | Articolo "L'Azzurrina del Castello di Montebello: la leggenda vera che cercano ogni cinque anni" | Articolo blog |
| Giovedì | Post Facebook dalla prossima categoria in rotazione (ciclo CURIOSITÀ STORICHE → LEGGENDE E MITI) | Facebook |
| Venerdì | Storia "Dietro le quinte: come abbiamo ricostruito l'Azzurrina" + carosello dedicato | Storia/Carosello |

---
*Paure Tascabili Personal CEO Agent — report automatico settimanale*
