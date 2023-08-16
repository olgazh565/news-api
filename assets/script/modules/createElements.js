import {convertDate} from './helpers.js';

// создание карточки

export const createCard = item => {
    const card = document.createElement('li');
    card.classList.add('card');

    card.innerHTML = `
        <div class="card__img-wrapper">
            <img class="card__img" src="${item.urlToImage ?? './assets/img/no-foto.jpg'}" alt="фото" onError="this.onerror=null;this.src='./assets/img/no-foto.jpg'">
        </div>
        <a class="card__link" href="${item.url}" target="_blank" title="${item.title}">${item.title}</a>
        <p class="card__description">${item.description ?? ''}</p>
        <div class="card__data">
            <p class="card__date">${convertDate(item.publishedAt)}</p>
            <p class="card__author">${item.author ?? ''}</p>
        </div>
    `;

    return card;
};

