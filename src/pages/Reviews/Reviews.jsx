import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "shared/services/TheMoviesAPI";
const Reviews = () => {


  const [reviews, setReviews ] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews  = async () => {
      try {
        const result = await getReviews(id);
        setReviews(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchReviews ();
  }, [id]);
console.log(reviews)
  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
       <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
  return (
    <ul>
      {elements === true ? 'We don`t have any reviews for this movie' : elements}
    </ul>
  );



}

export default Reviews;