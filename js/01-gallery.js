import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const itemsMarkup = createGalleryItem(galleryItems);

function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryList.insertAdjacentHTML('beforeend', itemsMarkup);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const isItemImage = event.target.classList.contains('gallery__image');
  if (!isItemImage) return;

  const largeImageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
     <div class="modal">
       <img  src="${largeImageUrl}" alt="description" />
     </div>
  `);
  instance.show();
}
galleryList.addEventListener('click', openModal);




