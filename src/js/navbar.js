import { renderBeersDOM } from './beers.js';
import storage from './storage.js';

const searchForm = document.querySelector('#search');
const searchInput = document.querySelector('#navbar .input.search');

const filterDataStart = document.querySelector('#start');
const filterDataEnd = document.querySelector('#end');

// console.log(searchForm);
// console.log(searchInput);

const {setItem, getItem } = storage('cookieStorage');

searchInput.value = getItem('navbar-input');
filterDataStart.value = getItem('date-start');
filterDataEnd.value = getItem('date-end');

searchForm.addEventListener('submit', evt => {
    evt.preventDefault();
    if (searchInput.validity.valid || filterDataStart.validity.valid || filterDataEnd.validity.valid) {
        //render shows
        setItem('navbar-input', searchInput.value);
        setItem('date-start', filterDataStart.value);
        setItem('date-end', filterDataEnd.value);
        renderBeersDOM(searchInput.value, filterDataStart.value, filterDataEnd.value);
    }
});

// const hideFilter = () => handleNavBar('filter', 'no-filter');
// const showFilter = () => handleNavBar('no-filter', 'filter');

// export {hideFilter, showFilter};