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