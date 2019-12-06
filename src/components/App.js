import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
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
      <Router >
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/breathe' component={Session} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
