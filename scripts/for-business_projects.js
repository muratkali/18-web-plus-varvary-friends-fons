const arrowRight = document.querySelector('.projects__arrow_right');
const arrowLeft = document.querySelector('.projects__arrow_left');
const cards = document.querySelectorAll('.projects__card');
const numberOfCards = cards.length;
let activeCardIndex = 0;

arrowRight.addEventListener('click', slideRigth);
arrowLeft.addEventListener('click', slideLeft);

function slideRigth() {
  cards[activeCardIndex].classList.remove('projects__card_show');
  activeCardIndex += 1;
  if (activeCardIndex === numberOfCards) activeCardIndex = 0;
  cards[activeCardIndex].classList.add('projects__card_show');
  /*----тут задел на анимацию
  const container = document.querySelector('.projects__slider')
  container.style.transform = `translateX(-${200 * activeCardIndex}px)`*/
}

function slideLeft() {
  cards[activeCardIndex].classList.remove('projects__card_show');
  activeCardIndex -= 1;
  if (activeCardIndex < 0) activeCardIndex = numberOfCards - 1;
  cards[activeCardIndex].classList.add('projects__card_show');
}
