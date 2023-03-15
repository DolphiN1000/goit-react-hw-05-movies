import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from 'shared/services/TheMoviesAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const result = await getCredits(id);
        setCast(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCredits();
  }, [id]);
  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      {profile_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt={`the sempel of ${name}`}
          width="200"
        ></img>
      )}
      <p>{name}</p>
      <p>{character}</p>
    </li>
  ));
  return (
    <ul>
      {elements.length !== 0
        ? elements
        : 'We don`t have any casts for this movie'}
    </ul>
  );
};

export default Cast;
