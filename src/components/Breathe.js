import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Breathe = ({ inhale, exhale, holdIn, holdOut }) => {
  const [counter, setCounter] = useState(0);
  const [index, setIndex] = useState(0);

  const durationArr = [inhale, holdIn, exhale, holdOut];
  const actionArr = ['inhale', 'hold', 'exhale', 'hold'];

  useEffect(() => {
    if(counter > durationArr[index]) {
      setCounter(0);
      setIndex((index + 1) % 4);
      return;
    }
    setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
  }, [counter]);

  return (
    <div>
      <p>{actionArr[index]}</p>
      <p>{counter}</p>
      <button>Done</button>
    </div>
  );
};

Breathe.propTypes = {
  inhale: PropTypes.number.isRequired,
  exhale: PropTypes.number.isRequired,
  holdIn: PropTypes.number.isRequired,
  holdOut: PropTypes.number.isRequired
};

export default Breathe;
