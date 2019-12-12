import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';
import mindDriftIcon from '../assets/mindDriftIcon.png';

const Loading = ({ loading }) => {
  const [displayLoading, setDisplayLoading] = useState(false);
  useEffect(() => {
    let timer = setTimeout(
      () => setDisplayLoading(loading),
      300
    );
    return () => timer && clearTimeout(timer);
  }, [loading]);

  if(!displayLoading) return (<></>);

  return (
    <div className={styles.Loading}>
      <div name='pulsing'>
        <img src={mindDriftIcon} alt='Loading' />
      </div>
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Loading;
