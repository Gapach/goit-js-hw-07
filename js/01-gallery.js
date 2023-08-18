import { galleryItems } from "./gallery-items.js";
const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.dataset.source = item.original;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}
function openModal(largeImageUrl) {
  const instance = basicLightbox.create(`
    <div class="modal">
      <img  src="${largeImageUrl}" alt="Image description" />
    </div>
  `);

  instance.show();
}
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("gallery__image")) {
    const largeImageUrl = event.target.dataset.source;
    openModal(largeImageUrl);
  }
});
galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});
console.log(galleryItems);
