import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesAPI } from 'servises/moviesAPI';

export function useFetchReviews() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    MoviesAPI.fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return reviews;
}
