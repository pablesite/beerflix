// import striptags from 'striptags';
// import escapeHtml from 'escape-html';

// import { openHeader } from './ui.js';
import api from './api.js';

const { getBeers } = api();

const templateShow = ({ beerId, name, image, description, principal }) => `
    <div class="grid-item grid-item-${beerId}">

                <a href="/detail/${beerId}">
                    <div class="beer principal">
                        <header class="beer-header">
                            <h2>${name}</h2>
                        </header>
                        <div class="beer-content">
                            <div class="beer-content-image">
                    
                                <img src="${image}">
                            </div>
                   
                            <div class="beer-content-text">
                                <p>${description}</p>
                            </div>
                        </div>
                    </div>
                </a>

            </div>  
`;

const renderShows = (element, beers) => {
  const htmlShows = beers.slice(0, 100).map((show, index) => {
    if (index < 2) {
      return templateShow({
        ...show,
        principal: true,
      });
    }
    return templateShow({ ...show, principal: false });
  }).join('');
  element.innerHTML = `
    <div class="grid">
      ${htmlShows}
    </div>
  `;
//   const headers = document.querySelectorAll('.card.secondary .card-header');
//   headers.forEach((header) => {
//     const id = header.parentNode.getAttribute('id');
//     header.addEventListener('click', openHeader(id));
 // });
};

export const renderBeersDOM = async (query) => {
  try {
    const fetchBeers = await getBeers(query);
    console.log(fetchBeers);
    const showSection = document.querySelector('main');
    renderShows(showSection, fetchBeers);
  } catch (e) {
    console.error(e);
  }
};
