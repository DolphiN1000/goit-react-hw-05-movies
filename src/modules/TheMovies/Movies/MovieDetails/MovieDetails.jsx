import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo, getPoster } from 'shared/services/TheMoviesAPI';


const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const result = await getFilmInfo(id);
        setMovie(result);
      } catch ({ response }) {
        return response.data.message;
      }
    };
    fetchMovie();
    // const image =  getPoster(id)
  }, [id]);
  return (
    <>
      <img src='#' alt="#" />
      <h3>{movie?.title}</h3>
      <p>User Score:</p>
      <h4>Owerview</h4>
      <p>
        Owerview Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Assumenda reprehenderit commodi fuga consequatur tempora, dolor sequi
        odit inventore cumque ipsam.
      </p>
      <h5>Generes</h5>
      <p>{movie?.generes}</p>
      <h6>Additional information</h6>
      <ul>
        <li>Cast</li>
        <li>Rewiews</li>
      </ul>
    </>
  );
};

export default MovieDetails;
