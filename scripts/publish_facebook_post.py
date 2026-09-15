#!/usr/bin/env python3
"""
Pubblica un post Facebook giornaliero da facebook-hooks.json.
Usa Claude API per espandere il gancio in un post completo con pallini rossi.
"""

import json
import os
import sys
import time
import requests
from pathlib import Path
from datetime import date

# ── Percorsi ──────────────────────────────────────────────────────────────────
ROOT       = Path(__file__).parent.parent
HOOKS_PATH = ROOT / "content" / "facebook-hooks.json"
INDEX_PATH = ROOT / "content" / "facebook-index.json"

# ── Credenziali ───────────────────────────────────────────────────────────────
FB_TOKEN      = os.environ["FB_PAGE_TOKEN"]
FB_PAGE_ID    = os.environ.get("FB_PAGE_ID", "680037628515928")
ANTHROPIC_KEY = os.environ["ANTHROPIC_API_KEY"]

# ── Carica dati ───────────────────────────────────────────────────────────────
with open(HOOKS_PATH, encoding="utf-8") as f:
    hooks_data = json.load(f)

with open(INDEX_PATH, encoding="utf-8") as f:
    index = json.load(f)

flat = hooks_data["flat"]
next_id = index["next_hook_id"]

# Trova il gancio corrente
hook_obj = next((h for h in flat if h["id"] == next_id), None)
if hook_obj is None:
    print(f"Gancio #{next_id} non trovato. Reset a 1.")
    next_id = 1
    hook_obj = flat[0]

hook_text = hook_obj["hook"]
category  = hook_obj["category"]
hook_id   = hook_obj["id"]

print(f"Gancio #{hook_id} [{category}]: {hook_text[:80]}...")

# ── Genera il post con Claude API ─────────────────────────────────────────────
SYSTEM_PROMPT = """Sei il redattore di Paure Tascabili, una pagina Facebook italiana dedicata al folklore, alle leggende, ai misteri e alla storia del Sud Italia.

Il tuo compito è espandere un gancio di apertura in un post Facebook completo.

REGOLE DI FORMATO:
- Ogni paragrafo inizia con 🔴 (pallino rosso)
- Tra un paragrafo e l'altro c'è UNA riga vuota
- Il post deve avere tra 5 e 7 paragrafi
- Il primo paragrafo contiene il gancio esattamente come fornito (non modificarlo)
- Gli altri paragrafi sviluppano l'argomento con dati storici reali, curiosità documentate, contesto culturale
- L'ultimo paragrafo invita all'interazione (domanda al lettore, invito a condividere, ecc.)
- Tono: colto ma accessibile, appassionato, mai sensazionalistico, sempre storicamente accurato
- Lingua: italiano, registro medio-alto
- NON includere hashtag nel testo (li aggiungiamo separatamente)
- NON includere emoji oltre al 🔴 iniziale di ogni paragrafo
- NESSUN titolo o intestazione — solo i paragrafi con i pallini

OUTPUT: solo il testo del post, nient'altro."""

USER_PROMPT = f"""Espandi questo gancio in un post Facebook completo seguendo le istruzioni:

GANCIO (categoria: {category}):
{hook_text}"""

print("Chiamo Claude API per generare il post...")

response = requests.post(
    "https://api.anthropic.com/v1/messages",
    headers={
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
    },
    json={
        "model": "claude-haiku-4-5-20251001",
        "max_tokens": 1024,
        "system": SYSTEM_PROMPT,
        "messages": [{"role": "user", "content": USER_PROMPT}],
    },
    timeout=60,
)

if response.status_code != 200:
    print(f"ERRORE Claude API: {response.status_code} — {response.text}")
    sys.exit(1)

post_text = response.json()["content"][0]["text"].strip()
print(f"\nPost generato ({len(post_text)} caratteri):\n{post_text[:300]}...\n")

# ── Pubblica su Facebook ───────────────────────────────────────────────────────
print("Pubblico su Facebook...")

fb_response = requests.post(
    f"https://graph.facebook.com/v26.0/{FB_PAGE_ID}/feed",
    data={
        "message": post_text,
        "access_token": FB_TOKEN,
    },
    timeout=30,
)

fb_result = fb_response.json()

if "id" not in fb_result:
    print(f"ERRORE pubblicazione FB: {fb_result}")
    sys.exit(1)

post_id = fb_result["id"]
print(f"Post pubblicato! ID: {post_id}")

# ── Aggiorna l'indice ─────────────────────────────────────────────────────────
used = index.get("used_hooks", [])
used.append(hook_id)

next_hook_id = next_id + 1
if next_hook_id > index["total_hooks"]:
    next_hook_id = 1
    print("Ciclo completato — ricomincia dal gancio #1")

index["next_hook_id"] = next_hook_id
index["used_hooks"] = used

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    json.dump(index, f, ensure_ascii=False, indent=2)

# ── Salva log ─────────────────────────────────────────────────────────────────
log_path = ROOT / "content" / f"facebook-post-{date.today()}.log.json"
log = {
    "date": str(date.today()),
    "hook_id": hook_id,
    "category": category,
    "hook": hook_text,
    "post_text": post_text,
    "fb_post_id": post_id,
}
log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Log salvato: {log_path}")
print(f"\nRISULTATO: gancio #{hook_id} pubblicato. Prossimo: #{next_hook_id}")
