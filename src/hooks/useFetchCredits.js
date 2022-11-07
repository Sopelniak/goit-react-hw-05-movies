import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/moviesAPI';

export function useFetchCredits() {
  const [credits, setCredits] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    MoviesAPI.fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);
  return credits;
}
