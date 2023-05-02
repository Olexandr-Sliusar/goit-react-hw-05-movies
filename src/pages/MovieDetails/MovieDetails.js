import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { NotFound } from 'pages/NotFound/NotFound';
import { getOneMovie } from 'services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const gethMovie = async () => {
      try {
        setIsLoading(true);
        const result = await getOneMovie(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
        setMsg(<NotFound />);
      } finally {
        setIsLoading(false);
      }
    };
    gethMovie();
  }, [movieId]);
  if (msg) return msg;

  if (!movie) return;

  const {
    original_title,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
    genres,
    revenue,
    runtime,
    budget,
  } = movie;

  const date = new Date(release_date);

  return (
    <>
      {isLoading && <Loader />}

      <Link to={backLinkLocationRef.current} className={css.backLink}>
        Back to Movies
      </Link>

      <div className={css.wraper}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />

        <div className={css.descripton}>
          <h2>
            {original_title} [{date.getFullYear()}]
          </h2>
          <ul className={css.genres}>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <p>
            <b>Rating:</b> {vote_average.toFixed(1)}
          </p>
          <p>
            <b>Votes: </b>
            {new Intl.NumberFormat('ru').format(vote_count)}
          </p>
          <p>
            <b>Release date: </b>
            {release_date}
          </p>
          <p>
            <b>Runtime: </b>
            {runtime} min.
          </p>
          <p>
            <b> budget: </b>
            {budget > 0
              ? `${new Intl.NumberFormat('ru').format(budget)}$`
              : '--'}
          </p>

          <p>
            <b>Revenue: </b>
            {revenue > 0
              ? `${new Intl.NumberFormat('ru').format(revenue)}$`
              : '--'}
          </p>
          <p>
            <b> Overview:</b>
          </p>
          <p>{overview}</p>

          <div className={css.linksWrapper}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linkInfo
              }
              to="cast"
            >
              Cast
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.linkInfo
              }
              to="reviews"
            >
              Reviews
            </NavLink>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
