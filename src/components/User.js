import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.css';

const User = ({ userName }) => {
  return (
    <div className={styles.User}>
      <h2>Hello, {userName}</h2>
    </div>
  );
};

User.propTypes = {
  picture: PropTypes.string,
  userName: PropTypes.string.isRequired
};

export default User;
