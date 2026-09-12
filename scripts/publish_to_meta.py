#!/usr/bin/env python3
"""
Paure Tascabili — Meta API Publisher
Legge un JSON di carosello, genera immagini PNG 1080x1080, pubblica su Facebook.
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
SIZE        = 1080

def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

BG   = hex_to_rgb(VOID_BLACK)
RED  = hex_to_rgb(BLOOD_RED)
AU   = hex_to_rgb(GOLD)
CR   = hex_to_rgb(MOON_CREAM)

# ── Font ─────────────────────────────────────────────────────────────────────
FONT_DIR = Path("/tmp/pt_fonts")
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
    """Genera un'immagine PIL per una singola slide."""
    img = Image.new("RGB", (SIZE, SIZE), BG)
    draw = ImageDraw.Draw(img)

    # Cornice rossa sottile
    border = 18
    draw.rectangle([border, border, SIZE-border, SIZE-border], outline=RED, width=3)

    # Riga decorativa aurea
    draw.line([(border+30, 120), (SIZE-border-30, 120)], fill=AU, width=2)
    draw.line([(border+30, SIZE-120), (SIZE-border-30, SIZE-120)], fill=AU, width=2)

    font_title  = get_font("cinzel_bold", 62)
    font_sub    = get_font("cinzel_bold", 38)
    font_body   = get_font("crimson",     46)
    font_logo   = get_font("cinzel_bold", 28)
    font_num    = get_font("crimson",     32)

    slide_type = slide_data.get("type", "content")
    cx = SIZE // 2

    if slide_type == "cover":
        title    = slide_data.get("title", "")
        subtitle = slide_data.get("subtitle", "")
        draw_text_wrapped(draw, title,    cx, SIZE//2 - 60, SIZE-160, font_title, CR)
        draw_text_wrapped(draw, subtitle, cx, SIZE//2 + 80, SIZE-200, font_sub,   AU)
    elif slide_type == "cta":
        text = slide_data.get("text", "")
        draw_text_wrapped(draw, text, cx, SIZE//2, SIZE-160, font_sub, AU)
    else:
        text = slide_data.get("text", "")
        draw_text_wrapped(draw, text, cx, SIZE//2, SIZE-160, font_body, CR)

    # Numero slide (es: 2/10)
    if slide_type not in ("cover",):
        num_text = f"{slide_num}/{total}"
        draw.text((SIZE-border-70, border+30), num_text, font=font_num, fill=AU)

    # Logo
    logo = "Paure Tascabili"
    bbox = draw.textbbox((0, 0), logo, font=font_logo)
    lw = bbox[2] - bbox[0]
    draw.text((SIZE - lw - border - 20, SIZE - border - 50), logo, font=font_logo, fill=AU)

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

    # 3. Pubblica
    result = requests.post(
        f"https://graph.facebook.com/v26.0/{ig_user_id}/media_publish",
        data={"creation_id": carousel["id"], "access_token": page_token}
    ).json()
    if "id" not in result:
        raise RuntimeError(f"Pubblicazione IG fallita: {result}")
    return result["id"]

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    page_token = os.environ.get("FB_PAGE_TOKEN", "")
    page_id    = os.environ.get("FB_PAGE_ID", "680037628515928")
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
    caption  = carousel.get("caption", carousel.get("hook", ""))
    date_str = carousel.get("date", "")
    slug     = carousel.get("slug", json_path.stem)

    # Cartella immagini
    img_dir = Path("public/carousels") / f"{date_str}-{slug}"
    img_dir.mkdir(parents=True, exist_ok=True)

    # Genera immagini
    image_paths = []
    total = len(slides)
    print(f"Generazione {total} slide...")
    for i, slide in enumerate(slides, 1):
        img = make_slide(slide, i, total)
        path = img_dir / f"slide-{i:02d}.png"
        img.save(str(path), "PNG")
        image_paths.append(path)
        print(f"  slide {i}/{total} → {path}")

    # ── Facebook ──
    print("\nPubblicazione su Facebook...")
    photo_ids = []
    for path in image_paths:
        pid = fb_upload_photo(page_token, page_id, str(path))
        photo_ids.append(pid)
        print(f"  foto caricata: {pid}")

    fb_post_id = fb_publish_carousel(page_token, page_id, photo_ids, caption)
    print(f"✅ Facebook: post pubblicato — ID: {fb_post_id}")

    # ── Instagram (se collegato) ──
    ig_id = ig_get_account_id(page_token, page_id)
    if ig_id:
        print(f"\nInstagram Business Account trovato: {ig_id}")
        image_urls = [
            f"{github_raw_base}/public/carousels/{date_str}-{slug}/slide-{i:02d}.png"
            for i in range(1, len(image_paths)+1)
        ]
        ig_post_id = ig_publish_carousel(page_token, ig_id, image_urls, caption)
        print(f"✅ Instagram: carosello pubblicato — ID: {ig_post_id}")
    else:
        print("⚠️  Nessun Instagram Business Account collegato alla pagina. Salto IG.")
        print("   → Collega l'account Instagram alla Pagina Facebook per abilitare IG.")

    # Log risultati
    log = {
        "date": date_str, "slug": slug, "hook": carousel.get("hook"),
        "slides_count": total,
        "fb_post_id": fb_post_id,
        "ig_post_id": ig_post_id if ig_id else None,
        "images": [str(p) for p in image_paths],
    }
    log_path = json_path.with_suffix(".publish_log.json")
    log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nLog salvato: {log_path}")

if __name__ == "__main__":
    main()
