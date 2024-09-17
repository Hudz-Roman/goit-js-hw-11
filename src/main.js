import { fetchImages } from './js/pixabay-api';
import { renderGallery, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');
const loadMoreBtn = document.querySelector('#load-more');

let query = '';
let page = 1;

form.addEventListener('submit', async event => {
  event.preventDefault();
  query = input.value.trim();
  if (!query) {
    iziToast.error({ title: 'Error', message: 'Please enter a search query' });
    return;
  }
  page = 1;
  clearGallery();
  try {
    const data = await fetchImages(query, page);
    if (data.hits.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  try {
    const data = await fetchImages(query, page);
    renderGallery(data.hits);
  } catch (error) {
    iziToast.error({ title: 'Error', message: error.message });
  }
});
