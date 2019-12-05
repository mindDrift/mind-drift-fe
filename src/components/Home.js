import React from 'react';
import { useAuth0 } from '../react-auth0-spa';

const Home = () => {
  const { loading } = useAuth0();

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
