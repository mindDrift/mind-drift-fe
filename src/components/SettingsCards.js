import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCards.css';

const SettingsCards = ({ settingsList, handleSelectSettings, handleEdit, handleBreatheNow, selectedId }) => {
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
        {selected && editable && <button name='editButton' onClick={() => handleEdit(_id)}><img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/editICON.png' alt='edit'/></button>}
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
    <section className={styles.SettingsList}>
      <h2>Pick Your Breathing Method:</h2>
      <ul className={styles.list}>
        {settingsElements}
      </ul>
      <button name='addButton' onClick={() => handleEdit('')}>+</button>
    </section>
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
