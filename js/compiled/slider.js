"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var slider = document.querySelector('.js-slider');
  var sliderFrame = document.querySelector('.js-slider__frame');
  var sliderLeftControl = document.querySelector('.js-slider__left-button');
  var slidesQty = sliderFrame.children.length;
  var slideWidth = sliderFrame.children[0].getBoundingClientRect().width;
  var sliderVisibleAreaWidth = slider.getBoundingClientRect().width;
  var sliderItemsWidth = slidesQty * slideWidth;
  var controlWidth = sliderLeftControl.getBoundingClientRect().width;
  var itemsOnPage = Math.floor(sliderVisibleAreaWidth / slideWidth);
  var slideTimes = slidesQty - itemsOnPage;
  var countR = slideTimes;
  var countL = 0;
  slider.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-slider__right-button')) {
      if (countR > 1) {
        countR--;
        countL++;
        var left = sliderFrame.style.left.replace(/px/g, '');
        sliderFrame.style.left = +left - slideWidth + 'px';
      } else {
        sliderFrame.style.left = -(sliderItemsWidth - sliderVisibleAreaWidth) - controlWidth * 2 + 'px';
        countR = 0;
        countL = slideTimes;
      }
    }

    if (e.target.classList.contains('js-slider__left-button')) {
      if (countL > 1) {
        countL--;
        countR++;

        var _left = sliderFrame.style.left.replace(/px/g, '');

        sliderFrame.style.left = +_left + slideWidth + 'px';
      } else {
        sliderFrame.style.left = 0 + 'px';
        countL = 0;
        countR = slideTimes;
      }
    }
  });
});