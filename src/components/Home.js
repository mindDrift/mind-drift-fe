import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';

const Home = () => {
  const { loading } = useAuth0();

  if(loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/breathe">
        <button>Breathe</button>
      </Link>
    </>
  );
};

export default Home;
