import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCards.css';

const SettingsCards = ({ settingsList, handleSelectSettings, handleEdit, handleBreatheNow }) => {
  const settingsElements = settingsList.map(({ 
    title, 
    _id, 
    description, 
    inhale, 
    holdIn, 
    exhale, 
    holdOut, 
    endTime
  }) => {
    return (
      <li 
        className={styles.items}
        key={_id}
        onClick={() => handleSelectSettings(_id)}>
        <button onClick={() => handleEdit(_id)}>edit</button>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>Inhale: {inhale}</li>
          {holdIn > 0 && <li>hold: {holdIn}</li>}
          <li>Exhale: {exhale}</li>
          {holdOut > 0 && <li>Hold: {holdOut}</li>}
        </ul>
        <p>Continue for {endTime} seconds</p>
        <button onClick={handleBreatheNow}>Breathe now</button>
      </li>
    );
  });

  return (
    <section className={styles.SettingsList}>
      <h2>Pick Your Breathing Method:</h2>
      <ul className={styles.list}>
        {settingsElements}
        <li className={styles.items}>+</li>
      </ul>
    </section>
  );
};

SettingsCards.propTypes = {
  settingsList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
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
};

export default SettingsCards;
