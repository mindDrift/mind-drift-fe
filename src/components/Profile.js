import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from './NavBar';
import styles from './Profile.css';

const Profile = () => {
  const { loading, user } = useAuth0();

  if(loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <section className={styles.ProfileArea}>
        <img src={user.picture} alt="Profile" />
        <h2>Your Profile:</h2>
        <p>Username: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      </section>
    </>
  );
};

export default Profile;
