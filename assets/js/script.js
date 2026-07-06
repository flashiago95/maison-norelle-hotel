gsap.registerPlugin(ScrollTrigger);

// Hero entrance — runs immediately on load, no scroll dependency
gsap.timeline({defaults:{ease:'power3.out'}})
  .from('.hero__stars', {opacity:0, y:14, duration:0.7}, 0.15)
  .from('.hero__content .eyebrow', {opacity:0, y:14, duration:0.7}, 0.3)
  .from('#heroTitle', {opacity:0, y:26, duration:0.9}, 0.42)
  .from('.hero__sub', {opacity:0, y:20, duration:0.8}, 0.6)
  .from('.hero__actions', {opacity:0, y:20, duration:0.8}, 0.75)
  .from('.booking-bar__inner', {opacity:0, y:40, duration:0.9}, 0.9);

// Nav badge — also immediate, no scroll dependency
gsap.from('.nav__badge', {y:-10, opacity:0, duration:1, delay:0.3, ease:'power2.out'});

// Scroll reveal — the ONLY reveal mechanism in the page. Every element
// (section headers, split content, and every individual grid card) uses
// the shared .reveal class. A small index-based delay gives grids of
// cards a gentle stagger without a second, conflicting animation.
document.querySelectorAll('.reveal').forEach((el, i) => {
  gsap.to(el, {
    opacity:1, y:0, duration:0.9, ease:'power3.out',
    delay:(i % 4) * 0.08,
    scrollTrigger:{trigger: el, start:'top 88%'}
  });
});

// Promo panel slide-in
gsap.from('.promo__panel', {
  xPercent:-40, opacity:0, duration:1, ease:'power3.out',
  scrollTrigger:{trigger:'.promo', start:'top 75%'}
});

// Nav shadow on scroll
const navEl = document.querySelector('nav');
window.addEventListener('scroll', () => {
  navEl.style.boxShadow = window.scrollY > 60 ? '0 12px 30px rgba(0,0,0,0.35)' : 'none';
});
