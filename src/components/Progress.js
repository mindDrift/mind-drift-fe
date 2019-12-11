import React from 'react';
import PropTypes from 'prop-types';
import styles from './Progress.css';

/* Helpful tutorial on progress bars: 
https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
https://codepen.io/DZuz14/pen/oqeMpY?editors=0100
*/
const Progress = ({ now }) => (
  <div className={styles.ProgressBar}>
    <div className={styles.ProgressFill} style={{ width: `${now}%` }} />
  </div>
);
Progress.propTypes = { now: PropTypes.number.isRequired };

export default Progress;
