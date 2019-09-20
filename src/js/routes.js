// import {hideFilter, showFilter} from './navbar.js';

import {renderBeersDOM} from './beers.js'
import renderDetail from './detail.js';
import {showQuotesForm} from './ui.js';
import addQuoteListener from './quotesForm.js'


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
    showQuotesForm();
    renderDetail(id);
    addQuoteListener(id);
    
    
    
});

page();
