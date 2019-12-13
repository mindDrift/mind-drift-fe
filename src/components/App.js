import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from '../containers/Profile';
import Session from '../containers/Session';
import Settings from '../containers/Settings';
import EditSettings from '../containers/EditSettings';
import styles from './App.css';
import AboutUs from './AboutUs';
import { withSession } from '../utils/WithSession';

const App = () => (
  <div className={styles.container}>
    <Router>
      <Switch>
        <Route exact path='/' component={withSession(Home)} />
        <Route path='/profile' component={withSession(Profile)} />
        <Route path='/breathe' component={withSession(Session)} />
        <Route path='/settings' component={withSession(Settings)} />
        <Route path='/edit-settings' component={withSession(EditSettings)} />
        <Route path='/about-us' component={withSession(AboutUs)} />
      </Switch>
    </Router>
  </div>
);

export default App;
