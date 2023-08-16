import {createCard} from './createElements.js';

// рендер хедлайнов

export const renderHeadlines = data => {
    const cardsList = document.querySelector('.headlines__list');
    cardsList.innerHTML = '';

    data.map(item => cardsList.append(createCard(item)));

    return cardsList;
};

// рендер результатов поиска

export const renderSearchResult = data => {
    const cardsList = document.querySelector('.search-result-list');
    cardsList.innerHTML = '';

    data.map(item => cardsList.append(createCard(item)));

    return cardsList;
};
