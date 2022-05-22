const imgOk = document.querySelector('img');
const endProgressBar = document.querySelector('div.container__border-bar');

const contChange = () => {
    imgOk.setAttribute('src','./images/Symbol_OK_disabled.svg');
};

endProgressBar.addEventListener('animationiteration', () => {
    imgOk.setAttribute('src','./images/Symbol_OK.svg');
    const myTimeOut = setTimeout(contChange,100);
});





