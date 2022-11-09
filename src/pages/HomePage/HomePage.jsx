import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MoviesAPI } from 'servises/moviesAPI';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

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
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
