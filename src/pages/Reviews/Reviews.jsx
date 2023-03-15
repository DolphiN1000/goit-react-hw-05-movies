import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'shared/services/TheMoviesAPI';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const result = await getReviews(id);
        setReviews(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews();
  }, [id]);
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
  return (
    <ul>
      {elements.length !== 0
        ? elements
        : 'We don`t have any reviews for this movie'}
    </ul>
  );
};

export default Reviews;
