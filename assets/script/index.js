import {controlForm, getArticlesByCountry} from './modules/controls.js';
import {preload} from './modules/helpers.js';
import {renderHeadlines} from './modules/render.js';
import {getHeadlines} from './modules/serviceAPI.js';
import './modules/serviceAPI.js';
const headlinesTitle = document.querySelector('.headlines-title-section');
const headlinesSection = document.querySelector('.headlines-articles');

const init = async () => {
    preload.show();
    await getHeadlines()
            .then(data => renderHeadlines(data))
            .finally(() => {
                preload.remove();
                headlinesTitle.classList.add('is-open');
                headlinesSection.classList.add('is-open');
            });

    getArticlesByCountry();
    controlForm();
};

init();


