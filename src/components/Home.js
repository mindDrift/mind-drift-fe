import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Home.css';

const Home = () => {
  return (
    <section className={styles.Home}>
      <header>
        <NavBar />
      </header>
      <div className={styles.breatheContainer}>
        <div className={styles.logo}>
          logo needed here
        </div>
        <Link to="/breathe">
          <button className={styles.breatheButton}>Breathe</button>
        </Link>
        <Link to="/settings">
          <button className={styles.breatheButton}>Setup</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
