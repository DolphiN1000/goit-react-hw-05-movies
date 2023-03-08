import styles from './navbar.module.scss';

import items from './items';
import { NavLink } from 'react-router-dom';

// const getActiveLink = ({isActive}) => {
//     return isActive ? `${styles.link} ${styles.active}` : styles.link }

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
};

export default Navbar;
