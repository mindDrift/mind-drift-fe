import React from 'react';
import styles from './AboutUs.css';
import NavBar from './NavBar';
import { useSpring, animated } from 'react-spring';
import brownFlowerIcon from '../assets/brownFlowerIcon.png';
import abbeyImg from '../assets/ABBEY.jpg';
import daveImg from '../assets/DAVE.png';
import maeveImg from '../assets/MAEVE.jpg';

const AboutUs = () => {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.1 },
    config: { duration: 1500 },
  });

  return (
    <>
      <NavBar />
      <animated.div
        className={styles.logo}
        style={props}>
        <img src={brownFlowerIcon} />
        <p className={styles.blurb}>mindDrift is a mindful breathing app, aimed to make your experience seamless and convenient.</p>
        <section className={styles.AboutUs}>
          <h1>Meet Our Team:</h1>
          <div>
            <img src={abbeyImg} alt="Abbey Masters" />
            <h2>Abbey Masters</h2>
            <p>Abbey is a Full-Stack developer, and enjoys long walks at the park with her dog. And also chocolate chip cookies!</p>
          </div>
          <div>
            <img src={daveImg} alt="Dave Trost" />
            <h2>Dave Trost</h2>
            <p>Dave is a Back-End developer who is surprised by how much he likes React and Redux. He is a big nerd for disc golf, and lots of other things too. Lots of GF chocolate chip cookies!</p>
          </div>
          <div>
            <img src={maeveImg} alt="Maeve Griffin" />
            <h2>Maeve Griffin</h2>
            <p>Maeve is a Full-Stack Javascript developer who has learned a lot about React Spring.  And likes trying new chocolate chip cookie recipes.</p>
          </div>
        </section>
      </animated.div>
    </>
  );
};

export default AboutUs;
