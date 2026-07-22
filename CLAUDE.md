# CLAUDE.md - Gorgeous Esthetics

Context voor Claude Code bij het werken aan deze repo. Lees dit voordat je iets aanpast.

## Project
Website voor Gorgi Joanna Georgina Strang, botox en skinbooster praktijk in Middelharnis.
Live: https://gorgeousesthetics.netlify.app/
GitHub: dirkvandersluis/GorgeousEsthetics

## Stack
- Tailwind CSS met build stap. Na elke CSS-wijziging: npm run build
- Geen framework, vanilla HTML/JS waar nodig
- Pagina's: index.html, behandelingen.html, tarieven.html, over-gorgi.html, contact.html, 404.html

## Design system
- Navy #1C3D5A (primary)
- Gold #A9823C (accent)
- Cream #F3ECE1 (achtergrond)
- Sand #EAE1D1 (achtergrond variant)
- Fraunces: koppen/headings
- Inter: body tekst
- Stijl: asymmetrische hero, genummerde behandelteasers, icon-based cards, scroll reveal animations met prefers-reduced-motion support
- Inspiratie: kiewietdejongekliniek.nl (asymmetrie, elegantie, minimaal gedoe)

## Standing rules (altijd toepassen, ook zonder dat het expliciet in de prompt staat)
- Push naar GitHub alleen als er echte zichtbare content staat. Nooit lege scaffolding pushen.
- Nooit onbevestigde claims of feiten toevoegen die niet expliciet zijn aangeleverd door Gorgi of Dirk. Eerder is dit al misgegaan (verzonnen opleiding, voorbarige Wkkgz-claim), dus bij twijfel weglaten en het aan Dirk vragen in je antwoord, niet zelf invullen.
- Geen emoji's in eindproducten (ook niet als brondocumenten van Gorgi ze wel bevatten, dan eruit filteren)
- Geen m-dashes, gebruik komma, punt of nieuwe zin
- Er is geen boekingssysteem. Nooit "Maak een afspraak" of vergelijkbare boekingstaal gebruiken. Altijd "Neem contact op" of verwijzing naar WhatsApp/mail/Instagram DM.
- Legale documenten (privacyverklaring, cookieverklaring, algemene voorwaarden, klachtenregeling) zijn Gorgi's eigen verantwoordelijkheid om professioneel te laten checken. Niet zelf inhoudelijk aanpassen of aanvullen zonder expliciete instructie.

## Netlify
Builds staan bewust op "Stopped builds" om build-minuten te sparen. Een git push update de live site dus niet automatisch. Dirk deployt zelf handmatig via netlify deploy --prod, of zet builds tijdelijk aan in het dashboard. Dit hoort niet in Claude Code prompts te zitten, Dirk regelt dit zelf.

## Contact info (voor consistentie in copy)
- Adres: Volta 8-37, 3241 LW Middelharnis
- WhatsApp: 06 22 62 94 00
- Mail: info@gorgeousesthetics.nl
- Instagram: @gorgeoussesthetics
