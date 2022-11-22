const tabList = document.querySelectorAll('[data-js="tab"]');
const tabContentList = document.querySelectorAll('[data-js="tab-content"]');

function setNotActive(arr, arr1) {
  arr.forEach(function(n) {
    n.classList.remove('tab-panel__option_active')
  })
  arr1.forEach(function(m) {
    m.classList.add('content_none')
  })
};

function showContent(arr, arr1) {
  arr.forEach(function(n, i) {
    if (n.classList.contains('tab-panel__option_active')) {arr1[i].classList.remove('content_none')}
  })
};

function setActive(evt) {
  setNotActive(tabList, tabContentList)
  evt.target.classList.add('tab-panel__option_active')
  showContent(tabList, tabContentList)
};

tabList.forEach(function(option) {
  option.addEventListener('click', setActive)
});
