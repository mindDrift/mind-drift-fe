import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ array }) => {
  const mappedAchieve = array.map(achievement => {
    return (
      <li key={achievement._id}>
        <img src={achievement.img} />
        <h2>{achievement.title}</h2>
        <p>{achievement.description}</p>
      </li>
    );
  });
  return (
    <ul>
      {mappedAchieve}
    </ul>
  );
};

Achievements.propTypes = {
  array: PropTypes.array
};

export default Achievements;

