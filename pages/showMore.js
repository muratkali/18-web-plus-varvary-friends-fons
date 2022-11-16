const showMoreButton = document.querySelector('.intro__show-more');
const shownTextNode = showMoreButton.previousElementSibling;
const shownText = shownTextNode.textContent;
const hiddenParagraphs = document.querySelectorAll('.intro__subtitle_mobile');

const showParagraph = (p) => {p.classList.remove('intro__subtitle_mobile')};
const hideButton = (button) => {button.classList.add('content_none')};
const addDots = () => {if (window.screen.width <= 400 && !showMoreButton.classList.contains('content_none')) {shownTextNode.textContent = shownText + '...'}};

addDots();

showMoreButton.addEventListener('click', function() {
  hiddenParagraphs.forEach(function(p) {
    showParagraph(p)
  });
  hideButton(showMoreButton)
  shownTextNode.textContent = shownText
});

window.addEventListener('resize', addDots);
