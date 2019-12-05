import React from 'react';
import NavBar from './NavBar';
import { Router, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import history from '../utils/history';
import { useAuth0 } from '../react-auth0-spa';

const App = () => {
  const { loading } = useAuth0(); 

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
          <Route exact path='/' />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
