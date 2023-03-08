import { useState, useEffect } from 'react';
import styles from './homePage.module.scss';

import { getMostPopular } from '../../shared/components/styles/services/TheMoviesAPI';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMostPopular().then(setMovies);
  }, []);

  const location = useLocation();
  const elements = movies.map(({ id, title, about }) => (
    <li key={id} className={styles.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <h4>{title}</h4>
        <p>{about}</p>
      </Link>
    </li>
  ));
  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default HomePage;
