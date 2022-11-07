import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
