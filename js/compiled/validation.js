"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var addBtn = document.querySelector('.js-subscribe-form__control');
  var errorNotification = document.querySelector('.js-subscribe-error');
  var successNotification = document.querySelector('.js-subscribe-success');
  var emailInput = document.querySelector('.js-subscribe-form__input');
  addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var emailValue = emailInput.value;
    var isValid = emailIsValid(emailValue);
    errorNotification.classList.toggle('js-show', !isValid);
    successNotification.classList.toggle('js-show', isValid);
  });
});

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}