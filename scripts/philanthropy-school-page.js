const cards = document.querySelectorAll('.sponsors__photo');
const arrowLeft = document.querySelector('.sponsors__arrow_left');
const arrowRight = document.querySelector('.sponsors__arrow_right');
const numberAllOfCards = cards.length;
let numberOfCards;
let w;
let start;
let end;

arrowRight.addEventListener('click', slideRight);
arrowLeft.addEventListener('click', slideLeft);

function slideRight() {
  if (end === numberAllOfCards) return;
  drowSponsorsSlider(start+1, end+1);
}
function slideLeft() {
  if (start === 0) return;
  drowSponsorsSlider(start-1, end-1);
}

function resizeSponsorsSlider() {
  w = document.documentElement.clientWidth;
  if (w > 1200) {numberOfCards = 6;}
  else if (w > 1140) {numberOfCards = 5;}
  else if (w > 850) {numberOfCards = 4;}
  else if (w > 550) {numberOfCards = 3;}
  else {numberOfCards = 2;} //console.log(w, numberOfCards);

  drowSponsorsSlider(0, numberOfCards);
}

function drowSponsorsSlider (a, b) {
  start = a;
  end = b;
  for (let i=0; i<numberAllOfCards; i++){
    cards[i].classList.remove('sponsors__photo_active');
  }
  for (let i=a; i<b; i++){
    cards[i].classList.add('sponsors__photo_active');
  }
  if (a === 0) arrowLeft.classList.add('sponsors__arrow_inactive')
    else arrowLeft.classList.remove('sponsors__arrow_inactive');
  if (b === numberAllOfCards) arrowRight.classList.add('sponsors__arrow_inactive')
    else arrowRight.classList.remove('sponsors__arrow_inactive');
}

window.addEventListener('resize', resizeSponsorsSlider);
resizeSponsorsSlider();
