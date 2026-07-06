# Maison Norelle — Website

Boutique guest house homepage for Maison Norelle (Gillitts, Hillcrest, KZN).

## What changed in this revision

The **hero and navigation now use the real Solinom framework and markup**,
per request — not a re-creation in a custom stack:

- `assets/css/solinom.css` is the **actual, unmodified Solinom stylesheet**
  copied from the template package (all 19,500+ lines).
- The topbar (`.topbar-two`), header/nav (`.main-header.main-header--two`),
  and hero (`.main-slider-two` + `.banner-form`) use **Solinom's real HTML
  structure and class names** verbatim — only the copy, links, logo, and
  images were swapped for Maison Norelle's.
- The hero slider is a real **Owl Carousel** (3 slides, fade transition,
  autoplay) — the same plugin Solinom uses, not a custom animation.
- **Bootstrap 5**, **Owl Carousel 2**, **WOW.js**, **Animate.css**, and
  **Font Awesome 6** are loaded from CDN (Solinom's actual vendor stack).
  Font Awesome substitutes for Solinom's proprietary `solinom-icons` font,
  which isn't something we can redistribute — icon classes were mapped to
  their closest Font Awesome equivalents (e.g. `icon-pin` → `fa-location-dot`).
- Sections below the hero (About, Highlights, Suites, Promo, Testimonials,
  Footer) keep the lighter custom build from the previous revision — these
  aren't literal Solinom sections, so there was nothing to copy verbatim.
  Say the word if you'd like any of those converted to real Solinom section
  markup (e.g. `.room-two`, `.benefit-two`) the same way the hero was.

## Structure

```
maison-norelle-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── solinom.css   ← the real template stylesheet, unmodified
│   │   └── style.css     ← our styles for the sections below the hero
│   ├── js/
│   │   ├── vendor-init.js ← Owl Carousel / WOW.js / mobile-nav init
│   │   └── script.js      ← GSAP scroll reveals for the lower sections
│   └── images/logo.jpeg
└── README.md
```

## Known simplifications

- Solinom's real "sticky header" is implemented by cloning the header with
  JavaScript and fading in a fixed duplicate on scroll — that script wasn't
  part of the files pulled in, so this version just gets a subtle shadow on
  scroll instead. The header is visible immediately on load either way.
- The mobile off-canvas menu (a separate large markup block in the source
  template) wasn't pulled in — there's a minimal dropdown fallback instead.
- The booking bar's "advanced filter" popup (bathrooms/bedrooms/type +
  15 amenity checkboxes) was left out as not relevant to a guest house
  booking bar — the four core fields (check-in, check-out, guests, suite)
  plus search are wired up.
- Photography is Unsplash placeholders — swap for real property photos
  whenever ready.

## Deploy quickly

```bash
git init
git add .
git commit -m "Maison Norelle homepage — real Solinom hero/nav"
git remote add origin <your-repo-url>
git push -u origin main
```
