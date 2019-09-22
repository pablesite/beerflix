import { toggle } from './ui.js';
import { renderBeersDOM } from './beers.js';
import storage from './storage.js';

const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('#search #search-input');

const filterDataStart = document.querySelector('#start');
const filterDataEnd = document.querySelector('#end');


const {setItem, getItem } = storage('cookieStorage');
const navbar = document.querySelector('.filter-input');

 searchInput.value = getItem('filter-input');
 filterDataStart.value = getItem('date-start');
 filterDataEnd.value = getItem('date-end');

 const handleNavBar = toggle(navbar);

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid || filterDataStart.validity.valid || filterDataEnd.validity.valid) {
        setItem('filter-input', searchInput.value);
        setItem('date-start', filterDataStart.value);
        setItem('date-end', filterDataEnd.value);
        renderBeersDOM(searchInput.value, filterDataStart.value, filterDataEnd.value);
    }
});

const hideFilter = () => handleNavBar('filter', 'no-filter');
const showFilter = () => handleNavBar('no-filter', 'filter');

export {hideFilter, showFilter};