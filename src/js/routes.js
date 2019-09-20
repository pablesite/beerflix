// import {hideFilter, showFilter} from './navbar.js';

import {renderBeersDOM} from './beers.js'
import renderDetail from './detail.js';


page('/', () => { // eslint-disable-line
    console.log('Home page');
    // //handleNavBar('no-filter', 'filter')
    // showFilter();
    // hideQuotesForm();
    renderBeersDOM();
});

page('/detail/:id', ctx => {
    console.log('Detail');
    const { params: { id } } = ctx;
    renderDetail(id);
    
});

page();
