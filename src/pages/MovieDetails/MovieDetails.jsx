import { useFetchMovie } from 'hooks/useFetchMovie';
import { NavLink, Outlet } from 'react-router-dom';
import './MovieDetails.css';

export function MovieDetails() {
  const movie = useFetchMovie();

  return (
    movie && (
      <>
        <div className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.name}
            width="300"
          />
          <div>
            <h2>
              {movie.title || movie.name}
              {movie.release_date && (
                <span> ({movie.release_date.slice(0, 4)})</span>
              )}
            </h2>
            <p>"{movie.tagline}"</p>
            <p>Rating: {movie.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            {movie.genres && (
              <p>{`${movie.genres.map(({ name }) => ` ${name}`)}`}</p>
            )}
          </div>
        </div>
        <div>
          <h4>Additional infomation</h4>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Outlet />
      </>
    )
  );
}
