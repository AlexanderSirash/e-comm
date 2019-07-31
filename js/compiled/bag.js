"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var bagAmount = document.querySelector('.js-bag-amount');
  var shoppingBag = document.querySelector('.js-shopping-bag');
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  window.addEventListener('load', function () {
    sumQty(bagAmount);
  });
  shoppingBag.addEventListener('change', function (e) {
    if (e.target.classList.contains('js-qty')) {
      sumQty(bagAmount);
    }
  });
  shoppingBag.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-delete-button')) {
      if (isIE11) {
        var el = e.target.parentElement.parentElement;
        el.parentElement.removeChild(el);
      } else {
        e.target.closest('.js-bag-table-row').remove();
      }

      sumQty(bagAmount);
    }

    if (e.target.classList.contains('js-order-now')) {
      window.location.href = 'thank-you.html';
    }

    if (e.target.classList.contains('js-continue-shopping')) {
      window.location.href = 'home.html';
    }
  });
});

function sumQty(bagAmount) {
  var itemsQty = document.querySelectorAll('.js-qty');
  var shoppingBag = document.querySelector('.js-shopping-bag');
  var totalAmount = 0;
  Array.prototype.forEach.call(itemsQty, function (e) {
    totalAmount += +e.value;
  });
  bagAmount.innerText = totalAmount;
  shoppingBag.classList.toggle('js-bag-empty', !totalAmount);
}