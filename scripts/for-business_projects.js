const projects__slider = document.querySelector('.projects__slider');
const arrowRight = document.querySelector('.projects__arrow_right');
const arrowLeft = document.querySelector('.projects__arrow_left');
const cards = document.querySelectorAll('.projects__card');
const indicators = document.querySelectorAll('.projects__indicator');
const numberOfCards = cards.length;
let activeCardIndex = 0;

arrowRight.addEventListener('click', slideRigth);
arrowLeft.addEventListener('click', slideLeft);

function slideRigth() {
  cards[activeCardIndex].classList.remove('projects__card_active');
  indicators[activeCardIndex].classList.remove('projects__indicator_active');
  activeCardIndex += 1;
  if (activeCardIndex === numberOfCards) activeCardIndex = 0;
  cards[activeCardIndex].classList.add('projects__card_active');
  indicators[activeCardIndex].classList.add('projects__indicator_active');
  /*----тут задел на анимацию
  const container = document.querySelector('.projects__slider')
  container.style.transform = `translateX(-${200 * activeCardIndex}px)`*/
}

function slideLeft() {
  cards[activeCardIndex].classList.remove('projects__card_active');
  indicators[activeCardIndex].classList.remove('projects__indicator_active');
  activeCardIndex -= 1;
  if (activeCardIndex < 0) activeCardIndex = numberOfCards - 1;
  cards[activeCardIndex].classList.add('projects__card_active');
  indicators[activeCardIndex].classList.add('projects__indicator_active');
}

/*---------------    Обработка свайпа по картинкам  --------------*/
// Вешаем на прикосновение функцию handleTouchStart
projects__slider.addEventListener('touchstart', handleTouchStart, false);
// А на движение пальцем по экрану - handleTouchMove
projects__slider.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) { return; }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            /* left swipe */
            slideRigth();
        } else {
            /* right swipe */
            slideLeft();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
