import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;

function showLoader() {
  loader.classList.add('visible');
}

function hideLoader() {
  loader.classList.remove('visible');
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  query = input.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
      position: 'topRight',
    });
    return;
  }
  page = 1;
  clearGallery();
  showLoader();
  fetchImages(query, page)
    .then(data => {
      hideLoader();
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderGallery(data.hits);
        loadMoreBtn.classList.add('visible');
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    });
});

loadMoreBtn.addEventListener('click', function () {
  page += 1;
  showLoader();
  fetchImages(query, page)
    .then(data => {
      hideLoader();
      renderGallery(data.hits);
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    });
});
