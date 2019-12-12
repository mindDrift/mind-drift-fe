import React, { useState, useEffect } from 'react';
import { useAuth0 } from '../react-auth0-spa';
import Achievements from '../components/Achievements';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import { fetchAchievements } from '../services/achievement';
import styles from './Profile.css';

const Profile = () => {
  const { user } = useAuth0();
  const [achieves, setAchieves] = useState([]);
  const loading = !user;
  useEffect(() => {
    fetchAchievements(user.sub)
      .then(list => setAchieves(list));
    return;
  }, []);
  
  return (
    <>
      <Loading loading={loading} />
      <NavBar />
      {!loading &&
        <section className={styles.ProfileArea}>
          <img src={user.picture} alt="Profile" />
          <h2>Your Profile:</h2>
          <p>Hello, {user.name}</p>
          <div>
            <Achievements achieves={achieves} />
          </div>
        </section>
      }
    </>
  );
};

export default Profile;
