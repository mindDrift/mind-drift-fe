import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCards.css';
import { useSpring, animated } from 'react-spring';

const SettingsCards = ({ settingsList, handleSelectSettings, handleEdit, handleBreatheNow, selectedId }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.1 },
    config: { duration: 2000 },
  });

  const settingsElements = settingsList.map(({
    _id,
    userId,
    title,
    description,
    inhale,
    holdIn,
    exhale,
    holdOut,
    endTime
  }) => {
    const editable = !userId.includes('__default__');
    const selected = selectedId === _id;


    return (
      <li
        className={`${styles.items} ${selected && styles.selected || ''}`}
        key={_id}
        onClick={() => handleSelectSettings(_id)}>
        {selected && editable && <button name='editButton' onClick={() => handleEdit(_id)}><img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/editICON.png' alt='edit' /></button>}
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>Inhale: {inhale}</li>
          {holdIn > 0 && <li>hold: {holdIn}</li>}
          <li>Exhale: {exhale}</li>
          {holdOut > 0 && <li>Hold: {holdOut}</li>}
        </ul>
        <p>Continue for {endTime} seconds</p>
        {selected && <button name='breatheButton' onClick={handleBreatheNow}>Breathe now</button>}
      </li>
    );
  });

  return (
    <animated.div style={props} className={styles.SettingsList}>
      <h2>Breathing Methods:</h2>
      <h4>Pick a breathing method from the list below, or create your own by clicking the Add button.</h4>
      <ul className={styles.list}>
        {settingsElements}
      </ul>
      <button name='addButton' onClick={() => handleEdit('')}>+</button>
    </animated.div>
  );
};

SettingsCards.propTypes = {
  settingsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      inhale: PropTypes.number.isRequired,
      exhale: PropTypes.number.isRequired,
      holdIn: PropTypes.number.isRequired,
      holdOut: PropTypes.number.isRequired,
      endTime: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleSelectSettings: PropTypes.func.isRequired,
  handleBreatheNow: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  selectedId: PropTypes.string.isRequired,
};

export default SettingsCards;
