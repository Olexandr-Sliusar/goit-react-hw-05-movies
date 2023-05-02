import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/api';
import css from './Reviews.module.css';
import toast, { Toaster } from 'react-hot-toast';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) {
      return;
    }
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await getReviewsMovie(movieId);
        if (results.length === 0) {
          setMsg(<p>No reviews for this movie</p>);
        }
        setReviews(results);
      } catch (error) {
        toast.error('Error! Please try again');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={css.reviewItem}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
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
