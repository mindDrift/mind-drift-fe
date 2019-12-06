import React from 'react';
import NavBar from './NavBar';
import { Router, Route, Switch } from 'react-router-dom';
import Profile from './Profile';
import history from '../utils/history';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
import Home from './Home';

const App = () => {
  const { loading, user } = useAuth0(); 
 
  console.log(user);
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
          <Route exact path='/' component={Home} />
          <Route path='/breathe'>
            <Breathe inhale={3} exhale={4} holdIn={2} holdOut={0} endTime={12} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
