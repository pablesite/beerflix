import api from './api.js'
//import { get } from 'http';

const { addLike, getBeersDetail } = api();

export const likesTemplate = ({ likes }) => `
<div class="likes-item">
     Likes: ${likes} 
</div>
`;

const addLikesListener = id => {
    const likesForm = document.querySelector('#likes-form');
    const likesList = document.querySelector('#likesList');


    likesForm.addEventListener('submit', async evt => {
        evt.preventDefault();
        try {
            const responseFail = await addLike(id);
            //la API no trae los likes... hay que volver a llamar el listado de cervezas
            const beer = await getBeersDetail(id);
            likesList.innerHTML = likesTemplate(beer);

        } catch (err) {
            console.error(err);
            // handleError();
        }
    });

};

export default addLikesListener;