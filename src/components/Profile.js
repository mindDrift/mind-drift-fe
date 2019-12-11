import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from './NavBar';
import styles from './Profile.css';
import Loading from './Loading';

const Profile = () => {
  const { user } = useAuth0();

  const loading = !user;
  
  return (
    <>
      <Loading loading={loading} />
      <NavBar />
      {!loading &&
        <section className={styles.ProfileArea}>
          <img src={user.picture} alt="Profile" />
          <h2>Your Profile:</h2>
          <h3>Username:</h3><p> {user.name}</p>
          <h3>Email:</h3><p> {user.email}</p>
        </section>
      }
    </>
  );
};

export default Profile;
