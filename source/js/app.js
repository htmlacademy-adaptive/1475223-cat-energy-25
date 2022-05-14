'use strict';

const slider = document.querySelector('.js-slider');
const sliderRange = document.querySelector('.js-slider__range');

function changeSliderValue() {
  slider.style.setProperty('--slider-value', sliderRange.value + '%');
}

const header = document.querySelector('.js-header');
const toggle = document.querySelector('.js-menu-toggle');

function handleDocumentClick(_e) {
  header && header.classList.remove('header--menu-opened');
  header && header.classList.remove('header--menu-static');
  toggle && toggle.classList.remove('hamburger--close');
}

handleDocumentClick();
document.addEventListener('click', handleDocumentClick);

function handleToggleClick(e) {
  e.preventDefault();
  e.stopPropagation();

  header && header.classList.toggle('header--menu-opened');
  toggle && toggle.classList.toggle('hamburger--close');
}

if (toggle) {
  toggle.addEventListener('click', handleToggleClick);
}
