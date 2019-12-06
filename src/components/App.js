import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Session from '../containers/Session';

const App = () => {
  const { loading } = useAuth0();

  if(loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/breathe' component={Session}>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
