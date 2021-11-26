"use strict";
$(function () {
  var lightbox = $(".gallery a.gallery--item").simpleLightbox({});
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 70,
  });
});
