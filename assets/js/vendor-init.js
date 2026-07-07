// ===== Real Solinom vendor inits =====
$(document).ready(function () {
  // Hero slider — Owl Carousel, same as the real template
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

  // Real jQuery UI datepicker on the check-in / check-out fields
  $('.solinom-datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
    minDate: 0
  });

  // Real bootstrap-select styled dropdown for the Suite selector
  $('.selectpicker').selectpicker();

  // Guests quantity stepper
  $('.quantity-box .add').on('click', function () {
    var input = $(this).siblings('input');
    input.val(parseInt(input.val() || 0) + 1);
  });
  $('.quantity-box .sub').on('click', function () {
    var input = $(this).siblings('input');
    var val = parseInt(input.val() || 0);
    if (val > 1) input.val(val - 1);
  });

  // Real mobile off-canvas nav (uses solinom.css's own .expanded toggle class)
  $('.mobile-nav__toggler').on('click', function () {
    $('.mobile-nav__wrapper').toggleClass('expanded');
  });

  // Real search popup overlay (uses solinom.css's own .active toggle class)
  $('.search-toggler').on('click', function (e) {
    e.preventDefault();
    $('.search-popup').toggleClass('active');
  });
});

new WOW().init();

// Header shadow once page scrolls past the hero
window.addEventListener('scroll', function () {
  var header = document.querySelector('.main-header');
  if (header) {
    header.style.boxShadow = window.scrollY > 60 ? '0 12px 30px rgba(0,0,0,0.35)' : 'none';
  }
});
