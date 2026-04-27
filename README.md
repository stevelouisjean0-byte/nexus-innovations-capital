# Nexus Innovations Capital

Premium venture capital firm marketing site. Static HTML / CSS / vanilla JS — no build step.

## Stack

- Single shared `assets/css/styles.css` (design tokens + components)
- Vanilla JS in `assets/js/main.js` (sticky header, mobile menu, reveal-on-scroll, count-up)
- Google Fonts: Fraunces (display, variable), Inter (body), Geist Mono (labels)
- Pexels CDN for video loops; Unsplash CDN for poster images and team portraits

## Pages

- `index.html` — Homepage (hero, what we do, focus areas, our edge, philosophy, team preview, insights preview, closing CTA)
- `about.html` — Firm story, principles
- `strategy.html` — Investment strategy, criteria, what we won't do
- `focus-areas.html` — AI, Fintech, SaaS, Biotech & Frontier (deep dive each)
- `team.html` — Partners + Principals & Research grid
- `insights.html` — Featured + archive articles
- `contact.html` — Form, addresses, founder/LP/press routes

## Design system

| Token | Value | Use |
|---|---|---|
| `--night` | `#0A0E1A` | Primary background |
| `--paper` | `#F4F1EA` | Light alt section background |
| `--gold` | `#C9A87C` | Matte champagne accent |
| `--text-d` | `#F8F6F1` | Primary text on dark |

Type pairing: Fraunces light/regular for editorial display + Inter for UI/body + Geist Mono for labels.

## Local preview

```bash
python -m http.server 8081
```

Then open `http://localhost:8081`.

## Image / video sourcing

All hero and section videos are Pexels CDN URLs with Unsplash poster fallbacks. Each `<video>` block is annotated with HTML comments (e.g. *"Suggested loop: NYC financial district at night / aerial Manhattan at dusk"*) so a developer can swap in licensed footage by replacing the `<source src="...">` URL.

Team portraits use Unsplash placeholder URLs — replace with real headshots.

## Form

The contact form posts to `#`. Wire to your backend, Formspree, Netlify Forms, or your CRM endpoint.

## Accessibility & motion

- Semantic HTML throughout
- All images have `alt` text
- `prefers-reduced-motion` disables animations and hides background videos
- Sticky header, smooth scroll
