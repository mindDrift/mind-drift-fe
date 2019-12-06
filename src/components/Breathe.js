import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './Breathe.css';

const Breathe = ({ settings, handleEndSession }) => {
  const { inhale, holdIn, exhale, holdOut, endTime } = settings;

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [endSession, setEndSession] = useState(false);
  const [state, toggle] = useState(true);

  const durationArr = [inhale, holdIn, exhale, holdOut];
  const actionArr = ['inhale', 'hold', 'exhale', 'hold'];


  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: (durationArr[index] * 1000) } });

  useEffect(() => {
    if(time > endTime) {
      setEndSession(true);
      handleEndSession(time);
    } 

    if(counter > durationArr[index]) {
      setCounter(0);
      const nextIndex = durationArr[(index + 1) % 4] > 0 ? index + 1 : index + 2;
      // const nextIndex = index + 1;
      setIndex(nextIndex % 4);
      console.log(actionArr[index], nextIndex, 'index', index);
      console.log(durationArr);
      if(actionArr[nextIndex % 4] !== 'hold') {
        toggle(!state);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setCounter(counter + 1);
      setTime(time + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [counter]);

  return (
    <div className={styles.Breathe}>
      <animated.div style={ {
        opacity: x.interpolate({ range: [0, .7, 1], output: [0, .3, 1] }),
        transform: x
          .interpolate({ range: [0, .1, 1], output: [1, 2, 4] })
          .interpolate(x => `scale(${x})`),
      } } className={styles.Animate}>
      </animated.div>

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
