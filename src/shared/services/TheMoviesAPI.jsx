import axios from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: '6c57fb02719926393bb8c06aa147886f',
    language: 'en-US',
    // include_adult: false,
  },
});

export const searchMovie = async (query, page = 1) => {
  const { data } = await instance.get(`search/movie`, {
    params: {
      query,
      page,
    },
  });
  return data.results;
};

export const getMostPopular = async () => {
  const reqURL = `trending/movie/day`;
  const { data } = await instance.get(reqURL);
  return data.results;
};

export const getFilmInfo = async id => {
  const { data } = await instance.get(`movie/${id}?`);

  return data;
};

export const getCredits = async id => {
  const { data } = await instance.get(`movie/${id}/credits?`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews?`);
  return data.results;
};
