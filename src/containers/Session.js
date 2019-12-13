import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Breathe from '../components/Breathe';
import { postSession } from '../services/session';
import { useSession } from '../utils/WithSession';

const Session = ({ history }) => {
  const { user } = useSession();
  const [startTime] = useState(new Date());

  const settings = {
    inhale: 3,
    holdIn: 2,
    exhale: 4,
    holdOut: 2,
    endTime: 180
  };
  const handleEndSession = duration => {
    postSession(startTime, duration, user.uid, settings);
    history.push('/');
  };

  return (
    <Breathe handleEndSession={handleEndSession} settings={settings} />
  );
};

Session.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default withRouter(Session);
