import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

import defaultPoster from 'No_image_poster.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {movies?.map(({ id, poster_path, original_title, vote_average }) => (
        <li key={`${id}${Date.now()}`} className={css.moviesItem}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : defaultPoster
              }
              alt={original_title}
            />
            <p className={css.movieTitle}>{original_title}</p>
          </NavLink>
          <div className={css.rating}> {vote_average.toFixed(1)}</div>
        </li>
      ))}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </ul>
  );
};
