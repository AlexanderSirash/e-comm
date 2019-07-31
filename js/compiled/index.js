// ----------------------------------SEARCH------------------------------
// ----------------------------------HOME--------------------------------
// ----------------------------------SLIDER------------------------------
// const slider = document.querySelector('.js-slider');
// const sliderFrame = document.querySelector('.js-slider__frame');
// const sliderLeftControl = document.querySelector('.js-slider__left-button');
//
//
// const slidesQty = sliderFrame.children.length;
// const slideWidth = sliderFrame.children[0].getBoundingClientRect().width;
// const sliderVisibleAreaWidth = slider.getBoundingClientRect().width;
// const sliderItemsWidth = slidesQty * slideWidth;
// const controlWidth = sliderLeftControl.getBoundingClientRect().width;
// const itemsOnPage = Math.floor(sliderVisibleAreaWidth / slideWidth);
// let slideTimes = slidesQty - itemsOnPage;
//
// let countR = slideTimes;
// let countL = 0;
//
//
// slider.addEventListener('click', (e) => {
//     if (e.target.classList.contains('js-slider__right-button')) {
//         if (countR > 1) {
//             countR--;
//             countL++;
//             const left = sliderFrame.style.left.replace(/px/g, '');
//             sliderFrame.style.left = +left - slideWidth + 'px';
//         } else {
//             sliderFrame.style.left = -(sliderItemsWidth - sliderVisibleAreaWidth) - controlWidth * 2 + 'px';
//             countR = 0;
//             countL = slideTimes;
//         }
//     }
//     if (e.target.classList.contains('js-slider__left-button')) {
//         if (countL > 1) {
//             countL--;
//             countR++;
//             const left = sliderFrame.style.left.replace(/px/g, '');
//             sliderFrame.style.left = +left + slideWidth + 'px';
//         } else {
//             sliderFrame.style.left = 0 + 'px';
//             countL = 0;
//             countR = slideTimes;
//         }
//     }
// });
// ----------------------------------PRODUCT DETAILS--------------------------------
// const imageSwithcer = document.querySelector('.js-image-switcher__frame');
// const imageSwitcherMenu = document.querySelector('.js-image-switcher__menu');
// const addToCardButton = document.querySelector('.product-details__button');
// const bagAmount = document.querySelector('.js-bag-amount');
//
// imageSwitcherMenu.addEventListener('click', (e) => {
//     e.preventDefault();
//     const bigImgSrc = imageSwithcer.firstElementChild.src;
//     const smallImgSrc = e.target.src;
//     if (imageSwitcherMenu.contains(e.target)) {
//         imageSwithcer.firstElementChild.src = smallImgSrc;
//         e.target.src = bigImgSrc;
//     }
// });
// addToCardButton.addEventListener('click', () => {
//     const amount = +bagAmount.textContent;
//     bagAmount.textContent = amount + 1;
// });
// ----------------------------------SHOPPING BAG--------------------------------------
// const bagAmount = document.querySelector('.js-bag-amount');
// const shoppingBag = document.querySelector('.js-shopping-bag');
//
// window.addEventListener('load', sumQty);
//
// shoppingBag.addEventListener('change', (e) => {
//     if (e.target.classList.contains('js-qty')) {
//         sumQty();
//     }
// });
// shoppingBag.addEventListener('click', (e) => {
//     if (e.target.classList.contains('js-delete-button')) {
//         e.target.closest('.js-bag-table-row').remove();
//         sumQty();
//     }
//     if (e.target.classList.contains('js-order-now')) {
//         window.location.href = 'thank-you.html';
//     }
//     if (e.target.classList.contains('js-continue-shopping')) {
//         window.location.href = 'home.html';
//     }
// });
//
// function sumQty() {
//     const itemsQty = document.querySelectorAll('.js-qty');
//     let totalAmount = 0;
//     itemsQty.forEach(e => {
//         totalAmount += +e.value;
//     });
//     bagAmount.innerText = totalAmount;
// }
"use strict";