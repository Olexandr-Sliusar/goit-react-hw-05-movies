import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.container}>
          <div className={css.navList}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.navLink
              }
              to="/movies"
            >
              Movies
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};
