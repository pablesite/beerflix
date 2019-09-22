// import striptags from 'striptags';
// import escapeHtml from 'escape-html';

// import { openHeader } from './ui.js';
import {  renderLoader } from './ui.js';
import api from './api.js';

const { getBeers, getBeersData } = api();

const templateBeers = ({ beerId, name, image, price, brewersTips }) => `
    <div class="grid-item grid-item-${beerId}">
      <a href="/detail/${beerId}">
        <div class="beer ">
          <header class="beer-header">
            <h2>${name}</h2>
          </header>
          <div class="beer-content">
            <div class="beer-content-image">
              <img src="${image}">
            </div>
            <div class="beer-content-text">
              <p> Precio: ${price} €.</p>
              <p class="parrafo"> Consejos para disfrutarla: <br> ${brewersTips} </p>
            </div>
          </div>
        </div>
      </a>
    </div>  
`;

const renderBeers = (element, beers) => {
  const htmlBeers = beers.map(beer => templateBeers(beer)).join('');
  element.innerHTML = `
    <div class="grid">
      ${htmlBeers}
    </div>
  `;
  //   const headers = document.querySelectorAll('.card.secondary .card-header');
  //   headers.forEach((header) => {
  //     const id = header.parentNode.getAttribute('id');
  //     header.addEventListener('click', openHeader(id));
  // });
};

export const renderBeersDOM = async (textQuery, startDataQuery, endDataQuery) => {
  try {
    renderLoader('hide', 'show');
    var fetchBeers;
    // si las fechas no existen, haces lo de siempre
    if (!startDataQuery && !endDataQuery) {
      fetchBeers = await getBeers(textQuery);
    } else {
      fetchBeers = await getBeersData(textQuery, startDataQuery, endDataQuery);
    }
    const showSection = document.querySelector('main');
    renderBeers(showSection, fetchBeers);
  } catch (e) { 
    console.error(e);
  } finally {
    renderLoader('show', 'hide');
  }
};
