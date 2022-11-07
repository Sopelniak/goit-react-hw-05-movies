import { Link } from './Navigation.styled';

export function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
