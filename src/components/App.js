import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Profile from './Profile';
import Session from '../containers/Session';
import Settings from '../containers/Settings';
import EditSettings from '../containers/EditSettings';
import styles from './App.css';
import Loading from './Loading';
import AboutUs from './AboutUs';

const App = () => {
  const { loading } = useAuth0();

  if(loading) {
    return (<Loading loading={loading} />);
  }

  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/breathe' component={Session} />
          <PrivateRoute path='/settings' component={Settings} />
          <PrivateRoute path='/edit-settings' component={EditSettings} />
          <PrivateRoute path='/about-us' component={AboutUs} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
