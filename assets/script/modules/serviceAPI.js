import {preload} from './helpers.js';

const API_KEY = 'a3d7ff43c4d4449eadee5635afa69990';
const searchSection = document.querySelector('.search-results-articles');

// запрос хедлайнов

export const getHeadlines = async (country = 'ru', search = '') => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`);
        // const response = await fetch('https://gist.githubusercontent.com/Maksim-Methed/4566b524529c5076cff39764575b31e5/raw/c403579cc65a3cb45f945e25374ad5a2ccb0668c/headlines.json');
        const {articles} = await response.json();

        const data = (search || searchSection.classList.contains('is-open')) ? articles.slice(0, 4) : articles.slice(0, 8);
        return data;
    } catch (err) {
        console.error(err);
    }
};

// поисковой запрос

export const getSearchResults = async (search) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q="${search}"&sortBy=popularity&apiKey=${API_KEY}`);
        // const response = await fetch('https://gist.githubusercontent.com/Maksim-Methed/4566b524529c5076cff39764575b31e5/raw/c403579cc65a3cb45f945e25374ad5a2ccb0668c/search.json');
        const {articles} = await response.json();

        const data = articles.slice(0, 8);
        return data;
    } catch (err) {
        console.error(err);
    }
};

// отправка 2-х запросов одновременно

export const initFetch = (search, country) => {
    preload.show();
    return Promise.all([
        getHeadlines(country, search),
        getSearchResults(search),
    ]);
};


