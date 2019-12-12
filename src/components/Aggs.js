import React from 'react';
import PropTypes from 'prop-types';
import styles from './Aggs.css';

const Aggs = ({ average, total, streak }) => {
  return (
    <div className={styles.Aggs}>
      <h3>here are your stats</h3>
      
      <p>
        <div className={styles.badge}>
          <h1>{average.time}</h1>
          <h1>{average.type}</h1>
          <img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/AVGtimeicon.png' />
        </div>
        average session
      </p>
     
      <p>
        <div className={styles.badge}>
          <h1>{total.time}</h1>
          <h1>{total.type}</h1>
          <img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/AVGtimeicon.png' />
        </div>
        total time breathing
      </p>
      
      <p>

        <div className={styles.badge}>
          <h2>{streak}</h2>
          <img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/AVGtimeicon.png' />
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
