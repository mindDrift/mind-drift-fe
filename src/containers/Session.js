import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Breathe from '../components/Breathe';
import { useAuth0 } from '../react-auth0-spa';
import { postSession } from '../services/session';

const Session = ({ history }) => {
  const { user } = useAuth0();
  const [startTime] = useState(new Date());

  const settings = {
    inhale: 3,
    holdIn: 2,
    exhale: 4,
    holdOut: 2,
    endTime: 180
  };
  const handleEndSession = duration => {
    postSession(startTime, duration, user.sub, settings);
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
