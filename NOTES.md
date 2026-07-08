# Technische notities (voor later)

Puur ter referentie — geen actieve configuratie.

## Spam-bescherming voor formulieren
Als er in de toekomst een contact- of intakeformulier met spam-bescherming
nodig is, gebruik dan **Cloudflare Turnstile** in plaats van Google reCAPTCHA.

**Waarom:** Turnstile past beter bij de strikte Content-Security-Policy die al is
geconfigureerd (`default-src 'self'`). Bij invoering moet de CSP in `netlify.toml`
alsnog worden uitgebreid met de Turnstile-domeinen, bijvoorbeeld:

- `script-src`: `https://challenges.cloudflare.com`
- `frame-src`: `https://challenges.cloudflare.com`

reCAPTCHA vereist meer en bredere externe domeinen (google.com / gstatic.com) en
laadt zwaardere third-party scripts, wat slechter aansluit op deze setup.
