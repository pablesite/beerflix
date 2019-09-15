// import {hideFilter, showFilter} from './navbar.js';

page('/', () => { // eslint-disable-line
    console.log('Home page');
    // //handleNavBar('no-filter', 'filter')
    // showFilter();
    // hideQuotesForm();
    // renderShowsDOM();
});

page('/detail/:id', ctx => {
    console.log('Detail');
    const { params: { id } } = ctx;
    console.log(id);
    
});

page();
