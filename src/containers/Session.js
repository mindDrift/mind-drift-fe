import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Breathe from '../components/Breathe';
import WrapUp from '../components/WrapUp';
import { useAuth0 } from '../react-auth0-spa';

const Session = () => {
  const { user } = useAuth0();
  const [endSession, setEndSession] = useState(false);

  const handleEndSession = () => {
    setEndSession(true);
    console.log(`${user.sub} ended session`);
  };

  const handleSubmit = () => {
    console.log('post session');
    history.push('/');
  };

  return (
    <>
      <Breathe handleEndSession={handleEndSession} inhale={3} exhale={4} holdIn={2} holdOut={0} endTime={12} />
      {endSession && <WrapUp handleSubmit={handleSubmit} />}
    </>
  );
};

export default withRouter(Session);
