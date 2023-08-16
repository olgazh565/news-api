import {preload} from './helpers.js';
import {renderHeadlines, renderSearchResult} from './render.js';
import {getHeadlines, initFetch} from './serviceAPI.js';

const searchSection = document.querySelector('.search-results-articles');
const titleSearchSection = document.querySelector('.search-result-title-section');

// запрос при выборе страны

export const getArticlesByCountry = () => {
    const selectCountry = document.querySelector('.form__input_select');

    selectCountry.addEventListener('change', async ({target}) => {
        await getHeadlines(target.value)
                .then(data => {
                    renderHeadlines(data);
                    searchSection.classList.remove('is-open');
                    titleSearchSection.classList.remove('is-open');
                });
    });
};

// отправка запросов по сабмиту

export const controlForm = () => {
    const form = document.querySelector('.header__form');
    const titleSearch = document.querySelector('.search-title');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const search = form.search.value;
        const country = form.country.value;
        if (!search) return;

        initFetch(search, country)
                .then(data => {
                    if (data[1].length !== 0) searchSection.classList.add('is-open');
                    titleSearchSection.classList.add('is-open');
                    titleSearch.textContent = `По вашему запросу “${search}” найдено ${data[1].length} результатов`;

                    renderHeadlines(data[0]);
                    renderSearchResult(data[1]);
                })
                .finally(() => {
                    preload.remove();
                    form.reset();
                });
    });
};

