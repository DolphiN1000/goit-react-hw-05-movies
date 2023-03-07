import { useState, useEffect } from "react";
import styles from "./home.module.scss";

import { getMostPopular } from "../../../shared/components/styles/services/TheMoviesAPI";
import { Link } from "react-router-dom";

const Home = () => {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMostPopular().then(setMovies);
  }, []);

  const elements = movies.map(({ id, title, about }) => (
    <Link key={id}>
    <li className={styles.item} >
      <h4>{title}</h4>
      <p>{about}</p>
    </li>
    </Link>
  ));
  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default Home;
