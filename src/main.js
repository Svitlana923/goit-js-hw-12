import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderImages } from './js/render-functions.js';
import { getPhotoBySearch } from './js/pixabay-api.js';
import { renderMoreImages } from './js/render-functions.js';
import { fetchMoreImages } from './js/pixabay-api.js';

const formElem = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-o');
const loaderElem = document.querySelector('.loader');
const loaderElem2 = document.querySelector('.more-loader');
const loadMoreBtn = document.querySelector('.more-btn');
export const value = formElem.querySelector('.input-search').value;

document.addEventListener('DOMContentLoaded', () => {

    hideLoader();
    
    formElem.addEventListener('submit', onSubmit);


    function onSubmit(e) {
        e.preventDefault();
        showLoader();
        galleryEl.innerHTML = '';
        
        
        getPhotoBySearch(value)
            .then(data => {
                renderImages(data.hits);
            })
            .catch(error => {
                renderError(error);
            })
            .finally(() => {
                hideLoader();
            });
    }

    function renderError(error) {
        galleryEl.innerHTML = '';
        iziToast.show({
            message: `❌ "${error.message}". Please try again!`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
        });
    }
});

function showLoader() {
    loaderElem.style.display = 'block';
}

function hideLoader() {
    loaderElem.style.display = 'none';
}

let page = 1;

loadMoreBtn.addEventListener("click", async () => {
  try {
    const images = await fetchMoreImages(value);
    renderMoreImages();
    page += 1;

    if (page > 1) {
  
    }
  }catch(error) {
    console.log(error);
  }
});