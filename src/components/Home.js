import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Home.css';
import AchievementToast from './AchievementToast';

const Home = () => (
  <>
    <section className={styles.Home}>
      <NavBar />
      <AchievementToast />
      <div className={styles.homeContainer}>
        <div className={styles.logo}>
          <img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/mindDriftIcon.png" alt="mindDrift logo" />
          <section className={styles.headerText}>
            <h2>mind</h2>
            <h3>Drift</h3>
          </section>
        </div>
        <div className={styles.linksContainer}>
          <Link to="/breathe">
            <button className={styles.breatheButton}>Breathe</button>
          </Link>
          <Link to="/settings">
            <button className={styles.setupButton}>Setup</button>
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
