import React from 'react';
import styles from './AboutUs.css';
import NavBar from './NavBar';
import { useSpring, animated } from 'react-spring';

const AboutUs = () => {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.1 },
    config: { duration: 1500 },
  });

  return (
    <>
      <animated.div
        className={styles.logo}
        style={props}>
        <img src="/src/assets/brownFlowerIcon.png" />
        <p>mindDrift is a mindful breathing app, aimed to make your experience seamless and convenient.</p>
      </animated.div>
      <section className={styles.AboutUs}>
        <h1>Meet Our Team:</h1>
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
