#!/usr/bin/env python3
"""
Pubblica un post Facebook giornaliero da facebook-hooks.json.
Il gancio viene pubblicato direttamente come post, formattato con pallini rossi.
"""

import json
import os
import sys
import requests
from pathlib import Path
from datetime import date

# ── Percorsi ──────────────────────────────────────────────────────────────────
ROOT       = Path(__file__).parent.parent
HOOKS_PATH = ROOT / "content" / "facebook-hooks.json"
INDEX_PATH = ROOT / "content" / "facebook-index.json"

# ── Credenziali ───────────────────────────────────────────────────────────────
FB_TOKEN   = os.environ["FB_PAGE_TOKEN"]
FB_PAGE_ID = os.environ.get("FB_PAGE_ID", "680037628515928")

# ── Carica dati ───────────────────────────────────────────────────────────────
with open(HOOKS_PATH, encoding="utf-8") as f:
    hooks_data = json.load(f)

with open(INDEX_PATH, encoding="utf-8") as f:
    index = json.load(f)

flat    = hooks_data["flat"]
next_id = index["next_hook_id"]

hook_obj = next((h for h in flat if h["id"] == next_id), None)
if hook_obj is None:
    print(f"Gancio #{next_id} non trovato. Reset a 1.")
    next_id  = 1
    hook_obj = flat[0]

hook_text = hook_obj["hook"]
category  = hook_obj["category"]
hook_id   = hook_obj["id"]

print(f"Gancio #{hook_id} [{category}]:\n{hook_text}\n")

# ── Formatta il post ───────────────────────────────────────────────────────────
# Il gancio è già una frase d'apertura completa e potente.
# Lo pubblichiamo così com'è, con il pallino rosso, come post stand-alone.
# (In futuro si potrà espandere aggiungendo paragrafi aggiuntivi nel JSON)

post_text = f"🔴 {hook_text}"

print(f"Post da pubblicare:\n{post_text}\n")

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
index["used_hooks"]   = used

with open(INDEX_PATH, "w", encoding="utf-8") as f:
    json.dump(index, f, ensure_ascii=False, indent=2)

# ── Salva log ─────────────────────────────────────────────────────────────────
log_path = ROOT / "content" / f"facebook-post-{date.today()}.log.json"
log = {
    "date":        str(date.today()),
    "hook_id":     hook_id,
    "category":    category,
    "hook":        hook_text,
    "post_text":   post_text,
    "fb_post_id":  post_id,
}
log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Log salvato: {log_path}")
print(f"\nRISULTATO: gancio #{hook_id} pubblicato. Prossimo: #{next_hook_id}")
