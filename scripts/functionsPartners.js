import { logosColor } from './logosColorArray.js';
export function partners(){
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
    partnersList.children[0].classList.toggle('partners__item_active');
};
createCards()
};