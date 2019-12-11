import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ loading }) => {
  const [displayLoading, setDisplayLoading] = useState(false);
  useEffect(() => {
    if(loading) {
      setDisplayLoading(loading);
    }
    else {
      setTimeout(
        setDisplayLoading(loading),
        300
      );
    }
  }, [loading]);

  if(!displayLoading) return (<></>);

  return (
    <div className={styles.Loading}>
      <div name='pulsing'>
        <img src='https://raw.githubusercontent.com/mindDrift/mind-drift-fe/dev/src/assets/mindDriftIcon.png' alt='Loading' />
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;
