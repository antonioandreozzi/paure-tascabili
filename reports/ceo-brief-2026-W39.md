# CEO Brief — Settimana 39/2026
*Generato il Monday 21 September 2026 alle 07:03 UTC*

---

## 📊 SETTIMANA IN REVIEW

### Contenuti pubblicati
- **Post Facebook:** 7 pubblicati (hook #2→#8) — Hook categorie: **DOMANDE E SONDAGGI** (100%, nessuna altra categoria toccata)
- **Articoli blog:** 3 — Titoli:
  1. "Come il Folklore Italiano Riduce l'Ansia da Rientro a Scuola nei Bambini" (15/09)
  2. "Settembre, la notte e la Janara: perché tuo figlio non riesce a dormire al rientro a scuola" (16/09)
  3. "San Gennaro: il miracolo del sangue che da secoli decide il destino di Napoli" (19/09)
- **Storie:** 7 pubblicate (una al giorno, 14/09→20/09), in 7 categorie diverse: LO SAPEVI CHE..., QUIZ E INDOVINELLI, CONSIGLI RAPIDI, DIETRO LE QUINTE, STORIE VERE, CHALLENGE E SFIDE, SERIE E EPISODI (ep.1 del nuovo "Bestiario Italiano")
- **Hook totali usati:** Facebook 8/500 (1,6%) — Storie 8/1000 (0,8%)

### Post più recente
**20/09 — hook #8, categoria DOMANDE E SONDAGGI:**
"Conosci qualcuno che fa ancora il malocchio? Nella tua famiglia si crede ancora a queste cose?"
Post breve, solo domanda diretta senza sviluppo — in linea con lo stile "sondaggio secco" già usato il 17/09 (hook #4).

---

## 🎯 PRIORITÀ SETTIMANA PROSSIMA

1. **Diversificare manualmente le categorie dei post Facebook** — Perché: negli ultimi 7 giorni tutti e 7 i post pubblicati (hook #2-#8) appartengono alla categoria "DOMANDE E SONDAGGI" (hook 1-50 del pool). Il sistema consuma gli hook in ordine sequenziale, quindi di questo passo (~1 hook/giorno) si resterà sulla stessa categoria per altri ~42 giorni prima di arrivare a "LO SAPEVI CHE..." (hook 51). Le Storie, invece, hanno già toccato 7 categorie diverse in 7 giorni con ottimi risultati di formato (quiz, dietro le quinte, storie vere, challenge). Consiglio: alternare manualmente qualche hook dal pool "CREATURE E MOSTRI" o "LEGGENDE E MITI" per rompere la monotonia dei sondaggi.
2. **Investigare la doppia pubblicazione Facebook del 20/09** — Perché: il repo mostra due commit di pubblicazione lo stesso giorno (12:16 e 12:39 UTC): prima l'hook #7 ("Secondo te il folklore è solo superstizione...") è stato pubblicato regolarmente, poi 23 minuti dopo l'hook #8 ha sovrascritto il file di log `facebook-post-2026-09-20.log.json`, cancellando dal repo il testo e l'ID del post #7 (recuperabile solo da git history). Sono quindi usciti 2 post Facebook nello stesso giorno invece di 1, e si è persa la tracciabilità del primo. Va capito se il workflow è partito due volte per errore (doppio trigger/cron) e va corretto il logging per usare file distinti per hook, non solo per data.
3. **Lanciare la serie "Bestiario Italiano" sui canali social oltre alle Storie** — Perché: l'episodio 1 (Il Babau) è uscito il 20/09 solo come Storia. La ricerca trend conferma che le creature del folklore italiano (serpegatto, Tatzelwurm, Janas) stanno guadagnando trazione virale su TikTok/social nel 2026: la categoria "CREATURE E MOSTRI" del pool Facebook (hook 401-450) è però ancora del tutto inutilizzata. Portare la serie anche su Facebook/reel darebbe continuità cross-canale a un formato già validato.
4. **Capitalizzare ora sul trend rientro a scuola prima che si esaurisca** — Perché: i 2 articoli blog e la storia "fiaba prima di dormire" pubblicati questa settimana sono perfettamente allineati con la ricerca (l'ansia da rientro a scuola è un tema di forte attualità a settembre 2026). È il momento di produrre un secondo contenuto di follow-up (es. carosello con "3 rituali del folklore per calmare la paura del buio dei bambini") finché il tema resta caldo nelle ricerche.
5. **Ripulire i file di test dalla cartella `content/stories/`** — Perché: sono presenti 3 file di test (`2026-09-14-test-debug-log.json`, `2026-09-14-test-ig-stories-fix.json`, `2026-09-14-test-permission-fix.json`) mischiati ai contenuti reali pubblicati, generati durante un debug del 14/09 (probabilmente un fix ai permessi di pubblicazione IG Stories). Rischio di confusione nei conteggi e nelle automazioni future se non spostati in una cartella dedicata (es. `content/stories/_test/`).

---

## 📝 SUGGERIMENTO CONTENUTO

### Prossimo articolo blog consigliato
**Titolo:** "Il Bestiario d'Italia: le creature del folklore che stanno tornando virali su TikTok"
**Perché ora:** la ricerca di questa settimana mostra che creature come il serpegatto piemontese, il Tatzelwurm trentino e le Janas sarde stanno circolando su TikTok con hashtag tipo #MythicTale — un trend fresco su cui Paure Tascabili può posizionarsi da fonte autorevole prima che il tema diventi affollato.
**Angolo:** collegare esplicitamente la serie Instagram "Bestiario Italiano" (appena lanciata con l'episodio sul Babau) all'articolo, creando un hub blog che raccoglie tutte le creature via via trattate nella serie — cosa che finora non è stata fatta per nessuna serie di Storie.
**Keyword principale:** "creature folklore italiano" (variante long-tail: "mostri leggende italiane bambini")

### Prossimo reel consigliato
**Soggetto:** Il Mazapegul romagnolo (già presente nel pool `article-ideas.json` e tra i quiz delle Storie del 15/09, ma mai sviluppato in reel)
**Hook consigliato:** "C'è un folletto in Romagna che di notte ti si siede sul petto mentre dormi — e non puoi muoverti finché non lo lasci andare."
**Perché:** è una creatura poco conosciuta fuori regione (basso rischio di contenuto già visto), si collega bene al filone "paralisi del sonno" che genera forte curiosità sui social, e continua la serie "Bestiario Italiano" appena avviata.

---

## 🔍 TREND DELLA SETTIMANA

1. **Creature del folklore italiano virali su TikTok** — Serpegatto (Piemonte), Tatzelwurm (Trentino-Alto Adige) e Janas (Sardegna) stanno circolando con hashtag come #MythicTale e #MythologyMagic. Collegamento diretto: è esattamente il territorio editoriale di Paure Tascabili e della neonata serie "Bestiario Italiano" — categoria Facebook "CREATURE E MOSTRI" ancora a zero utilizzi, quindi spazio libero da presidiare subito.
2. **Ansia da rientro a scuola settembre 2026** — Diverse testate (Spaggiari, DireGiovani, Orizzonte Insegnanti) trattano il tema del disagio dei bambini nelle prime settimane di scuola. Paure Tascabili si è già mossa bene su questo (2 articoli + 1 storia), ma il tema resta caldo: vale la pena un secondo ciclo di contenuti pratici (consigli ai genitori) prima che l'attualità scemi a ottobre.
3. **Sagre e tradizioni popolari d'autunno** — Settembre-ottobre 2026 è pieno di sagre e feste folkloristiche in tutta Italia (uva, vino, funghi), con forte enfasi su tradizioni locali e "folklore" nel senso più ampio. Collegamento possibile ma indiretto: più che un tema di paura, è un'occasione per contenuti "curiosità storiche" legati a riti e superstizioni contadine (es. i rituali già trattati nei post del 15/09 e 18/09 su previsioni di morte e malocchio) — un ponte naturale verso Halloween che si avvicina.

---

## ⚠️ SEGNALAZIONI

1. **Doppia pubblicazione Facebook il 20/09 con perdita di log** (vedi Priorità #2): il file `content/facebook-post-2026-09-20.log.json` conserva solo l'ultimo dei due post pubblicati quel giorno (hook #8); il testo completo e l'fb_post_id dell'hook #7 sono recuperabili solo dalla cronologia git (commit `8f9f9c6`), non dal file live. Da correggere prima che si ripeta e comprometta il tracciamento dei prossimi report settimanali.
2. **Monocultura di categoria sui post Facebook**: 7/7 post della settimana nella stessa categoria "DOMANDE E SONDAGGI"; le altre 9 categorie del pool (450 hook su 500) sono a zero utilizzi. Non è un errore tecnico ma un limite del disegno sequenziale del pool — da correggere con una selezione manuale/mista se si vuole varietà di formato su Facebook nel breve periodo.
3. **File di test nella cartella storie pubblicate** (vedi Priorità #5): 3 file di debug del 14/09 mischiati ai contenuti reali.

---

## 📅 PROSSIMA SETTIMANA — CALENDARIO SUGGERITO

| Giorno | Contenuto | Tipo |
|--------|-----------|------|
| Lunedì | Hook FB su una credenza legata al malocchio/iettatura (chiudendo il filone della settimana scorsa con un angolo nuovo) | Facebook |
| Martedì | Reel sul Mazapegul romagnolo — hook "paralisi del sonno" | Reel/Shorts |
| Mercoledì | Articolo "Il Bestiario d'Italia: le creature del folklore che stanno tornando virali su TikTok" | Articolo blog |
| Giovedì | Post FB scelto manualmente dalla categoria "CREATURE E MOSTRI" (hook 401-450), per rompere la monocultura di categoria | Facebook |
| Venerdì | Storia "Bestiario Italiano ep.2" (continuità serie) + carosello "3 rituali del folklore per calmare la paura del buio dei bambini" | Storia/Carosello |

---
*Paure Tascabili Personal CEO Agent — report automatico settimanale*
