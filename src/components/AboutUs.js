import React from 'react';
import styles from './AboutUs.css';
import NavBar from './NavBar';

const AboutUs = () => {
  return (
    <>
      <section className={styles.AboutUs}>
        <h1>Meet Our Team:</h1>
        <div>
          <img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/ABBEY.jpg" alt="Abbey Masters" />
          <h2>Abbey Masters</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
        <div>
          <img src="/src/assets/ABBEY.jpg" alt="Dave Trost" />
          <h2>Dave Trost</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
        <div>
          <img src="/src/assets/ABBEY.jpg" alt="Maeve Griffin" />
          <h2>Maeve Griffin</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default AboutUs;
