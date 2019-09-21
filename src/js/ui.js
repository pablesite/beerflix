
// const logo = document.querySelector('#navbar .navbar-logo');
// const loader = document.querySelector('#loader');

 const detailSection = document.querySelector('#detailSection');
 const likeSection = document.querySelector('#likeSection');

export const showQuotesForm = () => 
    detailSection.innerHTML = `
    <div id="detail" class="detail-content"></div>
  <div class="quotes-list">
    <h2>Quotes</h2>
    <div id="quoteList">
    </div>
  </div>
  <form id="quote-form" class="quote-form" novalidate>
    <div class="quote-input">
      <label for="quote">Quote of this beer</label>
      <input required id="quote" placeholder="Add your quote" class="input primary" type="text">
    </div>
    <button type="submit" class="button primary">Add quote</button>
  </form>
  `;

  export const showLikesForm = () => 
    likeSection.innerHTML = `
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


// export const toggle = elemento => (removeClass, addClass) => {
//     elemento.classList.remove(removeClass);
//     elemento.classList.add(addClass);
//   };

// export const toggleClass = (elemento, toggleClass) => {
//     elemento.classList.toggle(toggleClass);
// };

// export const renderLoader = toggle(loader);
    
