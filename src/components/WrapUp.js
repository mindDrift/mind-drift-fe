import React from 'react';
import PropTypes from 'prop-types';
import styles from './WrapUp.css';

const WrapUp = ({ handleSubmit }) => {

  return (
    <section className={styles.WrapUp}>
      <p>Session complete ... how do you feel?</p>
      <button onClick={handleSubmit}>Submit</button>
    </section>
  );
};

export default WrapUp;

WrapUp.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};


