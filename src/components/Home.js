import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Home.css';

const Home = () => {
  const divStyle = {
    position: 'fixed',
    left: '30%',
    right: '30%',
    top: '25%',
  };
  return (
    <section className={styles.Home}>
      <header>
        <NavBar />
      </header>
      <div style={divStyle}>logo needed here</div>
      <div className={styles.breatheContainer}>
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
