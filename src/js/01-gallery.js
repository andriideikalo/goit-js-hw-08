// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


// console.log(SimpleLightbox);


const imgGalery = document.querySelector(`.gallery`);
const markup = galleryItems.map(({ preview, original, description }) =>
    `<a href="${original}" class = "galery__link" >
    <img src="${preview}" data-src="${original}"alt="${description}" class = "gallery__image" width ="340">
     </a>`).join(``);
// console.log(markup);
imgGalery.insertAdjacentHTML(`beforeend`, markup);


let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function() {
    // Do something…
});

// Change code below this line

console.log(galleryItems);