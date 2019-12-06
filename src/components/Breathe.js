import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Breathe = ({ settings, handleEndSession }) => {
  const { inhale, holdIn, exhale, holdOut, endTime } = settings;

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [endSession, setEndSession] = useState(false);

  const durationArr = [inhale, holdIn, exhale, holdOut];
  const actionArr = ['inhale', 'hold', 'exhale', 'hold'];

  useEffect(() => {
    if(time > endTime) {
      setEndSession(true);
      handleEndSession(time);
      return;
    } 

    if(counter > durationArr[index]) {
      setCounter(0);
      const nextIndex = durationArr[index + 1] > 0 ? index + 1 : index + 2;
      setIndex(nextIndex % 4);
      return;
    }

    setTimeout(() => {
      setCounter(counter + 1);
      setTime(time + 1);
    
    }, 1000);
  }, [counter]);

  return (
    <div>
      <p>{actionArr[index]}</p>
      <p>{counter}</p>
      {!endSession && <button onClick={() => handleEndSession(time)}>Close</button>}
    </div>
  );
};

Breathe.propTypes = {
  settings: PropTypes.shape({
    inhale: PropTypes.number.isRequired,
    exhale: PropTypes.number.isRequired,
    holdIn: PropTypes.number.isRequired,
    holdOut: PropTypes.number.isRequired,
    endTime: PropTypes.number.isRequired,
  }).isRequired,
  handleEndSession: PropTypes.func.isRequired
};

export default Breathe;
