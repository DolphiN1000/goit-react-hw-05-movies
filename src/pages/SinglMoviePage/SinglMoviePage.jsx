import { useEffect, useState, useCallback } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import { getFilmInfo } from 'shared/services/TheMoviesAPI';

import styles from './singlMoviePage.module.scss';

const SinglMoviePage = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getFilmInfo(id);
        setMovie(result);
      } catch (error) {}
    };
    fetchMovie();
  }, [id]);
  const goBack = useCallback(() => navigate(from), [navigate, from]);
  return (
    <>
      {movie && (
        <>
          <button onClick={goBack}>Go Back</button>
          <div className={styles.thumb}>
            {' '}
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={`poster of movie with name "${movie.title}"`}
              height="400"
            />
            <div className={styles.info}>
              {' '}
              <h3>
                Title: {movie.title} ({movie.release_date.slice(0, 4)})
              </h3>
              <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <h4>Owerview</h4>
              <p>{movie.overview}</p>
              <h5>Generes</h5>
              <p>{movie.genres.map(item => item.name).join(', ')}</p>
            </div>
          </div>
          <div>
            <h6>Additional information</h6>
            <ul>
              <li>
                {' '}
                <Link to={`/movies/${movie.id}/cast`} state={{ from: from }}>
                  Cast
                </Link>
              </li>
              <li>
                {' '}
                <Link to={`/movies/${movie.id}/reviews`} state={{ from: from }}>
                  Rewiews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </>
      )}
    </>
  );
};

export default SinglMoviePage;
