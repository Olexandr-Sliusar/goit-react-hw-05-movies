import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/api';
import css from './Cast.module.css';
import toast, { Toaster } from 'react-hot-toast';

import defaultPhoto from 'no-photo-icon.png';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await getCastMovie(movieId);
        setCast(cast);
        if (cast.length === 0) {
          setMsg(<p>No cast for this movie</p>);
        }
      } catch (error) {
        toast.error('Error! Please try again');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast.length > 0 ? (
        <ul className={css.castList}>
          {cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : defaultPhoto
                  }
                  alt={name}
                />
                <p>
                  <b> Name: </b>
                  {name}
                </p>
                <p>
                  <b>Character: </b>
                  {character}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        msg
      )}

      <Toaster />
    </>
  );
};
