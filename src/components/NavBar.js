import React from 'react';
import { useAuth0 } from '../react-auth0-spa';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

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
          <Link to="/"><img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/HOMEicon.png" alt="Home" /></Link>&nbsp;
          <Link to="/settings"><img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/SETTINGSicon.png" alt="Settings" /></Link>
          <Link to="/profile"><img src="https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/PROFILEicon.png" alt="Profile" /></Link>
        </span>
      )}  
    </div>
  );
};

export default NavBar;
