import { logosColor } from './logosColorArray.js';
function partners(){
const partnersTemplate = document.querySelector('#partnersTemplate').content;
const partnersList = document.querySelector('.partners__container-list');

const makeCards = (cardItem, cardIndex) => {
    const { image } = cardItem;
    const card = partnersTemplate.cloneNode(true);
    const cardImage = card.querySelector('.partners__container-image');

    cardImage.setAttribute('src', image);
    partnersList.append(card)

}

const createCards = () => {
    logosColor.forEach(makeCards);
    partnersList.children[0].classList.toggle('.partners__container-item_active');
};
createCards()
};
partners();

const next = document.querySelector('.partners__button-next');
const previous = document.querySelector('.partners__button-previous');
const container = document.querySelector('.partners__container-list');
const item = container.querySelectorAll('.partners__container-item');



let counter = 0;
const stepSize = container.clientWidth;

container.style.transform = `translateX(${-stepSize * counter}px)`;

next.addEventListener('click', () => {
    if (counter > (item.length - 1)) (counter - 1);
    counter++
    container.style.transform = `translateX(${-stepSize * counter}px)`;
});

previous.addEventListener('click', () => {
    if (counter < 0) {counter = (item.length - 1)};
    counter--
    container.style.transform = `translateX(${-stepSize * counter}px)`;
});

