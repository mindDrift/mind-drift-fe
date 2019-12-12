import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './Breathe.css';
import { getCurrentSettings } from '../selectors/settingsSelectors';
import WrapUp from './WrapUp';
import Progress from './Progress';

const Breathe = ({ handleEndSession }) => {
  const { inhale, holdIn, exhale, holdOut, endTime } = useSelector(state => getCurrentSettings(state));

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(0);
  const [index, setIndex] = useState(0);
  const [endSession, setEndSession] = useState(false);
  const [state, toggle] = useState(true);

  const durationArr = [inhale, holdIn, exhale, holdOut];
  const actionArr = ['inhale', 'hold', 'exhale', 'hold'];

  const countdownTime = Math.max(0, durationArr[index] - counter);

  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: (durationArr[index] * 1000) } });

  useEffect(() => {
    if(time > endTime) {
      setEndSession(true);
      return;
    } 

    if(counter > durationArr[index]) {
      setCounter(0);
      let nextIndex = (index + 1) % 4;
      if(durationArr[nextIndex] === 0) nextIndex++;
 
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
      {!endSession && 
        <div onClick={() => handleEndSession(time)} name='close' className='close' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </div>
      }
      <p>{actionArr[index]}</p>
      <animated.div 
        className={styles.flowerContainer} 
        style={{
          transform: x
            .interpolate({ range: [0, 1], output: [.6, 1.4] })
            .interpolate(x => `translateY(-${x * 3.7}em) scale(${x})`) //stretch up
        }}>
        <animated.div 
          className={styles.midPetal}>
        </animated.div>
        <animated.div 
          className={styles.leftPetal} 
          style={{
            transform: x
              .interpolate({ range: [0, 1], output: [45, 85] })
              .interpolate(x => `rotate(${x}deg)`),
            transformOrigin: 'bottom right'
          }} >
        </animated.div>
        <animated.div 
          className={styles.rightPetal} 
          style={{
            transform: x
              .interpolate({ range: [0, 1], output: [45, 5] })
              .interpolate(x => `rotate(${x}deg)`),
            transformOrigin: 'bottom right'
          }}>
        </animated.div>
      </animated.div>
      <p name='count-down'>
        {countdownTime}
      </p>
      <div name='progress'>
        <Progress now={100 * time / endTime} />
      </div>
      <div>
        {endSession && <WrapUp handleClose={() => handleEndSession(time)} />}
      </div>

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
