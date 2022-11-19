const sliderOptions = document.querySelectorAll('[data-js="slider-option"]');
const contentOptions = document.querySelectorAll('[data-js="slider-content"]');

function setNotActive(arr, arr1) {
  arr.forEach(function(n) {
    n.classList.remove('slider__option_active')
  })
  arr1.forEach(function(m) {
    m.classList.add('content_none')
  })
};

function showContent(arr, arr1) {
  arr.forEach(function(n, i) {
    if (n.classList.contains('slider__option_active')) {arr1[i].classList.remove('content_none')}
  })
};

function setActive(evt) {
  setNotActive(sliderOptions, contentOptions)
  evt.target.classList.add('slider__option_active')
  showContent(sliderOptions, contentOptions)
};

sliderOptions.forEach(function(option) {
  option.addEventListener('click', setActive)
});
