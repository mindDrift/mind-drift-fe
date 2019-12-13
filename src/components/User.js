import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

const User = ({ userName, image }) => {
  return (
    <div className={styles.User}>
      <img src={image} alt={userName} />
      <h2>Hello, {userName}!</h2>
    </div>
  );
};

User.propTypes = {
  image: PropTypes.string,
  userName: PropTypes.string.isRequired
};

export default User;
