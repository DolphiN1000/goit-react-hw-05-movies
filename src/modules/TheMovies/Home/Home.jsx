import styles from './home.module.scss'

import {getMostPopular} from '../../shared/services/TheMoviesAPI'

const Home = () => {
  const elements = getMostPopular().map(return(item => item.title ))
  return (
    <>
      <h2>Trending today</h2>
      <ul className={styles.list}>
        {elements}
      </ul>
    </>
  );
};

export default Home;
