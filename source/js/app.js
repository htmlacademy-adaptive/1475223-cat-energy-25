const slider = document.querySelector('.js-slider');
const sliderRange = document.querySelector('.js-slider__range');

function changeSliderValue() {
  slider.style.setProperty('--slider-value', sliderRange.value + '%');
}

const menu = document.querySelector('.js-menu');
document.addEventListener('click', function (_e) {
  menu.classList.remove('nav__list--opened');
});

const toggle = document.querySelector('.js-menu-toggle');
if (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    menu.classList.toggle('nav__list--opened');
  });
}
