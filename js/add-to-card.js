document.addEventListener("DOMContentLoaded", () => {
    const addToCardButton = document.querySelector('.product-details__button');
    const bagAmount = document.querySelector('.js-bag-amount');
    const productAddSuccessNotification = document.querySelector('.js-product-added');

    addToCardButton.addEventListener('click', () => {
        const amount = +bagAmount.textContent;
        bagAmount.textContent = amount + 1;

        productAddSuccessNotification.classList.add('js-show');

        setTimeout(() => {
            productAddSuccessNotification.classList.remove('js-show');
        }, 2000);
    });
});
