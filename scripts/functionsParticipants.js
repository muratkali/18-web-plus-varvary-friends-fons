import { participantsArray } from './participantsArray.js'

const participantsTemplate = document.querySelector('#participantsTemplate').content;
const participantsList = document.querySelector('.participants__list');

export const makeCards = (cardItem) => {
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
createCards();

let slideIndex = 0;
const changeSlide = (nextSlide) => { showSlide(slideIndex += nextSlide); };
const showSlide = (nextSlide) => {
    const slides = document.querySelectorAll('.participants__item');

    if (nextSlide > (slides.length - 1)) {
        slideIndex = 0
    };

    if (nextSlide < 0) {
        slideIndex = (slides.length - 1)
    };

    slides.forEach((item) => item.classList.remove('participants__item_active'));
    slides[slideIndex].classList.add('participants__item_active');

};

const next = document.querySelector('.participants__list');
next.addEventListener('click', () => { changeSlide(1) });
setInterval(() => { changeSlide(1) }, 10 * 1000);