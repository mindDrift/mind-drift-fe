import React from 'react';
import styles from './AboutUs.css';
import NavBar from './NavBar';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.5 },
    config: { duration: 1500 },
  });

  return (
    <>
      <section className={styles.AboutUs}>
        <animated.h1 className={styles.animated} style={props}>Meet Our Team:</animated.h1>
        <div>
          <img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/ABBEY.jpg" alt="Abbey Masters" />
          <h2>Abbey Masters</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/DAVE.png" alt="Dave Trost" />
          <h2>Dave Trost</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
        <div>
          <img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/MAEVE.jpg" alt="Maeve Griffin" />
          <h2>Maeve Griffin</h2>
          <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
        </div>
      </section>
      <NavBar />
    </>
  );
};

export default AboutUs;
