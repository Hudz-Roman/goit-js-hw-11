const API_KEY = '44417625-4fee654a3e06908df7f1d6188';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      query
    )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return await response.json();
}
