import React from 'react';
import PropTypes from 'prop-types';
import styles from './Aggs.css';
import blueicon from '../assets/blueicon.png';
import greenicon from '../assets/greenicon.png';
import peachicon from '../assets/peachicon.png';

const Aggs = ({ average, total, streak }) => {
  return (
    <div className={styles.Aggs}>
      <h3>Your Stats:</h3>

      <section className={styles.individualBadges}>
        <div className={styles.badge}>
          <h2>{average.time}</h2>
          <h1>{average.type}</h1>
          <img src={blueicon} />
        </div>
        <p>Average Session</p>
      </section>

      <section className={styles.individualBadges}>
        <div className={styles.badge}>
          <h2>{total.time}</h2>
          <h1>{total.type}</h1>
          <img src={greenicon} />
        </div>
        <p>Total Time Breathing</p>
      </section>

      <section className={styles.individualBadges}>
        <div className={styles.badge}>
          <h2>{streak}</h2>
          <h1>days</h1>
          <img src={peachicon} />
        </div>
        <p>Current Streak</p>
      </section>
    </div>
  );
};

Aggs.propTypes = {
  average: PropTypes.shape({
    time: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
  total: PropTypes.shape({
    time: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
  streak: PropTypes.number
};

export default Aggs;

