import { createCards } from './functionsParticipants.js'; createCards();
import { partners } from './functionsPartners.js'; partners();
import { nco } from './functionsNco.js'; nco();

const next = document.querySelector('.participants__next');
const previous = document.querySelector('.participants__previous');
const container = document.querySelector('.participants__list');
const item = document.querySelectorAll('.participants__wrapper');

let counter = 0;
const stepSize = item[0].clientWidth;

container.style.transform = `translateX(${-stepSize * counter}px)`;

next.addEventListener('click', () =>{
    counter >= item.length - 1 ? (counter = -1) : null;
    // container.classList.toggle('transformAnimation');
    counter++
    container.style.transform = `translateX(${-stepSize * counter}px)`;
});

previous.addEventListener('click', () =>{
    if (counter <= 0) counter = item.length
    // container.classList.toggle('transformAnimation');
    counter--
    container.style.transform = `translateX(${-stepSize * counter}px)`;
})
