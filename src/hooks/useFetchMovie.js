import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/moviesAPI';

export function useFetchMovie() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    MoviesAPI.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
}
