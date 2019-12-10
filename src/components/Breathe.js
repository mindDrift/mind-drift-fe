import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './Breathe.css';
import { getCurrentSettings } from '../selectors/settingsSelectors';

const Breathe = ({ handleEndSession }) => {
  const { inhale, holdIn, exhale, holdOut, endTime } = useSelector(state => getCurrentSettings(state));

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
      return;
    } 

    if(counter > durationArr[index]) {
      setCounter(0);
      const nextIndex = durationArr[index + 1] === 0 ? index + 2 : index + 1;
 
      setIndex(nextIndex % 4);
      if(actionArr[nextIndex % 4] !== 'hold') {
        toggle(!state);
      }
      return;
    }

    const timeout = setTimeout(() => {
      setTime(time + 1);
      setCounter(counter + 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [counter, time]);

  return (
    <div className={styles.Breathe}>
      <p>{actionArr[index]}</p>
      {/* <animated.div style={ {
        opacity: x.interpolate({ range: [0, .2, .3, .6, .8, 1], output: [.3, .45, .4, .6, .74, .7] }),
        transform: x
          .interpolate({ range: [0, .4, 1], output: [2, 3, 4] })
          .interpolate(x => `translateY(-${x - .6}em) scale(${x})`) //stretch up
          //.interpolate(x => `translateY(-${x - .6}em) scale(${x}) scaleX(${x / 2.5})`) //squish and stretch
      } } className={styles.Animate}>
      </animated.div> */}
      <animated.div className={styles.flowerContainer} style={{
        transform: x
          .interpolate({ range: [0, 1], output: [1, 1.4] })
          .interpolate(x => `translateY(-${x}em) scale(${x})`) //stretch up
      }}>
        <animated.div className={styles.midPetal}></animated.div>
        <animated.div className={styles.leftPetal} style={{
          transform: x
            // .interpolate({ range: [0, 1], output: [0, -10] })
            // .interpolate(x => `rotate(${x}deg)`)
        }} ></animated.div>
        <animated.div className={styles.rightPetal} style={{
          transform: x
            // .interpolate({ range: [0, 1], output: [0, 10] })
            // .interpolate(x => `rotate(-${x}deg)`)
        }}></animated.div>
      </animated.div>

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
