
// const logo = document.querySelector('#navbar .navbar-logo');
const loader = document.querySelector('#loader');

const quotesSection = document.querySelector('#quotesSection');


export const showQuotesForm = () => 
  quotesSection.innerHTML = `
  <div class="asideBar">
    
    <div class="asideBarItem">
      <form id="likes-form" class="likesForm" novalidate>
        <div id="likesList"> </div>
        <button type="submit" class="likesButton"></button>
      </form>
    </div>

    <div class="asideBarItem">
      <div id="testList"></div>
      <div id="inline"> comentarios</div>
    </div> 

  </div>

  <div id="quoteList"></div>

  <form id="quote-form" class="quoteForm" novalidate>
    <div class="quote-input">
      <label id="label-quote" for="quote">¡Comenta esta cerveza!</label> <br>
      <input id="input-quote" required placeholder="Inserta tu comentario" class="input primary" type="text">        <button type="submit" class="button primary">Añadir</button>
      </div>
  </form> 
  `;


 export const hideQuotesForm = () => 
     quotesSection.innerHTML = '';


 export const toggle = elemento => (removeClass, addClass) => {
     elemento.classList.remove(removeClass);
     elemento.classList.add(addClass);
   };

// export const toggleClass = (elemento, toggleClass) => {
//     elemento.classList.toggle(toggleClass);
// };

export const renderLoader = toggle(loader);
    
