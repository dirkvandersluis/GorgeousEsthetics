# Gorgeous Esthetics

Website voor Gorgeous Esthetics, een botox- en skinboostersalon in Middelharnis.
Statische site (HTML + vanilla JS), styling via Tailwind CSS (lokaal gebouwd),
self-hosted fonts, gehost via Netlify.

## Ontwikkelen / bouwen

De Tailwind-CSS wordt lokaal gecompileerd naar `css/tailwind.css` (dit bestand is
gegenereerd en staat in `.gitignore` — Netlify bouwt het bij elke deploy opnieuw).

```bash
npm install      # installeert de dev-dependency (Tailwind CLI)
npm run build    # genereert css/tailwind.css uit css/input.css
```

Lokaal bekijken: serveer de map als statische site, bijvoorbeeld:

```bash
python -m http.server 8123
```

## Structuur

- `*.html` — de pagina's (home, over-gorgi, behandelingen, tarieven, contact,
  privacy, voorwaarden, 404).
- `css/input.css` — Tailwind-invoer + eigen styles (wordt gecompileerd).
- `css/fonts.css` — `@font-face` voor de self-hosted fonts in `fonts/`.
- `js/head.js` — zet vroeg de `js`-class (voorkomt reveal-flits).
- `js/main.js` — mobiel menu, sticky header, scroll-reveal, slimme boekknop.
- `netlify.toml` — build-commando, security headers, cache-control en redirects.
- `.well-known/security.txt` — meldpunt voor kwetsbaarheden.

## Deploy

Netlify draait `npm install && npm run build` en publiceert de rootmap.
