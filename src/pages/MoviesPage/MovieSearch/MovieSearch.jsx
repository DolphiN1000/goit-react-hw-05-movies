import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'shared/services/TheMoviesAPI';
import initialState from '../MovieSearchForm/initialState';
import MovieSearchForm from '../MovieSearchForm/MovieSearchForm';
import MoviesList from 'shared/components/MoviesList/MoviesList';
import { FidgetSpinner } from 'react-loader-spinner';

const MovieSearch = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await searchMovie(search, page);
        setItems(prevItems => ([...prevItems, ...result]));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [search, setItems, page, setLoading, setError]);

  const onSearchMovie = useCallback(
    ({ search }) => {
      setSearchParams({ search, page: 1 });
      setItems([]);
    },
    [ setSearchParams]
  );

  const loadMore = useCallback(() => {
    setSearchParams({ search, page: Number(page) + 1 });
  }, [search, page, setSearchParams]);

  return (
    <>
      <MovieSearchForm initialState={initialState} onSubmit={onSearchMovie} />
      <MoviesList items={items} />
      {loading && (
        <FidgetSpinner
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={['#ff0000', '#00ff00', '#0000ff']}
          backgroundColor="#F4442E"
        />
      )}
      <button onClick={loadMore}>Load More</button>
    </>
  );
};
export default MovieSearch;
