import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import NavBar from './NavBar';

const Profile = () => {
  const { loading, user } = useAuth0();

  if(loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </>
  );
};

export default Profile;
