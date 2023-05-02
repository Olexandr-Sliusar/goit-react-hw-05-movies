import { NavLink } from 'react-router-dom';
import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.errorWraper}>
      <p className={css.code}>404</p>
      <p className={css.description}>Page not found! </p>
      <p>
        <NavLink to="/" className={css.link}>
          Go to Home page
        </NavLink>
      </p>
    </div>
  );
};
