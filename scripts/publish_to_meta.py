#!/usr/bin/env python3
"""
Paure Tascabili — Meta API Publisher
Legge un JSON di carosello, genera immagini PNG 1080x1350 (4:5), pubblica su Facebook e Instagram.
Instagram viene attivato automaticamente quando il Page ha un Instagram Business Account collegato.

Usage:
  FB_PAGE_TOKEN="..." python scripts/publish_to_meta.py content/carousels/YYYY-MM-DD-slug.json
"""
import json
import os
import sys
import textwrap
import time
import urllib.request
import urllib.parse
from pathlib import Path

# ── Dipendenze ───────────────────────────────────────────────────────────────
try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    os.system("pip install pillow -q")
    from PIL import Image, ImageDraw, ImageFont

try:
    import requests
except ImportError:
    os.system("pip install requests -q")
    import requests

# ── Configurazione brand ─────────────────────────────────────────────────────
VOID_BLACK  = "#0A0A0F"
BLOOD_RED   = "#8B1A1A"
GOLD        = "#D4AF37"
MOON_CREAM  = "#E8D5B0"
WIDTH       = 1080
HEIGHT      = 1350  # formato 4:5 per Facebook e Instagram

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

BG   = hex_to_rgb(VOID_BLACK)
RED  = hex_to_rgb(BLOOD_RED)
AU   = hex_to_rgb(GOLD)
CR   = hex_to_rgb(MOON_CREAM)

# ── Font ─────────────────────────────────────────────────────────────────────
FONT_DIR = Path(os.environ.get("TEMP", "/tmp")) / "pt_fonts"
FONT_DIR.mkdir(exist_ok=True)

FONT_URLS = {
    "cinzel_bold": "https://fonts.gstatic.com/s/cinzel/v23/8vIU7ww63mVu7gtR-kwKxNvkNOjw-tbnTYrvDE5ZdqU.woff2",
    "crimson":     "https://fonts.gstatic.com/s/crimsonpro/v24/q5uUsoa5M_tv7IihmnkabC5XiXCAlXGks1WZzm18OJE.woff2",
}

def get_font(name, size):
    """Scarica TTF se necessario, restituisce ImageFont. Fallback: default."""
    # Proviamo prima i font di sistema
    system_paths = {
        "cinzel_bold": ["/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
                        "C:/Windows/Fonts/georgia.ttf", "C:/Windows/Fonts/Georgia.ttf"],
        "crimson":     ["/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
                        "C:/Windows/Fonts/georgia.ttf", "C:/Windows/Fonts/Georgia.ttf"],
    }
    for path in system_paths.get(name, []):
        if Path(path).exists():
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                pass
    return ImageFont.load_default()

def draw_text_wrapped(draw, text, x, y, max_width, font, fill, align="center"):
    """Disegna testo con a capo automatico, centrato."""
    words = text.split()
    lines = []
    current = []
    for word in words:
        test = " ".join(current + [word])
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] > max_width and current:
            lines.append(" ".join(current))
            current = [word]
        else:
            current.append(word)
    if current:
        lines.append(" ".join(current))

    line_h = draw.textbbox((0, 0), "Ag", font=font)[3] + 8
    total_h = line_h * len(lines)
    cur_y = y - total_h // 2

    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        if align == "center":
            draw.text((x - w // 2, cur_y), line, font=font, fill=fill)
        else:
            draw.text((x, cur_y), line, font=font, fill=fill)
        cur_y += line_h
    return total_h

def make_slide(slide_data, slide_num, total):
    """Genera un'immagine PIL 1080x1350 (4:5) per una singola slide."""
    img = Image.new("RGB", (WIDTH, HEIGHT), BG)
    draw = ImageDraw.Draw(img)

    # Cornice rossa sottile
    border = 18
    draw.rectangle([border, border, WIDTH-border, HEIGHT-border], outline=RED, width=3)

    # Righe decorative auree (proporzionate all'altezza maggiore)
    draw.line([(border+30, 140), (WIDTH-border-30, 140)], fill=AU, width=2)
    draw.line([(border+30, HEIGHT-140), (WIDTH-border-30, HEIGHT-140)], fill=AU, width=2)

    font_title  = get_font("cinzel_bold", 62)
    font_sub    = get_font("cinzel_bold", 38)
    font_body   = get_font("crimson",     46)
    font_logo   = get_font("cinzel_bold", 28)
    font_num    = get_font("crimson",     32)

    slide_type = slide_data.get("type", "content")
    cx = WIDTH // 2
    cy = HEIGHT // 2

    if slide_type == "cover":
        title    = slide_data.get("title", "")
        subtitle = slide_data.get("subtitle", "")
        draw_text_wrapped(draw, title,    cx, cy - 70,  WIDTH-160, font_title, CR)
        draw_text_wrapped(draw, subtitle, cx, cy + 100, WIDTH-200, font_sub,   AU)
    elif slide_type == "cta":
        text = slide_data.get("text", "")
        draw_text_wrapped(draw, text, cx, cy, WIDTH-160, font_sub, AU)
    else:
        text = slide_data.get("text", "")
        draw_text_wrapped(draw, text, cx, cy, WIDTH-160, font_body, CR)

    # Numero slide (es: 2/10)
    if slide_type not in ("cover",):
        num_text = f"{slide_num}/{total}"
        draw.text((WIDTH-border-70, border+30), num_text, font=font_num, fill=AU)

    # Logo (angolo in basso a destra)
    logo = "Paure Tascabili"
    bbox = draw.textbbox((0, 0), logo, font=font_logo)
    lw = bbox[2] - bbox[0]
    draw.text((WIDTH - lw - border - 20, HEIGHT - border - 55), logo, font=font_logo, fill=AU)

    return img

# ── Facebook API ──────────────────────────────────────────────────────────────
def fb_upload_photo(page_token, page_id, image_path):
    """Carica una foto su Facebook senza pubblicarla. Restituisce il media_fbid."""
    url = f"https://graph.facebook.com/v26.0/{page_id}/photos"
    with open(image_path, "rb") as f:
        resp = requests.post(url, data={"published": "false", "access_token": page_token},
                             files={"source": (Path(image_path).name, f, "image/png")})
    data = resp.json()
    if "id" not in data:
        raise RuntimeError(f"Upload foto fallito: {data}")
    return data["id"]

def fb_publish_carousel(page_token, page_id, photo_ids, caption):
    """Pubblica un carosello multi-foto sulla Pagina Facebook."""
    url = f"https://graph.facebook.com/v26.0/{page_id}/feed"
    attached = json.dumps([{"media_fbid": pid} for pid in photo_ids])
    resp = requests.post(url, data={
        "message":        caption,
        "attached_media": attached,
        "access_token":   page_token,
    })
    data = resp.json()
    if "id" not in data:
        raise RuntimeError(f"Pubblicazione Facebook fallita: {data}")
    return data["id"]

# ── Instagram API ─────────────────────────────────────────────────────────────
def ig_get_account_id(page_token, page_id):
    """Recupera l'Instagram Business Account ID collegato alla pagina, oppure None."""
    url = (f"https://graph.facebook.com/v26.0/{page_id}"
           f"?fields=instagram_business_account&access_token={page_token}")
    data = requests.get(url).json()
    ig = data.get("instagram_business_account")
    return ig["id"] if ig else None

def ig_publish_carousel(page_token, ig_user_id, image_urls, caption):
    """
    Pubblica un carosello su Instagram.
    image_urls: lista di URL PUBBLICI (es. raw.githubusercontent.com)
    """
    # Instagram accetta max 10 slide per carosello
    image_urls = image_urls[:10]
    # 1. Container per ogni immagine
    children_ids = []
    for url in image_urls:
        resp = requests.post(
            f"https://graph.facebook.com/v26.0/{ig_user_id}/media",
            data={"image_url": url, "is_carousel_item": "true",
                  "access_token": page_token}
        ).json()
        if "id" not in resp:
            raise RuntimeError(f"Container IG immagine fallito: {resp}")
        children_ids.append(resp["id"])

    # 2. Container carosello
    carousel = requests.post(
        f"https://graph.facebook.com/v26.0/{ig_user_id}/media",
        data={"media_type": "CAROUSEL",
              "children":    ",".join(children_ids),
              "caption":     caption,
              "access_token": page_token}
    ).json()
    if "id" not in carousel:
        raise RuntimeError(f"Container carosello IG fallito: {carousel}")

    # 3. Attendi che il container sia pronto (status_code FINISHED) prima di pubblicare
    creation_id = carousel["id"]
    for _ in range(15):
        status = requests.get(
            f"https://graph.facebook.com/v26.0/{creation_id}",
            params={"fields": "status_code", "access_token": page_token}
        ).json()
        if status.get("status_code") == "FINISHED":
            break
        time.sleep(2)

    # 4. Pubblica (con un ritentativo se il media non è ancora pronto)
    for attempt in range(3):
        result = requests.post(
            f"https://graph.facebook.com/v26.0/{ig_user_id}/media_publish",
            data={"creation_id": creation_id, "access_token": page_token}
        ).json()
        if "id" in result:
            return result["id"]
        if result.get("error", {}).get("code") == 9007 and attempt < 2:
            time.sleep(5)
            continue
        raise RuntimeError(f"Pubblicazione IG fallita: {result}")

# ── Threads API ───────────────────────────────────────────────────────────────
THREADS_BASE = "https://graph.threads.net/v1.0"

def threads_get_user_id(threads_token):
    """Recupera il Threads User ID associato al token."""
    data = requests.get(f"{THREADS_BASE}/me",
                        params={"fields": "id,username", "access_token": threads_token}).json()
    if "id" not in data:
        raise RuntimeError(f"Threads user ID non trovato: {data}")
    return data["id"]

def threads_publish_carousel(threads_token, threads_user_id, image_urls, caption):
    """
    Pubblica un carosello su Threads.
    caption: max 500 caratteri.
    image_urls: lista di URL pubblici (max 20 per Threads, ma usiamo max 10).
    """
    image_urls = image_urls[:10]
    caption = caption[:500]  # limite Threads

    # 1. Container per ogni immagine
    children_ids = []
    for url in image_urls:
        resp = requests.post(
            f"{THREADS_BASE}/{threads_user_id}/threads",
            data={"media_type": "IMAGE", "image_url": url,
                  "is_carousel_item": "true", "access_token": threads_token}
        ).json()
        if "id" not in resp:
            raise RuntimeError(f"Container Threads immagine fallito: {resp}")
        children_ids.append(resp["id"])
        time.sleep(0.5)

    # 2. Container carosello
    carousel = requests.post(
        f"{THREADS_BASE}/{threads_user_id}/threads",
        data={"media_type": "CAROUSEL",
              "children":    ",".join(children_ids),
              "text":        caption,
              "access_token": threads_token}
    ).json()
    if "id" not in carousel:
        raise RuntimeError(f"Container carosello Threads fallito: {carousel}")

    # 3. Pubblica (attendi qualche secondo per processing)
    time.sleep(3)
    result = requests.post(
        f"{THREADS_BASE}/{threads_user_id}/threads_publish",
        data={"creation_id": carousel["id"], "access_token": threads_token}
    ).json()
    if "id" not in result:
        raise RuntimeError(f"Pubblicazione Threads fallita: {result}")
    return result["id"]

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    # Modalità: "all" (default), "fb-only", "ig-only"
    # ig-only: salta generazione immagini e FB, pubblica solo IG usando URL GitHub
    # Le immagini DEVONO già essere su GitHub prima di chiamare ig-only
    mode = os.environ.get("PUBLISH_MODE", "all")

    page_token      = os.environ.get("FB_PAGE_TOKEN", "")
    page_id         = os.environ.get("FB_PAGE_ID", "680037628515928")
    threads_token   = os.environ.get("THREADS_TOKEN", "")
    github_raw_base = os.environ.get("GITHUB_RAW_BASE",
        "https://raw.githubusercontent.com/antonioandreozzi/paure-tascabili/main")

    if not page_token:
        print("ERRORE: FB_PAGE_TOKEN non impostato.")
        sys.exit(1)
    if len(sys.argv) < 2:
        print("Usage: FB_PAGE_TOKEN=... python scripts/publish_to_meta.py path/to/carousel.json")
        sys.exit(1)

    json_path = Path(sys.argv[1])
    if not json_path.exists():
        print(f"ERRORE: file non trovato: {json_path}")
        sys.exit(1)

    carousel = json.loads(json_path.read_text(encoding="utf-8"))
    slides   = carousel["slides"]
    caption         = carousel.get("caption", carousel.get("hook", ""))
    caption_threads = carousel.get("caption_threads", "")  # max 500 caratteri
    date_str = carousel.get("date", "")
    slug     = carousel.get("slug", json_path.stem)

    img_dir = Path("public/carousels") / f"{date_str}-{slug}"
    fb_post_id = None
    ig_post_id = None
    th_post_id = None

    if mode in ("all", "fb-only"):
        # Genera immagini
        img_dir.mkdir(parents=True, exist_ok=True)
        image_paths = []
        total = len(slides)
        print(f"Generazione {total} slide...")
        for i, slide in enumerate(slides, 1):
            img = make_slide(slide, i, total)
            path = img_dir / f"slide-{i:02d}.png"
            img.save(str(path), "PNG")
            image_paths.append(path)
            print(f"  slide {i}/{total} → {path}")

        # Facebook (carica file locali direttamente)
        print("\nPubblicazione su Facebook...")
        photo_ids = []
        for path in image_paths:
            pid = fb_upload_photo(page_token, page_id, str(path))
            photo_ids.append(pid)
            print(f"  foto caricata: {pid}")
        fb_post_id = fb_publish_carousel(page_token, page_id, photo_ids, caption)
        print(f"✅ Facebook: post pubblicato — ID: {fb_post_id}")
    else:
        # ig-only: conta le immagini già presenti nella cartella
        image_paths = sorted(img_dir.glob("slide-*.png")) if img_dir.exists() else []
        print(f"Modalità ig-only: trovate {len(image_paths)} immagini in {img_dir}")

    if mode in ("all", "ig-only", "threads-only"):
        # Instagram e Threads usano URL GitHub — le immagini devono già essere pushate
        n = len(image_paths)
        image_urls = [
            f"{github_raw_base}/public/carousels/{date_str}-{slug}/slide-{i:02d}.png"
            for i in range(1, n + 1)
        ]

        if mode != "threads-only":
            ig_id = ig_get_account_id(page_token, page_id)
            if ig_id:
                print(f"\nInstagram Business Account trovato: {ig_id}")
                ig_post_id = ig_publish_carousel(page_token, ig_id, image_urls, caption)
                print(f"✅ Instagram: carosello pubblicato — ID: {ig_post_id}")
            else:
                print("⚠️  Nessun Instagram Business Account collegato. Salto IG.")

        if threads_token:
            print("\nPubblicazione su Threads...")
            th_user_id = threads_get_user_id(threads_token)
            site_url = "https://www.pauretascabili.com/"
            if caption_threads:
                th_caption = caption_threads
            else:
                hook = carousel.get("hook", "").strip()
                th_caption = f"{hook}\n\nScopri di più nel carosello 👆"
            if site_url not in th_caption:
                th_caption = th_caption.rstrip() + f"\n\n{site_url}"
            th_post_id = threads_publish_carousel(threads_token, th_user_id, image_urls, th_caption)
            print(f"✅ Threads: carosello pubblicato — ID: {th_post_id}")
        else:
            print("ℹ️  THREADS_TOKEN non impostato — salto Threads.")

    # Log risultati
    log_path = json_path.with_suffix(".publish_log.json")
    existing = {}
    if log_path.exists():
        try:
            existing = json.loads(log_path.read_text(encoding="utf-8"))
        except Exception:
            pass
    log = {
        "date": date_str, "slug": slug, "hook": carousel.get("hook"),
        "slides_count": len(slides),
        "fb_post_id":  fb_post_id  or existing.get("fb_post_id"),
        "ig_post_id":  ig_post_id  or existing.get("ig_post_id"),
        "th_post_id":  th_post_id  if threads_token else existing.get("th_post_id"),
        "images": [str(p) for p in image_paths],
    }
    log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nLog salvato: {log_path}")

if __name__ == "__main__":
    main()
