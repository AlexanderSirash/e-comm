document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.js-slider');
    const sliderFrame = document.querySelector('.js-slider__frame');
    const sliderLeftControl = document.querySelector('.js-slider__left-button');

    const slidesQty = sliderFrame.children.length;
    const slideWidth = sliderFrame.children[0].getBoundingClientRect().width;
    const sliderVisibleAreaWidth = slider.getBoundingClientRect().width;
    const sliderItemsWidth = slidesQty * slideWidth;
    const controlWidth = sliderLeftControl.getBoundingClientRect().width;
    const itemsOnPage = Math.floor(sliderVisibleAreaWidth / slideWidth);
    let slideTimes = slidesQty - itemsOnPage;

    let countR = slideTimes;
    let countL = 0;

    slider.addEventListener('click', (e) => {
        if (e.target.classList.contains('js-slider__right-button')) {
            if (countR > 1) {
                countR--;
                countL++;
                const left = sliderFrame.style.left.replace(/px/g, '');
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
                const left = sliderFrame.style.left.replace(/px/g, '');
                sliderFrame.style.left = +left + slideWidth + 'px';
            } else {
                sliderFrame.style.left = 0 + 'px';
                countL = 0;
                countR = slideTimes;
            }
        }
    });
});
