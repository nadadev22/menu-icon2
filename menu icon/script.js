const moreButton = document.querySelector('.more-button');
const moreButtonList = document.querySelector('.more-button-list');
const moreButtonItems = document.querySelectorAll('.more-button-list-item');

moreButton.addEventListener('click', () => {
    const listContainer = moreButton.parentElement;
    listContainer.classList.toggle('active');
});
