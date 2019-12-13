import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import styles from './AchievementToast.css';
import { fetchNewAchievements } from '../services/achievement';
import { useSession } from '../utils/WithSession';

const AchievementToast = () => {
  const [show, setShow] = useState(false);
  const [badge, setBadge] = useState(null);
  
  const { user } = useSession();
  const history = useHistory();
  const gotoSettings = () => history.push('/profile');

  useEffect(() => {
    if(user) {
      fetchNewAchievements(user.uid)
        .then(newAchieves => {
          if(newAchieves.length) {
            setShow(true);
            setBadge(newAchieves[0].img);
          }
        });
    }
  });

  return (
    <Toast 
      onClose={() => setShow(false)} 
      onClick={gotoSettings}
      show={show} 
      delay={3000}
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

export default AchievementToast;
