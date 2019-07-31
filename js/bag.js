document.addEventListener('DOMContentLoaded', () => {
    const bagAmount = document.querySelector('.js-bag-amount');
    const shoppingBag = document.querySelector('.js-shopping-bag');
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    window.addEventListener('load', () => {
        sumQty(bagAmount);
    });

    shoppingBag.addEventListener('change', (e) => {
        if (e.target.classList.contains('js-qty')) {
            sumQty(bagAmount);
        }
    });

    shoppingBag.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-delete-button')) {
            if (isIE11) {
                const el = e.target.parentElement.parentElement;
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
    const itemsQty = document.querySelectorAll('.js-qty');
    const shoppingBag = document.querySelector('.js-shopping-bag');

    let totalAmount = 0;

    Array.prototype.forEach.call(itemsQty, (e) => {
        totalAmount += +e.value;
    });

    bagAmount.innerText = totalAmount;

    shoppingBag.classList.toggle('js-bag-empty', !totalAmount);
}
