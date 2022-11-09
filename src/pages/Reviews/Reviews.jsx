import { useFetchReviews } from 'hooks/useFetchReviews';

export default function Reviews() {
  const reviews = useFetchReviews();
  console.log(reviews);
  return (
    reviews && (
      <>
        {reviews.results.length > 0 && (
          <ul>
            {reviews.results.map(({ id, author, content }) => (
              <li key={id}>
                <p>
                  Author:
                  <b> {author}</b>
                </p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {!reviews.results.length > 0 && (
          <p>We don't have any reviews for this movie. 😥</p>
        )}
      </>
    )
  );
}
