import { ncoColor } from './ncoArray.js';
export function nco(){
const ncoTemplate = document.querySelector('#ncoTemplate').content;
const ncoList = document.querySelector('.nco__container-list');

const makeCards = (cardItem, cardIndex) => {
    const { image } = cardItem;
    const card = ncoTemplate.cloneNode(true);
    const cardImage = card.querySelector('.nco__container-image');

    cardImage.setAttribute('src', image);
    ncoList.append(card)
}


const createCards = () => {
    ncoColor.forEach(makeCards);
    ncoList.children[0].classList.toggle('nco__item_active');
};
createCards()
};
nco();

const next = document.querySelector('.nco__button-next');
const previous = document.querySelector('.nco__button-previous');
const container = document.querySelector('.nco__container-list');
const item = container.querySelectorAll('.nco__container-item');



let counter = 0;
const stepSize = container.clientWidth;

container.style.transform = `translateX(${-stepSize * counter}px)`;

next.addEventListener('click', () => {
    if (counter > (item.length - 1)) (counter - 1) && (previous.style.display = 'flex');
    counter++
    container.style.transform = `translateX(${-stepSize * counter}px)`;
});

previous.addEventListener('click', () => {
    if (counter < 0) {counter = (item.length - 1)};
    counter--
    container.style.transform = `translateX(${-stepSize * counter}px)`;
});