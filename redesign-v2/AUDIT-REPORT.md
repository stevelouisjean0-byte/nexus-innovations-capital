# Nexus Innovations Capital — Website Audit & Redesign Report

**Site:** https://stevelouisjean0-byte.github.io/nexus-innovations-capital/redesign-v2/
**Date:** July 17, 2026 · **Scope:** Full audit, multi-page restructure, implementation, and QA
**Status:** Implemented and deployed (commit `2daaa9d`)

---

## 1. Executive Summary

The site was a single long landing page whose navigation links were anchor jumps to homepage sections — a structure that reads as a template, misleads visitors, and caps the firm's credibility. It has been rebuilt as an eight-page site with a shared design system, a homepage that works as an introduction and navigation hub, real internal pages for every navigation item, an active-page indicator, a polished mobile menu, accessible semantics, and a validated contact form. The client-approved brand elements — navy/gold/charcoal palette, both Pexels videos, and the flickering-star logo — were preserved exactly. All internal links, anchors, and assets pass automated QA.

## 2. Current Website Problems (pre-redesign)

| # | Page | Section | Problem | Why it matters | Priority |
|---|------|---------|---------|----------------|----------|
| 1 | Home | Navigation | All nav links were `#anchor` jumps | Misleading nav; weak information architecture | **Critical** |
| 2 | Home | Whole page | Full content for 7 topics on one page | Overcrowded, hard to scan, template-like | **Critical** |
| 3 | Home | Focus/Why/Capabilities | 8-card grids repeated three times | Repeated card layouts read as generic AI output | High |
| 4 | Home | Contact | Form posts nowhere (demo state only) | Lost inquiries if shipped as-is | High |
| 5 | All | `<head>` | One page = one title/description for everything | Poor SEO, poor link previews per topic | Medium |
| 6 | Home | Markup | Inline styles throughout, no reusable CSS | Unmaintainable; inconsistent future edits | Medium |
| 7 | Home | Mobile | No mobile menu — nav links wrapped | Unprofessional small-screen experience | High |
| 8 | Home | Accessibility | No skip link, no focus states, div-based nav | Excludes keyboard/AT users; audit risk | High |

## 3. Navigation Audit

**Before:** `About`, `Focus`, `Why Nexus`, `Capabilities`, `Partner With Us` → all `#section` anchors on the homepage. No Leadership link. No active-page state. No mobile menu. Logo linked to `#top`.

**After:** Seven real destinations (`about.html`, `focus.html`, `why.html`, `capabilities.html`, `leadership.html`, `contact.html`, + `partner.html` as the CTA button), `aria-current="page"` with a gold underline as the active indicator, logo → `index.html` on every page, and a full-screen navy mobile menu (Esc-closable, focus-safe) below 960px.

## 4. Broken & Misleading Links (found → fixed)

- Every header nav item (5) scrolled to homepage sections instead of opening pages — replaced with internal page links. **Critical → fixed**
- Footer "About / Investment Focus / Capabilities / Contact" were the same anchors — now real pages, plus Why Nexus, Leadership, Partner With Us added. **High → fixed**
- Hero "Explore Our Focus" and "Partner With Us" buttons were anchors — now `focus.html` / `partner.html`. **High → fixed**
- Partner-card links ("Start a Conversation →" etc., 3×) all pointed at the same `#contact` anchor — now deep-link to the matching pathway on `partner.html`. **Medium → fixed**
- No leadership destination existed anywhere. **High → fixed** (`leadership.html`)
- Automated QA now verifies every `href`/`src` across all 8 pages (files, anchors, assets): **0 broken, 0 duplicates, 0 placeholders.**

## 5. Recommended (and implemented) Site Map

```
index.html          Home — introduction & navigation hub
about.html          About Us — mission, vision, strategy, values, approach
focus.html          Investment Focus — 9 areas, each fully explained
why.html            Why Nexus — 9 differentiators + who we serve
capabilities.html   Capabilities — 11 capabilities with value/audience/outcome
leadership.html     Leadership — 6 partners, philosophy, institutional format
partner.html        Partner With Us — investor / founder / strategic pathways
contact.html        Contact — validated form + verified contact information
```

## 6. Homepage Content Plan (implemented)

1. Premium fixed header with active-page nav
2. Hero: headline, positioning statement, primary CTA (Explore Our Focus) + secondary CTA (Partner With Us), framed NYC skyline video, qualitative credibility strip (Public + Private · 8 Sectors · Founder-First)
3. About preview (2 short paragraphs) → **Learn More About the Firm**
4. Investment focus preview (8 named areas, deep-linked) → **Explore Our Full Investment Focus**
5. Why Nexus preview (4 advantages on navy) → **Why Nexus**
6. Capabilities preview (4 of 11) → **View Capabilities**
7. Leadership preview (CEO quote over the approved video) → **Meet Our Leadership**
8. Partnership preview (3 pathway cards) → **Explore Partnership Pathways**
9. Professional footer with full sitemap + legal

## 7. Content Moved Off the Homepage

- Full 8-card focus grid with descriptions → `focus.html` (expanded to 9 structured areas)
- Full 8-item "Why Nexus" list → `why.html`
- Full 8-row capabilities list → `capabilities.html` (expanded to 11 with structure)
- Contact info + full form → `contact.html`
- Partner pathway details → `partner.html`

## 8. Page-by-Page Redesign Plan (implemented)

- **About:** mission / vision pair, long-term strategy split with image, 4 values, 4-step approach timeline, closing CTA.
- **Investment Focus:** nine numbered articles, each answering *why it matters, what we look for, how we evaluate, how we support* in a labeled fact grid — no unexplained cards.
- **Why Nexus:** nine differentiators in two scannable columns, "who we serve" band (investors / founders / partners), standard statement, CTA.
- **Capabilities:** eleven numbered capabilities, each with *what it is, business value, who it serves, expected outcome*.
- **Leadership:** philosophy + CEO quote, six formal partner profiles (verified bios only), navy monogram avatars pending real headshots, partner-led CTA.
- **Partner With Us:** three pathways, each with *who it's for, what Nexus provides, what to submit, next steps* and its own CTA into Contact.
- **Contact:** verified info (address, phone, email, LinkedIn), form with name / email / company / role / inquiry type / message, inline validation messages, confirmation state, mobile single-column layout.

## 9–10. 21st.dev Components — Selection & Placement

The 21st.dev Magic MCP server returned malformed protocol responses on every call during this build (server-side bug), so no snippets could be fetched live. Per the brief's own rule — *no component without customization; it must feel native* — each selected pattern was custom-built in the Nexus design system rather than pasted. Category mapping:

| 21st.dev category | Page / section | Business purpose | Customization applied | Speed | Mobile | Accessibility |
|---|---|---|---|---|---|---|
| Navigation menu | All pages, header | Navigation, trust | Navy/gold, serif brand, gold active underline, scroll swap | No JS lib; ~1 KB | Burger + full-screen menu | `aria-current`, `aria-expanded`, Esc close |
| Hero section | Home | Brand authority, conversion | Split grid with client's framed video; palette + Newsreader | Video poster + `preload=metadata` | Stacks to 1 column | Pause control, labeled |
| Bento/feature grid | Home, focus preview | Content clarity, navigation | Hairline-grid link tiles, deep links to focus anchors | Pure CSS | auto-fit columns | Real `<a>` elements |
| Statistics display | Home, hero strip | Credibility | Qualitative (no invented numbers) serif figures | None | Wraps | Plain text |
| Feature section | Why / About / Capabilities | Clarity, hierarchy | Numbered rows + labeled fact grids | Pure CSS | auto-fit | Semantic headings |
| Team section | Leadership | Trust, credibility | Formal grid, monogram avatars, institutional tone | No images needed yet | 1-col stack | `aria-hidden` avatars |
| Call to action | Every page close | Conversion | Navy band, one headline, ≤2 buttons | Pure CSS | Wraps | Buttons are links |
| Form | Contact | Conversion, trust | Underline inputs, inline errors, confirm state | ~1 KB JS | 1-col under 560px | Labels, `:invalid`, focus mgmt |
| Footer | All pages | Navigation, credibility | Brand + sitemap + preserved legal | Pure CSS | Wraps | Landmark + labeled links |

**Deliberately not used:** carousels, sliders, testimonial walls (no verified testimonials), charts (no verified data), heavy background treatments, cursor effects — each would violate the "no decoration without business purpose" rule.

## 11. Design System Recommendations (implemented)

Single source of truth in `assets/style.css`: CSS custom properties for color, one easing curve, two shadow levels, shared primitives (`.band`, `.sec-head`, `.eyebrow-line`, `.btn-*`, `.detail`, `.adv`, `.numrow`, `.pcard`, `.lcard`), and one shared `assets/app.js`. Any future page composes from these.

## 12. Typography

Two families only: **Newsreader** (self-hosted, display/serif) for headlines, figures, and brand; **Helvetica Neue** stack for body. Clamped scale (H1 42–72px home, 36–58px internal; H2 30–44px; body 15–16.5px; labels 11–12px letterspaced uppercase). Line-height 1.6–1.75 body, ≤1.2 display. No paragraph exceeds ~3 sentences.

## 13. Color

Client-approved Design 1 palette, enforced via tokens: navy `#0B2145` / deep `#071733` / soft `#16305C`, gold `#B08A4F` / bright `#C9A870`, charcoal `#2B303A`, ink `#15202E`, muted `#5C6675`, off-white `#F8F6F1`. Gold is reserved for accents and CTAs; long-form text never sits on gold. Light sections dominate; navy bands provide rhythm without a "dark site" feel.

## 14. Mobile Improvement Plan (implemented)

Full-screen slide-in menu below 960px; hero, splits, and grids collapse to one column via `auto-fit` (no horizontal scroll at 320px+); form goes single-column under 560px; touch targets ≥44px (menu links, buttons, form fields); float-card repositions at small widths; videos keep `playsinline`.

## 15. Accessibility Improvement Plan (implemented)

Skip-to-content link on every page; semantic landmarks (`header/nav/main/footer`) and one `h1` per page; visible gold `:focus-visible` outlines; `aria-current`, `aria-expanded`, `aria-controls`, `aria-hidden` where appropriate; form labels bound to fields with inline error text and focus moved to first invalid field; `prefers-reduced-motion` disables star flicker, hero drift, and reveal animations; body text contrast ≥ WCAG AA on all backgrounds (muted-on-navy used only for supporting text at large sizes).

## 16. Performance Improvement Plan (implemented)

Replaced the 2.1 MB self-unpacking bundle with ~40 KB HTML per page + shared cached CSS/JS; fonts self-hosted woff2 with `font-display:swap`; videos `preload="metadata"` with poster images; images `loading` deferred where offscreen; zero third-party scripts, zero animation libraries; animations are CSS-only and hardware-friendly (opacity/transform). Remaining opportunity (Low): serve the four JPEGs (asset-01…04, 0.1–0.5 MB each) as compressed WebP.

## 17. Content & Copy Corrections

- Removed template phrasing duplicated across sections; each claim now appears once, on its page.
- No invented statistics, AUM, returns, portfolio counts, or credentials anywhere; the credibility strip is qualitative.
- Leadership bios use only verified partner information (six real partners).
- Fixed grammar/consistency ("Let's build what comes next", consistent serial style, consistent firm descriptor in footer).
- **Placeholders requiring input from the firm:** (1) partner headshots — monogram avatars used until professional photography is supplied; (2) form backend — Web3Forms access key needed to make submissions deliver; (3) confirm the Jackson Heights office address is the one to publish alongside NYC positioning.

## 18. Technical Implementation Notes

Static HTML + one stylesheet + one script; no build step required. Deployed via GitHub Pages from `redesign-v2/`. Each page carries unique `<title>`, meta description, and Open Graph tags (logo lockup as share image). The previous single-page artifact bundle is preserved as `index-original.html` and in git history.

## 19. QA Results

- **Links:** automated check across all 8 pages — every internal href, anchor fragment, and asset path resolves; external Pexels media and LinkedIn verified HTTP 200. ✅
- **Navigation:** one nav per page, exactly one active indicator per context. ✅
- **Forms:** required-field validation, inquiry-type select, error messages, confirmation state exercised. ✅
- **Responsive:** layouts collapse cleanly at 960 / 760 / 640 / 560 px breakpoints; no horizontal scroll. ✅
- **Live deployment:** verified serving from GitHub Pages after push. ✅

## 20. Final Launch Checklist (before pointing the real domain)

- [ ] Add Web3Forms (or equivalent) access key so the contact form actually delivers — **Critical**
- [ ] Supply professional partner headshots to replace monogram avatars — **High**
- [ ] Confirm publish address (Jackson Heights vs. Manhattan office) — **Medium**
- [ ] Convert the four local JPEGs to WebP — **Low**
- [ ] Add `sitemap.xml` + `robots.txt` when this replaces the production homepage — **Medium**
- [ ] Final client review of all copy — **High**
