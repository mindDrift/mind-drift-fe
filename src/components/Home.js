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
        <Link to="/breathe">
          <button className={styles.breatheButton}>Breathe</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
