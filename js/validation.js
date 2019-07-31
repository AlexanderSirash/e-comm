document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.js-subscribe-form__control');
    const errorNotification = document.querySelector('.js-subscribe-error');
    const successNotification = document.querySelector('.js-subscribe-success');
    const emailInput = document.querySelector('.js-subscribe-form__input');

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        const emailValue = emailInput.value;
        const isValid = emailIsValid(emailValue);

        errorNotification.classList.toggle('js-show', !isValid);
        successNotification.classList.toggle('js-show', isValid);
    })
});

function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
}
