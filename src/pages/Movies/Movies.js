import { useSearchParams } from 'react-router-dom';
import { SearchMovieForm } from 'components/SearchMovieForm/SearchMovieForm';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearchMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ButtonLoadMore } from 'components/ButtonMore/ButtonMore';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        if (!searchQuery) {
          setMovies([]);
          setTotalPages(1);
          setPage(1);
          setTotalResults(0);
          return;
        }
        setIsLoading(true);
        const { results, total_pages, total_results } = await getSearchMovies(
          searchQuery,
          page
        );
        if (results.length === 0) {
          toast.error('Error! Nothing found. Please use another query');
          return;
        }
        setTotalResults(total_results);
        setMovies(prevState => [...prevState, ...results]);
        setTotalPages(total_pages);
      } catch (error) {
        toast.error('Error! Please try again');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearch();
  }, [searchQuery, page]);

  const onSearchMovie = value => {
    if (value === searchQuery) {
      toast.error('Error! Repeated request. Please use another query.');
      return;
    }
    setMovies([]);
    setTotalPages(1);
    setPage(1);
    setTotalResults(0);
    setSearchParams({ query: value.trim() });
  };

  const getLoadMore = totalPages => {
    page < totalPages && setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchMovieForm onSubmit={onSearchMovie} />
      {searchQuery && (
        <>
          <p className={css.searchResultText}>
            <span className={css.accent}>
              {new Intl.NumberFormat('ru').format(totalResults)} movies
            </span>{' '}
            found for
            <span className={css.accent}> "{searchQuery}"</span>
          </p>
        </>
      )}

      {movies.length > 0 && <MoviesList movies={movies} />}
      {page < totalPages && (
        <ButtonLoadMore getLoadMore={() => getLoadMore(totalPages)} />
      )}
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default Movies;
