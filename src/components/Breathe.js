import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Breathe = ({ inhale, exhale, holdIn, holdOut, endTime, userId }) => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [endSession, setEndSession] = useState(false);

  const durationArr = [inhale, holdIn, exhale, holdOut];
  const actionArr = ['inhale', 'hold', 'exhale', 'hold'];

  useEffect(() => {
    if(time > endTime) {
      setEndSession(true);
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
      <p>user id: {userId}</p>
      <p>{actionArr[index]}</p>
      <p>{counter}</p>
      {!endSession && <button onClick={() => setEndSession(true)}>Close</button>}
      {endSession && <p>Session complete ... how do you feel?</p>}
    </div>
  );
};

Breathe.propTypes = {
  inhale: PropTypes.number.isRequired,
  exhale: PropTypes.number.isRequired,
  holdIn: PropTypes.number.isRequired,
  holdOut: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
};

export default Breathe;
