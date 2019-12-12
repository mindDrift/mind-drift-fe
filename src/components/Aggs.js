import React from 'react';
import PropTypes from 'prop-types';
import styles from './Aggs.css';
import blueicon from '../assets/blueicon.png';
import greenicon from '../assets/greenicon.png';
import peachicon from '../assets/peachicon.png';

const Aggs = ({ average, total, streak }) => {
  return (
    <div className={styles.Aggs}>
      <h3>here are your stats</h3>
      
      <p>
        <div className={styles.badge}>
          <h2>{average.time}</h2>
          <h1>{average.type}</h1>
          <img src={blueicon} />
        </div>
        average session
      </p>
     
      <p>
        <div className={styles.badge}>
          <h2>{total.time}</h2>
          <h1>{total.type}</h1>
          <img src={greenicon} />
        </div>
        total time breathing
      </p>
      
      <p>
        <div className={styles.badge}>
          <h2>{streak}</h2>
          <h1>days</h1>
          <img src={blueicon} />
        </div>
        current streak
      </p>
    </div>
  );
};

Aggs.propTypes = {
  average: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  streak: PropTypes.number.isRequired
};

export default Aggs;
