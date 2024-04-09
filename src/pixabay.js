import axios from 'axios';

// https://pixabay.com/api/
// API key: 42854902-4e7015a57fe2c0e354fa0172f
// 'https://pixabay.com/api/?key=42854902-4e7015a57fe2c0e354fa0172f&q=yellow+flowers&image_type=photo';

const baseURL = 'https://pixabay.com/api/';
const apiKey = `42854902-4e7015a57fe2c0e354fa0172f`;

var pageToQuery = 1;
export const per_page = 12;

var parameters = {
  key: apiKey,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: pageToQuery,
  per_page: per_page,
};

export async function queryImages(page, queryWord) {
  parameters.page = page;
  parameters.q = queryWord;

  const searchParams = new URLSearchParams(parameters);

  const fetchedImages = await axios.get(
    `${baseURL}?${searchParams.toString()}`
  );
  return fetchedImages.data;
}

// export default queryImages;
