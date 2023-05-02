import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { getTrending } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from './Home.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { ButtonLoadMore } from 'components/ButtonMore/ButtonMore';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getTrendingFilms = async () => {
      try {
        setIsLoading(true);
        const { results, total_pages } = await getTrending(page);
        if (results.length === 0) {
          toast.error('Error! Nothing found. Please use another query');
          return;
        }
        setMovies(prevState => {
          return [...prevState, ...results];
        });
        setTotalPages(total_pages);
      } catch (error) {
        toast.error('Error! Please try again');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrendingFilms();
  }, [page]);

  const getLoadMore = totalPages => {
    page < totalPages && setPage(prevState => prevState + 1);
  };

  return (
    <>
      <h1 className={css.Title}>Trending today</h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {page < totalPages && (
        <ButtonLoadMore getLoadMore={() => getLoadMore(totalPages)} />
      )}
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Home;
