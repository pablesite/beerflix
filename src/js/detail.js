import api from './api.js';
//import { renderQuotes } from './quotes.js';

const { getBeersDetail } = api();

const detailTemplate = ({ beerId, name, image, description, firstBrewed, price, brewersTips, ingredients }) => `
   <div class="detail-section">
     <header id="${beerId}">
       <div class="title-section">
         <h1>${name}</h1>
       </div>
     </header>

     <div class="beer-content-left">
        <div class="beer-content-image">
             <img src="${image}" />
        </div>

        <div class="beer-content-likes">
             <p> Likes: </p>
        </div>
            
        <div class="beer-content-comments">
            <h3> Comentarios: </h3>
        </div>
     
    </div>

    <div class="beer-content-right">
        <div class=" content beer-content-info">
            <p> Fecha de la primera elaboración: ${firstBrewed} </p>
            <p> Precio: ${price} €.</p>
            <p> Descripción: ${description} </p>
            <p> Consejos para disfrutarla: ${brewersTips} </p>
            <p> Ingredientes: </p>
                <ul>
                    <li> Levadura: ${ingredients.yeast} </li>
                    <li> Malta:  </li>
                        <ul id="malt"></ul>
                    
                    <li> Lúpulo: </li>
                        <ul id="hops"></ul>
                </ul>
        </div>
    </div>
    </div>
 `;



//Ejecuta promesas en paralelo, la última que termine es la que limita la duración de la llamada.
//Lógicamente, deben ser independientes
//Promise.all([p1, p2, p3])

const renderDetail = async id => {
    try {
        const beer = await (getBeersDetail(id));
        //const [show] = await Promise.all([getBeersDetail(id), renderQuotes(id)]); //[show] es un destructuring. Coge el primer elemento del array que devuelve

        const selector = document.querySelector('main');        
        selector.innerHTML = detailTemplate(beer);
        addIngredients(beer.ingredients)

    } catch (err) {
        console.error(err);
    }
};

function addIngredients (ingredients) { 

    var malt = [];
    var hops = [];

    Object.keys(ingredients.malt).forEach(function(key) {
        malt += ` ${ingredients.malt[key].name}: ${ingredients.malt[key].amount.value} ${ingredients.malt[key].amount.unit} <br>`
    });

    Object.keys(ingredients.hops).forEach(function(key) {
        hops += ` ${ingredients.hops[key].name}: ${ingredients.hops[key].amount.value} ${ingredients.hops[key].amount.unit}. 
        De tipo ${ingredients.hops[key].attribute}. Añadido al: ${ingredients.hops[key].add}<br>`
    });

    var ulMalt = document.getElementById("malt");
    var ulHops = document.getElementById("hops"); 
   
    ulMalt.innerHTML = `${malt}`; 
    ulHops.innerHTML = `${hops}`; 
    
  }

export default renderDetail;