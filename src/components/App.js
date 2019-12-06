import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import history from '../utils/history';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Breathe from './Breathe';

const App = () => {
  const { loading, user } = useAuth0(); 
 
  // console.log(user.sub);
  if(loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/breathe'>
            <Breathe inhale={3} exhale={4} holdIn={2} holdOut={0} endTime={12} />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
