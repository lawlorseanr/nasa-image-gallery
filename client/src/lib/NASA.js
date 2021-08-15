/*
Documentation: https://images.nasa.gov/docs/images.nasa.gov_api_docs.pdf

https://api.nasa.gov/planetary/apod?api_key=G1YGWrHAmVHpbNzqBehd8CkBTc6Q6UZ8SSzTRar1
*/
const axios = require('axios');

const BASE_URL = 'https://images-api.nasa.gov/search?'

const NASA = axios.create({
  baseURL: BASE_URL,
  headers: {
    common: {
      'Content-Type': 'application/json',
    },
  },
});

module.exports = NASA;
