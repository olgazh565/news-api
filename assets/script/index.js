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
            .then(data => {
                renderHeadlines(data);

                const loading = [];
                const imgs = document.querySelectorAll('.card__img');
                console.log('imgs: ', imgs);
                imgs.forEach((img) => {
                    loading.push(new Promise((resolve) => {
                        const url = img.src;
                        const image = new Image();
                        image.src = url;

                        image.onload = () => {
                            img.src = image.src;
                            resolve();
                        };
                    }));
                });
                Promise.all(loading)
                        .then(() => {
                            preload.remove();
                            headlinesTitle.classList.add('is-open');
                            headlinesSection.classList.add('is-open');
                        });
            });

    getArticlesByCountry();
    controlForm();
};

init();


