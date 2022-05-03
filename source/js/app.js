const slider = document.querySelector('.js-slider');
const sliderRange = document.querySelector('.js-slider__range');

function changeSliderValue() {
  slider.style.setProperty('--slider-value', sliderRange.value + '%');
}

