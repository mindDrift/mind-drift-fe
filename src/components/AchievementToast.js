import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Toast from 'react-bootstrap/Toast';
import styles from './AchievementToast.css';
import { fetchNewAchievements } from '../services/achievement';
import { useSession } from '../utils/WithSession';

const AchievementToast = ({ history }) => {
  const { user } = useSession();
  const [show, setShow] = useState(false);
  const [badge, setBadge] = useState(null);

  const gotoSettings = () => history.push('/settings');

  useEffect(() => {
    fetchNewAchievements(user.uid)
      .then(newAchieves => {
        if(newAchieves.length) {
          setShow(true);
          setBadge(newAchieves[0].img);
        }
      });
  });

  return (
    <Toast 
      onClose={() => setShow(false)} 
      onClick={gotoSettings}
      show={show} 
      delay={2500}
      autohide
      className={styles.Toast}
    >
      <div>
        <img src={badge} />
        <h3>You have a New Achievement!</h3>
      </div>
    </Toast>
  );
};

AchievementToast.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default AchievementToast;
