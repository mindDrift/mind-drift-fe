import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCards.css';

const SettingsCards = ({ settingsList }) => {
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
        key={_id}>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          <li>Inhale: {inhale}</li>
          {holdIn > 0 && <li>hold: {holdIn}</li>}
          <li>Exhale: {exhale}</li>
          {holdOut > 0 && <li>Hold: {holdOut}</li>}
        </ul>
        <p>Continue for {endTime} seconds</p>
      </li>
    );
  });

  return (
    <section className={styles.SettingsList}>
      <h2>Pick Your Breathing Method:</h2>
      <ul className={styles.list}>
        {settingsElements}
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
};

export default SettingsCards;
