import api from './api.js';
import { quoteTemplate } from './quotesForm.js';

const { getBeersDetail } = api();

const renderQuotes = async id => {
    try {
        const quotesList = document.querySelector('#quoteList');
        const testList = document.querySelector('#testList');

        //Si no hay comentarios, la API no tiene la propiedad "comment", y da error! 
        //Este es problema de nuevo de la API, que confunde comments por comment.
        const quotes = await getBeersDetail(id);
        if (quotes.comment) {
            quotesList.innerHTML = quotes.comment.map(quoteTemplate).join('');
            testList.innerHTML = quotes.comment.length;
        } else {
            testList.innerHTML = 0;
        }

    } catch (err) {
        console.error(err);
    }
};

export { renderQuotes };