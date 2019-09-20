import api from './api.js'
//import { get } from 'http';

const { createQuote, getBeersDetail } = api();

export const quoteTemplate = ( { comment, dateComment } ) => `
<div class="list-item">
    <p>${comment}</p>
    <span> ${dateComment} </span>
</div>
`;

const addQuoteListener = id => {
    const quotesForm = document.querySelector('#quote-form');
    const quotesInput = document.querySelector('#quote');
    const quotesList = document.querySelector('#quoteList');

    quotesForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        try {
            
            if (quotesInput.validity.valid) {
                const responseFail = await createQuote(id, quotesInput.value);
                //la API no trae los comentarios... hay que volver a llamar el listado de cervezas
                const response = await getBeersDetail(id);
                //revisar por qué acumula comentarios esto... no tiene fuste.
                quotesList.innerHTML += quoteTemplate(response.comment[response.comment.length - 1]);
           
            }        
        } catch (err) {
            console.error(err);
            // handleError();
        }
    });

};

export default addQuoteListener;