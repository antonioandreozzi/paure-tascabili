#!/usr/bin/env python3
"""
Modifica un post Facebook già pubblicato, sostituendo il testo con il
contenuto di content/facebook-post-fix.md, e aggiorna il log corrispondente.
"""

import json
import os
import sys
import requests
from pathlib import Path

ROOT      = Path(__file__).parent.parent
FIX_PATH  = ROOT / "content" / "facebook-post-fix.md"

FB_TOKEN  = os.environ["FB_PAGE_TOKEN"]
POST_ID   = os.environ["FB_POST_ID"]

if not FIX_PATH.exists():
    print(f"ERRORE: {FIX_PATH} non trovato.")
    sys.exit(1)

new_text = FIX_PATH.read_text(encoding="utf-8").strip()
print(f"Nuovo testo per il post {POST_ID}:\n{new_text}\n")

resp = requests.post(
    f"https://graph.facebook.com/v26.0/{POST_ID}",
    data={"message": new_text, "access_token": FB_TOKEN},
    timeout=30,
)
result = resp.json()

if result.get("success") is not True:
    print(f"ERRORE modifica FB: {result}")
    sys.exit(1)

print(f"Post {POST_ID} modificato con successo su Facebook.")

# ── Aggiorna il log corrispondente ───────────────────────────────────────────
updated = False
for log_path in sorted((ROOT / "content").glob("facebook-post-*.log.json")):
    data = json.loads(log_path.read_text(encoding="utf-8"))
    if data.get("fb_post_id") == POST_ID:
        data["post_text"] = new_text
        log_path.write_text(
            json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8"
        )
        print(f"Log aggiornato: {log_path}")
        updated = True
        break

if not updated:
    print(f"Attenzione: nessun log trovato con fb_post_id={POST_ID}.")

FIX_PATH.unlink()
print(f"File {FIX_PATH.name} rimosso.")
