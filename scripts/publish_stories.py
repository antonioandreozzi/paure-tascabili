#!/usr/bin/env python3
"""
Paure Tascabili — Stories Publisher
Genera immagini 9:16 (1080x1920) e pubblica come Instagram/Facebook Stories.

PUBLISH_MODE:
  fb-only  → genera immagini + pubblica su Facebook Stories (usa file locali)
  ig-only  → pubblica su Instagram Stories (usa URL GitHub già pushati)
  all      → entrambi (prima fb-only, poi ig-only dopo push)

Usage:
  PUBLISH_MODE=fb-only FB_PAGE_TOKEN=... python scripts/publish_stories.py content/stories/YYYY-MM-DD-slug.json
"""
import json
import os
import sys
import time
from pathlib import Path

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

# ── Brand ─────────────────────────────────────────────────────────────────────
def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

BG  = hex_to_rgb("#0A0A0F")
RED = hex_to_rgb("#8B1A1A")
AU  = hex_to_rgb("#D4AF37")
CR  = hex_to_rgb("#E8D5B0")
W, H = 1080, 1920

# ── Font ─────────────────────────────────────────────────────────────────────
def get_font(name, size):
    paths = {
        "cinzel": [
            "/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf",
            "C:/Windows/Fonts/georgia.ttf",
        ],
        "crimson": [
            "/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf",
            "C:/Windows/Fonts/georgia.ttf",
        ],
    }
    for p in paths.get(name, []):
        if Path(p).exists():
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

def draw_wrapped(draw, text, x, y, max_w, font, fill, spacing=14):
    words = text.split()
    lines, cur = [], []
    for w in words:
        test = " ".join(cur + [w])
        if draw.textbbox((0, 0), test, font=font)[2] > max_w and cur:
            lines.append(" ".join(cur))
            cur = [w]
        else:
            cur.append(w)
    if cur:
        lines.append(" ".join(cur))
    lh = draw.textbbox((0, 0), "Ag", font=font)[3] + spacing
    cur_y = y - lh * len(lines) // 2
    for line in lines:
        bw = draw.textbbox((0, 0), line, font=font)[2]
        draw.text((x - bw // 2, cur_y), line, font=font, fill=fill)
        cur_y += lh
    return lh * len(lines)

def make_slide(slide, num, total, category=""):
    img = Image.new("RGB", (W, H), BG)
    d   = ImageDraw.Draw(img)
    b   = 24
    # Cornice rossa
    d.rectangle([b, b, W-b, H-b], outline=RED, width=3)
    # Righe dorate
    ty, by_ = 190, H - 190
    d.line([(b+40, ty), (W-b-40, ty)], fill=AU, width=2)
    d.line([(b+40, by_), (W-b-40, by_)], fill=AU, width=2)

    f_title = get_font("cinzel",  72)
    f_sub   = get_font("cinzel",  48)
    f_body  = get_font("crimson", 56)
    f_logo  = get_font("cinzel",  32)
    f_cat   = get_font("cinzel",  26)
    f_num   = get_font("crimson", 34)

    cx, cy = W // 2, H // 2
    stype  = slide.get("type", "content")

    if stype == "cover":
        title = slide.get("title", "")
        sub   = slide.get("subtitle", "")
        draw_wrapped(d, title, cx, cy - 90,  W-180, f_title, CR, 18)
        draw_wrapped(d, sub,   cx, cy + 160, W-220, f_sub,   AU, 14)
        if category:
            cat_up = category.upper()
            cw = d.textbbox((0, 0), cat_up, font=f_cat)[2]
            d.text((cx - cw//2, ty + 22), cat_up, font=f_cat, fill=RED)
    elif stype == "cta":
        draw_wrapped(d, slide.get("text", ""), cx, cy, W-180, f_sub, AU, 14)
    else:
        draw_wrapped(d, slide.get("text", ""), cx, cy, W-180, f_body, CR, 18)

    if stype != "cover":
        nt = f"{num}/{total}"
        d.text((W-b-90, b+42), nt, font=f_num, fill=AU)

    logo = "Paure Tascabili"
    lw   = d.textbbox((0, 0), logo, font=f_logo)[2]
    d.text((W - lw - b - 24, by_ + 18), logo, font=f_logo, fill=AU)
    return img

# ── Facebook Stories API ──────────────────────────────────────────────────────
def fb_upload_photo(page_token, page_id, image_path):
    url = f"https://graph.facebook.com/v26.0/{page_id}/photos"
    with open(image_path, "rb") as f:
        r = requests.post(url,
            data={"published": "false", "access_token": page_token},
            files={"source": (Path(image_path).name, f, "image/png")}
        ).json()
    if "id" not in r:
        raise RuntimeError(f"Upload foto FB fallito: {r}")
    return r["id"]

def fb_publish_story(page_token, page_id, photo_id):
    r = requests.post(
        f"https://graph.facebook.com/v26.0/{page_id}/photo_stories",
        data={"photo_id": photo_id, "access_token": page_token}
    ).json()
    if "success" not in r and "id" not in r:
        raise RuntimeError(f"Story FB fallita: {r}")
    return r.get("id", "ok")

# ── Instagram Stories API ─────────────────────────────────────────────────────
def ig_get_account_id(page_token, page_id):
    data = requests.get(
        f"https://graph.facebook.com/v26.0/{page_id}",
        params={"fields": "instagram_business_account", "access_token": page_token}
    ).json()
    ig = data.get("instagram_business_account")
    return ig["id"] if ig else None

def ig_publish_story(page_token, ig_id, image_url):
    r = requests.post(
        f"https://graph.facebook.com/v26.0/{ig_id}/media",
        data={"image_url": image_url, "media_type": "IMAGE",
              "access_token": page_token}
    ).json()
    if "id" not in r:
        raise RuntimeError(f"Container Story IG fallito: {r}")
    time.sleep(2)
    pub = requests.post(
        f"https://graph.facebook.com/v26.0/{ig_id}/media_publish",
        data={"creation_id": r["id"], "access_token": page_token}
    ).json()
    if "id" not in pub:
        raise RuntimeError(f"Pubblicazione Story IG fallita: {pub}")
    return pub["id"]

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    mode            = os.environ.get("PUBLISH_MODE", "fb-only")
    page_token      = os.environ.get("FB_PAGE_TOKEN", "")
    page_id         = os.environ.get("FB_PAGE_ID", "680037628515928")
    github_raw_base = os.environ.get("GITHUB_RAW_BASE",
        "https://raw.githubusercontent.com/antonioandreozzi/paure-tascabili/main")

    if not page_token:
        print("ERRORE: FB_PAGE_TOKEN non impostato.")
        sys.exit(1)
    if len(sys.argv) < 2:
        print("Usage: python scripts/publish_stories.py content/stories/YYYY-MM-DD-slug.json")
        sys.exit(1)

    json_path = Path(sys.argv[1])
    if not json_path.exists():
        print(f"ERRORE: {json_path} non trovato.")
        sys.exit(1)

    story    = json.loads(json_path.read_text(encoding="utf-8"))
    slides   = story["slides"]
    date_str = story.get("date", "")
    slug     = story.get("slug", json_path.stem)
    category = story.get("category", "")
    hook     = story.get("hook", "")
    total    = len(slides)

    img_dir = Path("public/stories") / f"{date_str}-{slug}"

    # Genera immagini in modalità fb-only (file locali per FB)
    if mode in ("all", "fb-only"):
        img_dir.mkdir(parents=True, exist_ok=True)
        image_paths = []
        print(f"Generazione {total} slide Story 9:16...")
        for i, slide in enumerate(slides, 1):
            img  = make_slide(slide, i, total, category)
            path = img_dir / f"slide-{i:02d}.png"
            img.save(str(path), "PNG")
            image_paths.append(path)
            print(f"  slide {i}/{total} → {path}")
    else:
        image_paths = sorted(img_dir.glob("slide-*.png")) if img_dir.exists() else []
        print(f"ig-only: trovate {len(image_paths)} immagini in {img_dir}")

    image_urls = [
        f"{github_raw_base}/public/stories/{date_str}-{slug}/slide-{i:02d}.png"
        for i in range(1, total + 1)
    ]

    fb_ids = []
    ig_ids = []

    # Facebook Stories (file locali)
    if mode in ("all", "fb-only"):
        print("\nFacebook Stories...")
        for i, path in enumerate(image_paths, 1):
            try:
                photo_id = fb_upload_photo(page_token, page_id, str(path))
                sid      = fb_publish_story(page_token, page_id, photo_id)
                fb_ids.append(sid)
                print(f"  ✅ FB Story {i}/{total} — ID: {sid}")
                time.sleep(1)
            except Exception as e:
                print(f"  ⚠️  FB Story {i} fallita: {e}")

    # Instagram Stories (URL GitHub)
    if mode in ("all", "ig-only"):
        ig_id = ig_get_account_id(page_token, page_id)
        if ig_id:
            print(f"\nInstagram Stories (account: {ig_id})...")
            for i, url in enumerate(image_urls, 1):
                try:
                    sid = ig_publish_story(page_token, ig_id, url)
                    ig_ids.append(sid)
                    print(f"  ✅ IG Story {i}/{total} — ID: {sid}")
                    time.sleep(1)
                except Exception as e:
                    print(f"  ⚠️  IG Story {i} fallita: {e}")
        else:
            print("⚠️  Nessun IG Business Account collegato.")

    # Log
    log_path = json_path.with_suffix(".publish_log.json")
    existing = {}
    if log_path.exists():
        try:
            existing = json.loads(log_path.read_text(encoding="utf-8"))
        except Exception:
            pass
    log = {
        "date": date_str, "slug": slug, "hook": hook,
        "slides_count": total,
        "fb_story_ids": fb_ids or existing.get("fb_story_ids", []),
        "ig_story_ids": ig_ids or existing.get("ig_story_ids", []),
    }
    log_path.write_text(json.dumps(log, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nLog: {log_path}")
    print(f"✅ FB={len(fb_ids)}/{total}  IG={len(ig_ids)}/{total}")

if __name__ == "__main__":
    main()
