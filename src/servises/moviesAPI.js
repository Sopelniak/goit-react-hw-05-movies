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

  async fetchMoviesSearch() {
    return await fetch(`${defaultURL}search/search-movies?${keyParam}`).json();
  },

  async fetchMovieDetails() {
    return await fetch(
      `${defaultURL}movies/get-movie-details?${keyParam}`
    ).json();
  },

  async fetchMovieCredits() {
    return await fetch(
      `${defaultURL}movies/get-movie-credits?${keyParam}`
    ).json();
  },

  async fetchMovieReviews() {
    return await fetch(
      `${defaultURL}movies/get-movie-reviews?${keyParam}`
    ).json();
  },
};
