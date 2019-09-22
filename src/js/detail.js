import { renderLoader } from './ui.js';
import api from './api.js';

import { renderQuotes } from './quotes.js';
import { renderLikes } from './likes.js';

const { getBeersDetail } = api();

const detailTemplate = ({ beerId, name, image, description, firstBrewed, price, brewersTips, ingredients }) =>`
    <div class="detail-section">

        <div class="beer-title-section">
            <h1>${name}</h1>
        </div>

        <div class="beer-content-left">
            <div class="beer-content-image">
                <img src="${image}" />
            </div>
        </div>

        <div class="beer-content-right">

            <p> <span>Precio:</span> ${price} €.</p>
            <p class="parrafo"> <span>Descripción:</span> ${description} </p>
            <p class="parrafo"> <span>Consejos para disfrutarla:</span> ${brewersTips} </p>
            <p> <span>Fecha de la primera elaboración:</span> ${firstBrewed} </p>
            <p> <span>Ingredientes:</span> </p>
            <ul>
                <li> <span>Levadura:</span> </li>
                    <ul class="ingredients" id="yeast">${ingredients.yeast}</ul>
                <li> <span>Malta:</span> </li>
                    <ul class="ingredients" id="malt"></ul>
                <li> <span>Lúpulo:</span> </li>
                    <ul class="ingredients" id="hops"></ul>
            </ul>
        </div>

    </div>
    `;



//Ejecuta promesas en paralelo, la última que termine es la que limita la duración de la llamada.
//Lógicamente, deben ser independientes
//Promise.all([p1, p2, p3])

const renderDetail = async id => {
    try {
        renderLoader('hide', 'show');
        //const beer = await (getBeersDetail(id));
        const [beer] = await Promise.all([getBeersDetail(id), renderQuotes(id)]); //, renderLikes(id)]); //[show] es un destructuring. Coge el primer elemento del array que devuelve

        const selector = document.querySelector('main');
        selector.innerHTML = detailTemplate(beer);
        addIngredients(beer.ingredients)

    } catch (err) {
        console.error(err);
    } finally {
        renderLoader('show', 'hide');
    }
};

function addIngredients(ingredients) {

    var malt = [];
    var hops = [];

    Object.keys(ingredients.malt).forEach(function (key) {
        malt += ` ${ingredients.malt[key].name}: ${ingredients.malt[key].amount.value} ${ingredients.malt[key].amount.unit} <br>`
    });

    Object.keys(ingredients.hops).forEach(function (key) {
        hops += ` ${ingredients.hops[key].name}: ${ingredients.hops[key].amount.value} ${ingredients.hops[key].amount.unit}. 
        De tipo ${ingredients.hops[key].attribute}. Añadido al: ${ingredients.hops[key].add}<br>`
    });

    var ulMalt = document.getElementById("malt");
    var ulHops = document.getElementById("hops");

    ulMalt.innerHTML = `${malt}`;
    ulHops.innerHTML = `${hops}`;

}

export default renderDetail;