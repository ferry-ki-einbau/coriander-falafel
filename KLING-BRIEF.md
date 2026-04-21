# Coriander Falafel — Kling 2.1 Hero-Video Brief

## Ziel
Signature Hero-Shot für Coriander Falafel Landingpage: Makro fallende Falafel → aufgebrochen mit grünem Kräuter-Inneren + Sesam.

## Input-Keyframes (fertig)

| Keyframe | Pfad | Bedeutung |
|---|---|---|
| KF1 | `public/images/raw/kling-kf1.png` | Falafel in der Luft, Sesam schwebt, warmes Licht |
| KF2 | `public/images/raw/kling-kf2.png` | Aufgebrochen auf Holzbrett, grünes Kräuter-Inneres, Dampf |

Beide 16:9 / 5504×3072 / ~8 MB. Identisches Farbgrading (warmes Goldlicht, cremer Bokeh, dunkler Walnuss-Holzboden).

## Kling Upload — Schritt für Schritt

### Desktop 16:9
1. Kling 2.1 → **Image to Video** Mode
2. Start-Frame: `kling-kf1.png` hochladen
3. End-Frame: `kling-kf2.png` hochladen
4. **Prompt (Englisch):**
   ```
   Macro slow-motion: a single golden-brown falafel ball falling in mid-air rotates slightly, crisp sesame-covered crust catches warm golden hour sidelight. Upon impact on the dark walnut cutting board it cracks open revealing vibrant green herb-flecked interior — fresh parsley and cilantro visible. Thin wisps of steam rise. White sesame seeds scatter outward. Cinematic depth of field, warm color grading, editorial food photography aesthetic.
   ```
5. **Negative Prompt:**
   ```
   cartoon, plastic, fluorescent light, flat lighting, 3d render, watermark, text, logo, people, hands
   ```
6. **Length:** 5s, 30fps
7. **Camera Motion:** None (Lock) oder "Slight Zoom In"
8. Output: MP4 herunterladen → `public/video/hero-desktop.mp4`

### Mobile 9:16
Wenn Budget erlaubt: gleichen Prozess mit 9:16 Output-Aspect. Kling wird croppen.
Output: `public/video/hero-mobile.mp4`

## Nach Kling Upload — Verarbeitung

```bash
cd /Users/watchless/Projects/coriander-falafel

# Videos nach public/video/
mkdir -p public/video
mv ~/Downloads/kling-desktop.mp4 public/video/hero-desktop.mp4
mv ~/Downloads/kling-mobile.mp4 public/video/hero-mobile.mp4

# Poster-Frame extrahieren (erster Frame)
ffmpeg -i public/video/hero-desktop.mp4 -ss 00:00:00 -frames:v 1 public/images/raw/hero-poster.png
node scripts/resize-assets.mjs  # erzeugt hero-poster-sm/md/lg.webp

# H.264 optimieren (optional)
ffmpeg -i public/video/hero-desktop.mp4 -vcodec libx264 -crf 24 -preset slow -movflags +faststart public/video/hero-desktop-opt.mp4
```

## Hero Component Update (nach Videos)

In `src/components/Hero.tsx` Background durch `<video>` ersetzen:
```tsx
<video
  src="/video/hero-desktop.mp4"
  poster="/images/hero-poster-lg.webp"
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="h-full w-full object-cover opacity-55"
/>
```

## Aktueller Status
✅ Keyframes generiert, Hero zeigt KF2 als Poster-Platzhalter
⏳ Kling-Video generieren (Ferry manuell)
⏳ Video einbauen + Poster ersetzen
