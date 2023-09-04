import SimpleLightbox from 'simplelightbox';


import { galleryItems } from './gallery-items.js';

function createMarkup(arr) {
  return arr
    .map(({ preview, original, description }) =>
      `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
              <img 
                  class="gallery__image"
                  src="${preview}" 
                  data-source="${original}"
                  width="340"
                  alt="${description}" />
          </a>
       </li>`
    )
    .join('');
}

import 'simplelightbox/dist/simple-lightbox.min.css';
const lightbox = new SimpleLightbox('.gallery a', {
  /* options, if needed */
});

const imageList = document.querySelector('.gallery');
imageList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));



