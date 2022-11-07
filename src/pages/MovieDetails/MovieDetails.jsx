import { useFetchMovie } from 'hooks/useFetchMovie';

export function MovieDetails() {
  const movie = useFetchMovie();
  console.log(movie);

  function getGenres(movie) {
    let genres = [];
    if (!movie.genres) return;
    for (const genre of movie.genres) {
      genres = [...genres, genre.name];
    }
    return genres.join(', ');
  }

  return (
    movie && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name}
          width="300"
        />
        <div>
          <h2>
            {movie.title || movie.name}
            <span>
              {' '}
              ({!!movie.release_date && movie.release_date.slice(0, 4)})
            </span>
          </h2>
          <p>"{movie.tagline}"</p>
          <p>Rating: {movie.vote_average}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{getGenres(movie)}</p>
        </div>
      </div>
    )
  );
}
