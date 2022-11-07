import { useEffect } from 'react';
import { useState } from 'react';
import { MoviesAPI } from 'servises/moviesAPI';

export function Movies() {
  const [text, setText] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  const handleInput = e => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    const moviesApi = MoviesAPI.fetchMoviesSearch(text);
    setMovies(moviesApi);
  };

  return (
    <>
      <form>
        <input type="text" onInput={handleInput} />
        <button type="submit" onSubmit={handleSubmit}>
          Search
        </button>
      </form>
    </>
  );
}
