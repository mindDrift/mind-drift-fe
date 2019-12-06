import React from 'react';
import Breathe from '../components/Breathe';
import { useAuth0 } from '../react-auth0-spa';

const Session = () => {
  const { user } = useAuth0();

  return (
    <Breathe inhale={3} exhale={4} holdIn={2} holdOut={0} endTime={12} userId={user && user.sub || ''} />
  );
};

export default Session;
