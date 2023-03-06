import { useState, useEffect } from "react";
import styles from "./home.module.scss";

import { getMostPopular } from "../../../shared/components/styles/services/TheMoviesAPI";

const Home = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMostPopular().then(setMovies);
  }, []);
  // const elementsf = getMostPopular();
  // console.log(elementsf);
  const elements = movies.map(({ id, title, about }) => (
    <li className={styles.item} key={id}>
      <h4>{title}</h4>
      <p>{about}</p>
    </li>
  ));
  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default Home;
