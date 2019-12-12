import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import styles from './Home.css';
import Toast from 'react-bootstrap/Toast';

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <section className={styles.Home}>
        <NavBar />
        <Toast 
          onClose={() => setShow(false)} 
          show={show} 
          delay={3500}
          autohide
          className={styles.Toast}
        >
          <img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/firstStepsicon.png' />
          <h3>First Steps mockup</h3>
          <p>You completed your first breathing session</p>
        </Toast>
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
};

export default Home;
