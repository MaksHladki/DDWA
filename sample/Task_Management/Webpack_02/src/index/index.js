import style from './index.css';
import page from './index.html';
import logger from '../common/logger';

logger('about.js');

const build = (text) =>{

    let header = document.createElement('h1');
    header.className = 'header';
    header.innerHTML = text;

    document.body.insertBefore(header, document.body.firstChild);
}

export {build}
