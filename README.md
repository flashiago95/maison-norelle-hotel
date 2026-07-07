# Maison Norelle — Website

Boutique guest house homepage for Maison Norelle (Gillitts, Hillcrest, KZN).

## What changed in this revision

**Header/logo overlap fixed.** Solinom's `.main-header__logo` uses a hardcoded
`left: 44%` calibrated for their original 6-link + 2-link nav. With our
shorter nav (3 links + 2 links) that offset landed the logo on top of the
"Experience" link. Fixed by moving the logo to sit as a direct sibling
between the two `<nav>` blocks inside `.main-header__middle`, centered via
`left:50%` relative to that wrapper specifically — so it always sits exactly
in the gap between the two link groups, regardless of how many links are on
each side.

**The dark empty strip above the hero photo, fixed.** Solinom's real CSS
keeps `.main-slider-two__bg` and `.main-slider-two__title` hidden/transformed
by default (`opacity:0`, scaled/shifted) and only reveals them once Owl
Carousel adds an `active` class to the slide — timing-dependent on the
plugin's own JS running successfully. That timing dependency was producing
the blank gap. `style.css` now force-overrides both to always be visible,
so the hero never shows blank regardless of carousel init timing.

**The booking bar now has real functioning inputs, not static placeholders:**
- Check-in / check-out use an actual **jQuery UI datepicker** (calendar
  popup on click) — the same plugin Solinom uses.
- The Suite dropdown uses actual **bootstrap-select**, styled to match the
  dark theme, instead of a plain unstyled native `<select>`.
- Guests +/- stepper is wired up.

**Hillside Highlights** now uses Solinom's real `feature-three` section
markup and CSS verbatim (the "Featured Amenities" card style: icon circle,
title, text, Read More link) — adapted to 3 cards instead of 4, content
swapped for Springside / Shongweni / Giba Gorge. Icons are Font Awesome
(Solinom's own icon font is proprietary and wasn't redistributed); the
decorative corner-frame and hover-shape PNGs are also proprietary assets
and were left out — the cards still carry the correct background, icon
circle, spacing, and hover color-shift from the real CSS.

**Main Facilities** uses the same real `feature-three__item` card style,
kept **full width** (edge-to-edge, no side container) per request, via a
small `.facilities-full` wrapper in `style.css`.

**Footer** replaced with Solinom's real `main-footer` markup verbatim
(About + newsletter + socials / Explore links / Contact), content swapped
for Maison Norelle. The proprietary decorative footer background shape and
app-store badge images were left out (not relevant here anyway).

**Real mobile nav + search popup** — Solinom's actual off-canvas mobile
menu (`.mobile-nav__wrapper`) and full-screen search overlay
(`.search-popup`) are now included, using solinom.css's own real toggle
classes (`.expanded` / `.active`).

## Structure

```
maison-norelle-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── solinom.css   ← the real template stylesheet, unmodified
│   │   └── style.css     ← integration fixes + our styles for lower sections
│   ├── js/
│   │   ├── vendor-init.js ← Owl Carousel / datepicker / bootstrap-select / WOW / mobile nav / search
│   │   └── script.js      ← GSAP scroll reveals for the lower sections
│   └── images/logo.jpeg
└── README.md
```

## Known simplifications

- Solinom's icon font (`solinom-icons`) is proprietary — Font Awesome 6
  substitutes throughout.
- Solinom's real "sticky header" clones the header via JS on scroll; that
  script wasn't part of the files pulled in, so this gets a shadow-on-scroll
  instead. The header is visible immediately on load either way.
- Decorative shape/frame PNGs (corner brackets, hover glows, footer
  background art) are Solinom's own proprietary artwork and were left out;
  layout, spacing, and color from the real CSS are otherwise intact.
- Photography is Unsplash placeholders — swap for real property photos
  whenever ready.

## Deploy quickly

```bash
git init
git add .
git commit -m "Maison Norelle homepage"
git remote add origin <your-repo-url>
git push -u origin main
```
