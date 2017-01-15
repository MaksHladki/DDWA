import style from './about.css';
import page from './about.html';
import logger from '../common/logger';

logger('about.js');

const build = (text) => {

    let div = document.createElement('div');
    div.className = 'main';

    let header = document.createElement('h1');
    header.innerHTML = text;

    div.appendChild(div);
    document.body.appendChild(div);
}

export {build}
