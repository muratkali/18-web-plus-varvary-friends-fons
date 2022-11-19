import { participantsArray } from './participantsArray.js'

export const participantsTemplate = document.querySelector('#participantsTemplate').content;
export const participantsList = document.querySelector('.participants__list');

export const makeCards = (cardItem, cardIndex) => {
    const { image, description, link } = cardItem;
    const card = participantsTemplate.cloneNode(true);
    const cardImage = card.querySelector('.participants__image');
    const cardDescription = card.querySelector('.participants__description');
    const cardLink = card.querySelector('.participants__fond-link');
    
    cardImage.src = image;
    cardDescription.textContent = description;
    cardLink.href = link;
    participantsList.append(card)
}

export const createCards = () => {
    participantsArray.forEach(makeCards);
    participantsList.children[0].classList.add('participants__item_active');
};
