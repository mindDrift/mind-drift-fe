import React from 'react';
import PropTypes from 'prop-types';

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
      <li key={_id}>title = {title}
        <p>{description}</p>
        <ul>
          <li>inhale: {inhale}</li>
          {holdIn > 0 && <li>hold: {holdIn}</li>}
          <li>exhale: {exhale}</li>
          {holdOut > 0 && <li>hold: {holdOut}</li>}
        </ul>
        <p>Continue for {endTime} seconds</p>
      </li>
    );
  });

  return (
    <>
      <ul>
        {settingsElements}
      </ul>
    </>
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
