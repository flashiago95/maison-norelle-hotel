// ===== Real Solinom vendor inits (Owl Carousel + WOW.js) =====
$(document).ready(function () {
  $('#heroCarousel').owlCarousel({
    items: 1,
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplay: true,
    autoplayTimeout: 7000,
    smartSpeed: 1000,
    nav: false,
    dots: false,
    margin: 0
  });

  // Guests quantity stepper (the real template wires this via its own main.js;
  // reimplemented here since we're not pulling that proprietary file in)
  $('.quantity-box .add').on('click', function () {
    const input = $(this).siblings('input');
    input.val(parseInt(input.val() || 0) + 1);
  });
  $('.quantity-box .sub').on('click', function () {
    const input = $(this).siblings('input');
    const val = parseInt(input.val() || 0);
    if (val > 1) input.val(val - 1);
  });

  // Mobile nav toggle (simple show/hide, real template's is more elaborate)
  $('.mobile-nav__toggler').on('click', function () {
    $('.main-header__middle').toggleClass('mobile-nav-visible');
  });
});

new WOW().init();

// Header shadow once page scrolls past the hero
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 60 ? '0 12px 30px rgba(0,0,0,0.35)' : 'none';
  }
});
