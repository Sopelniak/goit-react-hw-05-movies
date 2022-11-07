import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesAPI } from 'servises/moviesAPI';

export function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesAPI.fetchMoviesTrending().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <h1>Trending Today</h1>
        <ul>
          {movies.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
