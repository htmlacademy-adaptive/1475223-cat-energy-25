const slider = document.querySelector('.js-slider');
const sliderRange = document.querySelector('.js-slider__range');

function changeSliderValue() {
  slider.style.setProperty('--slider-value', sliderRange.value + '%');
}

const header = document.querySelector('.js-header');
document.addEventListener('click', function (_e) {
  header.classList.remove('header--menu-opened');
  toggle.classList.remove('hamburger--close');
});

const toggle = document.querySelector('.js-menu-toggle');
if (toggle) {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    header.classList.toggle('header--menu-opened');
    toggle.classList.toggle('hamburger--close');
  });
}
