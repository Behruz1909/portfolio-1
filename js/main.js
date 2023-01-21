"use strict"
const typed3 = new Typed(".element", {
  strings: [
    "The languages i know: Html",
    "The languages i know: Css",
    "The languages i know: Bootstrap",
    "The languages i know: Sass",
    "The languages i know: Javascript",
  ],
  typeSpeed: 60,
  backSpeed: 0,
  smartBackspace: true,
  loop: true,
});

AOS.init({
  once: true,
});

$(".slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});
