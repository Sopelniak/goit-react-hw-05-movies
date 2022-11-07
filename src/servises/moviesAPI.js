const KEY = '5e90f5ae4966eeebc5d8d32f49164d73';
const keyParam = `api_key=${KEY}`;
const defaultURL = 'https://api.themoviedb.org/3/';

export const MoviesAPI = {
  async fetchMoviesTrending() {
    const response = await fetch(`${defaultURL}trending/all/day?${keyParam}`);
    return (await response.json()).results;
  },

  async fetchMovieById(id) {
    const response = await fetch(`${defaultURL}movie/${id}?${keyParam}`);
    return await response.json();
  },

  async fetchMoviesSearch(text = false) {
    const response = await fetch(
      `${defaultURL}search/movie?${keyParam}&language=en-US&page=1&include_adult=${text}`
    );
    return await response.json();
  },

  async fetchMovieDetails(id) {
    const response = await fetch(
      `${defaultURL}movie/${id}/credits?${keyParam}`
    );
    return await response.json();
  },

  async fetchMovieCredits(id) {
    const response = await fetch(
      `${defaultURL}movie/${id}/credits?${keyParam}`
    );
    return await response.json();
  },

  async fetchMovieReviews(id) {
    const response = await fetch(
      `${defaultURL}movie/${id}/reviews?${keyParam}`
    );
    return await response.json();
  },
};
