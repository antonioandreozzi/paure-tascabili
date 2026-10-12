# CEO Brief — Settimana 42/2026
*Generato il lunedì 12 ottobre 2026 alle 07:24 UTC*

---

## 📊 SETTIMANA IN REVIEW

*(periodo: 07/10 → 12/10, dal giorno successivo all'ultimo report)*

### Contenuti pubblicati
- **Post Facebook:** 5 pubblicati (hook #51→#250, 07/10→11/10) — Hook categorie: **LO SAPEVI CHE... (1), QUIZ E INDOVINELLI (1), CURIOSITÀ STORICHE (1), LEGGENDE E MITI (1), PERSONAGGI STORICI (1)** — cinque categorie diverse, una per post. È il cambio più importante della settimana: il commit `687f31c` (06/10, "Alterna le categorie dei ganci Facebook invece di seguirle in sequenza") ha riscritto la logica di selezione per ruotare tra categorie invece di avanzare in sequenza nel pool, e la rotazione ha funzionato esattamente come previsto per tutta la settimana. È già pronto un sesto gancio (#301, categoria LUOGHI MISTERIOSI, su Castel del Monte) in `content/facebook-post-ready.md`, non ancora pubblicato al momento di questo report.
- **Articoli blog:** 4 — Titoli:
  1. "Marrabecca e U Sugghiu: i mostri d'acqua della Sicilia che le mamme usavano per tenere i bambini lontani dai pozzi" (06/10) — esecuzione diretta della priorità #3 del report W41
  2. "Le streghe di Triora: la storia vera del paese ligure chiamato il Salem italiano" (06/10)
  3. "Le leggende italiane prima di Halloween: il bestiario del Sud che nessuno vi racconta" (07/10)
  4. "Il Linchetto Toscano: il Folletto Dispettoso della Tradizione Popolare" (10/10)
  (Totale articoli blog pubblicati finora: 24)
- **Storie:** 5 pubblicate su 5 giorni (07/10→11/10), senza buchi nella cadenza quotidiana — in 5 categorie diverse: CONSIGLI RAPIDI, DIETRO LE QUINTE, STORIE VERE, CHALLENGE E SFIDE, SERIE E EPISODI. A queste si aggiunge 1 carosello (10/10, "Le 5 paure più comuni nei bambini tra 6 e 10 anni").
- **Hook totali usati:** Facebook 31/500 (6,2%) — Storie 28/1000 (2,8%)

### Post più recente
**11/10 — hook #250, categoria PERSONAGGI STORICI:**
"Giambattista Basile scrisse la prima raccolta europea di fiabe nel 1634, a Napoli, in dialetto napoletano. Non era un folklorista — era un cortigiano. Le storie le aveva sentite dalle donne del popolo. Le trascrisse quasi testualmente. Senza di lui, Cenerentola non esisterebbe."
Post completo e di buona qualità (gancio + 4 paragrafi di approfondimento + domanda finale), in linea con lo standard alto della settimana — a differenza del post del 10/10, vedi Segnalazione #1.

---

## 🎯 PRIORITÀ SETTIMANA PROSSIMA

1. **Blindare la pipeline Facebook contro pubblicazioni "a solo gancio"** — Perché: il 10/10 (hook #201, LEGGENDE E MITI) è andato live con il solo gancio, senza corpo del post — lo stesso difetto già segnalato per il 05/10 nei report precedenti, ma con una causa diversa: manca del tutto il commit "Post Facebook ricercato" che negli altri 4 giorni della settimana ha preceduto la pubblicazione. Il workflow di ricerca non è scattato per quel giorno e lo script di pubblicazione non ha un controllo che blocchi la messa online quando `post_text` coincide col solo `hook`. Va aggiunto quel controllo (fallback o blocco automatico) prima che si ripeta una terza volta con un'altra ricorrenza (es. Halloween).
2. **Correggere ora il post Facebook del 10/10, già live e incompleto** — Perché: è visibile al pubblico da due giorni con una sola riga di testo (fb_post_id presente). Il workflow `edit-facebook-post.yml`, creato proprio la settimana scorsa per il caso del 05/10, è pronto all'uso: va riusato per integrare il corpo mancante sul post del 10/10.
3. **Sfruttare la rotazione categorie per anticipare "CREATURE E MOSTRI" con un contenuto pronto** — Perché: con la nuova logica di rotazione, dopo LUOGHI MISTERIOSI (#301, in coda) e TRADIZIONI E RITUALI (#351) la categoria CREATURE E MOSTRI (pool 401-450, mai toccato) entrerà in rotazione automaticamente tra 2-3 pubblicazioni, cioè in pochi giorni — non serve più la selezione manuale chiesta nei report precedenti. Vale la pena preparare per quel momento un gancio legato al Serpegatto (vedi Trend #1), per allinearlo a un nuovo articolo blog.
4. **Correggere il bug di data nella storia Befana (02/10), ancora aperto** — Perché: è il secondo report consecutivo che lo segnala. L'hook pubblicato cita ancora "Il 1 febbraio: domani è la Befana" mentre il contenuto delle slide è corretto (5-6 gennaio); nessun commit ha toccato il file da allora. Da isolare prima che lo stesso bug di generazione delle date colpisca le prossime ricorrenze stagionali (Halloween, Ognissanti, già in calendario editoriale).
5. **Dare continuità alla "Storia vera" con l'Azzurrina di Rimini/Montebello** — Perché: la ricerca di questa settimana segnala la leggenda dell'Azzurrina (la bambina scomparsa nel 1375 al Castello di Montebello, Emilia-Romagna) come figura ricorrente nei contenuti autunnali italiani; Paure Tascabili ha già validato il formato "storia vera legata a un luogo" con le streghe di Triora (06/10) e la nonna calabrese (Storia, 09/10) — un terzo pezzo nello stesso filone consolida un angolo editoriale che funziona.

---

## 📝 SUGGERIMENTO CONTENUTO

### Prossimo articolo blog consigliato
**Titolo:** "Il Serpegatto delle Valli dell'Ossola: il mostro piemontese metà serpente, metà gatto, che nessuno ha mai visto due volte"
**Perché ora:** la ricerca di questa settimana segnala il Serpegatto (creatura ibrida serpente/gatto delle valli piemontesi dell'Ossola) come una delle figure di folklore italiano meno sfruttate online, e Paure Tascabili non l'ha ancora trattata nonostante il successo del "Bestiario d'Italia". È anche il contenuto ideale da avere pronto per quando la categoria Facebook CREATURE E MOSTRI entrerà in rotazione tra pochi giorni (priorità #3).
**Angolo:** a differenza del Bestiario (creature come elenco), questo pezzo punta sulla specificità regionale piemontese — finora quasi assente dal catalogo di Paure Tascabili, concentrato su Sud e Centro Italia — e sul motivo folklorico dell'"avvistamento mai confermato", diverso dalla funzione pedagogica già usata per Marrabecca/U Sugghiu.
**Keyword principale:** "Serpegatto leggenda piemontese" (variante long-tail: "mostro valli Ossola folklore")

### Prossimo reel consigliato
**Soggetto:** L'Azzurrina — la leggenda della bambina scomparsa al Castello di Montebello (Rimini, 1375)
**Hook consigliato:** "Nel 1375, in un castello della Romagna, una bambina entrò in una stanza per giocare e non ne uscì più. Da allora, ogni cinque anni, qualcuno dice di sentirla ancora chiamare."
**Perché:** aggancia un trend di ricerca solido (Azzurrina è tra le leggende italiane più citate in chiave autunnale), dà continuità al filone "storia vera legata a un luogo" già aperto con Triora, e porta per la prima volta l'Emilia-Romagna nel catalogo geografico del brand.

---

## 🔍 TREND DELLA SETTIMANA

1. **Il Serpegatto piemontese, creatura regionale ancora inedita per il brand** — La ricerca su mostri e leggende italiane virali porta alla luce questa figura ibrida delle valli dell'Ossola, mai trattata da Paure Tascabili e utile a riequilibrare la copertura geografica del brand (oggi concentrata su Sud e Campania). Collegamento diretto: priorità #3 e suggerimento di contenuto di questa settimana.
2. **Rientro a scuola: tema confermato in chiusura, ora trattato solo da fonti generaliste** — La ricerca mostra gli stessi consigli psicologici standard (AGI, NostroFiglio, Telefono Azzurro) già visti nei report precedenti, senza alcun angolo nuovo, e le scuole sono partite da oltre un mese. Confirma la decisione, già presa nei report W40/W41, di spostare il focus editoriale su autunno/Halloween/Ognissanti — tema su cui il brand ha già investito con l'articolo "Le leggende italiane prima di Halloween" (07/10).
3. **Riconoscimento istituzionale crescente del folklore locale (titolo "Città del Folklore 2026" della FITP)** — Un borgo lombardo ha ricevuto questo riconoscimento dalla Federazione Italiana Tradizioni Popolari, confermando — in linea con il "Borghi Animati" del Ministero della Cultura già segnalato — che il tema delle leggende e tradizioni popolari italiane ha credibilità istituzionale crescente, un elemento utile da citare per rafforzare l'autorevolezza di Paure Tascabili come fonte seria, non solo "contenuto per bambini".

---

## ⚠️ SEGNALAZIONI

1. **Post Facebook del 10/10 pubblicato incompleto, ancora online senza correzione**: a differenza dei 4 post circostanti, è andato live con il solo gancio ("C'è una leggenda in Campania che nessun libro racconta in modo completo..."), senza corpo né firma (fb_post_id presente, quindi già visibile al pubblico). A differenza del caso analogo del 05/10, qui manca del tutto il commit di ricerca che precede normalmente la pubblicazione: non è un errore di generazione del testo, ma un salto nella pipeline che lo script di pubblicazione non ha intercettato. È il secondo episodio in due settimane dello stesso sintomo — priorità #1 e #2.
2. **Bug di data nella storia Befana del 02/10, non ancora corretto**: secondo report consecutivo. L'hook pubblicato cita ancora erroneamente "il 1 febbraio" mentre il contenuto delle slide è corretto (5-6 gennaio); nessuna modifica al file risulta dal 03/10 — priorità #4.
3. **Buona notizia — monocultura delle categorie Facebook risolta alla radice**: a differenza della segnalazione ricorrente nei tre report precedenti (W39, W40, W41), questa settimana la correzione non è stata una scelta manuale di un singolo gancio, ma una modifica strutturale allo script di pubblicazione (`scripts/publish_facebook_post.py`) che ora ruota automaticamente tra tutte le categorie. Tutti i 5 post della settimana sono andati in 5 categorie diverse. Nessuna azione manuale richiesta: la segnalazione si considera chiusa.
4. **Buona notizia — tre ulteriori priorità del report W41 eseguite integralmente**: l'articolo su Marrabecca/U Sugghiu (06/10), il post Facebook incompleto del 05/10 corretto tramite il nuovo workflow `edit-facebook-post.yml`, e la cadenza quotidiana delle Storie ripristinata senza buchi (07/10→11/10). Restano aperte solo le segnalazioni #1 e #2 di questo report.

---

## 📅 PROSSIMA SETTIMANA — CALENDARIO SUGGERITO

| Giorno | Contenuto | Tipo |
|--------|-----------|------|
| Lunedì | Pubblicazione gancio già pronto #301 (Castel del Monte, LUOGHI MISTERIOSI) + correzione del post incompleto del 10/10 | Facebook |
| Martedì | Reel sull'Azzurrina — la bambina scomparsa al Castello di Montebello | Reel/Shorts |
| Mercoledì | Articolo "Il Serpegatto delle Valli dell'Ossola: il mostro piemontese metà serpente, metà gatto" | Articolo blog |
| Giovedì | Post Facebook dalla categoria TRADIZIONI E RITUALI (#351, prossima in rotazione) | Facebook |
| Venerdì | Storia "Dietro le quinte: come abbiamo scoperto il Serpegatto" + carosello dedicato | Storia/Carosello |

---
*Paure Tascabili Personal CEO Agent — report automatico settimanale*
