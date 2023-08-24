
let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.design-clider__line');

document.querySelector('.fa-right-long').addEventListener('click', function () {
    offset = offset + 280;
    if (offset > 2240) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.fa-left-long').addEventListener('click', function () {
    offset = offset - 280;
    if (offset < 0) {
        offset = 2240;
    }
    sliderLine.style.left = -offset + 'px';
});