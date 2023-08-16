// конвертирование даты

export const convertDate = str => {
    const date = new Date(str);

    return date.getDate() + '/' +
        `0${(date.getMonth() + 1)}`.slice(-2) + '/' +
        date.getFullYear() + ' ' +
        `0${date.getHours()}`.slice(-2) + ':' +
        `0${date.getMinutes()}`.slice(-2);
};


// прелоадер

export const preload = {
    circle: `
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M142.5 60L112.5 90H135C135 114.825 114.825 135 90 135C82.425 135 75.225 133.125 69 129.75L58.05 140.7C67.275 146.55 78.225 150 90 150C123.15 150 150 123.15 150 90H172.5L142.5 60ZM45 90C45 65.175 65.175 45 90 45C97.575 45 104.775 46.875 111 50.25L121.95 39.3C112.725 33.45 101.775 30 90 30C56.85 30 30 56.85 30 90H7.5L37.5 120L67.5 90H45Z" fill="black"/>
        </svg>`,
    overlay: document.createElement('div'),

    show() {
        this.overlay.classList.add('overlay');
        this.overlay.innerHTML = this.circle;
        document.querySelector('main').prepend(this.overlay);
    },
    remove() {
        this.overlay.remove();
    },
};


