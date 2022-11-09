import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/moviesAPI';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const searchText = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (searchText === null || '') return;

    async function fetchMovies() {
      const data = await MoviesAPI.fetchMoviesSearch(searchText);
      setMovies(data.results);
    }

    fetchMovies();
  }, [searchText]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
