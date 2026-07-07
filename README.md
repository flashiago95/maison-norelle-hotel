# Maison Norelle — Website

Boutique guest house homepage for Maison Norelle (Gillitts, Hillcrest, KZN).

## What's fixed in this revision

**Colors are now Maison Norelle's actual brand palette, not Solinom's navy.**
Solinom's stylesheet defines its own colors as real CSS custom properties at
`:root` (e.g. `--solinom-text-dark: #15262C`). `style.css` redefines those
same variables to the brand booklet's deep coffee-brown / warm gold palette
— this recolors the entire real Solinom-powered header, hero, cards, and
footer with zero markup changes, since every component already reads its
color from these variables.

**Logo/nav overlap fixed for real this time.** Solinom's own CSS hardcodes
`.main-header__logo` at `left: 44%`, calibrated for their original 6-link +
2-link nav — with our 3-link + 2-link nav that landed the logo on top of
"Experience". Fixed two ways together: the logo now sits as an actual
sibling between the two `<nav>` blocks inside `.main-header__middle`, and
`style.css` overrides it to `left:50%` relative to that wrapper specifically
— so it's always centered in the gap between the two link groups.

**Booking bar fits in the first viewport, with real functioning inputs:**
- Check-in / check-out use an actual **jQuery UI datepicker**.
- The Suite dropdown uses actual **bootstrap-select**, styled to match the
  theme, instead of a plain unstyled native `<select>`.
- The dark empty gap above the hero photo is fixed — Solinom's CSS keeps
  the background/title hidden until Owl Carousel's JS adds an `active`
  class (timing-dependent); `style.css` forces both visible so it never
  shows blank regardless of plugin timing.

**Hillside Highlights** uses Solinom's real `feature-three` section markup
verbatim (the "Featured Amenities" card style), adapted to 3 cards for
Springside / Shongweni / Giba Gorge.

**Main Facilities** uses the same real card style, kept full-width
edge-to-edge.

**Footer** is Solinom's real `main-footer` markup verbatim, content
swapped for Maison Norelle.

**Real mobile nav + search popup** — Solinom's actual off-canvas mobile
menu and full-screen search overlay are included, using solinom.css's own
toggle classes (`.expanded` / `.active`).

## Structure

```
maison-norelle-website/
├── index.html
├── assets/
│   ├── css/
│   │   ├── solinom.css   ← the real template stylesheet, unmodified
│   │   └── style.css     ← brand color override + integration fixes + lower-section styles
│   ├── js/
│   │   ├── vendor-init.js ← Owl Carousel / datepicker / bootstrap-select / WOW / mobile nav / search
│   │   └── script.js      ← GSAP scroll reveals for the lower sections
│   └── images/logo.jpeg
└── README.md
```

## About the "91% CSS" on GitHub

That's just GitHub's language-breakdown stat — it counts raw bytes per file
type, and `solinom.css` (the real, complete template stylesheet) alone is
about 450KB of CSS, dwarfing the HTML/JS in byte count. It has nothing to do
with how the site actually works or renders, and isn't limiting anything —
a heavy real-world CSS framework file just naturally skews that percentage.
Nothing to fix there.

## Known simplifications

- Solinom's icon font (`solinom-icons`) is proprietary — Font Awesome 6
  substitutes throughout.
- Solinom's real "sticky header" clones the header via JS on scroll; that
  script wasn't part of the files pulled in, so this gets a shadow-on-scroll
  instead. The header is visible immediately on load either way.
- Decorative shape/frame PNGs (corner brackets, hover glows, footer
  background art) are Solinom's own proprietary artwork and were left out.
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
