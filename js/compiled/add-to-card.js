"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var addToCardButton = document.querySelector('.product-details__button');
  var bagAmount = document.querySelector('.js-bag-amount');
  var productAddSuccessNotification = document.querySelector('.js-product-added');
  addToCardButton.addEventListener('click', function () {
    var amount = +bagAmount.textContent;
    bagAmount.textContent = amount + 1;
    productAddSuccessNotification.classList.add('js-show');
    setTimeout(function () {
      productAddSuccessNotification.classList.remove('js-show');
    }, 2000);
  });
});