import { useFetchCredits } from 'hooks/useFetchCredits';
import './Cast.css';

export function Cast() {
  const credits = useFetchCredits();
  return (
    credits && (
      <>
        <ul className="cast-list">
          {credits.cast.map(({ id, name, character, profile_path }) => (
            <li key={id} className="cast-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="100"
              />
              <div>
                <p>
                  Actor:<b> {name}</b>
                </p>
                <p>
                  Character:<b> {character}</b>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </>
    )
  );
}
