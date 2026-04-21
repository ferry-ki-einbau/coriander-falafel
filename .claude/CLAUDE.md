# Coriander Falafel — Claude Context

## Projekt
B2B Falafel-Großhandel Landingpage für Abas Kasim Mahmood + Mustafa Kassim, Berlin. Verkauft (nicht Entwurf) → echtes Formular + Vercel + GitHub. Ferry hat die Website an sie verkauft, läuft von 0.

## Stack
- Vite 8 + React 19 + TypeScript 6 + Tailwind 3.4
- SSG via `entry-server.tsx` + `prerender.mts` + `hydrateRoot`
- Framer Motion, Lucide-React
- @fontsource (Playfair Display, Inter, Caveat)
- Vercel API Route `api/anfrage.ts` → Resend + Telegram + Honeypot + Zod
- Kein react-router — custom pushState in `App.tsx`

## Design Tokens (Tailwind brand)
- cream #F5E6B8 · cream-soft #FAF1D3 · cream-dark #E8D9A0 · warm-white #FDFAF2
- forest #1F4A2C · forest-deep #143220 · herb #6B8E4E · sand #D9C586
- rust #B8412E · rust-dark #8E2F1F
- ink #1A1209 · charcoal #3D2E1F · sesame #E8D9A0

## Sections (Home.tsx)
Nav → Hero → TrustBadges → Story → WasDrin → Produkte → FuerWen → Anwendungen → SocialProof → FAQ → Kontakt → Footer + CookieBanner

## Offene Tasks
- [ ] Kosten-OK von Ferry für Nano Banana KF1/KF2 + 4 Produkt-Shots + Gründer-Portrait
- [ ] Nach OK: Kling 2.1 Hero-Video (Falafel fällt → bricht auf, grünes Inneres, Sesam fliegt)
- [ ] 4 Größen-Produktfotos generieren (XS/S/M/XL separat statt gleicher Placeholder)
- [ ] GitHub Repo `ferry-ki-einbau/coriander-falafel` + Vercel verknüpfen (nur nach OK)
- [ ] Pflicht-Mapping in `~/.claude/CLAUDE.md` eintragen sobald Vercel verknüpft
- [ ] Domain klären (coriander-falafel.de?) — Ferry fragt Kunde
- [ ] Resend + Telegram Env Vars in Vercel setzen (RESEND_API_KEY, MAIL_FROM, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
- [ ] Größen XS, M, XL konkrete Maße holen (nur S ist bekannt)

## Kundenkontakt
- Abas Kasim Mahmood: 0176 24 83 12 32
- Mustafa Kassim: 0178 711 99 18 (WhatsApp + Telegram)
- Email: coriander-falafel@hotmail.com
- Adresse: Turiner Str. 24, 13347 Berlin
- USt-IdNr.: DE363376749

## Assets
- `public/images/` — extrahierte WebPs (logo, falafel-*, food-*)
- `public/images/raw/` — originale Crops (git-ignored)
- `public/video/` — noch leer, wartet auf Kling Hero-Video
