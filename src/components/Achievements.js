import React from 'react';
import PropTypes from 'prop-types';
import styles from './Achievements.css';


const Achievements = ({ achieves }) => {
  const mappedAchieve = achieves.map(achievement => {
    return (
      <li key={achievement._id}>
        <img src={achievement.img} />
        <div>
          <h3>{achievement.name}</h3>
          <p>{achievement.description}</p>
        </div>
      </li>
    );
  });
  return (
    <div className={styles.AchievementsContainer}>
      <ul className={styles.Achievements}>
        {mappedAchieve}
      </ul>
    </div>
  );
};

Achievements.propTypes = {
  achieves: PropTypes.array
};

export default Achievements;

