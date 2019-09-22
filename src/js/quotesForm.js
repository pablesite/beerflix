import api from './api.js'
//import { get } from 'http';

const { createQuote, getBeersDetail } = api();

export const quoteTemplate = ( { comment, dateComment }, id ) => `
<div class="list-item">
    <div id="quote-header">Comentario ${id}, publicado: ${dateComment.split("T")[0]}</div>
        <p>${comment}</p>
</div>
`;

export const testTemplate = ( id ) => `
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
            
            if (quotesInput.validity.valid) {
                const responseFail = await createQuote(id, quotesInput.value);
                //la API no trae los comentarios... hay que volver a llamar el listado de cervezas
                const response = await getBeersDetail(id);
                quotesList.innerHTML += quoteTemplate(response.comment[response.comment.length-1], response.comment.length);           
                console.log(response.comment.length)
                testList.innerHTML = testTemplate(response.comment.length);
            }    
                
        } catch (err) {
            console.error(err);
            // handleError();
        }
    });

};

export default addQuoteListener;