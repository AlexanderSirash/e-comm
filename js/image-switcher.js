document.addEventListener("DOMContentLoaded", () => {
    const imageSwithcer = document.querySelector('.js-image-switcher__frame');
    const imageSwitcherMenu = document.querySelector('.js-image-switcher__menu');

    imageSwitcherMenu.addEventListener('click', (e) => {
        e.preventDefault();
        const bigImgSrc = imageSwithcer.firstElementChild.src;
        const smallImgSrc = e.target.src;
        if (imageSwitcherMenu.contains(e.target)) {
            imageSwithcer.firstElementChild.src = smallImgSrc;
            e.target.src = bigImgSrc;
        }
    });
});
