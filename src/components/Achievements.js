import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ achieves }) => {
  const mappedAchieve = achieves.map(achievement => {
    return (
      <li key={achievement._id}>
        <img src={achievement.img} />
        <h3>{achievement.name}</h3>
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
  achieves: PropTypes.array
};

export default Achievements;

