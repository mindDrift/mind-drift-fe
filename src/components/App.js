import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Session from '../containers/Session';
import createBrowserHistory from '../utils/history';

const App = () => {
  const { loading } = useAuth0();

  if(loading) {
    return <div>loading ...</div>;
  }

  const customHistory = createBrowserHistory();

  return (
    <div>
      <Router history={customHistory}>
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
