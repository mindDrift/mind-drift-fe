import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';
import HOMEicon from '../assets/HOMEicon.png';
import PROFILEicon from '../assets/PROFILEicon.png';
import SETTINGSicon from '../assets/SETTINGSicon.png';
import FLOWERicon from '../assets/FLOWERicon.png';

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={styles.NavBar}>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log In</button>
      )}
      {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
      {isAuthenticated && (
        <span className={styles.NavigationFooter}>
          <Link to="/"><img src={HOMEicon} alt="Home" /></Link>&nbsp;
          <Link to="/profile"><img src={PROFILEicon} alt="Profile" /></Link>
          <Link to="/settings"><img src={SETTINGSicon} alt="Settings" /></Link>
          <Link to="/about-us"><img src={FLOWERicon} alt="About Us" /></Link>
        </span>
      )}  
    </div>
  );
};

export default NavBar;
