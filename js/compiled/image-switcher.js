"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var imageSwithcer = document.querySelector('.js-image-switcher__frame');
  var imageSwitcherMenu = document.querySelector('.js-image-switcher__menu');
  imageSwitcherMenu.addEventListener('click', function (e) {
    e.preventDefault();
    var bigImgSrc = imageSwithcer.firstElementChild.src;
    var smallImgSrc = e.target.src;

    if (imageSwitcherMenu.contains(e.target)) {
      imageSwithcer.firstElementChild.src = smallImgSrc;
      e.target.src = bigImgSrc;
    }
  });
});