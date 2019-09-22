import api from './api.js'
import { renderLoader } from './ui.js';

const { createQuote, getBeersDetail } = api();

export const quoteTemplate = ( { comment, dateComment }, id ) => `
<div class="list-item">
    <div id="quote-header">Comentario ${id+1}, publicado: ${dateComment.split("T")[0]}</div>
        <p>${comment}</p>
</div>
`;

export const lengthQuotesTemplate = ( id ) => `
${id}
`;

const addQuoteListener = id => {
    const quotesForm = document.querySelector('#quote-form');
    const quotesInput = document.querySelector('#input-quote');
    const quotesList = document.querySelector('#quoteList');
    const testList = document.querySelector('#testList');

    quotesForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        try {
            renderLoader('hide', 'show');
            
            if (quotesInput.validity.valid) {
                const responseFail = await createQuote(id, quotesInput.value);
                //la API no trae los comentarios... hay que volver a llamar el listado de cervezas
                const response = await getBeersDetail(id);
                quotesList.innerHTML += quoteTemplate(response.comment[response.comment.length-1], response.comment.length-1);           
                console.log(response.comment.length)
                testList.innerHTML = lengthQuotesTemplate(response.comment.length);
            }    
                
        } catch (err) {
            console.error(err);
            // handleError();
        } finally {
            renderLoader('show', 'hide');
        }
    });

};

export default addQuoteListener;