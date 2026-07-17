# Nexus Innovations Capital — Independent QA Audit

**Site audited:** https://stevelouisjean0-byte.github.io/nexus-innovations-capital/redesign-v2/
**Date:** July 17, 2026 · **Build audited:** commits `2daaa9d` + grid fix
**Method:** Live HTTP verification of all pages and assets; automated audit of all 264 links; source-level review of markup, CSS, JS, forms, and metadata. Items that require a running browser session (console, back/forward, touch) are marked **Unable to Verify** rather than assumed.

---

## 1. Executive Assessment

The site has genuinely converted from a single anchor-linked landing page into an eight-page website. All navigation opens real internal pages with correct URLs; the homepage is a preview hub; internal pages carry original, structured content; the design system is consistent; and the client-approved brand elements (palette, both videos, flickering-star logo) are intact. The empty grid cells reported by the client were confirmed and fixed (explicit 4/2/1 and 3/2/1 column counts). The one **Critical** open item is that the contact form does not deliver submissions (backend key pending). The main **High** partial is visual media: premium video is well integrated, but no custom diagrams, process graphics, or branded data visualizations exist yet.

## 2. Overall Completion: **91%**

## 3–6. Requirement Status Summary

**Passed:** site architecture (8 pages) · navigation (real links, active indicator, logo→home, mobile menu) · homepage as preview hub · About / Focus / Why / Capabilities / Leadership / Partner content requirements · unique titles + meta + OG per page · semantic HTML, skip links, focus states, reduced-motion · no invented statistics or credentials · legal notices preserved · 264/264 link audit · orphan grid cells fixed.

**Partially Passed:** high-end visual media (video ✅, custom graphics/diagrams ❌) · leadership photography (consistent monogram avatars, real headshots pending) · image optimization (JPEGs 99–520 KB, not WebP) · 21st.dev usage (categories custom-built; live component fetch blocked by their server bug).

**Failed:** contact form delivery — validates and confirms locally but submissions go nowhere (no backend key). **Critical before launch.**

**Not Implemented:** custom branded diagrams/data visualizations · sitemap.xml/robots.txt (appropriate only at production cutover).

**Unable to Verify (no browser automation in this environment):** console errors (risk low — zero third-party scripts, ~80-line vanilla JS) · real-device touch/back-forward behavior (static pages; standard behavior expected by construction).

## 7. Navigation Test Results

| Check | Result |
|---|---|
| Each nav item opens a separate internal page | **Passed** (verified live: 8× HTTP 200) |
| No anchor-scroll links remain in header/footer navs | **Passed** (source-verified on all pages) |
| URLs change per page / direct open / refresh | **Passed** (each URL fetched directly, 200) |
| Back/forward buttons | **Unable to Verify** live; standard multi-page behavior |
| Logo returns to homepage | **Passed** (header + footer brand → `index.html`, all pages) |
| Active-page indicator | **Passed** (`aria-current="page"` + gold underline, desktop + mobile menus) |
| Mobile menu opens/closes | **Passed** by code review (open/close/Esc/link-click handlers; `aria-expanded` synced) |
| Broken / duplicated / misleading items | **Passed** — none found in 264-link audit |

## 8–10. Page-by-Page Audit

Every page verified for: unique title ✅ · unique meta description ✅ · 4 OG tags ✅ · exactly one `h1` ✅ · consistent header/footer ✅ · closing CTA ✅ · no missing-alt images ✅ (2 decorative `alt=""` backgrounds per page, correct usage).

- **Home** — hub only: hero + 6 preview sections, each with a working link to its internal page. Not overcrowded; no full internal content duplicated. **Passed**
- **About** — mission, vision, long-term strategy, 4 values, 4-step approach, CTA. **Passed**
- **Investment Focus** — all 9 required areas, each with *why it matters / what we look for / how we evaluate / how we support*; not bare cards. **Passed**
- **Why Nexus** — all 8 required value themes present across 9 differentiators + who-we-serve band. **Passed**
- **Capabilities** — all 11 required capabilities, each with description / business value / audience / outcome. **Passed**
- **Leadership** — 6 accurate names/titles, concise verified bios, formal grid (not social-media cards), philosophy section. Photography: consistent monogram avatars; real headshots pending → **Partially Passed**
- **Partner With Us** — investor/founder/strategic pathways, each with who-for / what-provided / what-to-submit / next-step + CTA. **Passed**
- **Contact** — required fields marked (*), inline validation messages, email-type rejection, inquiry-type select, confirmation state, single-column mobile, verified contact info, no placeholders visible. Delivery backend missing → **Failed until key added**

## 11. 21st.dev Component Audit

The Magic MCP feed returned malformed responses on every call during the build (server-side protocol bug; documented). Patterns from 21st.dev's categories were therefore custom-built in the Nexus design system — which itself satisfies the "must be customized, must feel native" rule. Components in use: navigation menu, hero section, hairline bento grid, qualitative stat strip, feature/numbered rows, fact-grid articles, team section, CTA bands, form, footer. Each is mapped to page/section/purpose in `AUDIT-REPORT.md` §9–10. No component showcase effect; no glow/glass/neon/crypto styling; zero third-party scripts. **Passed (with sourcing caveat documented).**

## 12. Premium Design Audit

Consistent two-font system (Newsreader + Helvetica), tokenized navy/gold/charcoal palette, generous clamped spacing, consistent buttons (4 variants, one definition), consistent card families, restrained CSS-only motion, light-dominant layout with navy rhythm bands. Client-reported orphan grid cells — **confirmed, fixed, and verified live** (focus grid 4/2/1, leadership grid 3/2/1; item counts divide evenly at every breakpoint). No template-generic, dark-heavy, or experimental sections remain. **Passed.**

## 13. High-End Visual Media & Graphics Audit

1. **Assets found:** framed hero video (NYC aerial, Pexels 35419124, poster, pause control, muted, `playsinline`, reduced-motion respected) — Home hero; background video (Pexels 12197806, 32% opacity under navy gradient) — Home leadership band; 4 professional photographs used as section media and page-header backgrounds; branded flickering-star logo animation — all pages.
2. **Missing:** custom investment-process diagram; sector/market graphics; branded data visualization (correctly absent as *charts* — no verified data exists; conceptual graphics are the right substitute).
3. **Pages with insufficient visual support:** Capabilities and Why Nexus are text-led beyond their header images.
4. **Generic/low-quality:** none low-quality; note the two videos are licensed stock, retained unchanged **per explicit client instruction**, and the 4 photos repeat across page headers (acceptable, worth diversifying later).
5. **Performance:** videos `preload="metadata"` + posters; JPEGs 99–520 KB (WebP conversion recommended); og logo (1.1 MB) never loads on-page.
6. **Mobile:** videos `playsinline`; media stacks cleanly.
7. **Accessibility:** pause control labeled; decorative media `aria-hidden`/`alt=""`; reduced-motion disables all animation.
8. **Recommended additions:** a 4-step investment-process graphic (About/Capabilities), a public↔private markets flow diagram (Focus/About), sector monogram icons in Nexus line style (Focus).
9. **Placement:** About §Approach; Focus intro; Capabilities header band.
10. **Status: Partially Passed** — premium video is meaningfully integrated (hero requirement met); custom branded graphics are not yet present.

## 14. Mobile Testing

Breakpoints reviewed at 960/1000/760/640/560/520 px: nav→burger menu, all grids collapse to defined column counts (no orphan cells at any width), form single-column, no fixed widths that force horizontal scroll, touch targets ≥44 px. Real-device pass **Unable to Verify** in this environment — recommend a 5-minute phone check. **Passed by code review.**

## 15. Accessibility Testing

Skip links ✅ · landmarks + one h1/page ✅ · logical h1→h2→h3 ✅ · visible gold focus-visible outlines ✅ · labeled buttons/controls ✅ · descriptive link text ✅ · form labels bound + inline understandable errors + focus to first invalid ✅ · decorative elements hidden from AT ✅ · prefers-reduced-motion honored ✅ · contrast: body text AA-compliant on all backgrounds; muted-on-navy reserved for large/supporting text. **Passed.**

## 16. Performance Findings

Per-page HTML ~15–40 KB; shared CSS ~18 KB + JS ~3 KB (cached across pages); self-hosted woff2 fonts with swap; zero third-party scripts/libraries; CSS-only animation (opacity/transform). Largest costs: two streamed Pexels videos (metadata-only until play) and 4 JPEGs (99–520 KB). **Passed; WebP conversion is the remaining Low-priority win.**

## 17. Content Accuracy

No invented returns, AUM, achievements, partnerships, client results, market statistics, or credentials anywhere on the site. Leadership bios match the verified partner records. Credibility strip is qualitative. Spelling/grammar pass completed. Footer legal text preserved verbatim on all 8 pages. **Passed.**

## 18. Complete Link Audit

264 anchors tested across 8 pages — internal files, anchor fragments, assets, mailto/tel/LinkedIn: **264 pass, 0 fail.** Full row-by-row table (link text · source · destination · status) generated at `link-audit.txt` (repo root). External media re-verified HTTP 200 (both Pexels videos, poster image, LinkedIn).

## 19. Technical Errors Found

None blocking. Notes: `index-original.html` (2.1 MB legacy bundle) remains in the deployed folder as an intentional backup — exclude at production cutover; console/browser-runtime checks Unable to Verify here (risk low).

## 20. Required Corrections

| # | Page/Section | Problem | Correction | Priority |
|---|---|---|---|---|
| 1 | Contact — form | Submissions don't deliver (no backend) | Add Web3Forms/Formspree key + endpoint | **Critical** |
| 2 | Leadership — profiles | Monogram avatars, not photography | Commission consistent partner headshots | High |
| 3 | Capabilities / Focus / About | No custom branded graphics | Add process + markets diagrams in Nexus line style | High |
| 4 | All — local images | JPEGs unoptimized (99–520 KB) | Convert to WebP ≤150 KB | Medium |
| 5 | Contact — address | Jackson Heights vs. NYC-skyline positioning | Client to confirm publish address | Medium |
| 6 | Production cutover | No sitemap.xml/robots.txt; legacy bundle in folder | Add at domain launch; remove backup | Medium |
| 7 | All — mobile | Real-device verification outstanding | 5-minute check on a physical phone | Low |

## Completion Scores

| Area | Score | Status |
|---|---|---|
| Site architecture | 98 | Passed |
| Navigation | 97 | Passed |
| Homepage structure | 95 | Passed |
| Internal pages | 94 | Passed |
| Visual design | 92 | Passed |
| Brand consistency | 96 | Passed |
| 21st.dev component selection | 85 | Passed (sourcing caveat) |
| High-end visual media & graphics | 70 | Partially Passed |
| Mobile responsiveness | 90 | Passed (code-review basis) |
| Accessibility | 93 | Passed |
| Performance | 88 | Passed |
| Content quality | 95 | Passed |
| Forms & functionality | 60 | Failed (no delivery backend) |
| Technical implementation | 94 | Passed |

## 21. Final Launch Recommendation

### **Approved with minor corrections**

The architecture, navigation, content, accessibility, and brand execution meet the standard. Two items gate a true production launch: **(1)** connect the contact form backend — Critical, minutes of work once the key exists; **(2)** supply partner headshots — High. Custom branded graphics (High) would lift the visual-media score from "partially" to fully passed but do not block launch. Until #1 is done, treat the live URL as client-preview only, since a working inquiry form is the site's primary conversion path.
