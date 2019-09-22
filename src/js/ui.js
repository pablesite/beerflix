
// const logo = document.querySelector('#navbar .navbar-logo');
const loader = document.querySelector('#loader');

const quotesSection = document.querySelector('#quotesSection');
const likesSection = document.querySelector('#likesSection');

export const showQuotesForm = () => 
  quotesSection.innerHTML = `
  <h2>Comentarios</h2>
  <div id="quoteList"></div>
  <form id="quote-form" class="quoteForm" novalidate>
    <div class="quote-input">
      <label id="label-quote" for="quote">¡Comenta esta cerveza!</label> <br>
      <input id="input-quote" required placeholder="Inserta tu comentario" class="input primary" type="text">        <button type="submit" class="button primary">Añadir</button>
      </div>
  </form>
  `;


  export const showLikesForm = () => 
    likesSection.innerHTML = `
    <div id="detail" class="detail-content"></div>
  <div class="likes-list">
    <h2>Likes</h2>
    <div id="likesList">
    </div>
  </div>
  <form id="likes-form" class="likes-form" novalidate>
    <div class="likes-input">
      <label for="likes">likes of this beer</label>
    </div>
    <button type="submit" class="button primary">Add like</button>
  </form>
  `;


// export const hideQuotesForm = () => 
//     detailSection.innerHTML = '';


 export const toggle = elemento => (removeClass, addClass) => {
     elemento.classList.remove(removeClass);
     elemento.classList.add(addClass);
   };

// export const toggleClass = (elemento, toggleClass) => {
//     elemento.classList.toggle(toggleClass);
// };

export const renderLoader = toggle(loader);
    
