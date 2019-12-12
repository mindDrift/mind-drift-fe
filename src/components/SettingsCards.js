import React from 'react';
import PropTypes from 'prop-types';
import styles from './SettingsCards.css';
import arrowIcon from '../assets/arrowicon_green.png';

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
    const cycles = Math.floor(endTime / (inhale + holdIn + exhale + holdOut));
    return (
      <li
        className={`${styles.items} ${selected && styles.selected || ''}`}
        key={_id}
        onClick={() => handleSelectSettings(_id)}
      >
        {selected && editable && <button name='editButton' onClick={() => handleEdit(_id)}><img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/editICON.png' alt='edit'/></button>}
        <h3>{title}</h3>
        <p>{description}</p>
        <div name='breathingSettingsContainer'>
          <div name='breathingSettingsFlex'>
            <ul>
              <li>Inhale</li>
              <li>{inhale}</li>
            </ul>
            <img src={arrowIcon} />
            {holdIn > 0 && 
              <>
                <ul>
                  <li>Hold</li>
                  <li>{holdIn}</li>
                </ul>
                <img src={arrowIcon} />
              </>
            }
            <ul>
              <li>Exhale</li>
              <li>{exhale}</li>
            </ul>
            {holdOut > 0 && 
              <>
                <img src={arrowIcon} />
                <ul>
                  <li>Hold</li>
                  <li>{holdOut}</li>
                </ul>
              </>
            }
          </div>
        </div>
        <p>Repeat {cycles} times</p>
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
