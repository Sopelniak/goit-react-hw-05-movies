import { useFetchReviews } from 'hooks/useFetchReviews';

export function Reviews() {
  const reviews = useFetchReviews();
  console.log(reviews);
  return (
    reviews && (
      <>
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
      </>
    )
  );
}
