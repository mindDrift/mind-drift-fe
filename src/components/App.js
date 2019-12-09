import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Profile from './Profile';
import Session from '../containers/Session';
import Settings from '../containers/Settings';

const App = () => {
  const { loading } = useAuth0();

  if(loading) {
    return <div>loading ...</div>;
  }

  return (
    <div>
      <Router >
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/breathe' component={Session} />
          <PrivateRoute path='/settings' component={Settings} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
