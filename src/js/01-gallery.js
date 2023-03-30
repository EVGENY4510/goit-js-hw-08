// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const gallery = createImageCard(galleryItems);
galleryRef.innerHTML = gallery;

function createImageCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li> `;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    navText: ['<=', '=>'],

    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 250,
  });