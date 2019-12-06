import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Link to="/breathe">
        <button>Breathe</button>
      </Link>
    </>
  );
};

export default Home;
